function Reviews() {
  return (
    <>
      <section className="testimonials">
        <div className="testimonials__image">
          <picture>
            <source
              media="(min-width: 1025px)"
              type="image/webp"
              srcSet={
                "https://www.winwinit.eu/wp-content/uploads/2021/05/ezgif-2-b4028f3ba6d0.webp"
              }
            />
            <source
              media="(max-width: 1025px)"
              type="image/webp"
              srcSet="
                  https://www.winwinit.eu/wp-content/uploads/2021/04/transformation-experts-mob.webp
                "
            />
            <source
              media="(max-width: 1025px)"
              type="image/jpg"
              srcSet="
                  https://www.winwinit.eu/wp-content/uploads/2021/04/transformation-experts-mob.jpg
                "
            />
            <img
              className="lazy loaded"
              alt="La soddisfazione dei Clienti è il </br> nostro miglior biglietto da visita"
              data-ll-status="loaded"
              src="https://www.winwinit.eu/wp-content/uploads/2021/05/testimonials.jpg"
            />
          </picture>
        </div>
        <div className="inner-frame">
          <div className="testimonials__text">
            <h2 className="title--h2">
              La soddisfazione dei Clienti è il <br />
              nostro miglior biglietto da visita
            </h2>
          </div>
        </div>

        <div className="testimonials__wrap swiper-container js-ts-carousel swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-bebd3d18d74aff53"
            aria-live="polite"
            style={{ transitionDuration: "0ms", transform: "translate3d(-1316px, 0px, 0px)" }}
          >
            <div
              className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
              style={{ width: "648px", marginRight: "10px" }}
              role="group"
              aria-label="6 / 9"
              data-swiper-slide-index="2"
            >
              <div className="-wrap">
                <p className="-quote text--md">Un Partner ideale</p>
                <p className="-quote-em text--sm">
                  Lavorare con WinWinit ed il suo Team è sempre fonte di grande soddisfazione.
                  Affidabilità e competenza li rendono un punto di riferimento.
                </p>

                <div className="-cite">
                  <div className="-cite__text">
                    <p className="-author">Marco</p>
                    <p className="-position text--xs">Welfare Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="testimonials__item swiper-slide swiper-slide-prev"
              style={{ width: "648px", marginRight: "10px" }}
              role="group"
              aria-label="4 / 9"
              data-swiper-slide-index="0"
            >
              <div className="-wrap">
                <p className="-quote text--md">Idee ed innovazione</p>
                <p className="-quote-em text--sm">
                  Lavoriamo con Winwinit da anni e condividiamo con loro lo stesso entusiasmo per le
                  idee non convenzionali nelle soluzioni di people engagement.
                </p>

                <div className="-cite">
                  <div className="-cite__text">
                    <p className="-author">Cecilia</p>
                    <p className="-position text--xs">Nautes</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="testimonials__item swiper-slide swiper-slide-active"
              style={{ width: "648px", marginRight: "10px" }}
              role="group"
              aria-label="5 / 9"
              data-swiper-slide-index="1"
            >
              <div className="-wrap">
                <p className="-quote text--md">Infinite sinergie</p>
                <p className="-quote-em text--sm">
                  È incredibile come aziende operanti in ambiti così diversi riescano a trovare
                  sempre infinite sinergie.
                </p>

                <div className="-cite">
                  <div className="-cite__text">
                    <p className="-author">Fabio</p>
                    <p className="-position text--xs">Fabrick</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="testimonials__item swiper-slide swiper-slide-next"
              style={{ width: "648px", marginRight: "10px" }}
              role="group"
              aria-label="6 / 9"
              data-swiper-slide-index="2"
            >
              <div className="-wrap">
                <p className="-quote text--md">Un Partner ideale</p>
                <p className="-quote-em text--sm">
                  Lavorare con WinWinit ed il suo Team è sempre fonte di grande soddisfazione.
                  Affidabilità e competenza li rendono un punto di riferimento.
                </p>

                <div className="-cite">
                  <div className="-cite__text">
                    <p className="-author">Marco</p>
                    <p className="-position text--xs">Welfare Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
              style={{ width: "648px", marginRight: "10px" }}
              role="group"
              aria-label="4 / 9"
              data-swiper-slide-index="0"
            >
              <div className="-wrap">
                <p className="-quote text--md">Idee ed innovazione</p>
                <p className="-quote-em text--sm">
                  Lavoriamo con Winwinit da anni e condividiamo con loro lo stesso entusiasmo per le
                  idee non convenzionali nelle soluzioni di people engagement.
                </p>

                <div className="-cite">
                  <div className="-cite__text">
                    <p className="-author">Cecilia</p>
                    <p className="-position text--xs">Nautes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="testimonials__next swiper-button-next"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-bebd3d18d74aff53"
          ></div>
          <div
            className="testimonials__prev swiper-button-prev"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-bebd3d18d74aff53"
          ></div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
            <span
              className="swiper-pagination-bullet"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 1"
            ></span>
            <span
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 2"
            ></span>
            <span
              className="swiper-pagination-bullet"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 3"
            ></span>
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>

        <div className="inner-frame">
          <div className="testimonials__cta">
            <p className="text--md">Vuoi lavorare con noi?</p>
            <a href="/contact/" className="btn-primary">
              Richiedi una consulenza gratuita{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
