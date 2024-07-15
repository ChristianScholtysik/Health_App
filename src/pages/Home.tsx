import { useState } from "react";
import Blog from "../components/Blog/Blog";
import CalorieCalculcator from "../components/CalorieCalculator/CalorieCalculcator";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Header from "../components/Nav/Nav";
import "./Home.css";

const Home = () => {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <div className={`${dark && "dark"}`}>
      <Header />
      <Hero dark={dark} setDark={setDark} />
      <Blog />
      <CalorieCalculcator />
      <Footer />
    </div>
  );
};

export default Home;
