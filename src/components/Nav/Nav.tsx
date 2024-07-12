import "./Nav.css";

const Header = () => {
  return (
    <div className="navbar-wrapper">
      <header>
        <img src="/Logo.png" alt="" />
        <nav>
          <div className="nav-tags">
            <a href="#">Home</a>
            <a href="">About</a>
            <a href="">Team</a>
            <a href="">Process</a>
            <a href="">Pricing</a>
            <a href="">Blog</a>
          </div>
          <button className="contact-button">Contact Us</button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
