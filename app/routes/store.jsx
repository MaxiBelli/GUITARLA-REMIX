import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import Guitar from "~/components/guitar";

export async function loader() {
  const guitars = await getGuitars();

  return guitars.data;
}

function Store() {
  const guitars = useLoaderData();
  console.log(guitars)
  return (
    <main className="conteiner">
      <h2 className="heading">Our Collection</h2>

      {guitars?.length && (
        <div className="guitars-grid">
          {guitars.map((guitar) => (
            <Guitar key={guitar?.id} guitar={guitar?.attributes} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Store;
