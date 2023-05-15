import { Link, useLocation } from "@remix-run/react";
import logo from "../../public/img/logo.svg";

function Header() {

const location = useLocation()

  return (
    <header className="header">
      <div className="container bar">
        <Link to="/">
          <img className="logo" src={logo} alt="Img logo" />
        </Link>
        <nav className="navigation">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home{" "}
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About Us{" "}
          </Link>
          <Link
            to="/store"
            className={location.pathname === "/store" ? "active" : ""}
          >
            Store{" "}
          </Link>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active" : ""}
          >
            Blog{" "}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
