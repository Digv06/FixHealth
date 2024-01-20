import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="overlay">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">Fix Health</div>
          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#blogs">Blogs</a>
            <a href="#about">About</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
