import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
