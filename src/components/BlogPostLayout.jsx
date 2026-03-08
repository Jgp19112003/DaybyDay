import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEOHead from "./SEOHead";
import FaqSection from "./FaqSection";
import Footer from "./Footer";

const BlogPostLayout = ({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  readingTime = "5 min",
  category = "Marketing Digital",
  faqs = [],
  openCalendly,
  children,
}) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": "DayByDay Consulting",
      "url": "https://www.daybydayconsulting.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "DayByDay Consulting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.daybydayconsulting.com/favicon.svg",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.daybydayconsulting.com/blog/${slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.daybydayconsulting.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.daybydayconsulting.com/blog" },
      { "@type": "ListItem", "position": 3, "name": title, "item": `https://www.daybydayconsulting.com/blog/${slug}` },
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <SEOHead
        title={title}
        description={description}
        canonical={`/blog/${slug}`}
      />

      <div className="min-h-screen bg-[#0f0c0c] text-white">
        {/* Hero */}
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-2xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white/30 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white/60 transition-colors">Inicio</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/50 truncate">{category}</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/8 border border-white/10 text-white/60 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {category}
              </span>
              <span className="text-white/30 text-xs">{readingTime} de lectura</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-6">
              {title}
            </h1>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex items-center gap-3 pb-8 border-b border-white/8">
              <div className="w-8 h-8 rounded-full bg-[#de0015] flex items-center justify-center text-xs font-bold">
                DB
              </div>
              <div>
                <div className="text-sm font-semibold">DayByDay Consulting</div>
                <div className="text-white/40 text-xs">{datePublished}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="max-w-2xl mx-auto px-4 pb-16">
          <div className="prose-custom">
            {children}
          </div>
        </article>

        {/* FAQ */}
        {faqs.length > 0 && <FaqSection faqs={faqs} title="Preguntas frecuentes" />}

        {/* CTA */}
        <section className="bg-[#181414] py-16 px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-black mb-3">
            ¿Quieres aplicar esto en tu negocio?
          </h2>
          <p className="text-white/60 text-sm max-w-md mx-auto mb-7">
            En 30 minutos analizamos tu situación y te decimos exactamente qué acciones tendrían más impacto.
          </p>
          <button
            type="button"
            onClick={() => {
              if (typeof openCalendly === "function") {
                openCalendly();
              } else {
                const url = "https://calendly.com/contact-daybydayconsulting/30min";
                if (window.Calendly?.initPopupWidget) {
                  window.Calendly.initPopupWidget({ url });
                } else {
                  window.open(url, "_blank", "noopener,noreferrer");
                }
              }
            }}
            className="inline-block bg-white text-black font-bold px-8 py-4 rounded-full text-sm hover:bg-white/90 transition-colors cursor-pointer"
          >
            Reservar llamada gratuita
          </button>

          <div className="mt-8">
            <Link to="/blog" className="text-white/40 hover:text-white/70 text-sm transition-colors">
              ← Ver todos los artículos
            </Link>
          </div>
        </section>
      </div>

      <Footer onAgendarClick={openCalendly} />
    </>
  );
};

export default BlogPostLayout;
