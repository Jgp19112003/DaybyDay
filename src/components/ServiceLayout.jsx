import { Link } from "react-router-dom";
import Footer from "./Footer";

const ServiceLayout = ({ openCalendly, children }) => {
  return (
    <div className="min-h-screen bg-[#181414] text-white">
      {children}
      <Footer onAgendarClick={openCalendly} />
    </div>
  );
};

// ── Shared sub-components used by all service pages ──────────────────────────

export const ServiceHero = ({ badge, h1, subtitle, cta, openCalendly }) => (
  <section className="relative bg-[#181414] pt-32 pb-20 px-4 overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(222,0,21,0.12), transparent)",
      }}
    />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      {badge && (
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#de0015] inline-block" />
          {badge}
        </span>
      )}
      <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-black leading-[1.08] mb-5">
        {h1}
      </h1>
      <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          type="button"
          onClick={openCalendly}
          className="inline-flex items-center justify-center gap-2 bg-[#de0015] hover:bg-[#b8000f] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-105"
        >
          {cta}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200"
        >
          Ver todos los servicios
        </Link>
      </div>
    </div>
  </section>
);

export const PainPoints = ({ title = "El problema que resolvemos", items }) => (
  <section className="bg-[#0f0c0c] py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-black text-center mb-10">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#1a1616] border border-white/8 rounded-2xl p-6"
          >
            <div className="text-2xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-base mb-2">{item.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const HowWeDoIt = ({ title = "Qué hacemos por ti", steps }) => (
  <section className="bg-[#181414] py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-black text-center mb-10">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-[#1f1a1a] border border-white/8 rounded-2xl p-6"
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#de0015] text-white text-xs font-black flex items-center justify-center">
              {i + 1}
            </span>
            <div>
              <h3 className="font-bold mb-1">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ResultsBar = ({ stats }) => (
  <section className="bg-[#0f0c0c] py-14 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-black text-center mb-10">
        Resultados reales de nuestros clientes
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">
              {stat.value}
            </div>
            <div className="text-white/50 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ServiceCTA = ({ headline, sub, openCalendly }) => (
  <section className="bg-[#181414] py-20 px-4">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl sm:text-4xl font-black mb-4">{headline}</h2>
      <p className="text-white/60 mb-8 text-base leading-relaxed">{sub}</p>
      <button
        type="button"
        onClick={openCalendly}
        className="inline-flex items-center gap-2 bg-[#de0015] hover:bg-[#b8000f] text-white font-bold px-10 py-4 rounded-xl text-base transition-all duration-200 hover:scale-105"
      >
        Agendar llamada gratuita
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      <p className="text-white/30 text-xs mt-4">Sin compromiso · 30 minutos · Diagnóstico gratuito</p>
    </div>
  </section>
);

export default ServiceLayout;
