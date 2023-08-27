//Components
import Hero from "../Components/Home/HeroHome";
import Services from "../Components/Home/ServicesHome";
import Header from "../Components/Header";
import HowWeWork from "../Components/Home/HowWeWork";
import ClientHome from "../Components/Home/ClientsHome";
import ContactUs from "../Components/Home/ContactUsHome";

function Home() {
  return (
    <>
      <div
        style={{
          marginTop: "2545px",
        }}
      >
        <Header />
      </div>
      <main className="site-content" role="main">
        <Hero />
        <Services />
        <HowWeWork />
        <ClientHome />
        <ContactUs />
      </main>
    </>
  );
}

export default Home;
