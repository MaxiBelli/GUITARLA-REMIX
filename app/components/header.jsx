import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="container bar">
        <Link to="/">
          <img className="logo" src={logo} alt="Img logo" />
        </Link>
        <nav className="navigation">
          <Link to="/">Home </Link>
          <Link to="/about">About  Us </Link>
          <Link to="/store">Store </Link>
          <Link to="/blog">Blog </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
