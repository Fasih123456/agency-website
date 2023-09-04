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

import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

function Home() {
  return (
    <>
      <main className="site-content" role="main">
        <Header />
        <Hero />
        <ClientHome />
        <Services />
        <HowWeWork />

        <ContactUs />
        <Reviews />
        <Footer />
      </main>
      <SocialMediaIcons />
    </>
  );
}

export default Home;
