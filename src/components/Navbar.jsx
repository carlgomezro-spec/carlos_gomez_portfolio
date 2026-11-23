import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo" aria-label="Home">
        <span>.</span>
      </Link>

      <div className="navbar-links">

        <Link to="/#about">ABOUT</Link>

        <Link to="/#projects">WORK</Link>

        <Link to="/#contact">CONTACT</Link>

      </div>

      <div className="navbar-status">
        <span></span>
        AVAILABLE
      </div>

    </nav>
  );
}

export default Navbar;