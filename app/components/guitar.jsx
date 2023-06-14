import { Link } from "@remix-run/react";

export default function Guitar({ guitar }) {
  const { description, image, price, url, name } = guitar;

  return (
    <div className="guitar">
      <img
        src={image.data.attributes.formats.thumbnail
          .url}
        alt={`Guitar img ${name}`}
      />
      <div className="content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <Link className="link" to={`/guitars/${url}`}>
          View Product
        </Link>
      </div>
    </div>
  );
}
