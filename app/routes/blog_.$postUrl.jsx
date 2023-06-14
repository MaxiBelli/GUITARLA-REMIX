import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatDate } from "~/utils/helpers";
import styles from "~/styles/blog.css";

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post not found",
    });
  }
  return post;
}

export function meta({ data }) {
  if (!data) {
    return [
      { title: "GuitarLA - Entry Not Found" },
      { description: "Guitars, guitar blog, entry not found" },
    ];
  }

  return [
    { title: `GuitarLA - ${data.data[0].attributes.title}` },
    {
      description: `Guitars, guitar blog, entry ${data.data[0].attributes.title}`,
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

function Post() {
  const post = useLoaderData();
  const { title, content, image, publishedAt } = post.data[0].attributes;

  return (
    <article className="container post mt-3">
      <img
        src={image.data.attributes.url}
        alt={`Post image ${title}`}
        className="image"
      />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{formatDate(publishedAt)}</p>
        <p className="text">{content}</p>
      </div>
    </article>
  );
}

export default Post;
