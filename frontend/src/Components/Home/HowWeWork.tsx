function HowWeWork() {
  return (
    <>
      <section
        className="support left"
        style={{
          backgroundImage: "url(https://www.winwinit.eu/wp-content/uploads/2021/05/Consulting.jpg)",
        }}
      >
        <div className="inner-frame">
          <header>
            <h2 className="title--h2">
              <p>
                Consulenza architetturale e<br />
                <strong>Progetti Custom</strong>
              </p>
            </h2>

            <p className="text--md bold">
              Attraverso il nostro team di professionisti, offriamo anche servizi di assessment e
              consulenza architetturale IT <br />e realizziamo progetti di sviluppo software
              personalizzati per esigenze specifiche
            </p>
          </header>

          <div className="support__wrap">
            <div className="support__illustration">
              <img
                alt="Womans profile"
                className="support__img-left lazy aos-init loaded"
                src="https://www.winwinit.eu/wp-content/uploads/2021/04/iStock-1204589859-min.jpg"
              />

              <img
                alt="Man using tablet with virtual charts pointing up"
                className="support__img-right lazy  "
                src="https://www.winwinit.eu/wp-content/uploads/2021/04/shutterstock_1169956426-min.jpg"
              />
            </div>
            <div className="support__list">
              <div className="support__list-item ">
                <svg
                  className="support__icon"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V26H26V9.19293L21.7344 13.4586V21.7344H4.26562V4.26562H12.5414L16.8071 0H0ZM22.3168 0.328488L12.9096 9.73724L9.5485 6.37613L6.10172 9.82449L12.9095 16.6307L16.3562 13.1839L25.7635 3.77516L22.3168 0.328488Z"></path>
                </svg>
                <p className="support__text text--sm">Customer Experience Strategy</p>
              </div>
              <div
                className="support__list-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <svg
                  className="support__icon"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V26H26V9.19293L21.7344 13.4586V21.7344H4.26562V4.26562H12.5414L16.8071 0H0ZM22.3168 0.328488L12.9096 9.73724L9.5485 6.37613L6.10172 9.82449L12.9095 16.6307L16.3562 13.1839L25.7635 3.77516L22.3168 0.328488Z"></path>
                </svg>
                <p className="support__text text--sm">Customer Experience Design</p>
              </div>
              <div className="support__list-item">
                <svg
                  className="support__icon"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V26H26V9.19293L21.7344 13.4586V21.7344H4.26562V4.26562H12.5414L16.8071 0H0ZM22.3168 0.328488L12.9096 9.73724L9.5485 6.37613L6.10172 9.82449L12.9095 16.6307L16.3562 13.1839L25.7635 3.77516L22.3168 0.328488Z"></path>
                </svg>
                <p className="support__text text--sm">Hybrid Platform &amp; Solutions</p>
              </div>

              <div className="support__cta aos-init aos-animate"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowWeWork;
