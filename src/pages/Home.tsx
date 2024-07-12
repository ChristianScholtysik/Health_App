import Blog from "../components/Blog/Blog";
import CalorieCalculcator from "../components/CalorieCalculator/CalorieCalculcator";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Header from "../components/Nav/Nav";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Blog />
      <CalorieCalculcator />
      <Footer />
    </>
  );
};

export default Home;
