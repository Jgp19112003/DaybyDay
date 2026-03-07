import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEOHead from "../components/SEOHead";
import Footer from "../components/Footer";

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Casos de éxito y testimonios — DayByDay Consulting",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Aras Life Plus" },
        "reviewBody": "Automatizaron todo el proceso desde la actualización de los productos de proveedores pasando por Shopify hasta el flujo de WhatsApp, lo que nos permitió escalar ventas sin aumentar carga operativa. Hoy, nuestras campañas funcionan solas.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "itemReviewed": { "@type": "Service", "name": "Automatización de Marketing", "provider": { "@type": "Organization", "name": "DayByDay Consulting" } },
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Cartri" },
        "reviewBody": "Antes teníamos una web desactualizada y ahora contamos con un ecosistema automatizado de ventas y remarketing que genera resultados constantes. Siempre atentos, rápidos y claros.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "itemReviewed": { "@type": "Service", "name": "Marketing para eCommerce", "provider": { "@type": "Organization", "name": "DayByDay Consulting" } },
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Garett España" },
        "reviewBody": "Conseguimos un CPA de 4,8€ con 14.936 clicks y 661 inicios de pago. La gestión de Meta Ads de DayByDay transformó nuestro canal de ventas online.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "itemReviewed": { "@type": "Service", "name": "Gestión de Meta Ads", "provider": { "@type": "Organization", "name": "DayByDay Consulting" } },
      },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Evercreate" },
        "reviewBody": "DayByDay definió y ejecutó un funnel de captación de leads para más de 30 programas universitarios. Lo que cambió fue nuestra relación con el cliente: ahora ahorramos tiempo, ganamos autoridad y tenemos claridad estratégica.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "itemReviewed": { "@type": "Service", "name": "Captación de Clientes con Paid Media", "provider": { "@type": "Organization", "name": "DayByDay Consulting" } },
      },
    },
  ],
};

const ResultadosPage = ({ openCalendly }) => (
  <div className="min-h-screen bg-[#181414] text-white">
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
    </Helmet>
    <SEOHead
      title="Resultados y Casos de Éxito de Clientes"
      description="Casos reales de clientes de DayByDay Consulting: métricas de Meta Ads, Google Ads, automatización y captación. Garett, Evercreate, Aras Life Plus y más."
      canonical="/resultados"
    />

    <section className="relative pt-32 pb-20 px-4">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(222,0,21,0.10), transparent)",
        }}
      />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#de0015] inline-block" />
          Resultados
        </span>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-5">
          Lo que logramos para nuestros clientes
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Métricas reales, sin filtros. Estos son los resultados que hemos conseguido para empresas B2C, D2C y B2B en España.
        </p>

        {/* Stats highlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "4,8 €", label: "CPA eCommerce Meta Ads" },
            { value: "193K€", label: "Gestionados en Meta" },
            { value: "711", label: "Creatividades producidas" },
            { value: "84M", label: "Impresiones generadas" },
          ].map((s, i) => (
            <div key={i} className="bg-[#1f1a1a] border border-white/8 rounded-2xl p-5 text-center">
              <div className="text-2xl font-black text-white mb-1">{s.value}</div>
              <div className="text-white/40 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
          {[
            {
              name: "Garett España",
              img: "/images/garett.png",
              type: "eCommerce B2C",
              highlight: "CPA 4,8€ · 14.936 clicks · 661 inicios de pago",
              route: "/servicios/meta-ads",
            },
            {
              name: "Evercreate × Universidad",
              img: "/images/evercreate.png",
              type: "Lead Gen B2C",
              highlight: "193K€ Meta · 711 creatividades · CPL 55€",
              route: "/servicios/captacion-clientes",
            },
            {
              name: "Aras Life Plus",
              img: "/images/araslife.png",
              type: "B2B → B2C automatizado",
              highlight: "Shopify + WhatsApp + campañas automáticas",
              route: "/servicios/automatizacion",
            },
            {
              name: "Cartri",
              img: "/images/cartri.png",
              type: "Startup B2C",
              highlight: "Ecosistema de ventas y remarketing automatizado",
              route: "/servicios/ecommerce",
            },
          ].map((c, i) => (
            <Link key={i} to={c.route} className="bg-[#1f1a1a] border border-white/8 hover:border-white/20 rounded-2xl p-5 flex items-start gap-4 transition-colors group">
              <img src={c.img} alt={c.name} className="w-10 h-10 rounded-full bg-white p-1 object-contain flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-sm group-hover:text-white transition-colors">{c.name}</div>
                <div className="text-white/40 text-xs mt-0.5">{c.type}</div>
                <div className="text-white/60 text-xs mt-2">{c.highlight}</div>
              </div>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={openCalendly}
          className="inline-flex items-center gap-2 bg-[#de0015] hover:bg-[#b8000f] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-105 mb-6"
        >
          Quiero resultados así para mi negocio
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        <div className="mt-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </section>

    <Footer onAgendarClick={openCalendly} />
  </div>
);

export default ResultadosPage;
