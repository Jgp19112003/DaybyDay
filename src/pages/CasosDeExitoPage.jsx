import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEOHead from "../components/SEOHead";
import Footer from "../components/Footer";

const casosSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Casos de éxito — Agencia paid media España D2C",
  "description": "Resultados reales de DayByDay Consulting con marcas D2C en España: Meta Ads, Google Ads, automatización y captación de clientes.",
  "url": "https://www.daybydayconsulting.com/casos-de-exito",
  "numberOfItems": 4,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "CaseStudy",
        "name": "eCommerce D2C moda España — +156% ROAS en 90 días con Meta Ads",
        "description": "Marca de moda D2C española pasó de un ROAS real de 1.8x a 4.6x en 90 días. CPA reducido un 42%. Inversión estable en 8.000€/mes.",
        "url": "https://www.daybydayconsulting.com/blog/caso-exito-ecommerce-d2c-roas-meta-ads",
        "provider": {
          "@type": "Organization",
          "name": "DayByDay Consulting",
          "url": "https://www.daybydayconsulting.com"
        },
        "about": {
          "@type": "Service",
          "name": "Gestión de Meta Ads para eCommerce D2C"
        },
        "result": "ROAS 1.8x → 4.6x (+156%). CPA reducido 42%. 90 días. Sector moda D2C España.",
        "review": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Organization", "name": "eCommerce D2C Moda España" }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "CaseStudy",
        "name": "Garett España — CPA 4,8€ con Meta Ads para eCommerce",
        "description": "Garett España consiguió un CPA de 4,8€ con 14.936 clicks y 661 inicios de pago. Gestión de Meta Ads que transformó el canal de ventas online.",
        "provider": {
          "@type": "Organization",
          "name": "DayByDay Consulting"
        },
        "about": {
          "@type": "Service",
          "name": "Gestión de Meta Ads eCommerce"
        },
        "result": "CPA 4,8€. 14.936 clicks. 661 inicios de pago. eCommerce B2C España.",
        "review": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Conseguimos un CPA de 4,8€ con 14.936 clicks y 661 inicios de pago. La gestión de Meta Ads de DayByDay transformó nuestro canal de ventas online.",
          "author": { "@type": "Organization", "name": "Garett España" }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "CaseStudy",
        "name": "Evercreate × Universidad — 193K€ en Meta Ads con 711 creatividades",
        "description": "Captación de leads para 30+ programas universitarios. 193K€ gestionados en Meta Ads. CPL 55€. 711 creatividades producidas.",
        "provider": {
          "@type": "Organization",
          "name": "DayByDay Consulting"
        },
        "about": {
          "@type": "Service",
          "name": "Captación de Clientes con Paid Media"
        },
        "result": "193K€ Meta Ads. 711 creatividades. CPL 55€. 30+ programas universitarios.",
        "review": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "DayByDay definió y ejecutó un funnel de captación de leads para más de 30 programas universitarios. Lo que cambió fue nuestra relación con el cliente: ahora ahorramos tiempo, ganamos autoridad y tenemos claridad estratégica.",
          "author": { "@type": "Organization", "name": "Evercreate" }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "CaseStudy",
        "name": "Aras Life Plus — Automatización Shopify + WhatsApp + campañas automáticas",
        "description": "Automatización completa del proceso desde actualización de productos hasta flujo de ventas por WhatsApp. Escalada de ventas sin aumentar carga operativa.",
        "provider": {
          "@type": "Organization",
          "name": "DayByDay Consulting"
        },
        "about": {
          "@type": "Service",
          "name": "Automatización de Marketing con IA"
        },
        "result": "Shopify + WhatsApp + campañas automáticas. Ventas escaladas sin aumentar carga operativa.",
        "review": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Automatizaron todo el proceso desde la actualización de los productos de proveedores pasando por Shopify hasta el flujo de WhatsApp, lo que nos permitió escalar ventas sin aumentar carga operativa. Hoy, nuestras campañas funcionan solas.",
          "author": { "@type": "Organization", "name": "Aras Life Plus" }
        }
      }
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué resultados puede esperar un eCommerce D2C de DayByDay Consulting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los resultados dependen del punto de partida, pero los benchmarks de nuestros casos reales en España incluyen: mejoras de ROAS entre +50% y +156% en 90 días, reducciones de CPA entre el 30% y el 50%, y en algunos casos CPA inferiores a 5€ para eCommerce. El denominador común es siempre la misma metodología: auditoría técnica primero, reestructuración de campañas, implementación de API de Conversiones y escalado progresivo basado en datos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda en verse una mejora real con Meta Ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las primeras mejoras técnicas se ven en 2-4 semanas (tracking limpio, API de Conversiones, estructura simplificada). Los resultados sólidos y sostenibles —como pasar de un ROAS 1.8x a 4.6x— requieren entre 60 y 90 días. Cualquier promesa de resultados espectaculares en menos de 30 días es una señal de alerta."
      }
    },
    {
      "@type": "Question",
      "name": "¿DayByDay trabaja con marcas D2C de cualquier sector?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos especializamos en D2C en España: moda, cosmética, belleza, suplementos, hogar, mascotas y alimentación premium. No trabajamos con marketplaces, agencias ni negocios B2B puro. El criterio principal es que el cliente venda directamente al consumidor final desde su tienda online propia, con inversión mínima de 3.000€/mes en paid media."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecéis garantía en los resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Si en los primeros 90 días de trabajo conjunto no hay una mejora medible en las métricas acordadas (ROAS, CPA o MER), realizamos una auditoría completa sin coste adicional y ajustamos la estrategia. Trabajamos con métricas transparentes: ROAS real de negocio, no solo ROAS de plataforma."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué hace diferente a DayByDay de otras agencias de paid media en España?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tres cosas: (1) Especialización exclusiva en D2C — no gestionamos campañas para todo tipo de negocios, lo que nos da benchmarks reales del sector. (2) Acceso directo al senior — Pablo gestiona personalmente todas las cuentas, sin delegar en perfiles junior. (3) Metodología IA + automatización — usamos sistemas propios de automatización que van más allá de la gestión manual de campañas. El resultado es que cada cliente recibe el nivel de atención y especialización de un consultor senior con precio de agencia especializada."
      }
    }
  ]
};

