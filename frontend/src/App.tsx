//CSS
import "./assets/App.css";

//React Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Careers from "./Pages/Careers";
import Services from "./Pages/Services";
import CaseStudy from "./Pages/CaseStudy";
import Industries from "./Pages/Industries";
import Appointment from "./Pages/Appointment";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <body className="home page-template page-template-templates page-template-template-flexible page-template-templatestemplate-flexible-php page page-id-12 theme-blue">
        <div className="wrapper" style={{ width: "100%" }}>
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
        </div>
      </body>
    </>
  );
}

export default App;
