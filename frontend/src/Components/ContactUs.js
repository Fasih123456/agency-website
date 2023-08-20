function ContactUs() {
  return (
    <>
      <section className="text-cta">
        <div
          className="text-cta__image"
          style="background-image: url('https://www.winwinit.eu/wp-content/uploads/2021/04/digital-age.jpg');"
        ></div>
        <div className="inner-frame">
          <div className="text-cta__text">
            <h2 className="title--h2 aos-init aos-animate" data-aos="fade-up">
              Winwinit accompagna le Aziende verso il successo nell’era digitale
            </h2>

            <p className="text--md aos-init aos-animate" data-aos="fade-up">
              Start your Digital Transformation
            </p>

            <div className="text-cta__cta aos-init aos-animate" data-aos="fade-up">
              <a href="/contact/" className="btn-primary">
                Contatta i nostri esperti{" "}
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
