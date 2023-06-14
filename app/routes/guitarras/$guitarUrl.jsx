import { useLoaderData } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";
import styles from "~/styles/guitars.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function loader({ params }) {
  const { guitarUrl } = params;
  const guitar = await getGuitar(guitarUrl);

  if (guitar.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitar Not Found",
    });
  }

  return guitar;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Guitar Not Found",
      description: "Guitars, guitar sales, guitar not found",
    };
  }

  return {
    title: `GuitarLA - ${data?.data[0]?.attributes.name}`,
    description: `Guitars, guitar sales, ${data.data[0].attributes.name} guitar`,
  };
}

function Guitar() {
  const guitar = useLoaderData();
  const { name, description, image, price } = guitar.data[0].attributes;

  return (
    <main className="guitar">
      <img
        className="image"
        src={image.data.attributes.url}
        alt={`Image of the ${name} guitar`}
      />

      <div className="content">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">${price}</p>
      </div>
    </main>
  );
}

export default Guitar;
