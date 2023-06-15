import { Link, useLocation } from "@remix-run/react";
import image from "../../public/img/shoppingCart.png";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Home{" "}
      </Link>
      <Link
        to="/aboutUs"
        className={location.pathname === "/about" ? "active" : ""}
      >
        About Us{" "}
      </Link>
      <Link
        to="/guitars"
        className={location.pathname === "/guitars" ? "active" : ""}
      >
        Store{" "}
      </Link>
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "active" : ""}
      >
        Blog{" "}
      </Link>
      <Link to="/cart">
        <img src={image} alt="Shoppibg Cart" />
      </Link>
    </nav>
  );
}

export default Navigation;
