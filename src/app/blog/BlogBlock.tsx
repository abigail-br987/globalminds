"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { formatDate } from "../lib/utils";
import { urlFor } from "../lib/displayImage";
import { SanityDocument } from "next-sanity";
import AnimatedDiv3 from "@/components/small_components/AnimatedDiv3";
import BlogCard from "@/components/blogs/BlogCard";
import ColorfulTitle from "@/components/small_components/ColorfulTitle";
interface Props {
  posts: SanityDocument[];
}

export default function BlogBlock({ posts }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40% 0px" });

  return (
    <div className=" p-8" ref={containerRef}>
      <ColorfulTitle text="GM BLOGS" className="my-10 m-auto" />

      <div className="grid grid-cols-12 w-full sm:gap-9 max-sm: max-sm:space-y-6">
        {posts.map((post, index) => {
          const postImageUrl = post.image1
            ? urlFor(post.image1).width(550).height(310).url()
            : "/images/banner.png";

          const postImageUrl2 = post.image2
            ? urlFor(post.image2).width(550).height(310).url()
            : "/images/banner.png";

          const formattedDate = post.publishedAt
            ? formatDate(post.publishedAt)
            : undefined;

          return (
            <AnimatedDiv3
              isInView={isInView}
              index={index}
              key={index}
              className={`w-full h-full relative 
                  col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 aspect-square
              }`}
            >
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
                className={` scale-100 hover:scale-[1.02] opacity-90 transition-all hover:opacity-100`}
              />
            </AnimatedDiv3>
          );
        })}
      </div>
    </div>
  );
}
