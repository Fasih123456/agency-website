import "../index.css";
import OffCanvasMenu from "./OffCanvasMenu";

function Header() {
  return (
    <>
      <header className="site-header is-sticky" role="banner">
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
              <a href="tel:+14168235930" className="-dropdown__header-phone">
                +1 416 823 5930
              </a>{" "}
              <a href="/contact/" className="-dropdown__header-cta btn-primary">
                Contact Us
              </a>{" "}
            </div>
          </div>

          <div className="-burger-block inner-frame">
            <div className="-burger-icon js-mobile-toggle" aria-expanded="false">
              <OffCanvasMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
