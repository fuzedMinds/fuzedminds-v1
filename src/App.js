import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import DemoProduct from "./pages/DemoProduct";

import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import Internship from "./components/Body/Internship";
import Training from "./components/Body/Training";
import Main from "./pages/Main";
import Contact from "./components/Body/Contact";
import { Helmet } from "react-helmet";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("fuzedMinds | IT solutions");

  return (
    <>
      <Helmet>
        <title>fuzedMinds</title>
        <meta
          name="description"
          content="Your business, your rules. We'll build the software to match.
        We'll create software that perfectly fits your company's specific needs and way of doing things."
        />
      </Helmet>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/training" element={<Training />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
