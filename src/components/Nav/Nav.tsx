import "./Nav.css";

const Header = () => {
  return (
    <div className="navbar-wrapper">
      <header>
        <img src="/Logo.png" alt="" />
        <nav>
          <div className="nav-tags">
            <a href="#">Home</a>
            <a href="#calorieCalculator">About</a>
            <a href="#calorieCalculator">Team</a>
            <a href="#calorieCalculator">Process</a>
            <a href="#calorieCalculator">Pricing</a>
            <a href="#calorieCalculator">Blog</a>
          </div>
          <div id="contact-button">
            <a href="#calorieCalculator">Contact Us</a>
          </div>
          {/* <button className="contact-button">Contact Us</button> */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
