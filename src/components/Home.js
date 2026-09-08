import React, { useEffect, useRef, useState } from "react";

import {
  FaArrowRight,
  FaPhone,
  FaClock,
  FaUserDoctor,
  FaShieldHeart,
  FaTooth,
  FaLocationDot,
  FaWhatsapp,
  FaCircleCheck,
  FaEnvelope,
  FaHeartPulse,
  FaAward,
  FaCreditCard,
  FaQuoteLeft,
  FaHouseMedical,
} from "react-icons/fa6";

/* =========================================================
   ANIMATED COUNTER
========================================================= */

function AnimatedCounter({
  end,
  suffix = "",
  decimals = 0,
  duration = 1800,
}) {
  const [count, setCount] = useState(0);

  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) {
              startTime = timestamp;
            }

            const progress = Math.min(
              (timestamp - startTime) / duration,
              1
            );

            const eased =
              1 - Math.pow(1 - progress, 4);

            setCount(end * eased);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);

          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {decimals > 0
        ? count.toFixed(decimals)
        : Math.floor(count)}

      {suffix}
    </span>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  const whatsappNumber = "919739749510";

  const [appointment, setAppointment] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  /* =======================================================
     FALLBACK IMAGE
  ======================================================= */

  const handleImageError = (event, fallback) => {
    const image = event.currentTarget;

    if (image.dataset.fallbackUsed === "true") {
      return;
    }

    image.dataset.fallbackUsed = "true";
    image.src = fallback;
  };

  /* =======================================================
     SCROLL ANIMATION
  ======================================================= */

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal-item, .heading-animation"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  /* =======================================================
     WHATSAPP
  ======================================================= */

  const openWhatsApp = (message) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =======================================================
     FORM
  ======================================================= */

  const handleAppointmentChange = (event) => {
    const { name, value } = event.target;

    setAppointment((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleAppointmentSubmit = (event) => {
    event.preventDefault();

    const message = `
Hello My Dentist,

I would like to book a dental appointment.

Name: ${appointment.name}
Email: ${appointment.email}
Phone: ${appointment.phone}
Service: ${appointment.service}
Preferred Date: ${appointment.date}

Please confirm the available appointment timing.
`;

    openWhatsApp(message);
  };

  /* =======================================================
     DOCTORS
  ======================================================= */

  const doctors = [
    {
      name: "Dr Harshita",
      role: "Director and Consulting Dental Surgeon",

      image: "/images/dr-harshita.jpg",

      fallback:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
    },

    {
      name: "Dr Bhavna Sharma",
      role: "Endodontist",

      image: "/images/dr-bhavna.jpg",

      fallback:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85",
    },

    {
      name: "Dr Saurabh Gupta",
      role: "Maxillofacial Surgeon",

      image: "/images/dr-saurabh.jpg",

      fallback:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
    },

    {
      name: "Disha Dhananjay",
      role: "Aesthetic Dentist",

      image: "/images/disha-dhananjay.jpg",

      fallback:
        "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",
    },
  ];

  /* =======================================================
     SERVICES
  ======================================================= */

  const services = [
    {
      title: "Laser Dentistry",

      image: "/images/laser-dentistry.jpg",

      fallback:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85",

      description:
        "Laser dentistry uses advanced laser technology for precise dental procedures with minimal discomfort and faster recovery.",
    },

    {
      title: "Dental Implants",

      image: "/images/dental-implants.jpg",

      fallback:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=85",

      description:
        "Dental implants provide modern solutions for replacing missing teeth while helping restore function, confidence and appearance.",
    },

    {
      title: "Cosmetic Dentistry",

      image: "/images/cosmetic-dentistry.jpg",

      fallback:
        "https://images.unsplash.com/photo-1581585099402-5b7a1c5a3781?auto=format&fit=crop&w=1000&q=85",

      description:
        "Personalized cosmetic dental treatments designed to enhance the appearance, balance and confidence of your smile.",
    },

    {
      title: "Invisible Braces",

      image: "/images/invisible-braces.jpg",

      fallback:
        "https://images.unsplash.com/photo-1606265752439-1f18756aa376?auto=format&fit=crop&w=1000&q=85",

      description:
        "Invisible braces provide a discreet and comfortable alternative to conventional braces for improving tooth alignment.",
    },

    {
      title: "Full Mouth Rehabilitation",

      image: "/images/full-mouth-rehabilitation.jpg",

      fallback:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85",

      description:
        "Full mouth rehabilitation focuses on restoring overall oral health including your teeth, gums, bite and appearance.",
    },

    {
      title: "Aligners",

      image: "/images/aligners.jpg",

      fallback:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=85",

      description:
        "Clear removable aligners gradually move teeth into improved positions while providing a discreet orthodontic solution.",
    },

    {
      title: "Pediatric Dentistry",

      image: "/images/pediatric-dentistry.jpg",

      fallback:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",

      description:
        "Child-friendly dental care focused on creating comfortable dental experiences while helping protect healthy growing smiles.",
    },

    {
      title: "Root Canal Treatment",

      image: "/images/root-canal.jpg",

      fallback:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85",

      description:
        "Advanced root canal treatment helps remove infected tissue and preserve the natural tooth wherever possible.",
    },

    {
      title: "Sports Dentistry",

      image: "/images/sports-dentistry.jpg",

      fallback:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85",

      description:
        "Sports dentistry focuses on preventing and managing dental injuries associated with sporting and athletic activities.",
    },

    {
      title: "Digital Mock-up Smile",

      image: "/images/digital-smile.jpg",

      fallback:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85",

      description:
        "Digital smile mock-ups allow you to visualize the possible appearance of your smile before completing treatment.",
    },

    {
      title: "Modern Teeth Whitening",

      image: "/images/teeth-whitening.jpg",

      fallback:
        "https://images.unsplash.com/photo-1606265752439-1f18756aa376?auto=format&fit=crop&w=1000&q=85",

      description:
        "Professional teeth whitening helps reduce stains and brighten your smile using modern dental techniques.",
    },

    {
      title: "Dental Prosthetics",

      image: "/images/dental-prosthetics.jpg",

      fallback:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=85",

      description:
        "Dental prosthetics include crowns, bridges, dentures and implants designed to restore missing teeth and oral function.",
    },
  ];

  /* =======================================================
     WHY CHOOSE
  ======================================================= */

  const whyChooseUs = [
    {
      icon: <FaUserDoctor />,

      title: "Experienced Doctors",

      text:
        "Experienced dental professionals focused on providing friendly, careful and professional treatment.",
    },

    {
      icon: <FaHeartPulse />,

      title: "Personalized Care",

      text:
        "Every treatment plan is prepared according to the individual needs, comfort and goals of the patient.",
    },

    {
      icon: <FaCreditCard />,

      title: "Flexible Payment Options",

      text:
        "Transparent treatment planning and convenient options help make quality dental care easier to manage.",
    },

    {
      icon: <FaHouseMedical />,

      title: "Emergency Services",

      text:
        "Our dental team can provide assistance and treatment guidance when urgent dental care is required.",
    },

    {
      icon: <FaShieldHeart />,

      title: "Patient-Focused Care",

      text:
        "Comfort, cleanliness, safety and clear communication remain important throughout every treatment.",
    },

    {
      icon: <FaAward />,

      title: "Latest Technology",

      text:
        "Modern equipment and digital dentistry support precise diagnosis, treatment planning and patient comfort.",
    },
  ];

  /* =======================================================
     TESTIMONIALS
  ======================================================= */

  const testimonials = [
    {
      name: "Rachita Goenka",

      role: "Software Employee",

      review:
        "Had a great and smooth experience with Dr. Harshita and her team. Everything was explained clearly and the clinic was very clean. I would highly recommend the clinic.",
    },

    {
      name: "Aparna Kakoti",

      role: "Teacher",

      review:
        "I had a very positive experience at this clinic. The doctors were highly professional and provided a detailed explanation of the treatment plan.",
    },

    {
      name: "Neetu Amit Mehta",

      role: "Data Analyst",

      review:
        "The consultation was excellent. Everything regarding my treatment was explained clearly and the team was professional throughout the process.",
    },
  ];

  return (
    <>
      <style>{`

        /* =====================================================
           GLOBAL
        ===================================================== */

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .home-page {
          width: 100%;
          overflow-x: hidden;

          background: #ffffff;

          color: #073b4c;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        button,
        input,
        select {
          font-family: inherit;
        }

        .home-container {
          width: 100%;

          max-width: 1400px;

          margin: 0 auto;
        }

        /* REDUCED SECTION SPACING */

        .home-section {
          position: relative;

          padding: 70px 30px;

          overflow: hidden;
        }


        /* =====================================================
           SCROLL ANIMATIONS
        ===================================================== */

        .reveal-item {
          opacity: 0;

          will-change:
            transform,
            opacity;

          transition:
            transform .85s cubic-bezier(.16,1,.3,1),
            opacity .85s ease;
        }

        .reveal-left {
          transform: translateX(-75px);
        }

        .reveal-right {
          transform: translateX(75px);
        }

        .reveal-up {
          transform: translateY(55px);
        }

        .reveal-item.visible {
          opacity: 1;

          transform:
            translateX(0)
            translateY(0);
        }


        /* =====================================================
           HEADINGS
        ===================================================== */

        .heading-animation {
          opacity: 0;

          transform: translateY(38px);

          filter: blur(3px);

          transition:
            opacity .85s ease,
            transform .85s cubic-bezier(.16,1,.3,1),
            filter .85s ease;
        }

        .heading-animation.visible {
          opacity: 1;

          transform: translateY(0);

          filter: blur(0);
        }

        .section-heading-wrap {
          max-width: 800px;

          margin:
            0 auto 42px;

          text-align: center;
        }

        .section-tag {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          margin-bottom: 12px;

          color: #2daf38;

          font-size: 14px;

          font-weight: 800;

          letter-spacing: 2.2px;

          text-transform: uppercase;
        }

        /* ONLY LINES - NO DECORATIVE SPARKLE ICONS */

        .section-tag::before,
        .section-tag::after {
          content: "";

          display: block;

          width: 26px;

          height: 2px;

          border-radius: 10px;

          background: #3ac13d;
        }

        .section-heading {
          margin: 0;

          color: #06394a;

          font-size:
            clamp(42px, 4vw, 59px);

          line-height: 1.1;

          letter-spacing: -1.7px;
        }

        .section-subtext {
          max-width: 730px;

          margin:
            17px auto 0;

          color: #617983;

          font-size: 17px;

          line-height: 1.75;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .premium-hero {
          position: relative;

          display: flex;

          align-items: center;

          min-height: 680px;

          padding:
            55px 30px 65px;

          overflow: hidden;

          background:
            linear-gradient(
              125deg,
              #f1fbff 0%,
              #ffffff 56%,
              #f5fcff 100%
            );
        }

        .hero-main-container {
          width: 100%;

          max-width: 1450px;

          margin: auto;

          display: grid;

          grid-template-columns:
            .94fr 1.06fr;

          align-items: center;

          gap: 60px;
        }

        .hero-left {
          animation:
            heroLeft 1s cubic-bezier(.16,1,.3,1);
        }

        @keyframes heroLeft {

          from {
            opacity: 0;

            transform:
              translateX(-60px);
          }

          to {
            opacity: 1;

            transform:
              translateX(0);
          }

        }

        .hero-kicker {
          margin-bottom: 18px;

          color: #476773;

          font-size: 13px;

          font-weight: 800;

          letter-spacing: 2.4px;

          line-height: 1.6;

          text-transform: uppercase;
        }

        .hero-heading {
          max-width: 700px;

          margin: 0;

          color: #06394a;

          font-size:
            clamp(53px, 4.6vw, 77px);

          line-height: 1.02;

          letter-spacing: -2.7px;

          font-weight: 800;

          animation:
            headingIntro
            1s
            cubic-bezier(.16,1,.3,1)
            .15s
            both;
        }

        @keyframes headingIntro {

          from {
            opacity: 0;

            transform:
              translateY(40px);

            filter:
              blur(5px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);

            filter:
              blur(0);
          }

        }

        .hero-heading span {
          color: #38bc34;
        }

        .hero-description {
          max-width: 650px;

          margin:
            24px 0 0;

          color: #5e7782;

          font-size: 18px;

          line-height: 1.75;
        }

        .hero-actions {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 14px;

          margin-top: 27px;
        }


        /* =====================================================
           BUTTONS
        ===================================================== */

        .premium-green-btn,
        .premium-outline-btn {
          min-height: 56px;

          padding:
            0 27px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          border-radius: 50px;

          cursor: pointer;

          font-size: 15px;

          font-weight: 700;

          text-decoration: none;

          transition:
            .3s ease;
        }

        .premium-green-btn {
          border: none;

          color: white;

          background:
            linear-gradient(
              135deg,
              #20ad35,
              #60d740
            );

          box-shadow:
            0 12px 28px
            rgba(35,179,47,.2);
        }

        .premium-green-btn:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 18px 36px
            rgba(35,179,47,.3);
        }

        .premium-outline-btn {
          border:
            1.5px solid #079ad1;

          color: #0872a1;

          background: #ffffff;
        }

        .premium-outline-btn:hover {
          background: #079bd2;

          color: #ffffff;

          transform:
            translateY(-4px);
        }


        /* =====================================================
           HERO FEATURES
        ===================================================== */

        .hero-benefits {
          max-width: 680px;

          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          gap: 10px;

          margin-top: 32px;
        }

        .hero-benefit {
          text-align: center;

          padding:
            15px 8px;

          border-radius: 15px;

          border:
            1px solid #e3eef1;

          background:
            rgba(255,255,255,.82);

          transition:
            .3s ease;
        }

        .hero-benefit:hover {
          transform:
            translateY(-5px);

          box-shadow:
            0 14px 30px
            rgba(5,65,87,.07);
        }

        .hero-benefit-icon {
          width: 46px;

          height: 46px;

          margin:
            0 auto 8px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #edfaff;

          color: #10a8dd;

          font-size: 20px;
        }

        .hero-benefit:last-child
        .hero-benefit-icon {
          color: #43c23a;

          background: #efffed;
        }

        .hero-benefit span {
          display: block;

          color: #315561;

          font-size: 13px;

          font-weight: 700;

          line-height: 1.4;
        }


        /* =====================================================
           VIDEO
        ===================================================== */

        .hero-video {
          position: relative;

          height: 535px;

          overflow: hidden;

          border-radius: 28px;

          background: #dceef4;

          box-shadow:
            0 27px 65px
            rgba(4,58,78,.15);

          animation:
            videoIntro
            1s
            cubic-bezier(.16,1,.3,1);
        }

        @keyframes videoIntro {

          from {
            opacity: 0;

            transform:
              translateX(70px)
              scale(.97);
          }

          to {
            opacity: 1;

            transform:
              translateX(0)
              scale(1);
          }

        }

        .hero-video iframe {
          position: absolute;

          top: 50%;

          left: 50%;

          width:
            177.77777778vh;

          min-width:
            100%;

          height:
            56.25vw;

          min-height:
            100%;

          transform:
            translate(-50%, -50%);

          border: 0;

          pointer-events: none;
        }


        /* =====================================================
           STATS
        ===================================================== */

        .stats-section {
          position: relative;

          z-index: 10;

          width:
            calc(100% - 60px);

          max-width: 1360px;

          margin:
            -30px auto 0;

          padding:
            27px;

          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          border-radius: 22px;

          background: #ffffff;

          border:
            1px solid #edf3f5;

          box-shadow:
            0 17px 50px
            rgba(4,67,89,.09);
        }

        .stat-card {
          position: relative;

          padding:
            8px 20px;

          text-align: center;
        }

        .stat-card:not(:last-child)::after {
          content: "";

          position: absolute;

          right: 0;

          top: 10%;

          width: 1px;

          height: 80%;

          background: #e3ecef;
        }

        .stat-card strong {
          display: block;

          margin-bottom: 7px;

          color: #0873a8;

          font-size: 34px;

          font-weight: 800;
        }

        .stat-card span {
          color: #607a84;

          font-size: 14px;

          font-weight: 600;
        }


        /* =====================================================
           ABOUT
        ===================================================== */

        .about-section {
          background: #ffffff;
        }

        .about-grid {
          display: grid;

          grid-template-columns:
            .92fr 1.08fr;

          gap: 65px;

          align-items: center;
        }

        .about-image-wrap {
          position: relative;
        }

        .about-image-wrap img {
          display: block;

          width: 100%;

          height: 500px;

          object-fit: cover;

          border-radius: 27px;
        }

        .about-mini-card {
          position: absolute;

          right: -10px;

          bottom: 22px;

          padding:
            18px 22px;

          border-radius: 15px;

          background: white;

          color: #073b4c;

          font-size: 16px;

          font-weight: 800;

          box-shadow:
            0 16px 45px
            rgba(4,58,78,.14);
        }

        .about-content h2 {
          margin:
            10px 0 17px;

          color: #073a4b;

          font-size:
            clamp(42px,4vw,57px);

          line-height: 1.1;
        }

        .about-content p {
          margin:
            0 0 12px;

          color: #617983;

          font-size: 17px;

          line-height: 1.75;
        }

        .about-features {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 12px;

          margin:
            22px 0 25px;
        }

        .about-feature {
          display: flex;

          align-items: center;

          gap: 9px;

          color: #315561;

          font-size: 15px;

          font-weight: 700;
        }

        .about-feature svg {
          color: #42c33c;
        }


        /* =====================================================
           TEAM
        ===================================================== */

        .team-section {
          background: #f5fbfd;
        }

        .team-grid {
          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          gap: 23px;
        }

        .doctor-card {
          overflow: hidden;

          border-radius: 21px;

          background: #ffffff;

          box-shadow:
            0 11px 32px
            rgba(5,64,86,.06);

          transition:
            .35s ease;
        }

        .doctor-card:hover {
          transform:
            translateY(-8px);

          box-shadow:
            0 20px 45px
            rgba(5,64,86,.11);
        }

        .doctor-image {
          height: 310px;

          overflow: hidden;

          background: #edf5f7;
        }

        .doctor-image img {
          width: 100%;

          height: 100%;

          object-fit: cover;

          transition:
            transform .5s ease;
        }

        .doctor-card:hover
        .doctor-image img {
          transform:
            scale(1.055);
        }

        .doctor-info {
          padding:
            21px 18px;

          text-align: center;
        }

        .doctor-info h3 {
          margin:
            0 0 7px;

          color: #073b4c;

          font-size: 21px;
        }

        .doctor-info p {
          margin: 0;

          color: #6b818a;

          font-size: 15px;

          line-height: 1.5;
        }


        /* =====================================================
           SERVICES
        ===================================================== */

        .services-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 24px;
        }

        .service-card {
          display: flex;

          flex-direction: column;

          overflow: hidden;

          border-radius: 21px;

          border:
            1px solid #e8f0f2;

          background: #ffffff;

          box-shadow:
            0 9px 30px
            rgba(4,63,84,.05);

          transition:
            .35s ease;
        }

        .service-card:hover {
          transform:
            translateY(-8px);

          box-shadow:
            0 20px 45px
            rgba(4,63,84,.1);
        }

        .service-image-wrap {
          height: 220px;

          overflow: hidden;

          background: #edf4f6;
        }

        .service-image-wrap img {
          width: 100%;

          height: 100%;

          object-fit: cover;

          transition:
            transform .5s ease;
        }

        .service-card:hover
        .service-image-wrap img {
          transform:
            scale(1.07);
        }

        .service-content {
          flex: 1;

          padding:
            22px;

          display: flex;

          flex-direction: column;

          text-align: center;
        }

        .service-content h3 {
          margin:
            0 0 10px;

          color: #073b4c;

          font-size: 23px;
        }

        .service-content p {
          flex: 1;

          margin: 0;

          color: #617983;

          font-size: 16px;

          line-height: 1.68;
        }

        /* CENTER BUTTON */

        .service-button-wrap {
          display: flex;

          justify-content: center;

          margin-top: 20px;
        }

        .service-whatsapp-button {
          min-height: 49px;

          padding:
            0 22px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          border: none;

          border-radius: 50px;

          cursor: pointer;

          background:
            linear-gradient(
              135deg,
              #20bb50,
              #39cd61
            );

          color: #ffffff;

          font-size: 14px;

          font-weight: 800;

          box-shadow:
            0 9px 22px
            rgba(28,185,78,.2);

          transition:
            .3s ease;
        }

        .service-whatsapp-button:hover {
          transform:
            translateY(-3px)
            scale(1.02);

          box-shadow:
            0 13px 28px
            rgba(28,185,78,.3);
        }


        /* =====================================================
           EMERGENCY
        ===================================================== */

        .emergency-section {
          padding:
            62px 30px;

          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              #06394b,
              #07516a
            );
        }

        .emergency-inner {
          max-width: 1250px;

          margin: auto;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 35px;
        }

        .emergency-text small {
          color: #62d548;

          font-size: 13px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        .emergency-text h2 {
          margin:
            8px 0;

          color: white;

          font-size:
            clamp(40px,4vw,55px);
        }

        .emergency-text p {
          margin: 0;

          color:
            rgba(255,255,255,.75);

          font-size: 17px;

          line-height: 1.7;
        }


        /* =====================================================
           WHY CHOOSE US
        ===================================================== */

        .why-section {
          background: #f5fbfd;
        }

        .why-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 22px;
        }

        .why-card {
          padding:
            30px 26px;

          text-align: center;

          border-radius: 20px;

          border:
            1px solid #e5eef1;

          background: #ffffff;

          transition:
            .35s ease;
        }

        .why-card:hover {
          transform:
            translateY(-7px);

          box-shadow:
            0 17px 40px
            rgba(5,64,86,.09);
        }

        /* ICON CENTERED */

        .why-icon {
          width: 68px;

          height: 68px;

          margin:
            0 auto 17px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #ebfaff;

          color: #0aa7db;

          font-size: 27px;

          transition:
            .35s ease;
        }

        .why-card:hover
        .why-icon {
          color: #37bd3d;

          background: #efffee;

          transform:
            translateY(-3px);
        }

        .why-card h3 {
          margin:
            0 0 9px;

          color: #073b4c;

          font-size: 22px;
        }

        .why-card p {
          margin: 0;

          color: #637b85;

          font-size: 16px;

          line-height: 1.68;
        }


        /* =====================================================
           APPOINTMENT
        ===================================================== */

        .appointment-grid {
          display: grid;

          grid-template-columns:
            .9fr 1.1fr;

          align-items: center;

          gap: 60px;
        }

        .appointment-info h2 {
          margin:
            10px 0 16px;

          color: #073b4c;

          font-size:
            clamp(43px,4vw,58px);

          line-height: 1.1;
        }

        .appointment-info p {
          color: #617983;

          font-size: 17px;

          line-height: 1.75;
        }

        .appointment-form {
          padding: 32px;

          border-radius: 24px;

          background: #f3fbfe;

          border:
            1px solid #e1edf1;
        }

        .form-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 14px;
        }

        .form-control {
          width: 100%;

          height: 56px;

          padding:
            0 16px;

          border:
            1px solid #d8e7eb;

          border-radius: 12px;

          outline: none;

          background: #ffffff;

          color: #173e4c;

          font-size: 15px;
        }

        .form-control:focus {
          border-color: #0aa5d6;

          box-shadow:
            0 0 0 3px
            rgba(10,165,214,.07);
        }

        .form-full {
          grid-column:
            1 / -1;
        }


        /* =====================================================
           TESTIMONIALS
        ===================================================== */

        .testimonial-section {
          background: #f5fbfd;
        }

        .testimonial-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 22px;
        }

        .testimonial-card {
          padding:
            29px;

          text-align: center;

          border-radius: 20px;

          border:
            1px solid #e7f0f2;

          background: white;

          transition:
            .35s ease;
        }

        .testimonial-card:hover {
          transform:
            translateY(-7px);

          box-shadow:
            0 17px 40px
            rgba(5,64,86,.08);
        }

        .testimonial-quote {
          width: 50px;

          height: 50px;

          margin:
            0 auto 16px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #effbef;

          color: #38bd38;

          font-size: 20px;
        }

        .testimonial-card p {
          margin: 0;

          color: #617983;

          font-size: 16px;

          line-height: 1.72;
        }

        .testimonial-card h4 {
          margin:
            20px 0 4px;

          color: #073b4c;

          font-size: 18px;
        }

        .testimonial-card span {
          color: #7c929a;

          font-size: 14px;
        }


        /* =====================================================
           CONTACT
        ===================================================== */

        .contact-grid {
          display: grid;

          grid-template-columns:
            .85fr 1.15fr;

          gap: 38px;
        }

        .contact-card {
          padding: 34px;

          border-radius: 24px;

          background:
            linear-gradient(
              145deg,
              #06394b,
              #074c63
            );

          color: white;
        }

        .contact-card h2 {
          margin:
            0 0 25px;

          font-size: 42px;
        }

        .contact-item {
          display: flex;

          align-items: flex-start;

          gap: 13px;

          margin-top: 19px;
        }

        .contact-icon {
          width: 43px;

          height: 43px;

          min-width: 43px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 11px;

          background:
            rgba(255,255,255,.09);

          color: #59d347;

          font-size: 17px;
        }

        .contact-item a,
        .contact-item span {
          margin-top: 7px;

          color:
            rgba(255,255,255,.84);

          text-decoration: none;

          font-size: 16px;

          line-height: 1.6;
        }

        .map-frame {
          width: 100%;

          min-height: 470px;

          height: 100%;

          border: 0;

          border-radius: 24px;
        }


        /* =====================================================
           FLOATING WHATSAPP
        ===================================================== */

        .floating-whatsapp {
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

          transition:
            .3s ease;
        }

        .floating-whatsapp:hover {
          transform:
            translateY(-5px)
            scale(1.06);
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media(max-width:1100px) {

          .hero-main-container,
          .about-grid,
          .appointment-grid,
          .contact-grid {
            grid-template-columns:
              1fr;
          }

          .hero-main-container {
            gap: 38px;
          }

          .hero-video {
            height: 490px;
          }

          .team-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .services-grid,
          .why-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .about-image-wrap {
            max-width: 750px;

            margin: auto;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media(max-width:720px) {

          .home-section {
            padding:
              55px 18px;
          }

          .premium-hero {
            padding:
              42px 18px 55px;

            min-height: auto;
          }

          .hero-main-container {
            gap: 32px;
          }

          .hero-left {
            text-align: center;
          }

          .hero-kicker {
            font-size: 11px;

            line-height: 1.7;
          }

          .hero-heading {
            font-size: 45px;

            letter-spacing: -1.5px;
          }

          .hero-description {
            margin-left: auto;

            margin-right: auto;

            font-size: 16px;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-benefits {
            grid-template-columns:
              repeat(2,1fr);
          }

          .hero-video {
            height: 395px;

            border-radius: 21px;
          }

          .stats-section {
            width:
              calc(100% - 30px);

            grid-template-columns:
              repeat(2,1fr);

            padding: 16px;
          }

          .stat-card {
            padding:
              18px 8px;
          }

          .stat-card:nth-child(2)::after {
            display: none;
          }

          .stat-card:nth-child(3),
          .stat-card:nth-child(4) {
            border-top:
              1px solid #e3ecef;
          }

          .team-grid,
          .services-grid,
          .why-grid,
          .testimonial-grid {
            grid-template-columns:
              1fr;
          }

          .about-image-wrap img {
            height: 390px;
          }

          .about-mini-card {
            right: 10px;
          }

          .about-features,
          .form-grid {
            grid-template-columns:
              1fr;
          }

          .form-full {
            grid-column: auto;
          }

          .emergency-section {
            padding:
              50px 20px;
          }

          .emergency-inner {
            flex-direction: column;

            align-items: flex-start;
          }

          .appointment-form {
            padding:
              22px 17px;
          }

          .reveal-left {
            transform:
              translateX(-30px);
          }

          .reveal-right {
            transform:
              translateX(30px);
          }

          .section-heading {
            font-size: 38px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media(max-width:480px) {

          .hero-heading {
            font-size: 39px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .premium-green-btn,
          .premium-outline-btn {
            width: 100%;
          }

          .hero-video {
            height: 340px;
          }

          .stats-section {
            grid-template-columns:
              1fr;
          }

          .stat-card {
            border-bottom:
              1px solid #e3ecef;
          }

          .stat-card::after {
            display: none;
          }

          .stat-card:nth-child(3),
          .stat-card:nth-child(4) {
            border-top: 0;
          }

          .stat-card:last-child {
            border-bottom: 0;
          }

          .about-image-wrap img {
            height: 330px;
          }

          .section-heading {
            font-size: 35px;
          }

          .section-subtext {
            font-size: 16px;
          }

          .service-content h3 {
            font-size: 22px;
          }

          .floating-whatsapp {
            right: 15px;

            bottom: 15px;

            width: 55px;

            height: 55px;
          }

        }

      `}</style>

      <main className="home-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="premium-hero">

          <div className="hero-main-container">

            <div className="hero-left">

              <div className="hero-kicker">
                YOUR HEALTH &nbsp; | &nbsp;
                OUR CARE &nbsp; | &nbsp;
                A BRIGHTER TOMORROW
              </div>

              <h1 className="hero-heading">
                Experience Dental Excellence with a{" "}
                <span>
                  Gentle Touch
                </span>
              </h1>

              <p className="hero-description">
                Exceptional dental care with modern
                technology, experienced dentists and
                personalized treatment designed around
                your comfort, confidence and your smile.
              </p>

              <div className="hero-actions">

                <button
                  type="button"
                  className="premium-green-btn"
                  onClick={() =>
                    openWhatsApp(
                      "Hello My Dentist, I would like to book a dental appointment. Please share the available timings."
                    )
                  }
                >
                  <FaWhatsapp />

                  Book an Appointment

                  <FaArrowRight />
                </button>

                <button
                  type="button"
                  className="premium-outline-btn"
                  onClick={() =>
                    openWhatsApp(
                      "Hello My Dentist, I would like to know more about your dental services."
                    )
                  }
                >
                  <FaTooth />

                  Explore Services

                  <FaArrowRight />
                </button>

              </div>

              <div className="hero-benefits">

                <div className="hero-benefit">

                  <div className="hero-benefit-icon">
                    <FaTooth />
                  </div>

                  <span>
                    Quality
                    <br />
                    Dental Care
                  </span>

                </div>

                <div className="hero-benefit">

                  <div className="hero-benefit-icon">
                    <FaUserDoctor />
                  </div>

                  <span>
                    Experienced
                    <br />
                    Dentists
                  </span>

                </div>

                <div className="hero-benefit">

                  <div className="hero-benefit-icon">
                    <FaShieldHeart />
                  </div>

                  <span>
                    Patient
                    <br />
                    Safety
                  </span>

                </div>

                <div className="hero-benefit">

                  <div className="hero-benefit-icon">
                    <FaLocationDot />
                  </div>

                  <span>
                    Bellandur &
                    <br />
                    Koramangala
                  </span>

                </div>

              </div>

            </div>

            {/* VIDEO */}

            <div className="hero-video">

              <iframe
                src="https://www.youtube.com/embed/tQ9lvEpkE2w?autoplay=1&mute=1&controls=0&loop=1&playlist=tQ9lvEpkE2w&modestbranding=1&rel=0&playsinline=1"
                title="My Dentist Dental Care"
                allow="autoplay; encrypted-media"
              />

            </div>

          </div>

        </section>


        {/* =================================================
            COUNTERS
        ================================================= */}

        <section className="stats-section reveal-item reveal-up">

          <div className="stat-card">

            <strong>
              <AnimatedCounter
                end={5}
                decimals={1}
                duration={1500}
              />
            </strong>

            <span>
              Google Rating
            </span>

          </div>

          <div className="stat-card">

            <strong>
              <AnimatedCounter
                end={492}
                suffix="+"
                duration={1900}
              />
            </strong>

            <span>
              Patient Reviews
            </span>

          </div>

          <div className="stat-card">

            <strong>
              <AnimatedCounter
                end={12}
                suffix="+"
                duration={1500}
              />
            </strong>

            <span>
              Advanced Dental Services
            </span>

          </div>

          <div className="stat-card">

            <strong>
              <AnimatedCounter
                end={2}
                duration={1200}
              />
            </strong>

            <span>
              Bellandur & Koramangala
            </span>

          </div>

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <section className="home-section about-section">

          <div className="home-container about-grid">

            <div className="about-image-wrap reveal-item reveal-left">

              <img
                src="/images/about-us.jpg"
                alt="My Dentist Bangalore"
                loading="lazy"
                onError={(event) =>
                  handleImageError(
                    event,
                    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85"
                  )
                }
              />

              <div className="about-mini-card">
                Quality Dental Care
              </div>

            </div>


            <div className="about-content reveal-item reveal-right">

              <div className="section-tag">
                About Us
              </div>

              <h2 className="heading-animation">
                My Dentist Bangalore
              </h2>

              <p>
                Welcome to My Dentist, where your smile
                is our top priority. With branches
                conveniently located in Koramangala and
                Bellandur, we are dedicated to providing
                high-quality dental care tailored to your
                individual needs.
              </p>

              <p>
                We specialize in advanced dental services
                including Laser Dentistry, Cosmetic
                Dentistry, Implantology, Full Mouth
                Rehabilitation, Aligner Therapy, Root
                Canal Treatment and Crown & Bridge
                procedures.
              </p>

              <p>
                Our facilities use modern technology
                including intraoral scanners and
                advanced Smile Design software to
                support precision, comfort and
                treatment planning.
              </p>

              <p>
                We believe in transparent pricing and
                aim to make your dental experience
                comfortable, simple and stress-free.
              </p>

              <div className="about-features">

                <div className="about-feature">
                  <FaCircleCheck />
                  Experienced Team
                </div>

                <div className="about-feature">
                  <FaCircleCheck />
                  Comprehensive Services
                </div>

                <div className="about-feature">
                  <FaCircleCheck />
                  Modern Technology
                </div>

                <div className="about-feature">
                  <FaCircleCheck />
                  Emergency Dental Services
                </div>

              </div>

              <button
                type="button"
                className="premium-green-btn"
                onClick={() =>
                  openWhatsApp(
                    "Hello My Dentist, I would like to book a dental appointment."
                  )
                }
              >
                <FaWhatsapp />

                Book Appointment
              </button>

            </div>

          </div>

        </section>


        {/* =================================================
            TEAM
        ================================================= */}

        <section className="home-section team-section">

          <div className="home-container">

            <div className="section-heading-wrap heading-animation">

              <div className="section-tag">
                Our Team
              </div>

              <h2 className="section-heading">
                Our Friendly Dentists Team
              </h2>

              <p className="section-subtext">
                Our experienced dental professionals
                work together to provide quality
                treatment with comfort, care and
                individual attention.
              </p>

            </div>


            <div className="team-grid">

              {doctors.map((doctor, index) => (

                <article
                  key={doctor.name}
                  className={`doctor-card reveal-item ${
                    index % 2 === 0
                      ? "reveal-left"
                      : "reveal-right"
                  }`}
                >

                  <div className="doctor-image">

                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      loading="lazy"
                      onError={(event) =>
                        handleImageError(
                          event,
                          doctor.fallback
                        )
                      }
                    />

                  </div>

                  <div className="doctor-info">

                    <h3>
                      {doctor.name}
                    </h3>

                    <p>
                      {doctor.role}
                    </p>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =================================================
            SERVICES
        ================================================= */}

        <section className="home-section">

          <div className="home-container">

            <div className="section-heading-wrap heading-animation">

              <div className="section-tag">
                Dental Services
              </div>

              <h2 className="section-heading">
                High Quality Services For You
              </h2>

              <p className="section-subtext">
                Comprehensive dental treatments
                supported by modern technology,
                experienced professionals and
                patient-focused care.
              </p>

            </div>


            <div className="services-grid">

              {services.map((service, index) => (

                <article
                  key={service.title}
                  className={`service-card reveal-item ${
                    index % 2 === 0
                      ? "reveal-left"
                      : "reveal-right"
                  }`}
                >

                  <div className="service-image-wrap">

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


                  <div className="service-content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>


                    <div className="service-button-wrap">

                      <button
                        type="button"
                        className="service-whatsapp-button"
                        onClick={() =>
                          openWhatsApp(
                            `Hello My Dentist, I would like to know more about ${service.title}.`
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


        {/* =================================================
            EMERGENCY
        ================================================= */}

        <section className="emergency-section">

          <div className="emergency-inner">

            <div className="emergency-text reveal-item reveal-left">

              <small>
                EMERGENCY DENTAL CARE
              </small>

              <h2 className="heading-animation">
                Emergency? Get Help Now
              </h2>

              <p>
                Contact our dental team for urgent
                dental assistance and appointment
                support.
              </p>

            </div>


            <div className="reveal-item reveal-right">

              <button
                type="button"
                className="premium-green-btn"
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


        {/* =================================================
            WHY CHOOSE
        ================================================= */}

        <section className="home-section why-section">

          <div className="home-container">

            <div className="section-heading-wrap heading-animation">

              <div className="section-tag">
                Why Choose Us
              </div>

              <h2 className="section-heading">
                Dental Care Focused Around You
              </h2>

              <p className="section-subtext">
                Professional treatment, personalized
                attention and modern technology for a
                more comfortable dental experience.
              </p>

            </div>


            <div className="why-grid">

              {whyChooseUs.map((item, index) => (

                <article
                  key={item.title}
                  className={`why-card reveal-item ${
                    index % 2 === 0
                      ? "reveal-left"
                      : "reveal-right"
                  }`}
                >

                  <div className="why-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =================================================
            APPOINTMENT
        ================================================= */}

        <section className="home-section">

          <div className="home-container appointment-grid">

            <div className="appointment-info reveal-item reveal-left">

              <div className="section-tag">
                Contact Us
              </div>

              <h2 className="heading-animation">
                Book Your Dental Appointment
              </h2>

              <p>
                Select the dental treatment you need
                and choose your preferred appointment
                date.
              </p>

              <p>
                After submitting the form, your details
                will automatically open in WhatsApp so
                you can communicate directly with our
                clinic.
              </p>

            </div>


            <form
              className="appointment-form reveal-item reveal-right"
              onSubmit={handleAppointmentSubmit}
            >

              <div className="form-grid">

                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={appointment.name}
                  onChange={handleAppointmentChange}
                />

                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={appointment.email}
                  onChange={handleAppointmentChange}
                />

                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={appointment.phone}
                  onChange={handleAppointmentChange}
                />


                <select
                  className="form-control"
                  name="service"
                  required
                  value={appointment.service}
                  onChange={handleAppointmentChange}
                >

                  <option value="">
                    Select Dental Service
                  </option>

                  {services.map((service) => (

                    <option
                      key={service.title}
                      value={service.title}
                    >
                      {service.title}
                    </option>

                  ))}

                </select>


                <input
                  className="form-control form-full"
                  type="date"
                  name="date"
                  required
                  value={appointment.date}
                  onChange={handleAppointmentChange}
                />


                <button
                  type="submit"
                  className="premium-green-btn form-full"
                >
                  <FaWhatsapp />

                  Send Appointment via WhatsApp

                  <FaArrowRight />
                </button>

              </div>

            </form>

          </div>

        </section>


        {/* =================================================
            TESTIMONIALS
        ================================================= */}

        <section className="home-section testimonial-section">

          <div className="home-container">

            <div className="section-heading-wrap heading-animation">

              <div className="section-tag">
                Testimonials
              </div>

              <h2 className="section-heading">
                What Our Patients Say
              </h2>

            </div>


            <div className="testimonial-grid">

              {testimonials.map((testimonial, index) => (

                <article
                  key={testimonial.name}
                  className={`testimonial-card reveal-item ${
                    index % 2 === 0
                      ? "reveal-left"
                      : "reveal-right"
                  }`}
                >

                  <div className="testimonial-quote">
                    <FaQuoteLeft />
                  </div>

                  <p>
                    {testimonial.review}
                  </p>

                  <h4>
                    {testimonial.name}
                  </h4>

                  <span>
                    {testimonial.role}
                  </span>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =================================================
            CONTACT
        ================================================= */}

        <section className="home-section">

          <div className="home-container">

            <div className="section-heading-wrap heading-animation">

              <div className="section-tag">
                Contact Us
              </div>

              <h2 className="section-heading">
                Get Professional Dental Consultation
              </h2>

            </div>


            <div className="contact-grid">

              <div className="contact-card reveal-item reveal-left">

                <h2>
                  My Dentist
                </h2>


                <div className="contact-item">

                  <div className="contact-icon">
                    <FaLocationDot />
                  </div>

                  <span>
                    79/8, Front of Golden Residency,
                    Service Rd, Bellandur,
                    Bengaluru, Karnataka 560103
                  </span>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <FaPhone />
                  </div>

                  <a href="tel:+919739749510">
                    +91 97397 49510
                  </a>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>

                  <a href="mailto:info@mydentistbangalore.com">
                    info@mydentistbangalore.com
                  </a>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <FaClock />
                  </div>

                  <span>
                    Monday - Saturday
                    <br />
                    9:00 AM - 9:00 PM
                  </span>

                </div>


                <button
                  type="button"
                  className="premium-green-btn"
                  style={{
                    marginTop: "26px",
                  }}
                  onClick={() =>
                    openWhatsApp(
                      "Hello My Dentist, I would like to get a dental consultation."
                    )
                  }
                >
                  <FaWhatsapp />

                  Chat on WhatsApp
                </button>

              </div>


              <div className="reveal-item reveal-right">

                <iframe
                  className="map-frame"
                  title="My Dentist Bellandur"
                  loading="lazy"
                  src="https://www.google.com/maps?q=My%20Dentist%20Bellandur%20Bengaluru&output=embed"
                />

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =================================================
          FLOATING WHATSAPP
      ================================================= */}

      <button
        type="button"
        className="floating-whatsapp"
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

export default Home;