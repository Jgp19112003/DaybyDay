import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Inicio from "../components/Inicio";
import Sectores from "../components/Sectores";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

gsap.registerPlugin(ScrollTrigger, SplitText);

const websiteSchema = {
  "@type": "WebSite",
  "name": "DayByDay Consulting",
  "url": "https://www.daybydayconsulting.com",
  "description": "Consultor especializado en paid media para eCommerce D2C en España. Meta Ads, Google Ads y automatización de marketing con IA.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.daybydayconsulting.com/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const organizationSchema = {
  "@type": ["Organization", "ProfessionalService"],
  "name": "DayByDay Consulting",
  "url": "https://www.daybydayconsulting.com",
  "logo": "https://www.daybydayconsulting.com/images/logo-daybyday.png",
  "description": "Consultoría especializada en paid media para eCommerce D2C en España. Meta Ads, Google Ads y automatización de marketing con IA. El consultor trabaja directamente con cada cliente, sin account managers intermediarios.",
  "areaServed": "ES",
  "foundingDate": "2022",
  "founder": {
    "@type": "Person",
    "name": "Pablo Santirso",
    "jobTitle": "Consultor de Paid Media"
  },
  "knowsAbout": [
    "Paid Media",
    "Meta Ads",
    "Google Ads",
    "Automatización de Marketing",
    "eCommerce D2C",
    "CRM",
    "Growth Marketing",
    "Marketing Digital",
    "Consultor Paid Media España",
    "Agencia Meta Ads España"
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
    "name": "Servicios de Paid Media para eCommerce D2C",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paid Media Strategy para eCommerce D2C",
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
          "name": "Gestión de Meta Ads para eCommerce",
          "url": "https://www.daybydayconsulting.com/servicios/meta-ads"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Captación de Clientes con Paid Media",
          "url": "https://www.daybydayconsulting.com/servicios/captacion-clientes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marketing para eCommerce D2C",
          "url": "https://www.daybydayconsulting.com/servicios/ecommerce"
        }
      }
    ]
  }
};

const homepageFaqSchema = {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es DayByDay Consulting y en qué se especializa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DayByDay es una consultoría especializada en paid media para eCommerce D2C en España. Gestionamos Meta Ads, Google Ads y automatización de marketing con IA. A diferencia de las agencias tradicionales, el consultor trabaja directamente con cada cliente sin account managers intermediarios, con transparencia total de métricas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia a DayByDay de una agencia de marketing generalista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DayByDay solo hace paid media para eCommerce D2C. No somos una agencia 360. El consultor trabaja directamente con el cliente, con transparencia total de métricas y usando IA y automatización en el núcleo de todos los servicios. Sin juniors, sin black boxes, sin excusas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué resultados ha obtenido DayByDay con sus clientes en España?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Casos reales: Garett España (CPA 4,8€ con 14.936 clicks en Meta Ads), Evercreate × Universidad privada (253.679€ gestionados en paid media, CTR Google Ads 10,35%), Aras Life Plus (proceso de ventas 100% automatizado con Shopify + WhatsApp). Todos los resultados son medibles y se reportan semanalmente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta contratar a DayByDay como consultor de paid media en España?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los servicios de gestión de paid media parten desde 800€/mes según el volumen de inversión y los canales activos. El presupuesto mínimo recomendado en Meta Ads es de 1.500€/mes. Reserva una llamada gratuita de 30 minutos para recibir una propuesta personalizada según tus objetivos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con qué tipos de eCommerce trabaja DayByDay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos con marcas D2C (Direct-to-Consumer) en España con facturación entre 100K y 2M€ anuales. Sectores principales: moda y accesorios, salud y bienestar, hogar y lifestyle, electrónica de consumo. Nos especializamos en marcas que venden directamente al consumidor final, principalmente a través de Shopify."
      }
    }
  ]
};

const HomePage = ({ onNavScroll, openCalendly }) => {
  return (
    <>
      <SEOHead
        title="Consultor Paid Media para eCommerce D2C en España | Meta Ads y Google Ads"
        description="DayByDay: consultor especializado en paid media para eCommerce D2C en España. Meta Ads, Google Ads y automatización con IA. El consultor trabaja directamente contigo, sin intermediarios. Consulta gratuita."
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@graph": [websiteSchema, organizationSchema, homepageFaqSchema],
        }}
      />
      <Inicio />
      <Sectores onAgendarClick={openCalendly} />
      <Nosotros onAgendarClick={openCalendly} />
      <Footer onAgendarClick={openCalendly} />
    </>
  );
};

export default HomePage;
