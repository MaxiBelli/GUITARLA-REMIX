import { useLoaderData, Outlet } from "@remix-run/react";
import PostList from "~/components/postList";
import { getPosts } from "~/models/posts.server";
import styles from "~/styles/blog.css";

export function meta() {
  return [
    { title: "GuitarLA - Our Blog" },
    { description: "GuitarLA - Music Blog and Guitar Sales" },
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

  return (
    <main className="container">
      <PostList posts={posts} />
      <Outlet />
    </main>
  );
}

export default Blog;
