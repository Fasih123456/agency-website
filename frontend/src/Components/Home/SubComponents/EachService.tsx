interface Service {
  imageSrc: string;
  title: string;
  description: string;
}

function EachService({ service }: { service: Service }) {
  return (
    <>
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
          tabIndex={0}
        >
          <img
            alt={service.title}
            className="lazy loaded"
            data-ll-status="loaded"
            src={service.imageSrc}
          />
          <div className="text--md">{service.title}</div>
        </div>
        <div className=" is-open" aria-hidden="false">
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
                <h3 className="title--h3">{service.title}</h3>
                <div className="text--sm c-mine">{service.description}</div>
                <a href="/solutions/martech-hrtech/" className="btn-primary">
                  Scopri di più{" "}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default EachService;
