import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  if (!post) {
    return <div>Post not found.</div>;
  }
  const postImageUrl = post.image1
    ? urlFor(post.image1)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4 text-gbWhite">
      <Link href="/blog" className="hover:underline">
        ← Regresar
      </Link>
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-lg"
          width={550}
          height={310}
          priority
        />
      )}
      <h2 className="break-all">{post.title}</h2>
      <div className="max-w-full break-all">
        <p className="break-all">
          Publicado: {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
