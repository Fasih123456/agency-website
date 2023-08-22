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
      <main className="site-content" role="main">
        <Hero />
      </main>
    </>
  );
}

export default Home;
