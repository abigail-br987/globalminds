import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import BlogBlock from "./BlogBlock";

const POSTS_QUERY = `*[ 
    _type == "post" 
    && defined(slug.current)
  ]|order(publishedAt asc)[0...12]`;

const options = { next: { revalidate: 30 } };

async function fetchMembers() {
  try {
    const posts = await client.fetch<SanityDocument[]>(
      POSTS_QUERY,
      {},
      options,
    );
    return posts;
  } catch {
    return [];
  }
}

export default async function BlogServer() {
  const posts = await fetchMembers();
  return <BlogBlock posts={posts} />;
}
