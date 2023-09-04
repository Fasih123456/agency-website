import React, { useState } from "react";
import EachService from "./SubComponents/EachService";

function ServicesHome() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const services = [
    {
      imageSrc: "https://example.com/image1.jpg",
      title: "Service 1",
      description: "Description for service 1",
    },
    {
      imageSrc: "https://example.com/image2.jpg",
      title: "Service 2",
      description: "Description for service 2",
    },
    {
      imageSrc: "https://example.com/image3.jpg",
      title: "Service 3",
      description: "Description for service 3",
    },
    {
      imageSrc: "https://example.com/image4.jpg",
      title: "Service 4",
      description: "Description for service 4",
    },
  ];

  return (
    <>
      <section className="accordion net-bg" id="service-home">
        <div className="inner-frame ">
          <h2 className="title--h2">
            <p>Una panoramica sulle nostre</p>
            <p>
              <strong>Soluzioni</strong>
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
                    <div className="text--md">MarTech &amp; HrTech </div>
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
                    <div className="text--md">Internet of Things </div>
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
                    <div className="text--md">RetailTech </div>
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
                    <div className="text--md">FinTech &amp; LegalTech </div>
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
