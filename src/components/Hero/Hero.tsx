import Dark from "./Dark";
import "./Hero.css";

interface HeroProps {
  dark: boolean;

  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = (props) => {
  console.log(props);

  const toggleMode = () => {
    props.setDark((pizza) => !pizza);
  };
  return (
    <div className="hero-wrapper">
      <div className="hero-img"></div>
      <div className="toogleDarkMode" onClick={toggleMode}>
        <p className="dayNight para">
          {props.dark ? "Light" : "Dark"}
          <Dark />
        </p>
      </div>
      <div className="hero-text">
        <h2>Transform Your ❤️ Health with</h2>
        <h1>Personalized Nutrition Coaching</h1>
        <p>
          Welcome to Nutritionist, your partner in achieving optimal health
          through personalized nutrition coaching. Our certified nutritionists
          are here to guide you on your weight loss journey, providing
          customized plans and ongoing support. Start your transformation today
          and experience the power of personalized nutrition coaching.
        </p>
        <div className="button-wrapper">
          <div id="btn-starter">
            <a href="#calorieCalculator">Get Starter Today</a>
          </div>

          {/* <button className="btn-starter">Get Starter Today</button> */}
          {/* <button className="btn-starter">Get Starter Today</button> */}
          {/* <button className="btn-book">Book A Demo</button> */}
          <div id="btn-book">
            <a href="#calorieCalculator">Book A Demo</a>
          </div>
        </div>
        <div className="customer-div">
          <img src="/Container.svg" alt="" />
          <p>430+ Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
