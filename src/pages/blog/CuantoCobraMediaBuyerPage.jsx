import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Cuánto cobra un media buyer freelance en España en 2026?",
    a: "Un media buyer freelance en España cobra entre 1.500€ y 4.500€/mes dependiendo de su experiencia, los canales que gestiona y el volumen de inversión. Perfiles junior con 1-2 años de experiencia están en torno a 1.500€-2.000€/mes, mientras que perfiles senior con historial demostrable en D2C superan los 3.500€-5.000€/mes.",
  },
  {
    q: "¿Cuánto cuesta contratar una agencia de paid media en España?",
    a: "Las agencias de paid media en España cobran entre 800€ y 3.000€/mes en fee fijo, o bien un porcentaje sobre la inversión gestionada (habitualmente 10-20%). Las agencias especializadas en D2C con resultados demostrados suelen arrancar en 1.200€-1.500€/mes, con inversión mínima recomendada de 3.000€-5.000€ en ads.",
  },
  {
    q: "¿Es mejor contratar un media buyer freelance o una agencia de paid media?",
    a: "Depende del volumen y la complejidad. Para inversiones de 1.000€-5.000€/mes, un freelance puede ser suficiente si tiene experiencia demostrada en tu sector. Para inversiones superiores o si necesitas gestionar múltiples canales simultáneamente, una agencia especializada ofrece más recursos, continuidad y capacidad de escala.",
  },
  {
    q: "¿Qué modelos de precio tienen los media buyers y agencias?",
    a: "Existen tres modelos principales: fee fijo mensual (más predecible), porcentaje sobre inversión gestionada (alinea intereses pero puede encarecer al crecer), e híbrido (fee fijo + porcentaje sobre inversión adicional). El fee fijo es el más común y el que mejor alinea incentivos entre cliente y proveedor.",
  },
  {
    q: "¿Cuál es la inversión mínima para trabajar con una agencia de paid media?",
    a: "La mayoría de agencias especializadas en D2C trabajan con un mínimo de 3.000€-5.000€/mes de inversión publicitaria, aunque algunas aceptan desde 1.500€/mes. Por debajo de esa cifra, los márgenes no permiten la dedicación necesaria para optimizar correctamente las campañas y justificar el coste de gestión.",
  },
];

const CuantoCobraMediaBuyerPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Cuánto cobra un media buyer freelance en España en 2026"
    description="Guía de precios actualizada: cuánto cobra un media buyer freelance, cuánto cuesta una agencia de paid media y qué modelos de precio existen en España. Compara y decide."
    slug="cuanto-cobra-media-buyer-freelance-espana"
    datePublished="2026-03-12"
    dateModified="2026-03-12"
    readingTime="6 min"
    category="Paid Media"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <p className="text-white/70 leading-relaxed mb-6">
      Saber <strong>cuánto cobra un media buyer</strong> en España es el primer paso para tomar una buena decisión de contratación. Los rangos son amplios y dependen del perfil, la experiencia y el modelo de trabajo. En esta guía desglosamos los precios reales del mercado español en 2026 para que puedas comparar con criterio.
    </p>

    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-8">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Rango de mercado 2026</p>
      <p className="text-white/70 text-sm leading-relaxed">
        Un media buyer freelance en España cobra entre <strong>1.500€ y 5.000€/mes</strong> según experiencia. Las agencias especializadas en D2C cobran entre <strong>800€ y 3.000€/mes</strong> en fee de gestión, con inversión mínima recomendada de 3.000€-5.000€ en publicidad.
      </p>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Tabla de precios: media buyer freelance por nivel de experiencia</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Los precios de un media buyer freelance varían significativamente según su trayectoria, la especialización en canales y el volumen de inversión que ha gestionado históricamente:
    </p>
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Nivel</th>
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Experiencia</th>
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Precio/mes</th>
            <th className="text-left py-3 text-white/40 font-semibold text-xs uppercase tracking-wide">Inversión que gestiona</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Junior", "1-2 años", "1.000€–1.800€", "Hasta 10.000€/mes"],
            ["Mid-level", "2-4 años", "1.800€–3.000€", "10.000€–50.000€/mes"],
            ["Senior", "4-7 años", "3.000€–4.500€", "50.000€–200.000€/mes"],
            ["Expert/Lead", "+7 años + D2C", "4.500€–6.000€+", "200.000€+/mes"],
          ].map(([nivel, exp, precio, inversion]) => (
            <tr key={nivel} className="border-b border-white/5">
              <td className="py-3 pr-4 text-white/80 font-medium">{nivel}</td>
              <td className="py-3 pr-4 text-white/50">{exp}</td>
              <td className="py-3 pr-4 text-white/70 font-semibold">{precio}</td>
              <td className="py-3 text-white/50">{inversion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Cuánto cuesta una agencia de paid media: modelos de precio</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Las agencias de paid media trabajan principalmente con tres modelos. Cada uno tiene ventajas e inconvenientes según el tipo de cliente:
    </p>
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Modelo</th>
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Cómo funciona</th>
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Rango típico</th>
            <th className="text-left py-3 text-white/40 font-semibold text-xs uppercase tracking-wide">Mejor para</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Fee fijo", "Mensualidad fija independiente de la inversión", "800€–3.000€/mes", "Presupuesto estable, previsibilidad"],
            ["% inversión", "10-20% sobre lo que gastas en ads", "Variable", "Inversiones variables o en crecimiento"],
            ["Híbrido", "Fee base + % sobre inversión adicional", "Base 800€+ + 10%", "Relaciones largas, buena alineación"],
          ].map(([modelo, como, rango, mejor]) => (
            <tr key={modelo} className="border-b border-white/5">
              <td className="py-3 pr-4 text-white/80 font-medium">{modelo}</td>
              <td className="py-3 pr-4 text-white/50">{como}</td>
              <td className="py-3 pr-4 text-white/70 font-semibold">{rango}</td>
              <td className="py-3 text-white/50">{mejor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">¿Qué influye en el precio de un media buyer?</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Más allá del nivel de experiencia, estos factores ajustan el precio al alza o a la baja:
    </p>
    <ul className="space-y-2 mb-8">
      {[
        "Número de canales a gestionar: Meta + Google + TikTok cuesta más que solo Meta",
        "Volumen de inversión mensual: a mayor inversión, más horas de gestión y optimización",
        "Complejidad del ecommerce: multinivel de audiencias, múltiples SKUs, diferentes países",
        "Incluye o no creatividades: si el media buyer también diseña los anuncios, el precio sube",
        "Frecuencia de reporting: reportes diarios vs mensuales impactan en la dedicación",
        "Especialización D2C: un perfil especializado en ecommerce cobra prima sobre uno generalista",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
          <span className="text-white/70 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>

    <h2 className="text-2xl font-black mt-10 mb-4">¿Cuánto debería pagar según mi volumen de inversión?</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Una regla práctica del mercado: el coste de gestión (fee de agencia o media buyer) debería representar entre el <strong>10% y el 20% de tu inversión publicitaria total</strong>. Por debajo de ese porcentaje, es difícil que el proveedor pueda dedicar el tiempo necesario para optimizar correctamente.
    </p>
    <p className="text-white/70 leading-relaxed mb-6">
      Según datos de{" "}
      <a
        href="https://www.sortlist.es/blog/cuanto-cuesta-agencia-marketing/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#de0015] hover:text-red-400 underline"
      >
        estudios de mercado de agencias en España
      </a>
      , el 67% de las pymes españolas que trabajan con agencias de paid media invierten entre 1.500€ y 5.000€/mes en publicidad y pagan entre 800€ y 1.500€/mes en gestión.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Nuestro modelo de precio en DayByDay</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      En DayByDay trabajamos con fee fijo mensual, sin porcentajes ocultos sobre la inversión. Nuestro modelo prioriza la alineación de intereses: nos importa que tu ROAS suba, no que gastes más en ads. Trabajamos exclusivamente con ecommerce D2C, lo que nos permite aplicar benchmarks reales de tu sector desde el primer día.
    </p>
    <p className="text-white/70 leading-relaxed mb-6">
      Si quieres una comparativa completa entre contratar un freelance y trabajar con una agencia especializada, lee{" "}
      <Link to="/blog/media-buyer-vs-agencia-ecommerce-d2c" className="text-[#de0015] hover:text-red-400 underline">
        media buyer vs agencia de publicidad para D2C
      </Link>
      .
    </p>

    <div className="bg-[#1a1616] border border-white/10 rounded-2xl p-6 mb-8 text-center">
      <p className="text-white/60 text-sm mb-4">
        ¿Quieres saber si lo que pagas ahora está alineado con los resultados que recibes? Te hacemos una auditoría gratuita.
      </p>
      <button
        onClick={openCalendly}
        className="bg-[#de0015] hover:bg-red-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
      >
        Auditoría gratuita →
      </button>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Artículos relacionados</h2>
    <ul className="space-y-2 mb-4">
      {[
        ["/blog/que-es-un-media-buyer", "Qué es un media buyer: rol, funciones y cuándo contratar uno"],
        ["/blog/media-buyer-vs-agencia-ecommerce-d2c", "Media buyer vs agencia de publicidad: qué necesita tu D2C"],
        ["/blog/cuanto-cuesta-agencia-paid-media-espana-precios-2026", "Cuánto cuesta una agencia de paid media en España: precios 2026"],
        ["/blog/preguntas-contratar-agencia-paid-media", "10 preguntas que hacer antes de contratar una agencia paid media"],
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

export default CuantoCobraMediaBuyerPage;