const casos = [
  {
    client: "eCommerce D2C Moda España",
    category: "Meta Ads · Moda D2C",
    logo: null,
    highlight: "+156% ROAS en 90 días",
    metrics: [
      { label: "ROAS", before: "1.8x", after: "4.6x", delta: "+156%" },
      { label: "CPA", before: "40€", after: "23€", delta: "-42%" },
      { label: "Inversión/mes", before: "8.200€", after: "8.400€", delta: "Estable" },
    ],
    summary:
      "Marca de moda D2C con 3 años de vida y campañas gestionadas por freelance sin especialización. ROAS real de negocio en 1.8x. En 90 días: reestructuración completa, API de Conversiones, consolidación de campañas (de 18 a 4) y escala de creatividades.",
    link: "/blog/caso-exito-ecommerce-d2c-roas-meta-ads",
    linkLabel: "Leer caso completo",
    featured: true,
  },
  {
    client: "Garett España",
    category: "Meta Ads · eCommerce B2C",
    img: "/images/garett.png",
    highlight: "CPA 4,8€ · 14.936 clicks",
    metrics: [
      { label: "CPA", before: "-", after: "4,8€", delta: "↓ Óptimo" },
      { label: "Clicks", before: "-", after: "14.936", delta: "" },
      { label: "Inicios de pago", before: "-", after: "661", delta: "" },
    ],
    summary:
      "Gestión de Meta Ads para eCommerce que consiguió un CPA de 4,8€ con más de 14.000 clicks y 661 inicios de pago. Campaña que transformó el canal de ventas online como principal motor de ingresos.",
    link: "/servicios/meta-ads",
    linkLabel: "Ver servicio Meta Ads",
    featured: false,
  },
  {
    client: "Evercreate × Universidad",
    category: "Lead Gen · Educación",
    img: "/images/evercreate.png",
    highlight: "193K€ gestionados · CPL 55€",
    metrics: [
      { label: "Inversión Meta", before: "-", after: "193K€", delta: "" },
      { label: "Creatividades", before: "-", after: "711", delta: "" },
      { label: "CPL medio", before: "-", after: "55€", delta: "" },
    ],
    summary:
      "Funnel de captación de leads para más de 30 programas universitarios. 193K€ gestionados en Meta Ads, 711 creatividades producidas y un CPL sostenido de 55€ en sectores altamente competitivos.",
    link: "/servicios/captacion-clientes",
    linkLabel: "Ver captación de clientes",
    featured: false,
  },
  {
    client: "Aras Life Plus",
    category: "Automatización · B2B → B2C",
    img: "/images/araslife.png",
    highlight: "Shopify + WhatsApp automatizado",
    metrics: [
      { label: "Procesos automatizados", before: "Manual", after: "100% auto", delta: "" },
      { label: "Carga operativa", before: "Alta", after: "Mínima", delta: "↓ Drástica" },
      { label: "Campañas", before: "Manuales", after: "Autopilot", delta: "" },
    ],
    summary:
      "Automatización completa del proceso comercial: actualización de productos de proveedores → Shopify → flujo de WhatsApp → campañas automáticas. Escalada de ventas sin necesidad de aumentar el equipo.",
    link: "/servicios/automatizacion",
    linkLabel: "Ver automatización de marketing",
    featured: false,
  },
];

