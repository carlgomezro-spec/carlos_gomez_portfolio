function Navbar() {
  return (
    <nav className="navbar">

      <a href="#home" className="navbar-logo">
        <span>.</span> 
      </a>

      <div className="navbar-links">

        <a href="#about">ABOUT</a>

        <a href="#projects">WORK</a>

        <a href="#contact">CONTACT</a>

      </div>

      <div className="navbar-status">
        <span></span>
        AVAILABLE
      </div>

    </nav>
  );
}

export default Navbar;
