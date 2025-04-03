import Link from "next/link";
import Image from "next/image";

const dummyPost = {
  title: "Dummy Post Title",
  image1: "",
  publishedAt: new Date().toISOString(),
  body: "This is a dummy post body with sample text.",
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = dummyPost;
  const postImageUrl = post.image1;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4 text-gbWhite">
      <Link href="/blog" className="hover:underline">
        ← Regresar
      </Link>
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          className="rounded-lg w-full"
          width={550}
          height={310}
          priority
        />
      )}
      <h2 className="break-all">{post.title}</h2>
      <div className="max-w-full break-all">
        <h5>Publicado: {new Date(post.publishedAt).toLocaleDateString()}</h5>
        <p>{post.body}</p>
      </div>
    </main>
  );
}
