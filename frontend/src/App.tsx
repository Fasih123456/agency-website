//CSS
import "./App.css";

//React Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Home from "./Pages/Home";
import Contact from "./Pages/contact";
import Careers from "./Pages/Careers";
import Services from "./Pages/Services";
import CaseStudy from "./Pages/CaseStudy";
import Industries from "./Pages/Industries";
import Appointment from "./Pages/Appointment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
