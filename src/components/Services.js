import React, { useEffect } from "react";

import {
  FaArrowRight,
  FaWhatsapp,
  FaTooth,
  FaUserDoctor,
  FaShieldHeart,
  FaClock,
  FaLocationDot,
  FaCircleCheck,
} from "react-icons/fa6";

function Services() {
  const whatsappNumber = "919739749510";

  const openWhatsApp = (message) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleImageError = (event, fallback) => {
    const image = event.currentTarget;

    if (image.dataset.fallbackUsed === "true") {
      return;
    }

    image.dataset.fallbackUsed = "true";
    image.src = fallback;
  };

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".services-reveal, .services-heading-animation"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("services-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Laser Dentistry",
      image: "/images/laser-dentistry.jpg",
      fallback:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
      description:
        "Laser dentistry uses advanced laser technology to perform dental procedures with greater precision, minimal discomfort and faster recovery. It can be used for gum reshaping, cavity treatment, teeth whitening and selected root canal procedures.",
      highlights: [
        "Greater precision",
        "Minimal discomfort",
        "Faster recovery",
      ],
    },

    {
      title: "Dental Implants",
      image: "/images/dental-implants.jpg",
      fallback:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85",
      description:
        "Dental implants provide a long-term solution for replacing missing teeth. They can support crowns, bridges and dentures while helping restore appearance and oral function.",
      highlights: [
        "Replace missing teeth",
        "Natural appearance",
        "Improved oral function",
      ],
    },

    {
      title: "Cosmetic Dentistry",
      image: "/images/cosmetic-dentistry.jpg",
      fallback:
        "https://images.unsplash.com/photo-1581585099402-5b7a1c5a3781?auto=format&fit=crop&w=1200&q=85",
      description:
        "Cosmetic dentistry includes treatments focused on improving the appearance of your teeth and smile. Our treatment planning combines aesthetics with overall dental health.",
      highlights: [
        "Smile enhancement",
        "Personalized treatment",
        "Modern techniques",
      ],
    },

    {
      title: "Invisible Braces",
      image: "/images/invisible-braces.jpg",
      fallback:
        "https://images.unsplash.com/photo-1606265752439-1f18756aa376?auto=format&fit=crop&w=1200&q=85",
      description:
        "Invisible braces provide a discreet alternative to traditional metal braces. They help improve tooth alignment while remaining less noticeable during everyday use.",
      highlights: [
        "Discreet appearance",
        "Comfortable treatment",
        "Improved alignment",
      ],
    },

    {
      title: "Full Mouth Rehabilitation",
      image: "/images/full-mouth-rehabilitation.jpg",
      fallback:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
      description:
        "Full mouth rehabilitation is a comprehensive treatment approach designed to restore the health and function of the teeth, gums and bite.",
      highlights: [
        "Comprehensive planning",
        "Restores oral function",
        "Customized treatment",
      ],
    },

    {
      title: "Aligners",
      image: "/images/aligners.jpg",
      fallback:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85",
      description:
        "Clear aligners are removable trays designed to gradually move teeth into better positions. They provide a nearly invisible orthodontic option for many adults and teens.",
      highlights: [
        "Clear removable trays",
        "Comfortable alignment",
        "Easy maintenance",
      ],
    },

    {
      title: "Pediatric Dentistry",
      image: "/images/pediatric-dentistry.jpg",
      fallback:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
      description:
        "Pediatric dentistry focuses on caring for children's teeth and creating a comfortable dental experience that supports healthy oral habits from an early age.",
      highlights: [
        "Child-friendly care",
        "Preventive dentistry",
        "Comfort-focused visits",
      ],
    },

    {
      title: "Root Canal Treatment",
      image: "/images/root-canal.jpg",
      fallback:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
      description:
        "Root canal treatment removes infected tissue from inside a damaged tooth and helps preserve the natural tooth whenever possible.",
      highlights: [
        "Treats infected teeth",
        "Advanced equipment",
        "Helps preserve teeth",
      ],
    },

    {
      title: "Sports Dentistry",
      image: "/images/sports-dentistry.jpg",
      fallback:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
      description:
        "Sports dentistry focuses on preventing and treating dental injuries caused by athletic activities. Treatment can include custom mouthguards and dental trauma management.",
      highlights: [
        "Dental injury prevention",
        "Custom mouthguards",
        "Trauma management",
      ],
    },

    {
      title: "Digital Mock-up Smile",
      image: "/images/digital-smile.jpg",
      fallback:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
      description:
        "Digital smile mock-ups help patients visualize a possible treatment result before final treatment begins, making smile planning easier to understand.",
      highlights: [
        "Preview your smile",
        "Digital planning",
        "Personalized design",
      ],
    },

    {
      title: "Modern Teeth Whitening",
      image: "/images/teeth-whitening.jpg",
      fallback:
        "https://images.unsplash.com/photo-1606265752439-1f18756aa376?auto=format&fit=crop&w=1200&q=85",
      description:
        "Professional teeth whitening uses modern techniques and professional-grade materials to help reduce stains and brighten teeth safely.",
      highlights: [
        "Reduces stains",
        "Professional treatment",
        "Brighter smile",
      ],
    },

    {
      title: "Dental Prosthetics",
      image: "/images/dental-prosthetics.jpg",
      fallback:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85",
      description:
        "Dental prosthetics include crowns, bridges, dentures and implants designed to replace missing or damaged teeth and restore oral function.",
      highlights: [
        "Crowns & bridges",
        "Dentures",
        "Restorative solutions",
      ],
    },
  ];

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

        .services-page {
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          color: #073b4c;
          font-family: Arial, Helvetica, sans-serif;
        }

        .services-container {
          width: 100%;
          max-width: 1400px;
          margin: auto;
        }

        .services-section {
          padding: 68px 30px;
          overflow: hidden;
        }

        button {
          font-family: inherit;
        }

        /* =========================================
           ANIMATIONS
        ========================================= */

        .services-reveal {
          opacity: 0;
          transition:
            opacity .85s ease,
            transform .85s cubic-bezier(.16,1,.3,1);
          will-change: opacity, transform;
        }

        .services-reveal-left {
          transform: translateX(-70px);
        }

        .services-reveal-right {
          transform: translateX(70px);
        }

        .services-reveal-up {
          transform: translateY(45px);
        }

        .services-reveal.services-visible {
          opacity: 1;
          transform: translate(0,0);
        }

        .services-heading-animation {
          opacity: 0;
          transform: translateY(35px);
          filter: blur(3px);
          transition:
            opacity .85s ease,
            transform .85s cubic-bezier(.16,1,.3,1),
            filter .85s ease;
        }

        .services-heading-animation.services-visible {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        /* =========================================
           COMMON HEADING
        ========================================= */

        .services-heading-wrap {
          max-width: 800px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .services-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 12px;
          color: #2fb33a;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2.2px;
          text-transform: uppercase;
        }

        .services-tag::before,
        .services-tag::after {
          content: "";
          width: 26px;
          height: 2px;
          border-radius: 10px;
          background: #3cc13d;
        }

        .services-heading {
          margin: 0;
          color: #06394a;
          font-size: clamp(43px, 4vw, 60px);
          line-height: 1.08;
          letter-spacing: -1.7px;
        }

        .services-subtext {
          max-width: 720px;
          margin: 17px auto 0;
          color: #627a84;
          font-size: 17px;
          line-height: 1.75;
        }

        /* =========================================
           PAGE HERO
        ========================================= */

        .services-page-hero {
          min-height: 310px;
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

        .services-page-hero-content {
          max-width: 850px;
          animation:
            serviceHeroIntro
            1s cubic-bezier(.16,1,.3,1);
        }

        @keyframes serviceHeroIntro {
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

        .services-page-hero small {
          color: #31b63a;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .services-page-hero h1 {
          margin: 12px 0 0;
          color: #07394a;
          font-size: clamp(50px, 5vw, 74px);
          line-height: 1.03;
          letter-spacing: -2.2px;
        }

        .services-page-hero p {
          max-width: 700px;
          margin: 18px auto 0;
          color: #637b85;
          font-size: 18px;
          line-height: 1.75;
        }

        /* =========================================
           INTRO FEATURES
        ========================================= */

        .services-intro-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 18px;
        }

        .services-intro-card {
          padding: 25px 18px;
          text-align: center;
          border-radius: 18px;
          border: 1px solid #e5eff2;
          background: #f7fcfe;
          transition: .35s ease;
        }

        .services-intro-card:hover {
          transform: translateY(-6px);
          background: #ffffff;
          box-shadow: 0 16px 38px rgba(5,64,86,.08);
        }

        .services-intro-icon {
          width: 62px;
          height: 62px;
          margin: 0 auto 15px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ebfaff;
          color: #0ca9dc;
          font-size: 25px;
        }

        .services-intro-card:nth-child(4)
        .services-intro-icon {
          background: #efffee;
          color: #3cc13d;
        }

        .services-intro-card h3 {
          margin: 0 0 8px;
          color: #073b4c;
          font-size: 20px;
        }

        .services-intro-card p {
          margin: 0;
          color: #647c86;
          font-size: 15px;
          line-height: 1.65;
        }

        /* =========================================
           SERVICES GRID
        ========================================= */

        .services-list-section {
          background: #f6fbfd;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 24px;
        }

        .dental-service-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e6eef1;
          border-radius: 22px;
          box-shadow:
            0 9px 30px
            rgba(4,63,84,.05);
          transition: .35s ease;
        }

        .dental-service-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 20px 46px
            rgba(4,63,84,.11);
        }

        .dental-service-image {
          height: 240px;
          overflow: hidden;
          background: #edf4f6;
        }

        .dental-service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .dental-service-card:hover
        .dental-service-image img {
          transform: scale(1.07);
        }

        .dental-service-body {
          flex: 1;
          padding: 25px 22px;
          display: flex;
          flex-direction: column;
        }

        .dental-service-title-row {
          text-align: center;
          margin-bottom: 11px;
        }

        .dental-service-icon {
          width: 48px;
          height: 48px;
          margin: -48px auto 13px;
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffffff;
          color: #0ba6d9;
          font-size: 20px;
          box-shadow:
            0 8px 22px
            rgba(5,64,86,.12);
        }

        .dental-service-body h3 {
          margin: 0;
          color: #073b4c;
          font-size: 24px;
        }

        .dental-service-description {
          flex: 1;
          margin: 12px 0 0;
          text-align: center;
          color: #627a84;
          font-size: 16px;
          line-height: 1.7;
        }

        /* highlights */

        .service-highlights {
          margin: 19px 0 0;
          padding: 16px;
          border-radius: 14px;
          background: #f7fcfe;
        }

        .service-highlight {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          color: #385965;
          font-size: 14px;
          font-weight: 600;
        }

        .service-highlight:last-child {
          margin-bottom: 0;
        }

        .service-highlight svg {
          color: #40c13d;
          font-size: 14px;
        }

        /* WhatsApp button */

        .service-whatsapp-wrap {
          display: flex;
          justify-content: center;
          margin-top: 21px;
        }

        .service-whatsapp-btn {
          min-height: 50px;
          padding: 0 23px;
          border: none;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          cursor: pointer;
          color: #ffffff;
          background:
            linear-gradient(
              135deg,
              #20bb50,
              #39cd60
            );
          font-size: 14px;
          font-weight: 800;
          box-shadow:
            0 9px 23px
            rgba(28,185,78,.2);
          transition: .3s ease;
        }

        .service-whatsapp-btn:hover {
          transform:
            translateY(-3px)
            scale(1.02);
          box-shadow:
            0 14px 30px
            rgba(28,185,78,.3);
        }

        /* =========================================
           TREATMENT PROCESS
        ========================================= */

        .service-process-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 22px;
        }

        .service-process-card {
          padding: 30px 26px;
          text-align: center;
          border: 1px solid #e5eef1;
          border-radius: 20px;
          background: #ffffff;
        }

        .service-process-number {
          width: 55px;
          height: 55px;
          margin: 0 auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #ffffff;
          background:
            linear-gradient(
              135deg,
              #0ca5da,
              #23c0e7
            );
          font-size: 20px;
          font-weight: 800;
        }

        .service-process-card h3 {
          margin: 0 0 9px;
          color: #073b4c;
          font-size: 21px;
        }

        .service-process-card p {
          margin: 0;
          color: #647c86;
          font-size: 15px;
          line-height: 1.7;
        }

        /* =========================================
           EMERGENCY CTA
        ========================================= */

        .services-emergency {
          padding: 62px 30px;
          background:
            linear-gradient(
              135deg,
              #06394b,
              #07516a
            );
          overflow: hidden;
        }

        .services-emergency-inner {
          max-width: 1250px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .services-emergency-text small {
          color: #62d548;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .services-emergency-text h2 {
          margin: 8px 0;
          color: #ffffff;
          font-size: clamp(39px,4vw,54px);
        }

        .services-emergency-text p {
          max-width: 700px;
          margin: 0;
          color: rgba(255,255,255,.75);
          font-size: 17px;
          line-height: 1.7;
        }

        .services-green-btn {
          min-height: 56px;
          padding: 0 27px;
          border: none;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
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

        .services-green-btn:hover {
          transform: translateY(-4px);
          box-shadow:
            0 18px 36px
            rgba(35,179,47,.3);
        }

        /* =========================================
           FINAL CTA
        ========================================= */

        .services-final-cta {
          padding: 60px 30px;
          background: #ffffff;
        }

        .services-final-inner {
          max-width: 1200px;
          margin: auto;
          padding: 38px;
          text-align: center;
          border-radius: 25px;
          background:
            linear-gradient(
              135deg,
              #f0fbff,
              #f7fff5
            );
          border: 1px solid #e3eef1;
        }

        .services-final-inner h2 {
          max-width: 800px;
          margin: auto;
          color: #07394a;
          font-size: clamp(38px,4vw,54px);
          line-height: 1.1;
        }

        .services-final-inner p {
          max-width: 700px;
          margin: 15px auto 23px;
          color: #627a84;
          font-size: 17px;
          line-height: 1.75;
        }

        /* =========================================
           FLOATING WHATSAPP
        ========================================= */

        .services-floating-whatsapp {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 999;
          width: 60px;
          height: 60px;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: #25d366;
          color: #ffffff;
          font-size: 28px;
          box-shadow:
            0 10px 30px
            rgba(0,0,0,.2);
          transition: .3s ease;
        }

        .services-floating-whatsapp:hover {
          transform:
            translateY(-5px)
            scale(1.06);
        }

        /* =========================================
           TABLET
        ========================================= */

        @media(max-width:1100px) {

          .services-intro-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .services-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .service-process-grid {
            grid-template-columns: 1fr;
          }

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media(max-width:720px) {

          .services-section {
            padding: 55px 18px;
          }

          .services-page-hero {
            min-height: 250px;
            padding: 45px 18px;
          }

          .services-page-hero h1 {
            font-size: 46px;
          }

          .services-page-hero p {
            font-size: 16px;
          }

          .services-intro-grid,
          .services-grid {
            grid-template-columns: 1fr;
          }

          .dental-service-image {
            height: 250px;
          }

          .services-emergency {
            padding: 50px 20px;
          }

          .services-emergency-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .services-reveal-left {
            transform: translateX(-30px);
          }

          .services-reveal-right {
            transform: translateX(30px);
          }

          .services-heading {
            font-size: 38px;
          }

          .services-final-cta {
            padding: 50px 18px;
          }

          .services-final-inner {
            padding: 30px 20px;
          }

        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media(max-width:480px) {

          .services-page-hero h1 {
            font-size: 40px;
          }

          .services-heading {
            font-size: 35px;
          }

          .dental-service-body h3 {
            font-size: 22px;
          }

          .dental-service-description {
            font-size: 15px;
          }

          .service-whatsapp-btn,
          .services-green-btn {
            width: 100%;
          }

          .services-floating-whatsapp {
            width: 55px;
            height: 55px;
            right: 15px;
            bottom: 15px;
          }

        }

      `}</style>

      <main className="services-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="services-page-hero">

          <div className="services-page-hero-content">

            <small>
              Our Dental Treatments
            </small>

            <h1>
              Dental Services Designed Around Your Smile
            </h1>

            <p>
              From preventive care to advanced dental treatments,
              My Dentist provides comprehensive dental services using
              modern technology and personalized treatment planning.
            </p>

          </div>

        </section>

        {/* =========================================
            INTRO FEATURES
        ========================================= */}

        <section className="services-section">

          <div className="services-container">

            <div className="services-intro-grid">

              <div className="services-intro-card services-reveal services-reveal-left">

                <div className="services-intro-icon">
                  <FaTooth />
                </div>

                <h3>
                  Complete Dental Care
                </h3>

                <p>
                  Treatments covering preventive,
                  restorative and cosmetic dentistry.
                </p>

              </div>

              <div className="services-intro-card services-reveal services-reveal-right">

                <div className="services-intro-icon">
                  <FaUserDoctor />
                </div>

                <h3>
                  Experienced Dentists
                </h3>

                <p>
                  Professional dental care from
                  experienced specialists and clinicians.
                </p>

              </div>

              <div className="services-intro-card services-reveal services-reveal-left">

                <div className="services-intro-icon">
                  <FaShieldHeart />
                </div>

                <h3>
                  Patient Comfort
                </h3>

                <p>
                  Treatment planning focused on safety,
                  comfort and clear communication.
                </p>

              </div>

              <div className="services-intro-card services-reveal services-reveal-right">

                <div className="services-intro-icon">
                  <FaLocationDot />
                </div>

                <h3>
                  Two Locations
                </h3>

                <p>
                  Convenient dental care in Bellandur
                  and Koramangala.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =========================================
            ALL SERVICES
        ========================================= */}

        <section className="services-section services-list-section">

          <div className="services-container">

            <div className="services-heading-wrap services-heading-animation">

              <div className="services-tag">
                Our Services
              </div>

              <h2 className="services-heading">
                High Quality Dental Services For You
              </h2>

              <p className="services-subtext">
                Explore our dental treatments and contact
                our clinic directly through WhatsApp for
                service information or appointment assistance.
              </p>

            </div>

            <div className="services-grid">

              {services.map((service, index) => (

                <article
                  key={service.title}
                  className={`dental-service-card services-reveal ${
                    index % 2 === 0
                      ? "services-reveal-left"
                      : "services-reveal-right"
                  }`}
                >

                  <div className="dental-service-image">

                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      onError={(event) =>
                        handleImageError(
                          event,
                          service.fallback
                        )
                      }
                    />

                  </div>

                  <div className="dental-service-body">

                    <div className="dental-service-title-row">

                      <div className="dental-service-icon">
                        <FaTooth />
                      </div>

                      <h3>
                        {service.title}
                      </h3>

                    </div>

                    <p className="dental-service-description">
                      {service.description}
                    </p>

                    <div className="service-highlights">

                      {service.highlights.map((highlight) => (

                        <div
                          className="service-highlight"
                          key={highlight}
                        >
                          <FaCircleCheck />
                          {highlight}
                        </div>

                      ))}

                    </div>

                    <div className="service-whatsapp-wrap">

                      <button
                        type="button"
                        className="service-whatsapp-btn"
                        onClick={() =>
                          openWhatsApp(
                            `Hello My Dentist, I would like to know more about ${service.title}. Please share treatment and appointment details.`
                          )
                        }
                      >

                        <FaWhatsapp />

                        Enquire on WhatsApp

                        <FaArrowRight />

                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* =========================================
            HOW IT WORKS
        ========================================= */}

        <section className="services-section">

          <div className="services-container">

            <div className="services-heading-wrap services-heading-animation">

              <div className="services-tag">
                Your Treatment Journey
              </div>

              <h2 className="services-heading">
                Simple Steps to Better Dental Care
              </h2>

              <p className="services-subtext">
                Contact our team, discuss your dental concern
                and receive a treatment plan based on your
                individual needs.
              </p>

            </div>

            <div className="service-process-grid">

              <div className="service-process-card services-reveal services-reveal-left">

                <div className="service-process-number">
                  01
                </div>

                <h3>
                  Book Your Appointment
                </h3>

                <p>
                  Contact our clinic directly through WhatsApp
                  and choose a convenient appointment time.
                </p>

              </div>

              <div className="service-process-card services-reveal services-reveal-up">

                <div className="service-process-number">
                  02
                </div>

                <h3>
                  Dental Consultation
                </h3>

                <p>
                  Our dental team evaluates your concern and
                  discusses suitable treatment options with you.
                </p>

              </div>

              <div className="service-process-card services-reveal services-reveal-right">

                <div className="service-process-number">
                  03
                </div>

                <h3>
                  Personalized Treatment
                </h3>

                <p>
                  Receive dental care planned around your
                  requirements, comfort and oral health goals.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =========================================
            EMERGENCY
        ========================================= */}

        <section className="services-emergency">

          <div className="services-emergency-inner">

            <div className="services-emergency-text services-reveal services-reveal-left">

              <small>
                EMERGENCY DENTAL CARE
              </small>

              <h2 className="services-heading-animation">
                Need Urgent Dental Assistance?
              </h2>

              <p>
                Contact our clinic if you are experiencing
                urgent dental pain, injury or another dental
                concern that requires prompt attention.
              </p>

            </div>

            <div className="services-reveal services-reveal-right">

              <button
                type="button"
                className="services-green-btn"
                onClick={() =>
                  openWhatsApp(
                    "Hello My Dentist, I need urgent dental assistance. Please contact me as soon as possible."
                  )
                }
              >

                <FaWhatsapp />

                Get Emergency Help

              </button>

            </div>

          </div>

        </section>

        {/* =========================================
            FINAL CTA
        ========================================= */}

        <section className="services-final-cta">

          <div className="services-final-inner services-reveal services-reveal-up">

            <div className="services-tag">
              Book Your Visit
            </div>

            <h2 className="services-heading-animation">
              Not Sure Which Dental Treatment You Need?
            </h2>

            <p>
              Speak with our dental team. Tell us about your
              dental concern and we can help you arrange a
              consultation at our Bellandur or Koramangala clinic.
            </p>

            <button
              type="button"
              className="services-green-btn"
              onClick={() =>
                openWhatsApp(
                  "Hello My Dentist, I have a dental concern and would like to know which treatment may be suitable for me. I would like to book a consultation."
                )
              }
            >

              <FaWhatsapp />

              Chat With Our Dental Team

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
        className="services-floating-whatsapp"
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

export default Services;