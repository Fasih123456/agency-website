//Components
import Hero from "../Components/Home/HeroHome";
import Services from "../Components/Home/ServicesHome";
import Header from "../Components/Header";
import HowWeWork from "../Components/Home/HowWeWork";
import ClientHome from "../Components/Home/ClientsHome";
import ContactUs from "../Components/Home/ContactUsHome";
import Reviews from "../Components/Home/Reviews";
import Footer from "../Components/Footer";
import SocialMediaIcons from "../Components/SocialMediaIcons";

function Home() {
  return (
    <>
      <div
        style={{
          marginTop: "3920px",
        }}
      ></div>
      <main className="site-content" role="main">
        <Header />
        <Hero />
        <Services />
        <HowWeWork />
        <ClientHome />
        <ContactUs />
        <Reviews />
        <Footer />
      </main>
      <SocialMediaIcons />
    </>
  );
}

export default Home;
