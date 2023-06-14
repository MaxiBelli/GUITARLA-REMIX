import { useLoaderData } from "@remix-run/react";
import PostList from "~/components/postList";
import { getPosts } from "../models/posts.server";

import styles from "~/styles/blog.css";

export function meta() {
  return [
    {
      title: "GuitarLA - Guitar Shop",
      description: "GuitarLA - Our collection of guitars",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function loader() {
  const posts = await getPosts();

  return posts.data;
}

function Blog() {
  const posts = useLoaderData();
  console.log(posts)

  return (
    <main className="conteiner">
      <PostList posts={posts} />
    </main>
  );
}

export default Blog;
