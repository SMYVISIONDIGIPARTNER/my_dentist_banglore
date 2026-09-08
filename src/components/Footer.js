import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";

function Footer() {
  const services = [
    "Gum Treatment",
    "Dental Implants",
    "Prosthesis",
    "CAD CAM Dentistry",
    "Full Mouth Rehabilitation",
    "Invisible Braces",
    "Pediatric Dentistry",
    "Root Canal Treatment",
    "Deciduous Teeth",
  ];

  return (
    <>
      <style>{`
        .dental-footer,
        .dental-footer * {
          box-sizing: border-box;
        }

        .dental-footer {
          position: relative;
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(35, 188, 232, 0.12),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 90%,
              rgba(94, 219, 47, 0.08),
              transparent 28%
            ),
            linear-gradient(135deg, #062f42 0%, #07394d 50%, #052a3b 100%);
          color: #ffffff;
          overflow: hidden;
        }

        .dental-footer::before {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 50%;
          left: -180px;
          top: -170px;
        }

        .dental-footer::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          background: rgba(67, 205, 55, 0.025);
          border-radius: 50%;
          right: -210px;
          bottom: -220px;
        }

        .footer-main {
          position: relative;
          z-index: 2;
          max-width: 1500px;
          margin: auto;
          padding: 75px 40px 60px;
          display: grid;
          grid-template-columns: 1.45fr 0.8fr 1.1fr 1.2fr;
          gap: 65px;
        }

        /* ==========================
           BRAND
        ========================== */

        .footer-brand-logo {
          display: inline-block;
          background: #ffffff;
          padding: 9px 16px;
          border-radius: 14px;
          margin-bottom: 24px;
          transition: 0.3s ease;
        }

        .footer-brand-logo:hover {
          transform: translateY(-3px);
        }

        .footer-brand-logo img {
          width: 260px;
          max-width: 100%;
          height: 75px;
          object-fit: contain;
          display: block;
        }

        .footer-description {
          color: rgba(255,255,255,0.73);
          font-size: 15px;
          line-height: 1.85;
          max-width: 390px;
          margin: 0 0 27px;
        }

        /* ==========================
           SOCIAL ICONS
        ========================== */

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .footer-social {
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          color: #ffffff;
          text-decoration: none;
          font-size: 16px;
          transition: 0.3s ease;
        }

        .footer-social:hover {
          background: #26b9e8;
          border-color: #26b9e8;
          transform: translateY(-4px);
        }

        /* ==========================
           HEADINGS
        ========================== */

        .footer-title {
          position: relative;
          color: #ffffff;
          font-size: 19px;
          font-weight: 700;
          margin: 8px 0 29px;
          padding-bottom: 14px;
        }

        .footer-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 42px;
          height: 3px;
          border-radius: 10px;
          background: linear-gradient(
            90deg,
            #2cbbe9,
            #62d937
          );
        }

        /* ==========================
           LINKS
        ========================== */

        .footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 13px;
        }

        .footer-links a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 14px;
          line-height: 1.5;
          transition: 0.3s ease;
        }

        .footer-links a svg {
          font-size: 9px;
          color: #5bd438;
          transition: 0.3s ease;
        }

        .footer-links a:hover {
          color: #ffffff;
          transform: translateX(5px);
        }

        .footer-links a:hover svg {
          color: #27bce9;
        }

        /* ==========================
           CONTACT
        ========================== */

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 20px;
        }

        .footer-contact-icon {
          flex: 0 0 39px;
          width: 39px;
          height: 39px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(39,188,233,0.1);
          border: 1px solid rgba(39,188,233,0.15);
          color: #2bc0ec;
          font-size: 14px;
        }

        .footer-contact-text {
          color: rgba(255,255,255,0.72);
          font-size: 14px;
          line-height: 1.7;
          text-decoration: none;
          transition: 0.3s ease;
        }

        a.footer-contact-text:hover {
          color: #5edb3c;
        }

        /* ==========================
           BOTTOM
        ========================== */

        .footer-bottom {
          position: relative;
          z-index: 3;
          border-top: 1px solid rgba(255,255,255,0.09);
        }

        .footer-bottom-inner {
          max-width: 1500px;
          min-height: 78px;
          margin: auto;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-copyright {
          color: rgba(255,255,255,0.58);
          font-size: 13px;
          margin: 0;
        }

        .footer-developer {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.58);
          font-size: 13px;
        }

        .footer-developer a {
          position: relative;
          color: #62dc3c;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.4px;
          transition: 0.3s ease;
        }

        .footer-developer a::after {
          content: "";
          position: absolute;
          width: 0;
          height: 1px;
          left: 0;
          bottom: -3px;
          background: #28bdea;
          transition: 0.3s ease;
        }

        .footer-developer a:hover {
          color: #2bc0ec;
        }

        .footer-developer a:hover::after {
          width: 100%;
        }

        /* ==========================
           TABLET
        ========================== */

        @media (max-width: 1100px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 50px;
          }
        }

        /* ==========================
           MOBILE
        ========================== */

        @media (max-width: 700px) {
          .footer-main {
            grid-template-columns: 1fr;
            padding: 55px 22px 45px;
            gap: 38px;
          }

          .footer-brand-logo img {
            width: 230px;
            height: 67px;
          }

          .footer-description {
            max-width: 100%;
            font-size: 14px;
          }

          .footer-title {
            margin-bottom: 22px;
          }

          .footer-bottom-inner {
            padding: 22px;
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }

          .footer-developer {
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 400px) {
          .footer-main {
            padding-left: 17px;
            padding-right: 17px;
          }

          .footer-brand-logo img {
            width: 205px;
          }

          .footer-copyright,
          .footer-developer {
            font-size: 12px;
          }
        }
      `}</style>

      <footer className="dental-footer">

        <div className="footer-main">

          {/* ========================
              BRAND
          ======================== */}

          <div>
            <Link to="/" className="footer-brand-logo">
              <img
                src="/logo.png"
                alt="My Dentist Bellandur Koramangala"
              />
            </Link>

            <p className="footer-description">
              We are a team of dentists, hygienists and receptionists
              who work together to ensure that you receive the best
              dental treatment and care you require at the very same
              time.
            </p>

            <div className="footer-socials">

              <a
                href="https://www.facebook.com/people/My-Dentist/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/mydentistnow/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@MyDentistBellandur"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* ========================
              QUICK LINKS
          ======================== */}

          <div>
            <h3 className="footer-title">Quick Links</h3>

            <ul className="footer-links">

              <li>
                <Link to="/">
                  <FaChevronRight />
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about-us">
                  <FaChevronRight />
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/services">
                  <FaChevronRight />
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact-us">
                  <FaChevronRight />
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* ========================
              SERVICES
          ======================== */}

          <div>
            <h3 className="footer-title">Services</h3>

            <ul className="footer-links">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services">
                    <FaChevronRight />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================
              CONTACT
          ======================== */}

          <div>
            <h3 className="footer-title">Contact Us</h3>

            <div className="footer-contact-item">

              <span className="footer-contact-icon">
                <FaMapMarkerAlt />
              </span>

              <span className="footer-contact-text">
                79/8, Front of Golden Residency,
                Service Rd, Bellandur,
                Bengaluru, Karnataka 560103
              </span>

            </div>

            <div className="footer-contact-item">

              <span className="footer-contact-icon">
                <FaPhoneAlt />
              </span>

              <a
                href="tel:+919739749510"
                className="footer-contact-text"
              >
                +91 97397 49510
              </a>

            </div>

            <div className="footer-contact-item">

              <span className="footer-contact-icon">
                <FaEnvelope />
              </span>

              <a
                href="mailto:info@mydentist.com"
                className="footer-contact-text"
              >
                info@mydentist.com
              </a>

            </div>

          </div>

        </div>

        {/* =========================
            COPYRIGHT / DEVELOPER
        ========================= */}

        <div className="footer-bottom">

          <div className="footer-bottom-inner">

            <p className="footer-copyright">
              © {new Date().getFullYear()} My Dentist. All Rights Reserved.
            </p>

            <div className="footer-developer">
              <span>Developed by</span>

              <a
                href="https://smyvisiontechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SMYVISION TECHNOLOGIES
              </a>
            </div>

          </div>

        </div>

      </footer>
    </>
  );
}

export default Footer;