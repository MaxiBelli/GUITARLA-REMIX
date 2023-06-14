import { useLoaderData } from "@remix-run/react";
import Post from "~/components/post";
import { getPost } from "../models/posts.server";

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
  const posts = await getPost();

  return posts.data;
}

function Blog() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <main className="conteiner">
      <h2 className="heading">Blog</h2>
      <div className="blog"></div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}

export default Blog;
