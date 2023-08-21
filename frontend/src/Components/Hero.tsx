function Hero() {
  return (
    <>
      <section className="hero-banner home pr-scroll">
        <div className="hero-banner__image home">
          <picture>
            <source
              media="(min-width: 1025px)"
              type="image/webp"
              srcset="https://www.winwinit.eu/wp-content/uploads/2021/05/ezgif-2-de3fd228e551.webp"
            />
            <source
              media="(max-width: 1025px)"
              type="image/webp"
              srcset="https://www.winwinit.eu/wp-content/uploads/2021/05/ezgif-2-c3242cdb109d.webp"
            />
            <source
              media="(max-width: 1025px)"
              type="image/jpg"
              srcset="https://www.winwinit.eu/wp-content/uploads/2021/05/Hero-Home-Mob.jpg"
            />
            <img
              className="lazy loaded"
              alt="Services, Solutions, Software &amp; DevOps"
              data-ll-status="loaded"
              src="https://www.winwinit.eu/wp-content/uploads/2021/05/Hero-Home.jpg"
            />
          </picture>

          <div className="net-graph" id="particles-js">
            <canvas
              className="particles-js-canvas-el"
              style={{ width: "100%", height: "100%" }}
              width="1376"
              height="1124"
            ></canvas>
          </div>
        </div>
        <div className="inner-frame">
          <div className="hero-banner__text home aos-init aos-animate" data-aos="fade-left">
            <h1 className="title--h1">Services, Solutions, Software &amp; DevOps</h1>

            <p className="text--lg">
              La Digital Transformation al servizio dei processi aziendali.
            </p>

            <div className="hero-banner__cta">
              <a href="/solutions/" className="btn-primary">
                Scopri le nostre soluzioni{" "}
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
