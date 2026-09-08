import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaCalendarAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .health-navbar {
          width: 100%;
          height: 94px;
          background: rgba(255, 255, 255, 0.98);
          display: flex;
          align-items: center;
          position: sticky;
          top: 0;
          left: 0;
          z-index: 9999;
          border-bottom: 1px solid rgba(10, 65, 87, 0.06);
          box-shadow: 0 2px 15px rgba(0, 57, 85, 0.035);
        }

        .health-navbar-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 30px;
          display: grid;
          grid-template-columns: 340px 1fr 440px;
          align-items: center;
          gap: 20px;
        }

        /* =========================
           LOGO
        ========================= */

        .health-logo {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          text-decoration: none;
        }

        .health-logo img {
          width: 290px;
          max-width: 100%;
          height: 78px;
          object-fit: contain;
          object-position: left center;
          display: block;
        }

        /* =========================
           DESKTOP LINKS
        ========================= */

        .health-nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 54px;
        }

        .health-nav-link {
          position: relative;
          color: #082f42;
          text-decoration: none;
          font-size: 17px;
          font-weight: 600;
          padding: 35px 0 31px;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .health-nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 22px;
          width: 0;
          height: 3px;
          border-radius: 20px;
          background: #19aee8;
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }

        .health-nav-link:hover {
          color: #078ac5;
        }

        .health-nav-link:hover::after,
        .health-nav-link.active::after {
          width: 100%;
        }

        .health-nav-link.active {
          color: #076ba8;
        }

        /* =========================
           RIGHT SIDE
        ========================= */

        .health-nav-actions {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 34px;
        }

        .health-phone {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #073b58;
          font-size: 17px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.3s ease;
        }

        .health-phone svg {
          color: #086aa7;
          font-size: 20px;
          transform: rotate(-4deg);
        }

        .health-phone:hover {
          color: #19aee8;
        }

        .health-book-btn {
          min-height: 54px;
          padding: 0 28px;
          border-radius: 50px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 11px;
          background: linear-gradient(135deg, #22ad31, #59d337);
          color: #ffffff;
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 8px 25px rgba(48, 187, 48, 0.18);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .health-book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(48, 187, 48, 0.28);
        }

        .health-book-btn svg {
          font-size: 17px;
        }

        /* =========================
           HAMBURGER
        ========================= */

        .health-menu-button {
          width: 44px;
          height: 44px;
          border: 0;
          border-radius: 12px;
          background: #f2fbff;
          color: #073b58;
          font-size: 22px;
          cursor: pointer;
          display: none;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
        }

        .health-menu-button:hover {
          background: #e5f7ff;
          color: #10a9e5;
        }

        /* =========================
           MOBILE OVERLAY
        ========================= */

        .health-mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 9997;
          background: rgba(4, 32, 44, 0.48);
          backdrop-filter: blur(4px);
          opacity: 0;
          visibility: hidden;
          transition: 0.35s ease;
        }

        .health-mobile-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        /* =========================
           MOBILE MENU
        ========================= */

        .health-mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: min(88%, 390px);
          height: 100dvh;
          background: #ffffff;
          z-index: 9998;
          padding: 105px 24px 30px;
          box-shadow: -20px 0 50px rgba(0, 49, 67, 0.15);
          transition: right 0.4s cubic-bezier(0.77, 0, 0.18, 1);
          overflow-y: auto;
        }

        .health-mobile-menu.open {
          right: 0;
        }

        .health-mobile-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .health-mobile-link {
          display: flex;
          align-items: center;
          min-height: 58px;
          padding: 0 18px;
          border-radius: 13px;
          color: #073b58;
          text-decoration: none;
          font-size: 17px;
          font-weight: 600;
          transition: 0.3s ease;
        }

        .health-mobile-link:hover,
        .health-mobile-link.active {
          background: #eefaff;
          color: #0aa7e4;
          padding-left: 23px;
        }

        .health-mobile-divider {
          height: 1px;
          background: #e8f0f3;
          margin: 22px 0;
        }

        .health-mobile-phone {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 15px 5px;
          color: #073b58;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
        }

        .health-mobile-phone svg {
          width: 40px;
          height: 40px;
          padding: 11px;
          border-radius: 50%;
          color: #0aa7e4;
          background: #edfaff;
        }

        .health-mobile-book {
          margin-top: 18px;
          width: 100%;
          height: 55px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          background: linear-gradient(135deg, #20ae30, #5bd53a);
          box-shadow: 0 10px 25px rgba(44, 188, 51, 0.2);
        }

        /* =========================
           LAPTOP
        ========================= */

        @media (max-width: 1250px) {
          .health-navbar-container {
            grid-template-columns: 260px 1fr 360px;
            padding: 0 22px;
          }

          .health-logo img {
            width: 240px;
          }

          .health-nav-links {
            gap: 30px;
          }

          .health-nav-actions {
            gap: 20px;
          }

          .health-book-btn {
            padding: 0 20px;
          }
        }

        /* =========================
           TABLET / MOBILE
        ========================= */

        @media (max-width: 1000px) {
          .health-navbar {
            height: 82px;
          }

          .health-navbar-container {
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
          }

          .health-logo img {
            width: 225px;
            height: 68px;
          }

          .health-nav-links,
          .health-nav-actions {
            display: none;
          }

          .health-menu-button {
            display: flex;
            position: relative;
            z-index: 10000;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 600px) {
          .health-navbar {
            height: 74px;
          }

          .health-navbar-container {
            padding: 0 14px;
          }

          .health-logo img {
            width: 190px;
            height: 60px;
          }

          .health-menu-button {
            width: 42px;
            height: 42px;
          }

          .health-mobile-menu {
            width: min(88%, 350px);
            padding-top: 94px;
          }
        }

        @media (max-width: 380px) {
          .health-logo img {
            width: 165px;
          }

          .health-navbar-container {
            padding: 0 10px;
          }
        }
      `}</style>

      {/* =========================
          NAVBAR
      ========================== */}

      <header className="health-navbar">
        <div className="health-navbar-container">

          {/* Logo */}
          <Link to="/" className="health-logo" aria-label="Home">
            <img
              src="/logo.png"
              alt="Healthcare Bellandur Koramangala"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="health-nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `health-nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="health-nav-actions">

            <a
              href="tel:+919876543210"
              className="health-phone"
            >
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </a>

            <Link
              to="/contact-us"
              className="health-book-btn"
            >
              <FaCalendarAlt />
              <span>Book Appointment</span>
            </Link>

          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="health-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`health-mobile-overlay ${
          menuOpen ? "open" : ""
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <aside
        className={`health-mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <nav className="health-mobile-links">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `health-mobile-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

        <div className="health-mobile-divider" />

        <a
          href="tel:+919876543210"
          className="health-mobile-phone"
        >
          <FaPhoneAlt />
          <span>+91 98765 43210</span>
        </a>

        <Link
          to="/contact-us"
          className="health-mobile-book"
        >
          <FaCalendarAlt />
          Book Appointment
        </Link>

      </aside>
    </>
  );
}

export default Navbar;