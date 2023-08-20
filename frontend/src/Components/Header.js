function Header() {
  return (
    <>
      <header className="site-header aos-init aos-animate" role="banner" data-aos="fade-down">
        <div className="site-header__logo">
          <div className="inner-frame">
            <a href="https://www.winwinit.eu" className="-link">
              <img
                src="https://www.winwinit.eu/wp-content/uploads/2021/04/logo_blue_color.svg"
                alt="WinWinIt"
                className="logo-img"
              />
            </a>
          </div>
        </div>

        <div className="site-header__links">
          <div className="-mb-phone inner-frame">
            <div className="-dropdown__header-top">
              <a href="tel:390287036386" className="-dropdown__header-phone">
                +39 02 87036386{" "}
              </a>{" "}
              <a href="/contact/" className="-dropdown__header-cta btn-primary">
                Consulenza gratuita{" "}
              </a>{" "}
            </div>
          </div>

          <div className="-burger-block inner-frame">
            <div className="-burger-icon js-mobile-toggle" aria-expanded="false">
              <span className="-lines"></span>
              <div className="-menu">Menu</div>
            </div>
          </div>

          <div className="-dropdown">
            <div className="-dropdown__header-top">
              <div className="inner-frame">
                <a href="tel:390287036386" className="-dropdown__header-phone">
                  +39 02 87036386{" "}
                </a>{" "}
                <a href="/contact/" className="-dropdown__header-links">
                  Contact{" "}
                </a>{" "}
                <a href="/about/" className="-dropdown__header-links">
                  About{" "}
                </a>{" "}
              </div>
            </div>

            <div className="-dropdown__header-main">
              <div className="inner-frame">
                <ul id="menu-header-menu" className="-header-menu">
                  <li
                    id="nav-menu-item-141"
                    className="menu-col-1 main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                  >
                    <a
                      href="https://www.winwinit.eu/solutions/"
                      className="menu-link main-menu-link"
                    >
                      <span className="menu-item-title">Solutions</span>
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="nav-menu-item-288"
                        className="menu-col-2 sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a
                          href="https://www.winwinit.eu/solutions/martech-hrtech/"
                          className="menu-link sub-menu-link"
                        >
                          <img
                            className=""
                            src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-5.svg"
                            alt="Icon Customer Engagement"
                          />
                          <span className="menu-item-title">MarTech &amp; HrTech</span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-291"
                        className="menu-col-2 sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a
                          href="https://www.winwinit.eu/solutions/tech-innovation/"
                          className="menu-link sub-menu-link"
                        >
                          <img
                            className=""
                            src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-1.svg"
                            alt="Icon smartphone"
                          />
                          <span className="menu-item-title">Internet of Things</span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-289"
                        className="menu-col-2 sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a
                          href="https://www.winwinit.eu/solutions/retailtech/"
                          className="menu-link sub-menu-link"
                        >
                          <img
                            className=""
                            src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-23.png"
                            alt="Icon screen with arrows"
                          />
                          <span className="menu-item-title">RetailTech</span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-290"
                        className="menu-col-2 sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a
                          href="https://www.winwinit.eu/solutions/fintech-legaltech/"
                          className="menu-link sub-menu-link"
                        >
                          <img
                            className=""
                            src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-18.svg"
                            alt="Icon handshake"
                          />
                          <span className="menu-item-title">FinTech &amp; LegalTech</span>
                        </a>
                      </li>
                    </ul>
                    <span className="menu-item__toggler"></span>
                  </li>
                  <li
                    id="nav-menu-item-279"
                    className="menu-col-2 main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                  >
                    <a
                      href="https://www.winwinit.eu/industries/"
                      className="menu-link main-menu-link"
                    >
                      <span className="menu-item-title">Industries</span>
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="nav-menu-item-755"
                        className="menu-col-3 sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-custom menu-item-object-custom"
                      >
                        <a href="/industries/#automotive" className="menu-link sub-menu-link">
                          <img
                            className=""
                            src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-17.svg"
                            alt="Icon car"
                          />
                          <span className="menu-item-title">Automotive</span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-756"
                        className="menu-col-3 sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-custom menu-item-object-custom"
                      >
                        <a
                          href="/industries/#energy&amp;utilities"
                          className="menu-link sub-menu-link"
                        >
                          <img
                            className=""
                            src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-14.svg"
                            alt="Icon Energy and utilities"
                          />
                          <span className="menu-item-title">Energy &amp; Utilities</span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-757"
                        className="menu-col-3 sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-custom menu-item-object-custom"
                      >
                        <a
                          href="/industries/#fashion&amp;luxury"
                          className="menu-link sub-menu-link"
                        >
                          <img
                            className=""
                            src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-13.svg"
                            alt="Icon Fashion &amp; Luxury"
                          />
                          <span className="menu-item-title">Fashion &amp; Luxury</span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-758"
                        className="menu-col-3 sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-custom menu-item-object-custom"
                      >
                        <a
                          href="/industries/#financial-institutions"
                          className="menu-link sub-menu-link"
                        >
                          <img
                            className=""
                            src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-4.svg"
                            alt="Icon Financial Institutions"
                          />
                          <span className="menu-item-title">Financial Institutions</span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-759"
                        className="menu-col-3 sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-custom menu-item-object-custom"
                      >
                        <a href="/industries/#retail" className="menu-link sub-menu-link">
                          <img
                            className=""
                            src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-11.svg"
                            alt="Icon Retail shopping cart"
                          />
                          <span className="menu-item-title">Retail</span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-760"
                        className="menu-col-3 sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-custom menu-item-object-custom"
                      >
                        <a href="/industries/#insurance" className="menu-link sub-menu-link">
                          <img
                            className=""
                            src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-10.svg"
                            alt="Icon Insurance"
                          />
                          <span className="menu-item-title">Insurance</span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-761"
                        className="menu-col-3 sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-custom menu-item-object-custom"
                      >
                        <a href="/industries/#telco&amp;media" className="menu-link sub-menu-link">
                          <img
                            className=""
                            src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-16.svg"
                            alt="Icon Telco &amp; Media"
                          />
                          <span className="menu-item-title">Telco &amp; Media</span>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-762"
                        className="menu-col-3 sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-custom menu-item-object-custom"
                      >
                        <a href="/industries/#government" className="menu-link sub-menu-link">
                          <img
                            className=""
                            src="https://www.winwinit.eu/wp-content/uploads/2021/04/icon-12.svg"
                            alt="Icon Government buildings"
                          />
                          <span className="menu-item-title">Government</span>
                        </a>
                      </li>
                    </ul>
                    <span className="menu-item__toggler"></span>
                  </li>
                  <li
                    id="nav-menu-item-296"
                    className="menu-col-3 main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                  >
                    <a
                      href="https://www.winwinit.eu/resources/"
                      className="menu-link main-menu-link"
                    >
                      <span className="menu-item-title">Resources</span>
                    </a>
                  </li>
                </ul>
                <a href="/contact/" className="-dropdown__header-cta btn-primary">
                  Consulenza gratuita{" "}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
