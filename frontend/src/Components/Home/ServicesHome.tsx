import React, { useState } from "react";
import EachService from "./SubComponents/EachService";

function ServicesHome() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const services = [
    {
      imageSrc: "https://example.com/image1.jpg",
      title: "API Development",
      description:
        "We design versatile APIs that allow your systems to share data and functionality securely with employees, partners and developers. Our APIs accelerate your digital transformation through modular services that simplify complex system integration.",
    },
    {
      imageSrc: "https://example.com/image2.jpg",
      title: "Generative AI",
      description:
        "Our generative AI solutions drive efficiencies by automating repetitive tasks through cutting-edge models like GPT-4. We identify use cases tailored to your needs, integrating seamless AI to augment your workforce.",
    },
    {
      imageSrc: "https://example.com/image3.jpg",
      title: "Custom SAAS",
      description:
        "We build secure, scalable custom SaaS applications aligned to your unique workflows and business requirements. Our SaaS solutions centralize your critical systems and data into an intuitive platform accessible anywhere.",
    },
    {
      imageSrc: "https://example.com/image4.jpg",
      title: "Cloud SAAS",
      description:
        "We migrate your systems to optimized, auto-scaling cloud SaaS architecture for increased performance, resilience and cost savings. Our Cloud SaaS solutions keep you agile and flexible for the future",
    },
  ];

  return (
    <>
      <section className="accordion net-bg" id="service-home" style={{ zIndex: "2" }}>
        <div className="inner-frame ">
          <h2 className="title--h2">
            <p>The Best Customer Service and</p>
            <p>
              <strong>Solutions</strong>
            </p>
          </h2>
        </div>
        <div className="accordion-tabs js-tabs is-initialized tabs-allowed " id="js-tabs-accordion">
          <div className="accordion-tabs__nav">
            <div className="inner-frame">
              <ul role="tablist" className="tabs-list">
                <li role="presentation" className="tabs-list__item">
                  <a
                    href="#section1"
                    role="tab"
                    id="tab1"
                    aria-controls="section1"
                    className="tabs-list__link tabs-trigger js-tabs-trigger is-selected"
                    aria-selected="true"
                    onClick={() => setCurrentTabIndex(0)}
                  >
                    <img
                      alt="MarTech &amp; HrTech"
                      className="lazy loaded"
                      data-ll-status="loaded"
                      src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-5.svg"
                    />
                    <div className="text--md">API Development </div>
                  </a>
                </li>
                <li role="presentation" className="tabs-list__item">
                  <a
                    href="#section2"
                    role="tab"
                    id="tab2"
                    aria-controls="section2"
                    className="tabs-list__link tabs-trigger js-tabs-trigger"
                    aria-selected="false"
                    tabIndex={-1}
                    onClick={() => setCurrentTabIndex(1)}
                  >
                    <img
                      alt="Internet of Things"
                      className="lazy loaded"
                      data-ll-status="loaded"
                      src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-1.svg"
                    />
                    <div className="text--md">Generative AI </div>
                  </a>
                </li>
                <li role="presentation" className="tabs-list__item">
                  <a
                    href="#section3"
                    role="tab"
                    id="tab3"
                    aria-controls="section3"
                    className="tabs-list__link tabs-trigger js-tabs-trigger"
                    aria-selected="false"
                    tabIndex={-1}
                    onClick={() => setCurrentTabIndex(2)}
                  >
                    <img
                      alt="RetailTech"
                      className="lazy loaded"
                      data-ll-status="loaded"
                      src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-23.png"
                    />
                    <div className="text--md">Custom SAAS </div>
                  </a>
                </li>
                <li role="presentation" className="tabs-list__item">
                  <a
                    href="#section4"
                    role="tab"
                    id="tab4"
                    aria-controls="section4"
                    className="tabs-list__link tabs-trigger js-tabs-trigger"
                    aria-selected="false"
                    tabIndex={-1}
                    onClick={() => setCurrentTabIndex(3)}
                  >
                    <img
                      alt=" FinTech &amp; LegalTech"
                      className="lazy loaded"
                      data-ll-status="loaded"
                      src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-6.svg"
                    />
                    <div className="text--md">Cloud SAAS </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="accordion-tabs__content">
            <EachService service={services[currentTabIndex]} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesHome;
