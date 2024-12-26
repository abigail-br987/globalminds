import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import DetailedStructure from "./DetailedStructure";

const POSTS_QUERY = `*[
  _type == "offerings" && (type == "Talleres" || type == "Charlas")
] | order(time desc)[0...12]`;

const options = { next: { revalidate: 30 } }; 

async function fetchMembers() {
  try {
    const members = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    return members;
  } catch {
    return [];
  }
}

export default async function DetailedStructureServer() {
  const members = await fetchMembers();
  return <DetailedStructure items={members} />;
}
