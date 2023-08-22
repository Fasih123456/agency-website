//Components
import Hero from "../Components/Home/HeroHome";
import Services from "../Components/Home/ServicesHome";
import About from "../Components/Home/AboutHome";
import Industries from "../Components/Home/IndustriesHome";
import Testimonials from "../Components/Home/TestimonialsHome";
import Contact from "../Components/Home/ContactHome";
import Header from "../Components/Header";

function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          width: "100%",
          height: "100% !important",
          zIndex: "10000 !important",
          marginTop: "750px",
        }}
      >
        <Header />
      </div>
      <main
        className="site-content"
        role="main"
        style={{
          width: "100% !important",
          paddingRight: "0px !important",
          marginRight: "0px !important",
        }}
      >
        <Hero />
        <Services />
      </main>
    </>
  );
}

export default Home;
