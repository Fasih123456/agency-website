import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function OffCanvasMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} id="header-menu">
        Launch
      </button>
      <span className="-lines"></span>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="menu-item">
            <Link to="/">Home</Link>
          </ul>
          <ul className="menu-item">
            <Link to="/services">Services</Link>
          </ul>
          <ul className="menu-item">
            <Link to="/industries">Industries</Link>
          </ul>
          <ul className="menu-item">
            <Link to="/case-study">Case Study</Link>
          </ul>
          <ul className="menu-item">
            <Link to="/careers">Careers</Link>
          </ul>
          <ul className="menu-item">
            <Link to="/contact">Contact</Link>
          </ul>
          <ul className="menu-item">
            <Link to="/appointment">Appointment</Link>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasMenu;
