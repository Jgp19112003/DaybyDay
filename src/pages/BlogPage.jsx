import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import Footer from "../components/Footer";

const BlogPage = ({ openCalendly }) => (
  <div className="min-h-screen bg-[#181414] text-white">
    <SEOHead
      title="Blog de Marketing Digital e IA"
      description="Artículos, guías y casos de estudio sobre marketing con IA, automatización, Meta Ads y captación de clientes. Publicado por DayByDay Consulting."
      canonical="/blog"
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
          Blog
        </span>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-5">
          Marketing con IA, automatización y resultados reales
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">
          Guías prácticas, casos de estudio y estrategias de marketing digital que usamos con nuestros clientes. Contenido sin humo, enfocado en resultados.
        </p>
        <div className="bg-[#1f1a1a] border border-white/10 rounded-2xl p-10 text-center">
          <p className="text-white/50 text-sm mb-2">Artículos en camino</p>
          <p className="text-white/30 text-xs">
            Estamos publicando contenido estratégico sobre Meta Ads, automatización e IA para marketing. Vuelve pronto.
          </p>
        </div>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </section>

    <Footer onAgendarClick={openCalendly} />
  </div>
);

export default BlogPage;
