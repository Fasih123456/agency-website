function Services() {
  <>
    <section className="accordion net-bg">
      <div className="inner-frame aos-init aos-animate" data-aos="fade-up">
        <h2 className="title--h2">
          <p>Una panoramica sulle nostre</p>
          <p>
            <strong>Soluzioni</strong>
          </p>
        </h2>
      </div>
      <div
        className="accordion-tabs js-tabs is-initialized tabs-allowed aos-init aos-animate"
        id="js-tabs-accordion"
        data-aos="fade-in"
      >
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
                  tabindex="-1"
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
                  tabindex="-1"
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
                  tabindex="-1"
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
          <section
            id="section4"
            role="tabpanel"
            aria-labelledby="tab4"
            className="tabs-panel js-tabs-panel is-open"
          >
            <div
              className="accordion-trigger js-accordion-trigger"
              aria-controls="section4"
              aria-expanded="true"
              tabindex="0"
            >
              <img
                alt="MarTech &amp; HrTech"
                className="lazy loaded"
                data-ll-status="loaded"
                src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-5.svg"
              />
              <div className="text--md">MarTech &amp; HrTech</div>
            </div>
            <div className="content is-open" aria-hidden="false">
              <div className="accordion-tabs__image">
                <div className="accordion-tabs__logo">
                  <img
                    className="lazy loading"
                    alt="Team,Of,Businessmen,Work,Together,In,Office,With,Modern,Effect."
                    src="https://www.winwinit.eu/wp-content/uploads/2021/04/winloy-y-w.svg"
                    data-ll-status="loading"
                  />
                </div>

                <img
                  alt="Team,Of,Businessmen,Work,Together,In,Office,With,Modern,Effect."
                  className="accordion-tabs__illustration lazy loaded"
                  data-ll-status="loaded"
                  src="https://www.winwinit.eu/wp-content/uploads/2021/04/shutterstock_688860325-1.jpg"
                />

                <div className="inner-frame">
                  <div className="accordion-tabs__text">
                    <h3 className="title--h3">MarTech &amp; HrTech</h3>
                    <div className="text--sm c-mine">
                      Incentivare le Reti Commerciali, premiare i Dipendenti e fidelizzare i
                      Clienti, attraverso la realizzazione di programmi unici e differenzianti.{" "}
                    </div>
                    <a href="/solutions/martech-hrtech/" className="btn-primary">
                      Scopri di più{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="section4"
            role="tabpanel"
            aria-labelledby="tab4"
            className="tabs-panel js-tabs-panel is-hidden"
            tabindex="-1"
          >
            <div
              className="accordion-trigger js-accordion-trigger"
              aria-controls="section4"
              aria-expanded="false"
              tabindex="0"
            >
              <img
                data-src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-1.svg"
                alt="IoT"
                className="lazy"
              />
              <div className="text--md">IoT</div>
            </div>
            <div className="content is-hidden" aria-hidden="true">
              <div className="accordion-tabs__image">
                <div className="accordion-tabs__logo">
                  <img
                    className="lazy"
                    src="https://www.winwinit.eu/wp-content/uploads/2021/04/wintech-o-w.svg"
                    alt="Virtual Reality glasses"
                  />
                </div>

                <img
                  data-src="https://www.winwinit.eu/wp-content/uploads/2021/04/innovation-technology-min.jpg"
                  alt="Virtual Reality glasses"
                  className="accordion-tabs__illustration lazy"
                />

                <div className="inner-frame">
                  <div className="accordion-tabs__text">
                    <h3 className="title--h3">IoT</h3>
                    <div className="text--sm c-mine">
                      La tecnologia Open Core per disegnare, sviluppare, evolvere e gestire devices
                      connessi ad ogni network, attraverso 5 pilastri fondamentali:
                      <br />- Edge devices
                      <br /> - Fleet Management
                      <br /> - OTA Update
                      <br /> - Events Streaming
                      <br /> - Remote Installer{" "}
                    </div>
                    <a href="/solutions/tech-innovation/" className="btn-primary">
                      Scopri di più{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="section4"
            role="tabpanel"
            aria-labelledby="tab4"
            className="tabs-panel js-tabs-panel is-hidden"
            tabindex="-1"
          >
            <div
              className="accordion-trigger js-accordion-trigger"
              aria-controls="section4"
              aria-expanded="false"
              tabindex="0"
            >
              <img
                data-src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-23.png"
                alt="RetailTech"
                className="lazy"
              />
              <div className="text--md">RetailTech</div>
            </div>
            <div className="content is-hidden" aria-hidden="true">
              <div className="accordion-tabs__image">
                <div className="accordion-tabs__logo">
                  <img
                    className="lazy"
                    src="https://www.winwinit.eu/wp-content/uploads/2021/05/winder-p-o.svg"
                    alt="Workplace meeting"
                  />
                </div>

                <img
                  data-src="https://www.winwinit.eu/wp-content/uploads/2021/04/services-consulting-min.jpg"
                  alt="Workplace meeting"
                  className="accordion-tabs__illustration lazy"
                />

                <div className="inner-frame">
                  <div className="accordion-tabs__text">
                    <h3 className="title--h3">RetailTech</h3>
                    <div className="text--sm c-mine">
                      Abilitare cambiamenti, innovare processi e abbattere barriere tecnologiche per
                      creare esperienze no-channel.{" "}
                    </div>
                    <a href="/solutions/retailtech/" className="btn-primary">
                      Scopri di più{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="section4"
            role="tabpanel"
            aria-labelledby="tab4"
            className="tabs-panel js-tabs-panel is-hidden"
            tabindex="-1"
          >
            <div
              className="accordion-trigger js-accordion-trigger"
              aria-controls="section4"
              aria-expanded="false"
              tabindex="0"
            >
              <img
                data-src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-6.svg"
                alt="FinTech &amp; LegalTech"
                className="lazy"
              />
              <div className="text--md">FinTech &amp; LegalTech</div>
            </div>
            <div className="content is-hidden" aria-hidden="true">
              <div className="accordion-tabs__image">
                <div className="accordion-tabs__logo">
                  <img
                    className="lazy"
                    src="https://www.winwinit.eu/wp-content/uploads/2021/05/winder-p-o.svg"
                    alt="Typing on laptop"
                  />
                </div>

                <img
                  data-src="https://www.winwinit.eu/wp-content/uploads/2021/06/fintech-legalfarm.jpg"
                  alt="Typing on laptop"
                  className="accordion-tabs__illustration lazy"
                />

                <div className="inner-frame">
                  <div className="accordion-tabs__text">
                    <h3 className="title--h3">FinTech &amp; LegalTech</h3>
                    <div className="text--sm c-mine">
                      Gestire in maniera completamente digitale ed omnicanale il processo di incasso
                      ed il recupero del credito non incassato sia nella fase stragiudiziale che
                      giudiziale.{" "}
                    </div>
                    <a href="/solutions/fintech-legaltech/" className="btn-primary">
                      Scopri di più{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </>;
}

export default Services;
