import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import GuitarList from "~/components/guitar-list";
import PostList from "~/components/post-list";
import guitarStyles from "~/styles/guitars.css";
import postStyles from "~/styles/blog.css";

export function meta() {}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: guitarStyles,
    },
    {
      rel: "stylesheet",
      href: postStyles,
    },
  ];
}

export async function loader() {
  const [guitars, posts] = await Promise.all([getGuitars(), getPosts()]);

  return {
    guitars: guitars.data,
    posts: posts.data,
  };
}

function Index() {
  const { guitars, posts } = useLoaderData();

  return (
    <>
      <main className="container">
        <GuitarList guitars={guitars} />
      </main>

      <section className="container">
        <PostList posts={posts} />
      </section>
    </>
  );
}

export default Index;
