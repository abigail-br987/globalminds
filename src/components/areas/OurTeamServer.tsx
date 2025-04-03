import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import OurTeam from "./OurTeam";

const POSTS_QUERY = `*[ _type == "member" ]`;
const options = { next: { revalidate: 30 } };

async function fetchMembers() {
  try {
    const members = await client.fetch<SanityDocument[]>(
      POSTS_QUERY,
      {},
      options,
    );
    return members;
  } catch {
    return [];
  }
}

export default async function OurTeamServer() {
  const members = await fetchMembers();
  return <OurTeam members={members} />;
}
