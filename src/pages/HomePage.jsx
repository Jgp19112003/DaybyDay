import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Inicio from "../components/Inicio";
import Sectores from "../components/Sectores";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

gsap.registerPlugin(ScrollTrigger, SplitText);

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DayByDay Consulting",
  "url": "https://www.daybydayconsulting.com",
  "logo": "https://www.daybydayconsulting.com/images/logo-daybyday.png",
  "description": "Agencia de marketing con IA y automatización especializada en paid media, automatización de procesos y estrategia digital para empresas B2C y D2C en España.",
  "areaServed": "ES",
  "foundingDate": "2022",
  "knowsAbout": [
    "Paid Media",
    "Meta Ads",
    "Google Ads",
    "Automatización de Marketing",
    "CRM",
    "Growth Marketing",
    "Marketing Digital",
    "Estrategia Digital"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/daybyday-consulting"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://www.daybydayconsulting.com",
    "availableLanguage": "Spanish"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Marketing Digital",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paid Media Strategy",
          "url": "https://www.daybydayconsulting.com/servicios/paid-media"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automatización de Marketing con IA",
          "url": "https://www.daybydayconsulting.com/servicios/automatizacion"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Meta Ads",
          "url": "https://www.daybydayconsulting.com/servicios/meta-ads"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Google Ads",
          "url": "https://www.daybydayconsulting.com/servicios/google-ads"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Estrategia de Marketing",
          "url": "https://www.daybydayconsulting.com/servicios/estrategia"
        }
      }
    ]
  }
};

const HomePage = ({ onNavScroll, openCalendly }) => {
  return (
    <>
      <SEOHead
        title="Agencia de Marketing con IA y Automatización para Empresas B2C y D2C"
        description="DayByDay Consulting: agencia de marketing con IA especializada en paid media, Meta Ads, Google Ads y automatización de procesos. Más clientes, mismo equipo. Consulta gratuita."
        canonical="/"
        schema={organizationSchema}
      />
      <Inicio />
      <Sectores onAgendarClick={openCalendly} />
      <Nosotros onAgendarClick={openCalendly} />
      <Footer onAgendarClick={openCalendly} />
    </>
  );
};

export default HomePage;
