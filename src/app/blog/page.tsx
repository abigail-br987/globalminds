"use client"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { formatDate } from "../lib/utils";
import AnimatedDiv3 from "@/components/small_components/AnimatedDiv3";
import { urlFor } from "../lib/displayImage";
import { useRef } from "react";
import { useInView } from "framer-motion";

const POSTS_QUERY = `*[ 
  _type == "post" 
  && defined(slug.current)
]|order(publishedAt asc)[0...12]`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40% 0px" });


  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div>
      <NavBar />
      <div className=" p-8">
        <div>
          <h2 className="text-4xl text-gbWhite text-center my-10">ÚLTIMOS BLOGS</h2>
          <div ref={containerRef} className="grid grid-cols-12 w-full sm:gap-9 max-sm: max-sm:space-y-6">
            {posts.map((post, index) => {
              const postImageUrl = post.image1
                ? urlFor(post.image1).width(550).height(310).url()
                : "/images/banner.png";

              const postImageUrl2 = post.image2
                ? urlFor(post.image2).width(550).height(310).url()
                : "/images/banner.png"; 

              const formattedDate = post.publishedAt ? formatDate(post.publishedAt) : undefined;

              return ( 
                <AnimatedDiv3  key={index}
                index={index}
                isInView={isInView}> 
                <BlogCard
                  key={post._id}
                  images={[postImageUrl, postImageUrl2]}
                  formattedDate={formattedDate}
                  title={post.title}
                  id={post._id}
                  slug={post.slug.current}
                  articleType={post.postType}
                  readTime={post.readTime}
                  description={post.description}
                  className={`hover:scale-[1.02] opacity-90 hover:opacity-100 transition-all hover:cursor-pointer relative ${
                    index < 2 ? "col-span-12 lg:col-span-6 max-sm:aspect-square sm:aspect-video" : "col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 aspect-square"
                  }`}
                />
                </AnimatedDiv3>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
