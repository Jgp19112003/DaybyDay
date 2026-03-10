import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import Footer from "../components/Footer";

const posts = [
  {
    slug: "que-es-roas-meta-ads",
    title: "Qué es el ROAS y cómo mejorarlo en Meta Ads",
    excerpt: "El ROAS (Return on Ad Spend) es la métrica más importante en publicidad digital. Te explicamos qué significa, cómo calcularlo y qué acciones concretas mejoran el ROAS en Meta Ads.",
    category: "Meta Ads",
    date: "8 mar 2026",
    readingTime: "6 min",
  },
  {
    slug: "meta-ads-vs-google-ads",
    title: "Meta Ads vs Google Ads: cuál elegir para tu negocio en 2026",
    excerpt: "¿Meta Ads o Google Ads? La respuesta depende de tu modelo de negocio y el estado de la demanda de tu producto. Comparativa directa, casos de uso y la estrategia full-funnel que combina ambas.",
    category: "Paid Media",
    date: "8 mar 2026",
    readingTime: "7 min",
  },
  {
    slug: "como-reducir-cpa-ecommerce",
    title: "Cómo reducir el CPA en Meta Ads para eCommerce — Guía paso a paso",
    excerpt: "Un CPA alto es el problema más común en las cuentas de Meta Ads que auditamos. Te explicamos las 6 causas principales y el plan de acción semana a semana para reducirlo.",
    category: "Meta Ads",
    date: "8 mar 2026",
    readingTime: "8 min",
  },
  {
    slug: "estrategia-full-funnel-meta-ads-d2c",
    title: "Estrategia Full-Funnel de Meta Ads para marcas D2C — Guía completa",
    excerpt: "Aprende a estructurar tus campañas de Meta Ads en tres fases (TOFU, MOFU, BOFU) para captar audiencia fría, cultivarla y convertirla en clientes. Con casos reales y benchmarks de presupuesto.",
    category: "Meta Ads",
    date: "10 mar 2026",
    readingTime: "8 min",
  },
  {
    slug: "automatizacion-marketing-que-es",
    title: "Automatización de marketing: qué es, cómo funciona y por qué implementarla",
    excerpt: "La automatización de marketing permite escalar tu captación de clientes sin aumentar tu equipo. Explicamos qué es, cómo funciona, qué herramientas usar y cómo implantarla paso a paso.",
    category: "Automatización",
    date: "10 mar 2026",
    readingTime: "7 min",
  },
  {
    slug: "tareas-marketing-automatizar",
    title: "Las 7 tareas de marketing que deberías automatizar ahora mismo",
    excerpt: "Descubre las 7 tareas de marketing que más tiempo consumen y que puedes automatizar con las herramientas adecuadas para escalar tu negocio sin aumentar tu equipo.",
    category: "Automatización",
    date: "10 mar 2026",
    readingTime: "6 min",
  },
  {
    slug: "agencia-vs-inhouse-vs-ia",
    title: "Agencia vs In-House vs IA: el desglose honesto de costes y resultados",
    excerpt: "¿Contratas una agencia de marketing, construyes un equipo interno o usas IA? Comparativa honesta de costes, ventajas y desventajas de cada opción para que tomes la decisión correcta.",
    category: "Estrategia",
    date: "10 mar 2026",
    readingTime: "7 min",
  },
  {
    slug: "estrategias-puja-meta-ads",
    title: "Estrategias de puja en Meta Ads 2026: cuál elegir según tu objetivo",
    excerpt: "Guía completa sobre las estrategias de puja en Meta Ads: automático, Cost Cap, Bid Cap, ROAS mínimo y Value Optimization. Cuándo usar cada una y cómo afectan al rendimiento.",
    category: "Meta Ads",
    date: "10 mar 2026",
    readingTime: "7 min",
  },
  {
    slug: "escalar-meta-ads",
    title: "Cómo escalar Meta Ads de 100€ a 1.000€/día sin quemar el presupuesto",
    excerpt: "Guía paso a paso para escalar campañas de Meta Ads sin arruinar el ROAS: escala vertical, horizontal, Advantage+, señales de saturación y el sistema de creatividades rotativas.",
    category: "Meta Ads",
    date: "10 mar 2026",
    readingTime: "8 min",
  },
  {
    slug: "embudo-captacion-clientes",
    title: "Cómo construir un embudo de captación de clientes automatizado",
    excerpt: "Aprende a construir un sistema de captación de clientes que funciona 24/7: anuncios, landing page, secuencia de emails, lead scoring y CRM conectado. Paso a paso con herramientas reales.",
    category: "Automatización",
    date: "10 mar 2026",
    readingTime: "8 min",
  },
  {
    slug: "preguntas-contratar-agencia-paid-media",
    title: "10 preguntas que debes hacer antes de contratar una agencia de paid media",
    excerpt: "Antes de firmar con una agencia de Meta Ads o paid media, estas son las 10 preguntas que separan una buena agencia de una que te va a hacer perder tiempo y dinero.",
    category: "Estrategia",
    date: "10 mar 2026",
    readingTime: "6 min",
  },
  {
    slug: "ugc-meta-ads",
    title: "Cómo usar UGC para potenciar tus Meta Ads y reducir el CPM",
    excerpt: "El UGC (User Generated Content) es el formato publicitario con mejor rendimiento en Meta Ads en 2026. Aprende a conseguirlo, producirlo y escalarlo para reducir el CPM y mejorar el ROAS.",
    category: "Meta Ads",
    date: "10 mar 2026",
    readingTime: "6 min",
  },
  {
    slug: "ia-marketing-digital",
    title: "IA en marketing digital: cómo usamos la IA para superar a las agencias tradicionales",
    excerpt: "Cómo la inteligencia artificial está transformando el marketing digital en 2026 y cómo las agencias nativas en IA la usan para conseguir mejores resultados con menos recursos.",
    category: "IA y Automatización",
    date: "10 mar 2026",
    readingTime: "7 min",
  },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog de DayByDay Consulting",
  "description": "Artículos sobre marketing digital, Meta Ads, automatización y captación de clientes.",
  "url": "https://www.daybydayconsulting.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "DayByDay Consulting",
    "url": "https://www.daybydayconsulting.com",
  },
};