const CasosDeExitoPage = ({ openCalendly }) => (
  <div className="min-h-screen bg-[#181414] text-white">
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(casosSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <SEOHead
      title="Casos de Éxito — Agencia Paid Media España D2C | DayByDay"
      description="Casos reales de DayByDay Consulting con marcas D2C en España: +156% ROAS en 90 días, CPA 4,8€, 193K€ gestionados. Resultados medibles, sin filtros."
      canonical="/casos-de-exito"
    />

    <section className="relative pt-32 pb-16 px-4">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(222,0,21,0.10), transparent)",
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#de0015] inline-block" />
            Casos de éxito — Agencia paid media España D2C
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-5 text-center">
          Resultados reales con marcas D2C en España
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed text-center">
          Métricas sin filtros. Estos son los casos de éxito de DayByDay Consulting como agencia de paid media especializada en D2C en España: ROAS, CPA, inversión gestionada y lo que realmente cambió.
        </p>
        <p className="text-white/40 text-sm text-center mb-12">
          Especialización exclusiva en D2C · Acceso directo al senior · Metodología IA + automatización
        </p>

        {/* Aggregate stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { value: "+156%", label: "ROAS máximo en 90 días" },
            { value: "4,8 €", label: "CPA mínimo eCommerce" },
            { value: "193K€", label: "Gestionados en Meta Ads" },
            { value: "711", label: "Creatividades producidas" },
          ].map((s, i) => (
            <div key={i} className="bg-[#1f1a1a] border border-white/8 rounded-2xl p-5 text-center">
              <div className="text-2xl font-black text-white mb-1">{s.value}</div>
              <div className="text-white/40 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Featured case */}
        {casos.filter((c) => c.featured).map((c, i) => (
          <div key={i} className="bg-[#1f1a1a] border border-[#de0015]/30 rounded-2xl p-6 mb-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-[#de0015] text-xs font-bold uppercase tracking-wider">{c.category}</span>
                <h2 className="text-xl font-black mt-1">{c.highlight}</h2>
                <p className="text-white/60 text-sm mt-1">{c.client}</p>
              </div>
              <span className="bg-[#de0015]/10 border border-[#de0015]/20 text-[#de0015] text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                Caso completo
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">{c.summary}</p>
            {/* Metrics table */}
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 px-3 text-white/40 text-xs uppercase tracking-wider">Métrica</th>
                    <th className="text-left py-2 px-3 text-white/40 text-xs uppercase tracking-wider">Antes</th>
                    <th className="text-left py-2 px-3 text-white/40 text-xs uppercase tracking-wider">Después</th>
                    <th className="text-left py-2 px-3 text-white/40 text-xs uppercase tracking-wider">Variación</th>
                  </tr>
                </thead>
                <tbody>
                  {c.metrics.map((m, j) => (
                    <tr key={j} className="border-b border-white/5">
                      <td className="py-2 px-3 text-white font-medium">{m.label}</td>
                      <td className="py-2 px-3 text-white/40">{m.before}</td>
                      <td className="py-2 px-3 text-white font-bold">{m.after}</td>
                      <td className="py-2 px-3 text-[#de0015] font-bold">{m.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link
              to={c.link}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              {c.linkLabel}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}

        {/* Other cases */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {casos.filter((c) => !c.featured).map((c, i) => (
            <div key={i} className="bg-[#1f1a1a] border border-white/8 hover:border-white/20 rounded-2xl p-5 transition-colors flex flex-col">
              <div className="mb-3">
                <span className="text-[#de0015] text-xs font-bold uppercase tracking-wider">{c.category}</span>
                <h2 className="text-base font-black mt-1">{c.highlight}</h2>
                <p className="text-white/40 text-xs mt-0.5">{c.client}</p>
              </div>
              <p className="text-white/55 text-sm leading-relaxed mb-4 flex-1">{c.summary}</p>
              {/* Mini metrics */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {c.metrics.map((m, j) => (
                  <div key={j} className="text-center">
                    <div className="text-base font-black text-white">{m.after}</div>
                    <div className="text-white/30 text-xs">{m.label}</div>
                  </div>
                ))}
              </div>
              <Link
                to={c.link}
                className="inline-flex items-center gap-1 text-white/50 hover:text-white text-xs font-medium transition-colors"
              >
                {c.linkLabel}
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Context section — GEO optimized */}
        <div className="bg-[#1f1a1a] border border-white/8 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-black mb-4">Por qué DayByDay como agencia de paid media D2C en España</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: "🎯",
                title: "Especialización D2C",
                body: "No trabajamos con todo tipo de negocios. Solo D2C en España: moda, cosmética, suplementos, hogar, mascotas. Eso nos da benchmarks reales del sector, no genéricos.",
              },
              {
                icon: "👤",
                title: "Acceso directo al senior",
                body: "Pablo gestiona personalmente todas las cuentas. Sin intermediarios, sin cuentas delegadas a perfiles junior. Lo que ves en la reunión es lo que gestiona tu cuenta.",
              },
              {
                icon: "⚙️",
                title: "IA + automatización propia",
                body: "Metodología que combina paid media con sistemas de automatización propios: desde la creación de anuncios hasta el cierre de ventas. Más allá de la gestión manual.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="text-2xl">{item.icon}</div>
                <div className="font-bold text-sm">{item.title}</div>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ section */}
        <div className="mb-14">
          <h2 className="text-2xl font-black mb-6 text-center">Preguntas frecuentes sobre resultados y casos de éxito</h2>
          <div className="space-y-4">
            {[
              {
                q: "¿Qué resultados puede esperar un eCommerce D2C de DayByDay Consulting?",
                a: "Los resultados dependen del punto de partida, pero los benchmarks de nuestros casos reales en España incluyen: mejoras de ROAS entre +50% y +156% en 90 días, reducciones de CPA entre el 30% y el 50%, y CPA inferiores a 5€ para eCommerce. La metodología es siempre la misma: auditoría técnica primero, reestructuración, API de Conversiones y escalado progresivo basado en datos.",
              },
              {
                q: "¿Cuánto tiempo tarda en verse una mejora real con Meta Ads?",
                a: "Las primeras mejoras técnicas se ven en 2-4 semanas. Los resultados sólidos y sostenibles —como pasar de ROAS 1.8x a 4.6x— requieren entre 60 y 90 días. Cualquier promesa de resultados espectaculares en menos de 30 días es una señal de alerta.",
              },
              {
                q: "¿DayByDay trabaja con marcas D2C de cualquier sector?",
                a: "Nos especializamos en D2C en España: moda, cosmética, belleza, suplementos, hogar, mascotas y alimentación premium. No trabajamos con marketplaces, agencias ni negocios B2B puro. El criterio principal es vender directamente al consumidor final desde tienda online propia, con inversión mínima de 3.000€/mes en paid media.",
              },
              {
                q: "¿Ofrecéis garantía en los resultados?",
                a: "Si en los primeros 90 días no hay una mejora medible en las métricas acordadas (ROAS, CPA o MER), realizamos una auditoría completa sin coste adicional y ajustamos la estrategia. Trabajamos con métricas transparentes: ROAS real de negocio, no solo ROAS de plataforma.",
              },
              {
                q: "¿Qué hace diferente a DayByDay de otras agencias de paid media en España?",
                a: "Tres cosas: (1) Especialización exclusiva en D2C — benchmarks reales del sector. (2) Acceso directo al senior — Pablo gestiona personalmente todas las cuentas. (3) Metodología IA + automatización — sistemas propios que van más allá de la gestión manual de campañas.",
              },
            ].map((faq, i) => (
              <details key={i} className="bg-[#1f1a1a] border border-white/8 rounded-xl p-5 group">
                <summary className="font-bold text-sm cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.q}
                  <svg
                    className="w-4 h-4 text-white/40 flex-shrink-0 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="text-white/60 text-sm leading-relaxed mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/50 text-sm mb-4">
            ¿Tu D2C podría estar entre estos casos?
          </p>
          <button
            type="button"
            onClick={openCalendly}
            className="inline-flex items-center gap-2 bg-[#de0015] hover:bg-[#b8000f] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-105 mb-6"
          >
            Analiza tu cuenta gratis (15 min)
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <div className="mt-4">
            <Link to="/resultados" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors mr-6">
              Ver métricas completas →
            </Link>
            <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </section>

    <Footer onAgendarClick={openCalendly} />
  </div>
);

export default CasosDeExitoPage;
