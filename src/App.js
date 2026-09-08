import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

/* =========================================
   SCROLL TO TOP ON EVERY ROUTE CHANGE
========================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <style>{`

        /* =========================================
           GLOBAL
        ========================================= */

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          overflow-x: hidden;
        }

      `}</style>

      {/* ALWAYS MOVE TO TOP WHEN ROUTE CHANGES */}

      <ScrollToTop />

      {/* NAVBAR */}

      <Navbar />

      {/* PAGES */}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about-us"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/contact-us"
          element={<Contact />}
        />

      </Routes>

      {/* FOOTER */}

      <Footer />

    </>
  );
}

export default App;