const BlogPage = ({ openCalendly }) => (
  <div className="min-h-screen bg-[#181414] text-white">
    <SEOHead
      title="Blog de Marketing Digital e IA — DayByDay Consulting"
      description="Guías prácticas, comparativas y casos de estudio sobre Meta Ads, Google Ads, automatización de marketing y captación de clientes. Sin humo, enfocado en resultados."
      canonical="/blog"
      schema={blogSchema}
    />

    {/* Top bar with logo */}
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#181414]/80 backdrop-blur-sm border-b border-white/5">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="text-white font-black text-lg leading-none">Day</span>
        <span className="text-[#de0015] font-black text-lg leading-none">by</span>
        <span className="text-white font-black text-lg leading-none">Day</span>
      </Link>
    </div>

    <section className="relative pt-32 pb-16 px-4">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(222,0,21,0.10), transparent)",
        }}
      />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#de0015] inline-block" />
            Blog
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-5">
            Marketing con IA, automatización y resultados reales
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Guías prácticas y estrategias de marketing digital que usamos con nuestros clientes. Sin humo, enfocado en resultados.
          </p>
        </div>

        {/* Article list */}
        <div className="space-y-4">
          {posts.map(({ slug, title, excerpt, category, date, readingTime }) => (
            <Link
              key={slug}
              to={`/blog/${slug}`}
              className="block bg-[#1f1a1a] border border-white/8 hover:border-white/20 rounded-2xl p-6 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white/8 border border-white/10 text-white/50 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {category}
                </span>
                <span className="text-white/30 text-xs">{date}</span>
                <span className="text-white/30 text-xs">{readingTime}</span>
              </div>
              <h2 className="font-bold text-base sm:text-lg mb-2 group-hover:text-white transition-colors leading-snug">
                {title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {excerpt}
              </p>
              <div className="mt-4 text-xs text-white/40 group-hover:text-white/60 transition-colors flex items-center gap-1">
                Leer artículo
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
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
