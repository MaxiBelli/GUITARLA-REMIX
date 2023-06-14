import { useLoaderData, Outlet } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import GuitarList from "~/components/guitarList";
import styles from "~/styles/guitars.css";

export function meta() {
  return [
    { title: "GuitarLA - Guitar Store" },
    { description: "GuitarLA - Our collection of guitars" },
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
  const guitars = await getGuitars();
  return guitars.data;
}

function Store() {
  const guitars = useLoaderData();

  return (
    <main className="container">
      <GuitarList guitars={guitars} />
      <Outlet />
    </main>
  );
}

export default Store;
