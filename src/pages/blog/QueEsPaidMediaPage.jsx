import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué es el paid media?",
    a: "El paid media (medios pagados) es cualquier canal de comunicación digital en el que pagas para mostrar tu mensaje a una audiencia. Incluye publicidad en redes sociales (Meta Ads, TikTok Ads), publicidad en buscadores (Google Ads), display, vídeo pre-roll y publicidad programática. Se diferencia del earned media (menciones orgánicas) y del owned media (tu web, blog, newsletter). En marketing D2C, el paid media es normalmente el principal canal de captación de clientes a escala.",
  },
  {
    q: "¿Cuál es la diferencia entre paid media, earned media y owned media?",
    a: "Paid media: pagas para aparecer (anuncios de Meta, Google Ads, TikTok Ads). Earned media: otros hablan de ti sin que pagues (prensa, reseñas, boca a boca, menciones en redes). Owned media: canales que controlas directamente sin pagar por distribución (web, blog, email list, redes sociales propias). Una estrategia de marketing completa combina los tres, pero para eCommerce D2C que necesita escalar de forma predecible y rápida, el paid media es el motor principal.",
  },
  {
    q: "¿Cuánto presupuesto necesito para empezar con paid media?",
    a: "Para obtener datos estadísticamente significativos en Meta Ads, lo mínimo recomendado es 30-50€/día (900-1.500€/mes en inversión en medios). Con menos de eso, el algoritmo de Meta no tiene suficientes datos para optimizar y los resultados son poco representativos. Para Google Ads de búsqueda, puedes empezar con presupuestos menores (500€/mes) si el volumen de búsquedas de tus keywords es bajo. A partir de 3.000€/mes de inversión total es cuando el paid media empieza a tener sentido trabajarlo con una agencia especializada.",
  },
  {
    q: "¿Qué plataformas de paid media son mejores para eCommerce?",
    a: "Para eCommerce D2C en España en 2026, la combinación más efectiva es: Meta Ads (Facebook + Instagram) para prospección y retargeting — el mayor alcance y las mejores opciones de segmentación por comportamiento; Google Shopping + Performance Max para capturar demanda activa de personas que ya buscan tu producto; TikTok Ads como tercer canal para marcas con producto visual y audiencia joven. Email marketing automatizado (propio, no paid) complementa el mix para retención.",
  },
  {
    q: "¿Cuánto tiempo tarda el paid media en dar resultados?",
    a: "Los primeros datos útiles (suficientes para tomar decisiones de optimización) aparecen a las 2-4 semanas con un presupuesto adecuado. Los resultados estables y escalables requieren 6-12 semanas desde el arranque: el algoritmo de Meta necesita entre 50-100 conversiones por semana para optimizar bien. En Google Ads de búsqueda, los resultados son más inmediatos (1-2 semanas) porque la demanda ya existe. Desconfía de cualquier agencia que prometa resultados definitivos en las primeras dos semanas.",
  },
];

const QueEsPaidMediaPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Qué es el Paid Media: Guía Completa para Founders de eCommerce"
    description="Guía completa sobre qué es el paid media, cómo funciona, qué plataformas usar, cuánto presupuesto necesitas y cómo medir resultados reales. Para founders de eCommerce D2C en España."
    slug="que-es-paid-media-guia-completa"
    datePublished="2026-03-11"
    dateModified="2026-03-11"
    readingTime="7 min"
    category="Paid Media"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <p className="text-white/70 leading-relaxed mb-6">
      Si tienes un eCommerce o una marca D2C y quieres crecer de forma predecible, tarde o temprano tendrás que entender el paid media. No para gestionarlo tú mismo necesariamente — sino para tomar buenas decisiones sobre dónde invertir, qué esperar y cuándo cambiar de estrategia.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">¿Qué es el paid media exactamente?</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El <strong className="text-white">paid media</strong> (medios pagados) es cualquier canal de distribución de contenido en el que pagas para que tu mensaje llegue a una audiencia específica. En marketing digital para eCommerce, esto incluye principalmente:
    </p>
    <ul className="space-y-2 mb-6">
      {[
        "Meta Ads (anuncios en Facebook e Instagram)",
        "Google Ads (búsqueda, Shopping, Display, YouTube, Performance Max)",
        "TikTok Ads (In-Feed, TopView, Spark Ads)",
        "Pinterest Ads (para marcas con producto visual)",
        "LinkedIn Ads (principalmente para B2B)",
        "Publicidad programática (banners, vídeo pre-roll en medios digitales)",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-[#de0015] mt-0.5 flex-shrink-0">→</span>
          <span className="text-white/70 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
    <p className="text-white/70 leading-relaxed mb-4">
      Lo que hace especial al paid media es la <strong className="text-white">predecibilidad y la escalabilidad</strong>: si tienes un modelo que funciona (anuncio → clic → compra con un CPA rentable), puedes aumentar el presupuesto y obtener más ventas de forma proporcional. No funciona así con el SEO o el contenido orgánico.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Paid media vs earned media vs owned media</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {[
        {
          title: "Paid Media",
          icon: "💰",
          desc: "Pagas por la distribución. Control total sobre a quién llegas y cuándo. Resultados predecibles y escalables. Requiere presupuesto continuo — si paras de invertir, paras de generar tráfico.",
          examples: "Meta Ads, Google Ads, TikTok Ads",
        },
        {
          title: "Earned Media",
          icon: "🏆",
          desc: "Otros hablan de ti gratuitamente. Alta credibilidad pero difícil de controlar y escalar. Incluye prensa, reseñas, menciones en redes y boca a boca. No es predecible.",
          examples: "Prensa, reviews, boca a boca, menciones orgánicas",
        },
        {
          title: "Owned Media",
          icon: "🏠",
          desc: "Canales que controlas sin pagar por distribución. Alta rentabilidad a largo plazo pero requiere tiempo para construirlos. No escalan tan rápido como el paid.",
          examples: "Web, blog, email list, redes sociales propias, WhatsApp Business",
        },
      ].map(({ title, icon, desc, examples }) => (
        <div key={title} className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
          <p className="text-2xl mb-2">{icon}</p>
          <h3 className="font-bold text-base mb-2">{title}</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-3">{desc}</p>
          <p className="text-white/30 text-xs">{examples}</p>
        </div>
      ))}
    </div>
    <p className="text-white/70 leading-relaxed mb-4">
      Para la mayoría de eCommerce D2C que quieren crecer rápido, la estrategia ideal combina los tres — pero el paid media es el motor de tracción inicial porque da resultados predecibles desde el principio, mientras construyes los canales orgánicos en paralelo.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Cómo funciona el paid media en la práctica</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El modelo básico del paid media para eCommerce funciona así:
    </p>
    <ol className="space-y-3 mb-8 list-none">
      {[
        ["Pagas para mostrar un anuncio", "Defines a qué audiencia (por intereses, comportamiento o similitud con tus clientes actuales), qué formato (imagen, vídeo, carrusel) y cuánto pagas por cada 1.000 impresiones (CPM) o por cada clic (CPC)."],
        ["El usuario hace clic y llega a tu landing", "Si el anuncio es relevante para la audiencia y el mensaje conecta con el problema que resuelve tu producto, el usuario hace clic y llega a tu web o landing page."],
        ["El usuario compra (o no)", "Si la landing page convierte bien y el producto encaja con las expectativas generadas por el anuncio, el usuario compra. Esto genera una conversión que las plataformas registran (con sus modelos de atribución propios)."],
        ["Optimizas en base a datos", "Con suficientes datos (50-100 conversiones/semana), el algoritmo aprende qué usuarios tienen más probabilidad de comprar y optimiza automáticamente a quién muestra el anuncio. Tú optimizas creatividades, audiencias y pujas."],
        ["Escalas lo que funciona", "Cuando encuentras una combinación de anuncio + audiencia + landing con un CPA rentable, aumentas el presupuesto gradualmente para generar más ventas manteniendo la eficiencia."],
      ].map(([title, desc], i) => (
        <li key={i} className="flex items-start gap-4">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#de0015]/20 border border-[#de0015]/30 text-[#de0015] text-xs font-bold flex items-center justify-center">{i + 1}</span>
          <div>
            <p className="font-semibold text-sm mb-1">{title}</p>
            <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
          </div>
        </li>
      ))}
    </ol>

    <h2 className="text-2xl font-black mt-10 mb-4">Las métricas que importan en paid media</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      Para evaluar si tus campañas de paid media funcionan, estas son las métricas que realmente importan (y las que no):
    </p>

    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Métrica</th>
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Qué mide</th>
            <th className="text-left py-3 text-white/40 font-semibold text-xs uppercase tracking-wide">Importancia</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["ROAS real", "Ventas reales / Inversión (calculado en Shopify, no en Meta)", "Crítica"],
            ["CPA", "Coste por adquisición de cliente", "Crítica"],
            ["CTR (Click-Through Rate)", "% de personas que hacen clic en el anuncio", "Alta"],
            ["CPM", "Coste por 1.000 impresiones — indica competencia en subasta", "Alta"],
            ["Frecuencia", "Nº de veces que el mismo usuario ve el anuncio", "Media"],
            ["Alcance", "Nº de personas únicas que ven el anuncio", "Baja"],
            ["Me gustas / comentarios", "Engagement de vanidad — no indica ventas", "Muy baja"],
          ].map(([metric, desc, imp]) => (
            <tr key={metric} className="border-b border-white/5">
              <td className="py-3 pr-4 font-medium text-white/80">{metric}</td>
              <td className="py-3 pr-4 text-white/50">{desc}</td>
              <td className={`py-3 font-semibold text-xs ${imp === "Crítica" ? "text-[#de0015]" : imp === "Alta" ? "text-white/80" : "text-white/40"}`}>{imp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">¿Necesito una agencia o puedo gestionar el paid media yo mismo?</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Depende de la fase en la que está tu negocio y de tu capacidad técnica:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
        <h3 className="font-bold text-sm mb-3">Gestión propia tiene sentido si...</h3>
        <ul className="space-y-2">
          {[
            "Tu inversión mensual es inferior a 1.500€",
            "Tienes tiempo para aprender y experimentar",
            "Estás en fase de validación de producto",
            "Tu ticket medio es alto y necesitas pocas ventas para ser rentable",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-400 text-xs mt-0.5">✓</span>
              <span className="text-white/60 text-xs leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
        <h3 className="font-bold text-sm mb-3">Una agencia tiene sentido si...</h3>
        <ul className="space-y-2">
          {[
            "Inviertes o quieres invertir más de 3.000€/mes en medios",
            "Necesitas escalar rápido con campañas optimizadas",
            "Tu tiempo es más valioso gestionando el negocio que las campañas",
            "Quieres resultados predecibles con metodología testada",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#de0015] text-xs mt-0.5">✓</span>
              <span className="text-white/60 text-xs leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <p className="text-white/70 leading-relaxed mb-6">
      Si quieres entender más sobre la comparativa de opciones, puedes leer nuestro artículo{" "}
      <Link to="/blog/agencia-vs-inhouse-vs-ia" className="text-[#de0015] hover:text-red-400 underline">
        Agencia vs In-House vs IA: desglose honesto de costes y resultados
      </Link>.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Artículos relacionados</h2>
    <ul className="space-y-2 mb-4">
      {[
        ["/blog/meta-ads-vs-google-ads", "Meta Ads vs Google Ads: cuál elegir para tu negocio en 2026"],
        ["/blog/estado-paid-media-d2c-espana-2026", "Estado del Paid Media D2C en España 2026: benchmarks y datos reales"],
        ["/blog/elegir-agencia-anuncios-meta-ads-d2c", "Cómo elegir una agencia de anuncios en Meta Ads para tu marca D2C"],
        ["/blog/mejores-agencias-paid-media-espana-ecommerce-d2c", "Mejores agencias de paid media en España para eCommerce D2C (2026)"],
      ].map(([to, label]) => (
        <li key={to}>
          <Link to={to} className="text-[#de0015] hover:text-red-400 text-sm underline">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </BlogPostLayout>
);

export default QueEsPaidMediaPage;
