import React, { useEffect, useRef, useState } from "react";

import {
  FaArrowRight,
  FaWhatsapp,
  FaCircleCheck,
  FaUserDoctor,
  FaHeartPulse,
  FaCreditCard,
  FaHouseMedical,
  FaShieldHeart,
  FaAward,
  FaTooth,
  FaLocationDot,
} from "react-icons/fa6";

/* =========================================================
   ANIMATED COUNTER
========================================================= */

function AnimatedCounter({
  end,
  suffix = "",
  duration = 1700,
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
      {Math.floor(count)}
      {suffix}
    </span>
  );
}

/* =========================================================
   ABOUT
========================================================= */

function About() {
  const whatsappNumber = "919739749510";

  /* =======================================================
     SEO + GEO + STRUCTURED DATA
  ======================================================= */

  useEffect(() => {
    const websiteUrl = "https://www.mydentistbangalore.com/";
    const pageUrl = "https://www.mydentistbangalore.com/about-us";
    const logoUrl = "https://www.mydentistbangalore.com/logo.png";

    document.title =
      "About My Dentist Bangalore | Bellandur & Koramangala Dental Clinic";
    document.documentElement.lang = "en-IN";

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        element.setAttribute("data-about-seo", "true");
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta(
      "name",
      "description",
      "Learn about My Dentist Bangalore, providing modern, patient-focused dental care in Bellandur and Koramangala with experienced dental professionals, advanced technology and personalized treatment."
    );
    setMeta(
      "name",
      "keywords",
      "about My Dentist Bangalore, dentist in Bellandur, dentist in Koramangala, dental clinic in Bangalore, dental clinic in Bengaluru, My Dentist Bellandur, My Dentist Koramangala, dental care Bangalore"
    );
    setMeta("name", "author", "My Dentist Bangalore");
    setMeta(
      "name",
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    setMeta(
      "name",
      "googlebot",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    /* GEO / LOCAL SEO */
    setMeta("name", "geo.region", "IN-KA");
    setMeta(
      "name",
      "geo.placename",
      "Bengaluru, Karnataka, India"
    );

    /* OPEN GRAPH */
    setMeta(
      "property",
      "og:title",
      "About My Dentist Bangalore | Bellandur & Koramangala"
    );
    setMeta(
      "property",
      "og:description",
      "Discover My Dentist Bangalore and our approach to modern, personalized dental care in Bellandur and Koramangala."
    );
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:site_name", "My Dentist Bangalore");
    setMeta("property", "og:locale", "en_IN");
    setMeta("property", "og:image", logoUrl);
    setMeta(
      "property",
      "og:image:alt",
      "My Dentist Bangalore"
    );

    /* TWITTER / X */
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta(
      "name",
      "twitter:title",
      "About My Dentist Bangalore | Bellandur & Koramangala"
    );
    setMeta(
      "name",
      "twitter:description",
      "Learn about My Dentist Bangalore, our experienced dental professionals, modern technology and patient-focused care."
    );
    setMeta("name", "twitter:image", logoUrl);

    /* CANONICAL */
    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("data-about-seo", "true");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", pageUrl);

    /* STRUCTURED DATA */
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Dentist",
          "@id": `${websiteUrl}#dentist`,
          name: "My Dentist",
          alternateName: "My Dentist Bangalore",
          url: websiteUrl,
          logo: logoUrl,
          image: logoUrl,
          telephone: "+91-97397-49510",
          description:
            "My Dentist provides modern, patient-focused dental care in Bellandur and Koramangala, Bengaluru, with experienced dental professionals, advanced technology and personalized treatment.",
          medicalSpecialty: "Dentistry",
          areaServed: [
            {
              "@type": "City",
              name: "Bengaluru"
            },
            {
              "@type": "Place",
              name: "Bellandur"
            },
            {
              "@type": "Place",
              name: "Koramangala"
            }
          ],
          knowsAbout: [
            "Laser Dentistry",
            "Cosmetic Dentistry",
            "Dental Implants",
            "Full Mouth Rehabilitation",
            "Aligner Therapy",
            "Root Canal Treatment",
            "Crown and Bridge Dentistry"
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${websiteUrl}#website`,
          url: websiteUrl,
          name: "My Dentist Bangalore",
          inLanguage: "en-IN",
          publisher: {
            "@id": `${websiteUrl}#dentist`
          }
        },
        {
          "@type": "AboutPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name:
            "About My Dentist Bangalore | Bellandur & Koramangala Dental Clinic",
          description:
            "Learn about My Dentist Bangalore, our experienced dental professionals, advanced technology and personalized dental care in Bellandur and Koramangala.",
          inLanguage: "en-IN",
          isPartOf: {
            "@id": `${websiteUrl}#website`
          },
          about: {
            "@id": `${websiteUrl}#dentist`
          },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: logoUrl
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${pageUrl}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: websiteUrl
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "About Us",
              item: pageUrl
            }
          ]
        }
      ]
    };

    const oldSchema = document.getElementById(
      "mydentist-about-schema"
    );

    if (oldSchema) {
      oldSchema.remove();
    }

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "mydentist-about-schema";
    schema.text = JSON.stringify(structuredData);
    document.head.appendChild(schema);

    return () => {
      const currentSchema = document.getElementById(
        "mydentist-about-schema"
      );

      if (currentSchema) {
        currentSchema.remove();
      }

      document
        .querySelectorAll('[data-about-seo="true"]')
        .forEach((element) => element.remove());
    };
  }, []);


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
     IMAGE FALLBACK
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
      ".about-reveal, .about-heading-animation"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
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

  /* =======================================================
     WHY CHOOSE US
  ======================================================= */

  const whyChooseUs = [
    {
      icon: <FaUserDoctor />,
      title: "Experienced Doctors",
      text:
        "Our experienced dental professionals provide friendly, caring and professional treatment with attention to every patient's needs.",
    },
    {
      icon: <FaHeartPulse />,
      title: "Personalized Care",
      text:
        "Every patient receives personalized dental care and treatment planning based on their individual requirements.",
    },
    {
      icon: <FaCreditCard />,
      title: "Flexible Payment Options",
      text:
        "We believe in transparent pricing and convenient treatment planning without unnecessary hidden costs.",
    },
    {
      icon: <FaHouseMedical />,
      title: "Emergency Services",
      text:
        "Our team provides support and guidance when urgent dental treatment or emergency dental care is required.",
    },
    {
      icon: <FaShieldHeart />,
      title: "Positive Patient Experience",
      text:
        "Comfort, cleanliness, safety and clear communication remain important throughout every dental treatment.",
    },
    {
      icon: <FaAward />,
      title: "Latest Technology",
      text:
        "Our facilities use modern dental technology including intraoral scanners and advanced Smile Design software.",
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

        .about-page {
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          color: #073b4c;
          font-family: Arial, Helvetica, sans-serif;
        }

        .about-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .about-section {
          padding: 70px 30px;
          overflow: hidden;
        }

        button {
          font-family: inherit;
        }

        /* =====================================================
           SCROLL ANIMATION
        ===================================================== */

        .about-reveal {
          opacity: 0;

          transition:
            opacity .85s ease,
            transform .85s cubic-bezier(.16,1,.3,1);

          will-change:
            opacity,
            transform;
        }

        .about-reveal-left {
          transform: translateX(-70px);
        }

        .about-reveal-right {
          transform: translateX(70px);
        }

        .about-reveal-up {
          transform: translateY(50px);
        }

        .about-reveal.about-visible {
          opacity: 1;

          transform:
            translateX(0)
            translateY(0);
        }

        /* =====================================================
           HEADING ANIMATION
        ===================================================== */

        .about-heading-animation {
          opacity: 0;

          transform: translateY(35px);

          filter: blur(3px);

          transition:
            opacity .85s ease,
            transform .85s cubic-bezier(.16,1,.3,1),
            filter .85s ease;
        }

        .about-heading-animation.about-visible {
          opacity: 1;

          transform: translateY(0);

          filter: blur(0);
        }

        /* =====================================================
           COMMON HEADINGS
        ===================================================== */

        .about-section-heading-wrap {
          max-width: 800px;

          margin:
            0 auto 42px;

          text-align: center;
        }

        .about-tag {
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

        /* ONLY SIMPLE LINES - NO SPARKLE ICON */

        .about-tag::before,
        .about-tag::after {
          content: "";

          width: 26px;

          height: 2px;

          border-radius: 10px;

          background: #3ac13d;
        }

        .about-main-heading {
          margin: 0;

          color: #06394a;

          font-size:
            clamp(43px, 4vw, 60px);

          line-height: 1.1;

          letter-spacing: -1.7px;
        }

        .about-section-description {
          max-width: 720px;

          margin:
            17px auto 0;

          color: #627a84;

          font-size: 17px;

          line-height: 1.75;
        }

        /* =====================================================
           PAGE HERO
        ===================================================== */

        .about-page-hero {
          position: relative;

          min-height: 300px;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 60px 25px;

          text-align: center;

          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              #effaff,
              #ffffff
            );
        }

        .about-page-hero-content {
          position: relative;

          z-index: 2;

          animation:
            aboutHeroIntro
            1s
            cubic-bezier(.16,1,.3,1);
        }

        @keyframes aboutHeroIntro {

          from {
            opacity: 0;

            transform:
              translateY(35px);

            filter: blur(4px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);

            filter: blur(0);
          }

        }

        .about-page-hero small {
          color: #32b839;

          font-size: 14px;

          font-weight: 800;

          letter-spacing: 2.5px;

          text-transform: uppercase;
        }

        .about-page-hero h1 {
          margin:
            12px 0 0;

          color: #07394a;

          font-size:
            clamp(50px,5vw,72px);

          line-height: 1.05;

          letter-spacing: -2px;
        }

        .about-page-hero p {
          max-width: 620px;

          margin:
            17px auto 0;

          color: #637b85;

          font-size: 18px;

          line-height: 1.7;
        }

        /* =====================================================
           MAIN ABOUT
        ===================================================== */

        .about-intro-grid {
          display: grid;

          grid-template-columns:
            .92fr 1.08fr;

          gap: 65px;

          align-items: center;
        }

        .about-main-image {
          position: relative;
        }

        .about-main-image img {
          display: block;

          width: 100%;

          height: 520px;

          object-fit: cover;

          border-radius: 28px;

          background: #edf5f7;
        }

        .about-image-badge {
          position: absolute;

          right: -10px;

          bottom: 22px;

          padding:
            18px 23px;

          display: flex;

          align-items: center;

          gap: 10px;

          border-radius: 16px;

          background: #ffffff;

          color: #073b4c;

          font-size: 16px;

          font-weight: 800;

          box-shadow:
            0 16px 45px
            rgba(4,58,78,.14);
        }

        .about-image-badge svg {
          color: #42c33c;
        }

        .about-content .about-tag {
          justify-content: flex-start;
        }

        .about-content .about-tag::before {
          display: none;
        }

        .about-content h2 {
          margin:
            10px 0 18px;

          color: #073a4b;

          font-size:
            clamp(43px,4vw,59px);

          line-height: 1.08;

          letter-spacing: -1.6px;
        }

        .about-content p {
          margin:
            0 0 13px;

          color: #617983;

          font-size: 17px;

          line-height: 1.78;
        }

        /* =====================================================
           FEATURES
        ===================================================== */

        .about-feature-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 13px;

          margin:
            24px 0 27px;
        }

        .about-feature-item {
          display: flex;

          align-items: center;

          gap: 10px;

          padding:
            13px 15px;

          border-radius: 12px;

          background: #f6fcfe;

          color: #315561;

          font-size: 15px;

          font-weight: 700;
        }

        .about-feature-item svg {
          color: #40c23b;

          font-size: 17px;
        }

        /* =====================================================
           BUTTON
        ===================================================== */

        .about-whatsapp-btn {
          min-height: 56px;

          padding:
            0 27px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          border: none;

          border-radius: 50px;

          cursor: pointer;

          color: white;

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

          transition:
            .3s ease;
        }

        .about-whatsapp-btn:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 18px 36px
            rgba(35,179,47,.3);
        }

        /* =====================================================
           WHY CHOOSE US
        ===================================================== */

        .about-why-section {
          background: #f5fbfd;
        }

        .about-why-layout {
          display: grid;

          grid-template-columns:
            1.05fr .95fr;

          gap: 55px;

          align-items: center;
        }

        .about-why-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 18px;
        }

        .about-why-card {
          padding:
            27px 23px;

          text-align: center;

          border-radius: 19px;

          border:
            1px solid #e4eef1;

          background: #ffffff;

          transition:
            .35s ease;
        }

        .about-why-card:hover {
          transform:
            translateY(-7px);

          box-shadow:
            0 17px 40px
            rgba(5,64,86,.09);
        }

        /* CENTER ICON */

        .about-why-icon {
          width: 66px;

          height: 66px;

          margin:
            0 auto 16px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #ebfaff;

          color: #0ba7dc;

          font-size: 26px;

          transition:
            .35s ease;
        }

        .about-why-card:hover
        .about-why-icon {
          background: #efffee;

          color: #3bc23e;

          transform:
            translateY(-3px);
        }

        .about-why-card h3 {
          margin:
            0 0 9px;

          color: #073b4c;

          font-size: 21px;
        }

        .about-why-card p {
          margin: 0;

          color: #657d86;

          font-size: 15px;

          line-height: 1.7;
        }

        /* WHY IMAGE */

        .about-why-image {
          position: relative;
        }

        .about-why-image img {
          display: block;

          width: 100%;

          height: 570px;

          object-fit: cover;

          border-radius: 28px;

          background: #edf4f6;
        }

        .about-why-image-card {
          position: absolute;

          left: -18px;

          bottom: 25px;

          padding:
            19px 23px;

          border-radius: 16px;

          background: #ffffff;

          box-shadow:
            0 16px 45px
            rgba(4,58,78,.14);
        }

        .about-why-image-card strong {
          display: block;

          color: #073b4c;

          font-size: 17px;
        }

        .about-why-image-card span {
          display: block;

          margin-top: 4px;

          color: #728991;

          font-size: 13px;
        }

        /* =====================================================
           STATS
        ===================================================== */

        .about-stats-section {
          padding:
            55px 30px;

          background:
            linear-gradient(
              135deg,
              #06394b,
              #07516a
            );
        }

        .about-stats-grid {
          max-width: 1250px;

          margin: auto;

          display: grid;

          grid-template-columns:
            repeat(4,1fr);
        }

        .about-stat {
          position: relative;

          padding:
            18px;

          text-align: center;
        }

        .about-stat:not(:last-child)::after {
          content: "";

          position: absolute;

          right: 0;

          top: 15%;

          width: 1px;

          height: 70%;

          background:
            rgba(255,255,255,.18);
        }

        .about-stat strong {
          display: block;

          margin-bottom: 7px;

          color: #63dc4b;

          font-size: 38px;

          font-weight: 800;
        }

        .about-stat h4 {
          margin:
            0 0 6px;

          color: #ffffff;

          font-size: 18px;
        }

        .about-stat p {
          margin: 0;

          color:
            rgba(255,255,255,.65);

          font-size: 13px;

          line-height: 1.5;
        }

        /* =====================================================
           TEAM MESSAGE
        ===================================================== */

        .about-team-message {
          text-align: center;

          background: #ffffff;
        }

        .about-team-inner {
          max-width: 850px;

          margin: auto;
        }

        .about-team-icon {
          width: 72px;

          height: 72px;

          margin:
            0 auto 18px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #effaff;

          color: #0ba8dd;

          font-size: 29px;
        }

        .about-team-inner h2 {
          margin:
            0 0 15px;

          color: #07394a;

          font-size:
            clamp(40px,4vw,55px);

          line-height: 1.1;
        }

        .about-team-inner p {
          margin: 0;

          color: #617983;

          font-size: 18px;

          line-height: 1.8;
        }

        .about-team-actions {
          margin-top: 25px;

          display: flex;

          justify-content: center;
        }

        /* =====================================================
           LOCATION CTA
        ===================================================== */

        .about-location-section {
          padding:
            60px 30px;

          background: #f4fbfd;
        }

        .about-location-inner {
          max-width: 1250px;

          margin: auto;

          padding:
            37px 40px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 30px;

          border-radius: 24px;

          background: #ffffff;

          border:
            1px solid #e5eff2;

          box-shadow:
            0 14px 40px
            rgba(5,64,86,.06);
        }

        .about-location-content {
          display: flex;

          align-items: center;

          gap: 18px;
        }

        .about-location-icon {
          width: 58px;

          height: 58px;

          min-width: 58px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #efffee;

          color: #3dc33c;

          font-size: 23px;
        }

        .about-location-content h3 {
          margin:
            0 0 5px;

          color: #073b4c;

          font-size: 22px;
        }

        .about-location-content p {
          margin: 0;

          color: #6a8089;

          font-size: 15px;

          line-height: 1.6;
        }

        /* =====================================================
           FLOATING WHATSAPP
        ===================================================== */

        .about-floating-whatsapp {
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

          color: white;

          font-size: 28px;

          box-shadow:
            0 10px 30px
            rgba(0,0,0,.2);

          transition:
            .3s ease;
        }

        .about-floating-whatsapp:hover {
          transform:
            translateY(-5px)
            scale(1.06);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media(max-width:1100px) {

          .about-intro-grid,
          .about-why-layout {
            grid-template-columns: 1fr;
          }

          .about-intro-grid {
            gap: 45px;
          }

          .about-main-image,
          .about-why-image {
            max-width: 760px;

            margin: auto;
          }

          .about-why-image {
            order: -1;
          }

          .about-why-image img {
            height: 500px;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media(max-width:720px) {

          .about-section {
            padding:
              55px 18px;
          }

          .about-page-hero {
            min-height: 250px;

            padding:
              45px 18px;
          }

          .about-page-hero h1 {
            font-size: 46px;
          }

          .about-page-hero p {
            font-size: 16px;
          }

          .about-main-image img {
            height: 390px;
          }

          .about-image-badge {
            right: 10px;

            bottom: 12px;

            font-size: 14px;
          }

          .about-content {
            text-align: center;
          }

          .about-content .about-tag {
            justify-content: center;
          }

          .about-content .about-tag::before {
            display: block;
          }

          .about-content h2 {
            font-size: 41px;
          }

          .about-content p {
            font-size: 16px;
          }

          .about-feature-grid {
            grid-template-columns: 1fr;
          }

          .about-feature-item {
            justify-content: center;
          }

          .about-why-grid {
            grid-template-columns: 1fr;
          }

          .about-why-image img {
            height: 390px;
          }

          .about-why-image-card {
            left: 10px;

            bottom: 12px;
          }

          .about-stats-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .about-stat:nth-child(2)::after {
            display: none;
          }

          .about-stat:nth-child(3),
          .about-stat:nth-child(4) {
            border-top:
              1px solid
              rgba(255,255,255,.12);
          }

          .about-team-inner p {
            font-size: 16px;
          }

          .about-location-inner {
            padding:
              27px 20px;

            flex-direction: column;

            text-align: center;
          }

          .about-location-content {
            flex-direction: column;
          }

          .about-reveal-left {
            transform:
              translateX(-30px);
          }

          .about-reveal-right {
            transform:
              translateX(30px);
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media(max-width:480px) {

          .about-page-hero h1 {
            font-size: 40px;
          }

          .about-main-image img,
          .about-why-image img {
            height: 330px;
          }

          .about-content h2 {
            font-size: 36px;
          }

          .about-main-heading {
            font-size: 36px;
          }

          .about-stats-grid {
            grid-template-columns: 1fr;
          }

          .about-stat {
            border-bottom:
              1px solid
              rgba(255,255,255,.12);
          }

          .about-stat::after {
            display: none;
          }

          .about-stat:nth-child(3),
          .about-stat:nth-child(4) {
            border-top: none;
          }

          .about-stat:last-child {
            border-bottom: none;
          }

          .about-whatsapp-btn {
            width: 100%;
          }

          .about-floating-whatsapp {
            width: 55px;

            height: 55px;

            right: 15px;

            bottom: 15px;
          }

        }

      `}</style>

      <main className="about-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="about-page-hero">

          <div className="about-page-hero-content">

            <small>
              About My Dentist
            </small>

            <h1>
              About Us
            </h1>

            <p>
              Modern dental care with experienced
              professionals, advanced technology and
              personalized treatment in Bellandur and
              Koramangala.
            </p>

          </div>

        </section>

        {/* =================================================
            ABOUT INTRO
        ================================================= */}

        <section className="about-section">

          <div className="about-container about-intro-grid">

            {/* IMAGE */}

            <div
              className="
                about-main-image
                about-reveal
                about-reveal-left
              "
            >

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

              <div className="about-image-badge">

                <FaTooth />

                Quality Dental Care

              </div>

            </div>

            {/* CONTENT */}

            <div
              className="
                about-content
                about-reveal
                about-reveal-right
              "
            >

              <div className="about-tag">
                About Us
              </div>

              <h2 className="about-heading-animation">
                My Dentist Bangalore
              </h2>

              <p>
                Welcome to My Dentist, where your smile
                is our top priority. With branches
                conveniently located in Koramangala and
                Bellandur, we are dedicated to providing
                high-quality dental care tailored to
                meet your individual needs.
              </p>

              <p>
                At My Dentist, we specialize in a range
                of advanced dental services including
                Laser Dentistry, Cosmetic Dentistry,
                Implantology, Full Mouth Rehabilitation,
                Aligner Therapy, Root Canal Treatment,
                and Crown & Bridge procedures.
              </p>

              <p>
                Our state-of-the-art facilities are
                equipped with the latest technology,
                including intraoral scanners and
                advanced Smile Design software,
                ensuring precision and comfort in
                every treatment.
              </p>

              <p>
                We believe in transparent pricing, so
                you can be confident that you're
                receiving quality care without hidden
                costs. Our goal is to make your dental
                experience smooth and stress-free while
                helping you achieve a healthy,
                beautiful smile.
              </p>

              <p>
                Visit us at our Koramangala or
                Bellandur location to experience
                exceptional dental care that puts you
                first.
              </p>

              {/* FEATURES */}

              <div className="about-feature-grid">

                <div className="about-feature-item">
                  <FaCircleCheck />
                  Experienced Team
                </div>

                <div className="about-feature-item">
                  <FaCircleCheck />
                  Comprehensive Services
                </div>

                <div className="about-feature-item">
                  <FaCircleCheck />
                  State-of-the-Art Technology
                </div>

                <div className="about-feature-item">
                  <FaCircleCheck />
                  Emergency Dental Services
                </div>

              </div>

              <button
                type="button"
                className="about-whatsapp-btn"
                onClick={() =>
                  openWhatsApp(
                    "Hello My Dentist, I would like to book a dental appointment. Please share the available timings."
                  )
                }
              >

                <FaWhatsapp />

                Book Appointment

                <FaArrowRight />

              </button>

            </div>

          </div>

        </section>

        {/* =================================================
            WHY CHOOSE US
        ================================================= */}

        <section className="about-section about-why-section">

          <div className="about-container">

            <div
              className="
                about-section-heading-wrap
                about-heading-animation
              "
            >

              <div className="about-tag">
                Why Choose Us
              </div>

              <h2 className="about-main-heading">
                Quality Dental Care Focused Around You
              </h2>

              <p className="about-section-description">
                Experienced professionals, personalized
                treatment and modern dental technology
                help us provide a comfortable and
                patient-focused experience.
              </p>

            </div>

            <div className="about-why-layout">

              {/* CARDS */}

              <div className="about-why-grid">

                {whyChooseUs.map((item, index) => (

                  <article
                    key={item.title}
                    className={`about-why-card about-reveal ${
                      index % 2 === 0
                        ? "about-reveal-left"
                        : "about-reveal-right"
                    }`}
                  >

                    <div className="about-why-icon">
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

              {/* IMAGE */}

              <div
                className="
                  about-why-image
                  about-reveal
                  about-reveal-right
                "
              >

                <img
                  src="/images/why-choose-us.jpg"
                  alt="Why Choose My Dentist"
                  loading="lazy"
                  onError={(event) =>
                    handleImageError(
                      event,
                      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                    )
                  }
                />

                <div className="about-why-image-card">

                  <strong>
                    Patient-First Dentistry
                  </strong>

                  <span>
                    Care • Comfort • Technology
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            ANIMATED STATS
        ================================================= */}

        <section className="about-stats-section">

          <div
            className="
              about-stats-grid
              about-reveal
              about-reveal-up
            "
          >

            <div className="about-stat">

              <strong>
                <AnimatedCounter
                  end={100}
                  suffix="+"
                />
              </strong>

              <h4>
                Insurance Covered
              </h4>

              <p>
                Patient-focused dental treatment
                solutions.
              </p>

            </div>

            <div className="about-stat">

              <strong>
                <AnimatedCounter
                  end={5}
                  suffix="K+"
                />
              </strong>

              <h4>
                Treatments Completed
              </h4>

              <p>
                Dental care supported by experienced
                professionals.
              </p>

            </div>

            <div className="about-stat">

              <strong>
                <AnimatedCounter
                  end={5}
                  suffix="K+"
                />
              </strong>

              <h4>
                Happy Patients
              </h4>

              <p>
                Patient comfort remains central to
                our care.
              </p>

            </div>

            <div className="about-stat">

              <strong>
                <AnimatedCounter
                  end={10}
                  suffix="+"
                />
              </strong>

              <h4>
                Experienced Doctors
              </h4>

              <p>
                Professional dental expertise across
                different treatments.
              </p>

            </div>

          </div>

        </section>

        {/* =================================================
            TEAM DESCRIPTION
        ================================================= */}

        <section className="about-section about-team-message">

          <div
            className="
              about-team-inner
              about-reveal
              about-reveal-up
            "
          >

            <div className="about-team-icon">
              <FaUserDoctor />
            </div>

            <h2 className="about-heading-animation">
              A Team That Cares About Your Smile
            </h2>

            <p>
              We are a team of dentists, hygienists
              and receptionists who work together to
              ensure that you receive the dental
              treatment and care you require at the
              right time.
            </p>

            <div className="about-team-actions">

              <button
                type="button"
                className="about-whatsapp-btn"
                onClick={() =>
                  openWhatsApp(
                    "Hello My Dentist, I would like to speak with your dental team and book an appointment."
                  )
                }
              >

                <FaWhatsapp />

                Talk to Our Team

                <FaArrowRight />

              </button>

            </div>

          </div>

        </section>

        {/* =================================================
            LOCATION CTA
        ================================================= */}

        <section className="about-location-section">

          <div
            className="
              about-location-inner
              about-reveal
              about-reveal-up
            "
          >

            <div className="about-location-content">

              <div className="about-location-icon">
                <FaLocationDot />
              </div>

              <div>

                <h3>
                  Visit My Dentist
                </h3>

                <p>
                  Convenient dental care available in
                  Bellandur and Koramangala.
                </p>

              </div>

            </div>

            <button
              type="button"
              className="about-whatsapp-btn"
              onClick={() =>
                openWhatsApp(
                  "Hello My Dentist, I would like to visit your clinic. Please share the location and available appointment timings."
                )
              }
            >

              <FaWhatsapp />

              Contact on WhatsApp

            </button>

          </div>

        </section>

      </main>

      {/* =================================================
          FLOATING WHATSAPP
      ================================================= */}

      <button
        type="button"
        className="about-floating-whatsapp"
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

export default About;