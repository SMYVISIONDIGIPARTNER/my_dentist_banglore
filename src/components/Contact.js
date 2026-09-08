import React, { useEffect, useState } from "react";

import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaArrowRight,
  FaUser,
  FaBuilding,
  FaMessage,
} from "react-icons/fa6";

function Contact() {
  const whatsappNumber = "919739749510";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  /* =====================================================
     SCROLL ANIMATIONS
  ===================================================== */

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".contact-reveal, .contact-heading-animation"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  /* =====================================================
     WHATSAPP
  ===================================================== */

  const openWhatsApp = (message) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =====================================================
     FORM
  ===================================================== */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `
Hello My Dentist,

I would like to contact your clinic.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "Not provided"}

Message:
${formData.message}

Please contact me when convenient.
`;

    openWhatsApp(message);
  };

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .contact-page {
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          color: #073b4c;
          font-family: Arial, Helvetica, sans-serif;
        }

        .contact-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .contact-section {
          padding: 65px 30px;
          overflow: hidden;
        }

        button,
        input,
        textarea {
          font-family: inherit;
        }

        /* =========================================
           ANIMATIONS
        ========================================= */

        .contact-reveal {
          opacity: 0;
          transition:
            opacity .85s ease,
            transform .85s cubic-bezier(.16,1,.3,1);
          will-change: transform, opacity;
        }

        .contact-reveal-left {
          transform: translateX(-70px);
        }

        .contact-reveal-right {
          transform: translateX(70px);
        }

        .contact-reveal-up {
          transform: translateY(45px);
        }

        .contact-reveal.contact-visible {
          opacity: 1;
          transform: translate(0,0);
        }

        .contact-heading-animation {
          opacity: 0;
          transform: translateY(35px);
          filter: blur(3px);
          transition:
            opacity .85s ease,
            transform .85s cubic-bezier(.16,1,.3,1),
            filter .85s ease;
        }

        .contact-heading-animation.contact-visible {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        /* =========================================
           PAGE HERO
        ========================================= */

        .contact-page-hero {
          min-height: 300px;
          padding: 55px 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background:
            linear-gradient(
              135deg,
              #effaff,
              #ffffff
            );
          overflow: hidden;
        }

        .contact-page-hero-content {
          max-width: 800px;
          animation:
            contactHeroIntro
            1s cubic-bezier(.16,1,.3,1);
        }

        @keyframes contactHeroIntro {
          from {
            opacity: 0;
            transform: translateY(35px);
            filter: blur(4px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .contact-page-hero small {
          color: #31b53a;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2.4px;
          text-transform: uppercase;
        }

        .contact-page-hero h1 {
          margin: 12px 0 0;
          color: #07394a;
          font-size: clamp(50px,5vw,72px);
          line-height: 1.04;
          letter-spacing: -2px;
        }

        .contact-page-hero p {
          max-width: 650px;
          margin: 18px auto 0;
          color: #637b85;
          font-size: 18px;
          line-height: 1.75;
        }

        /* =========================================
           CONTACT GRID
        ========================================= */

        .contact-main-grid {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 50px;
          align-items: stretch;
        }

        /* =========================================
           LEFT INFO CARD
        ========================================= */

        .contact-info-card {
          padding: 38px;
          border-radius: 25px;
          background:
            linear-gradient(
              145deg,
              #06394b,
              #07516a
            );
          color: #ffffff;
        }

        .contact-info-card small {
          color: #62d548;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .contact-info-card h2 {
          margin: 10px 0 14px;
          font-size: clamp(38px,4vw,52px);
          line-height: 1.1;
        }

        .contact-info-card > p {
          margin: 0 0 28px;
          color: rgba(255,255,255,.72);
          font-size: 16px;
          line-height: 1.75;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px;
          border-radius: 15px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.08);
        }

        .contact-info-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,.1);
          color: #5fd94a;
          font-size: 18px;
        }

        .contact-info-content strong {
          display: block;
          margin-bottom: 4px;
          color: #ffffff;
          font-size: 16px;
        }

        .contact-info-content span,
        .contact-info-content a {
          color: rgba(255,255,255,.78);
          font-size: 15px;
          line-height: 1.65;
          text-decoration: none;
        }

        .contact-info-content a:hover {
          color: #63dc4c;
        }

        /* =========================================
           FORM
        ========================================= */

        .contact-form-card {
          padding: 38px;
          border-radius: 25px;
          background: #f4fbfd;
          border: 1px solid #e3eef1;
        }

        .contact-form-card h2 {
          margin: 0 0 8px;
          color: #073b4c;
          font-size: clamp(36px,4vw,50px);
          line-height: 1.1;
        }

        .contact-form-card > p {
          margin: 0 0 27px;
          color: #647c86;
          font-size: 16px;
          line-height: 1.7;
        }

        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .contact-form-group {
          position: relative;
        }

        .contact-form-group.full {
          grid-column: 1 / -1;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          border: 1px solid #d8e7eb;
          border-radius: 13px;
          background: #ffffff;
          color: #173e4c;
          font-size: 15px;
          outline: none;
          transition: .25s ease;
        }

        .contact-input {
          height: 56px;
          padding: 0 15px 0 48px;
        }

        .contact-textarea {
          min-height: 150px;
          resize: vertical;
          padding: 18px 15px 18px 48px;
        }

        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #0ba5d6;
          box-shadow:
            0 0 0 3px
            rgba(10,165,214,.07);
        }

        .contact-field-icon {
          position: absolute;
          top: 18px;
          left: 17px;
          color: #0aa5d6;
          font-size: 17px;
          pointer-events: none;
        }

        .contact-textarea + .contact-field-icon {
          top: 19px;
        }

        .contact-submit-wrap {
          grid-column: 1 / -1;
          display: flex;
          justify-content: center;
          margin-top: 5px;
        }

        .contact-submit-btn {
          min-height: 56px;
          padding: 0 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          color: #ffffff;
          background:
            linear-gradient(
              135deg,
              #20ad35,
              #60d740
            );
          font-size: 15px;
          font-weight: 800;
          box-shadow:
            0 12px 28px
            rgba(35,179,47,.2);
          transition: .3s ease;
        }

        .contact-submit-btn:hover {
          transform: translateY(-4px);
          box-shadow:
            0 18px 36px
            rgba(35,179,47,.3);
        }

        /* =========================================
           QUICK CONTACT CARDS
        ========================================= */

        .contact-quick-section {
          background: #f5fbfd;
        }

        .contact-quick-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }

        .contact-quick-card {
          padding: 28px 22px;
          text-align: center;
          border-radius: 20px;
          border: 1px solid #e5eef1;
          background: #ffffff;
          transition: .35s ease;
        }

        .contact-quick-card:hover {
          transform: translateY(-7px);
          box-shadow:
            0 17px 40px
            rgba(5,64,86,.08);
        }

        .contact-quick-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ebfaff;
          color: #0ba7dc;
          font-size: 24px;
        }

        .contact-quick-card:nth-child(2)
        .contact-quick-icon {
          color: #3bc13e;
          background: #efffee;
        }

        .contact-quick-card h3 {
          margin: 0 0 8px;
          color: #073b4c;
          font-size: 21px;
        }

        .contact-quick-card p,
        .contact-quick-card a {
          margin: 0;
          color: #647c86;
          font-size: 15px;
          line-height: 1.65;
          text-decoration: none;
        }

        /* =========================================
           MAP
        ========================================= */

        .contact-map-section {
          padding: 60px 30px;
          background: #ffffff;
        }

        .contact-map-wrap {
          max-width: 1400px;
          margin: auto;
        }

        .contact-map-heading {
          max-width: 760px;
          margin: 0 auto 35px;
          text-align: center;
        }

        .contact-map-heading small {
          color: #31b53a;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2.2px;
          text-transform: uppercase;
        }

        .contact-map-heading h2 {
          margin: 10px 0 0;
          color: #07394a;
          font-size: clamp(40px,4vw,56px);
          line-height: 1.1;
        }

        .contact-map-frame {
          width: 100%;
          height: 500px;
          border: 0;
          border-radius: 25px;
          box-shadow:
            0 16px 45px
            rgba(5,64,86,.08);
        }

        /* =========================================
           FINAL CTA
        ========================================= */

        .contact-final-cta {
          padding: 55px 30px;
          background: #f4fbfd;
        }

        .contact-final-inner {
          max-width: 1200px;
          margin: auto;
          padding: 38px;
          text-align: center;
          border-radius: 25px;
          background:
            linear-gradient(
              135deg,
              #effaff,
              #f6fff4
            );
          border: 1px solid #e3eef1;
        }

        .contact-final-inner h2 {
          margin: 0;
          color: #07394a;
          font-size: clamp(38px,4vw,54px);
          line-height: 1.1;
        }

        .contact-final-inner p {
          max-width: 700px;
          margin: 15px auto 23px;
          color: #627a84;
          font-size: 17px;
          line-height: 1.75;
        }

        .contact-whatsapp-btn {
          min-height: 56px;
          padding: 0 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          color: #ffffff;
          background:
            linear-gradient(
              135deg,
              #20ad35,
              #60d740
            );
          font-size: 15px;
          font-weight: 800;
          box-shadow:
            0 12px 28px
            rgba(35,179,47,.2);
          transition: .3s ease;
        }

        .contact-whatsapp-btn:hover {
          transform: translateY(-4px);
          box-shadow:
            0 18px 36px
            rgba(35,179,47,.3);
        }

        /* =========================================
           FLOATING WHATSAPP
        ========================================= */

        .contact-floating-whatsapp {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 999;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          background: #25d366;
          color: #ffffff;
          font-size: 28px;
          box-shadow:
            0 10px 30px
            rgba(0,0,0,.2);
          transition: .3s ease;
        }

        .contact-floating-whatsapp:hover {
          transform:
            translateY(-5px)
            scale(1.06);
        }

        /* =========================================
           TABLET
        ========================================= */

        @media(max-width:1000px) {

          .contact-main-grid {
            grid-template-columns: 1fr;
          }

          .contact-quick-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .contact-quick-card:last-child {
            grid-column: 1 / -1;
          }

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media(max-width:720px) {

          .contact-section {
            padding: 55px 18px;
          }

          .contact-page-hero {
            min-height: 250px;
            padding: 45px 18px;
          }

          .contact-page-hero h1 {
            font-size: 46px;
          }

          .contact-page-hero p {
            font-size: 16px;
          }

          .contact-info-card,
          .contact-form-card {
            padding: 28px 20px;
          }

          .contact-form-grid {
            grid-template-columns: 1fr;
          }

          .contact-form-group.full,
          .contact-submit-wrap {
            grid-column: auto;
          }

          .contact-submit-btn {
            width: 100%;
          }

          .contact-quick-grid {
            grid-template-columns: 1fr;
          }

          .contact-quick-card:last-child {
            grid-column: auto;
          }

          .contact-map-section {
            padding: 50px 18px;
          }

          .contact-map-frame {
            height: 400px;
          }

          .contact-final-cta {
            padding: 50px 18px;
          }

          .contact-final-inner {
            padding: 30px 20px;
          }

          .contact-reveal-left {
            transform: translateX(-30px);
          }

          .contact-reveal-right {
            transform: translateX(30px);
          }

        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media(max-width:480px) {

          .contact-page-hero h1 {
            font-size: 40px;
          }

          .contact-info-card h2,
          .contact-form-card h2 {
            font-size: 35px;
          }

          .contact-map-heading h2 {
            font-size: 35px;
          }

          .contact-map-frame {
            height: 330px;
          }

          .contact-whatsapp-btn {
            width: 100%;
          }

          .contact-floating-whatsapp {
            width: 55px;
            height: 55px;
            right: 15px;
            bottom: 15px;
          }

        }

      `}</style>

      <main className="contact-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="contact-page-hero">

          <div className="contact-page-hero-content">

            <small>
              Contact My Dentist
            </small>

            <h1>
              We're Here to Help You Smile
            </h1>

            <p>
              Contact our dental team for appointments,
              treatment enquiries or assistance at our
              Bellandur clinic.
            </p>

          </div>

        </section>

        {/* =========================================
            FORM + CONTACT INFO
        ========================================= */}

        <section className="contact-section">

          <div className="contact-container contact-main-grid">

            {/* LEFT CONTACT DETAILS */}

            <div
              className="
                contact-info-card
                contact-reveal
                contact-reveal-left
              "
            >

              <small>
                Get In Touch
              </small>

              <h2 className="contact-heading-animation">
                Talk to Our Dental Team
              </h2>

              <p>
                Have a dental concern or want to book an
                appointment? Contact us and our team will
                help you with the next suitable step.
              </p>

              <div className="contact-info-list">

                {/* PHONE */}

                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <FaPhone />
                  </div>

                  <div className="contact-info-content">

                    <strong>
                      Phone
                    </strong>

                    <a href="tel:+919739749510">
                      +91 97397 49510
                    </a>

                  </div>

                </div>

                {/* TIMING */}

                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <FaClock />
                  </div>

                  <div className="contact-info-content">

                    <strong>
                      Available Hours
                    </strong>

                    <span>
                      10:00 AM - 7:00 PM
                    </span>

                  </div>

                </div>

                {/* ADDRESS */}

                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <FaLocationDot />
                  </div>

                  <div className="contact-info-content">

                    <strong>
                      Address
                    </strong>

                    <span>
                      79/8, Front of Golden Residency,
                      Service Rd, Bellandur,
                      Bengaluru, Karnataka 560103
                    </span>

                  </div>

                </div>

                {/* EMAIL */}

                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <FaEnvelope />
                  </div>

                  <div className="contact-info-content">

                    <strong>
                      Email
                    </strong>

                    <a href="mailto:info@mydentist.com">
                      info@mydentist.com
                    </a>

                  </div>

                </div>

              </div>

              <button
                type="button"
                className="contact-whatsapp-btn"
                style={{ marginTop: "27px" }}
                onClick={() =>
                  openWhatsApp(
                    "Hello My Dentist, I would like to contact your clinic. Please assist me."
                  )
                }
              >
                <FaWhatsapp />

                Chat on WhatsApp

                <FaArrowRight />
              </button>

            </div>

            {/* RIGHT FORM */}

            <form
              className="
                contact-form-card
                contact-reveal
                contact-reveal-right
              "
              onSubmit={handleSubmit}
            >

              <h2 className="contact-heading-animation">
                Send Us a Message
              </h2>

              <p>
                Fill in your details below. When you
                submit the form, your enquiry will open
                directly in WhatsApp.
              </p>

              <div className="contact-form-grid">

                {/* NAME */}

                <div className="contact-form-group">

                  <input
                    className="contact-input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <FaUser className="contact-field-icon" />

                </div>

                {/* EMAIL */}

                <div className="contact-form-group">

                  <input
                    className="contact-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <FaEnvelope className="contact-field-icon" />

                </div>

                {/* PHONE */}

                <div className="contact-form-group">

                  <input
                    className="contact-input"
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <FaPhone className="contact-field-icon" />

                </div>

                {/* COMPANY */}

                <div className="contact-form-group">

                  <input
                    className="contact-input"
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                  />

                  <FaBuilding className="contact-field-icon" />

                </div>

                {/* MESSAGE */}

                <div className="contact-form-group full">

                  <textarea
                    className="contact-textarea"
                    name="message"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <FaMessage className="contact-field-icon" />

                </div>

                {/* BUTTON */}

                <div className="contact-submit-wrap">

                  <button
                    type="submit"
                    className="contact-submit-btn"
                  >

                    <FaWhatsapp />

                    Send via WhatsApp

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            </form>

          </div>

        </section>

        {/* =========================================
            QUICK CONTACT
        ========================================= */}

        <section className="contact-section contact-quick-section">

          <div className="contact-container">

            <div className="contact-quick-grid">

              {/* PHONE */}

              <div
                className="
                  contact-quick-card
                  contact-reveal
                  contact-reveal-left
                "
              >

                <div className="contact-quick-icon">
                  <FaPhone />
                </div>

                <h3>
                  Call Our Clinic
                </h3>

                <a href="tel:+919739749510">
                  +91 97397 49510
                </a>

              </div>

              {/* HOURS */}

              <div
                className="
                  contact-quick-card
                  contact-reveal
                  contact-reveal-up
                "
              >

                <div className="contact-quick-icon">
                  <FaClock />
                </div>

                <h3>
                  Available Hours
                </h3>

                <p>
                  10:00 AM - 7:00 PM
                </p>

              </div>

              {/* LOCATION */}

              <div
                className="
                  contact-quick-card
                  contact-reveal
                  contact-reveal-right
                "
              >

                <div className="contact-quick-icon">
                  <FaLocationDot />
                </div>

                <h3>
                  Visit Bellandur
                </h3>

                <p>
                  Bengaluru, Karnataka 560103
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =========================================
            MAP
        ========================================= */}

        <section className="contact-map-section">

          <div className="contact-map-wrap">

            <div
              className="
                contact-map-heading
                contact-heading-animation
              "
            >

              <small>
                Our Location
              </small>

              <h2>
                My Dentist - Bellandur
              </h2>

            </div>

            <div
              className="
                contact-reveal
                contact-reveal-up
              "
            >

              <iframe
                className="contact-map-frame"
                title="My Dentist Bellandur"
                loading="lazy"
                src="https://maps.google.com/maps?q=My%20Dentist%20-%20Bellandur&t=m&z=14&output=embed&iwloc=near"
              />

            </div>

          </div>

        </section>

        {/* =========================================
            FINAL CTA
        ========================================= */}

        <section className="contact-final-cta">

          <div
            className="
              contact-final-inner
              contact-reveal
              contact-reveal-up
            "
          >

            <h2 className="contact-heading-animation">
              Ready to Book Your Dental Visit?
            </h2>

            <p>
              Speak directly with our clinic team through
              WhatsApp for appointment availability,
              treatment enquiries or location assistance.
            </p>

            <button
              type="button"
              className="contact-whatsapp-btn"
              onClick={() =>
                openWhatsApp(
                  "Hello My Dentist, I would like to book a dental appointment. Please share the available timings."
                )
              }
            >
              <FaWhatsapp />

              Book Appointment on WhatsApp

              <FaArrowRight />
            </button>

          </div>

        </section>

      </main>

      {/* =========================================
          FLOATING WHATSAPP
      ========================================= */}

      <button
        type="button"
        className="contact-floating-whatsapp"
        aria-label="Chat with My Dentist on WhatsApp"
        onClick={() =>
          openWhatsApp(
            "Hello My Dentist, I would like to know more about your dental services."
          )
        }
      >
        <FaWhatsapp />
      </button>

    </>
  );
}

export default Contact;