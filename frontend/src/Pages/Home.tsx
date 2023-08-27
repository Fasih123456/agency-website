//Components
import Hero from "../Components/Home/HeroHome";
import Services from "../Components/Home/ServicesHome";
import Header from "../Components/Header";
import HowWeWork from "../Components/Home/HowWeWork";
import ClientHome from "../Components/Home/ClientsHome";

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
        <HowWeWork />
        <ClientHome />
      </main>
    </>
  );
}

export default Home;
