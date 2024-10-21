import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { MdDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

const POSTS_QUERY = `*[ 
  _type == "post" 
  && defined(slug.current)
]|order(publishedAt desc)[0...12]`;

const options = { next: { revalidate: 30 } };

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div>
      <NavBar />
      <div className="container mx-auto min-h-screen p-8">
        <div>
          <h2 className="text-4xl text-gbWhite text-center">ÚLTIMOS BLOGS</h2>
          <div className="grid grid-cols-6 gap-4">
            {posts.map((post, index) => {
              const postImageUrl = post.image1
                ? urlFor(post.image1).width(550).height(310).url()
                : "/images/banner.png";

              const postImageUrl2 = post.image2
                ? urlFor(post.image2).width(550).height(310).url()
                : "/images/banner.png"; 

              return ( 
                <BlogCard
                  key={post._id}
                  images={[postImageUrl, postImageUrl2]}
                  date={post.publishedAt}
                  title={post.title}
                  id={post._id}
                  slug={post.slug.current}
                  articleType={post.postType}
                  readTime={post.readTime}
                  description={post.description}
                  className={`hover:scale-105 opacity-90 hover:opacity-100 transition-all hover:cursor-pointer relative ${
                    index < 2 ? "col-span-3 aspect-video" : "col-span-2 aspect-square"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
