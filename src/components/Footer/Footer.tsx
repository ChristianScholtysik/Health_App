import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer>
        <img src="/Logo.png" alt="" />
        <section>
          <div className="footer-tags">
            <a href="#">Home</a>
            <a href="">About</a>
            <a href="">Team</a>
            <a href="">Process</a>
            <a href="">Pricing</a>
            <a href="">Blog</a>
          </div>
          <div className="gototop">
            <p className="footer-p">Go To Top</p>
            <img src="/public/Button.png" alt="" />
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
