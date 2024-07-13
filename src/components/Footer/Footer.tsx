import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer>
        <img src="/Logo.png" alt="" />
        <section>
          <div className="footer-tags">
            <a href="#">Home</a>
            <a href="#calorieCalculator">About</a>
            <a href="#calorieCalculator">Team</a>
            <a href="#calorieCalculator">Process</a>
            <a href="#calorieCalculator">Pricing</a>
            <a href="#calorieCalculator">Blog</a>
          </div>
          <div className="gototop">
            <p className="footer-p">Go To Top</p>
            <img src="/Button.svg" alt="" />
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
