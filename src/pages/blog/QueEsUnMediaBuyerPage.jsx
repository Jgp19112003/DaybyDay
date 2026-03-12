import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué es un media buyer?",
    a: "Un media buyer es el profesional que gestiona la compra y optimización de espacios publicitarios de pago: Meta Ads, Google Ads, TikTok Ads y otros canales. Se encarga de que cada euro invertido genere el máximo retorno posible, combinando estrategia, análisis de datos y conocimiento profundo de las plataformas.",
  },
  {
    q: "¿Qué diferencia hay entre un media buyer y un community manager?",
    a: "El media buyer gestiona publicidad de pago (campañas, presupuestos, optimización de ROAS), mientras que el community manager gestiona la presencia orgánica y la comunidad en redes sociales. Son perfiles complementarios pero muy distintos: el media buyer trabaja con dinero y métricas de retorno; el CM trabaja con contenido y engagement.",
  },
  {
    q: "¿Cuándo necesita mi ecommerce contratar un media buyer?",
    a: "Cuando inviertes más de 3.000€/mes en publicidad de pago y los resultados no mejoran de forma consistente, o cuando quieres escalar sin que el ROAS caiga. También cuando tu equipo interno no tiene la especialización técnica en plataformas como Meta o Google para gestionar campañas complejas con múltiples audiencias.",
  },
  {
    q: "¿Cuánto cobra un media buyer en España?",
    a: "Un media buyer freelance en España cobra entre 1.500€ y 4.500€/mes según experiencia y volumen de inversión gestionada. Las agencias especializadas cobran entre 800€ y 3.000€/mes en fee fijo o un porcentaje de la inversión (habitualmente 10-20%). Los perfiles senior con historial demostrable pueden superar los 5.000€/mes.",
  },
  {
    q: "¿Qué habilidades debe tener un buen media buyer para ecommerce?",
    a: "Dominio técnico de Meta Ads y Google Ads (estructura de campañas, pujas, audiencias), capacidad de análisis de datos (ROAS, CPA, LTV, MER), conocimiento del ecommerce D2C (funnel de ventas, ticket medio, márgenes), experiencia con creatividades y UGC, y mentalidad de test constante. La IA y la automatización son un plus cada vez más importante.",
  },
];

const QueEsUnMediaBuyerPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Qué es un media buyer: rol, funciones y cuándo contratar uno"
    description="Descubre qué es un media buyer, qué funciones tiene, cómo se diferencia de otros perfiles de marketing y cuándo tu ecommerce D2C necesita contratar uno. Guía completa 2026."
    slug="que-es-un-media-buyer"
    datePublished="2026-03-12"
    dateModified="2026-03-12"
    readingTime="7 min"
    category="Paid Media"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <p className="text-white/70 leading-relaxed mb-6">
      Un <strong>media buyer</strong> es el profesional especializado en comprar y optimizar espacios publicitarios de pago para maximizar el retorno de cada euro invertido. En el contexto del ecommerce D2C español, este perfil se ha convertido en una pieza clave para marcas que quieren escalar sin quemar presupuesto. Aquí te explicamos exactamente qué hace, qué habilidades necesita y cómo diferenciarlo de otros perfiles.
    </p>

    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-8">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Dato clave</p>
      <p className="text-white/70 text-sm leading-relaxed">
        España es el 5º mercado de publicidad digital en Europa con 6.211 millones de euros invertidos en 2025, un crecimiento del +11,2% respecto al año anterior. La demanda de media buyers especializados en D2C no ha parado de crecer desde 2022.
      </p>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Qué hace exactamente un media buyer</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El trabajo de un media buyer va mucho más allá de "poner anuncios". Es un perfil técnico-estratégico que combina análisis de datos, conocimiento profundo de plataformas y visión de negocio. Sus responsabilidades principales incluyen:
    </p>
    <ul className="space-y-2 mb-8">
      {[
        "Planificar la estrategia de canales: dónde invertir (Meta, Google, TikTok, Pinterest) y con qué distribución de presupuesto",
        "Crear y estructurar campañas: arquitectura de cuentas, conjuntos de anuncios, segmentación de audiencias",
        "Gestionar las pujas: estrategias de bidding automático vs manual, optimización del CPA objetivo",
        "Analizar y optimizar resultados: ROAS, CPA, CTR, frecuencia, coste por resultado",
        "Testear creatividades: A/B testing de copies, imágenes, vídeos y formatos",
        "Reportar y comunicar: dashboards con métricas claras para el cliente o dirección",
        "Escalar lo que funciona sin romper el ROAS al subir inversión",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
          <span className="text-white/70 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>

    <h2 className="text-2xl font-black mt-10 mb-4">Media buyer vs otros perfiles de marketing digital</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      La confusión entre perfiles es habitual, especialmente en equipos pequeños donde una persona acaba haciendo de todo. Esta tabla aclara las diferencias clave:
    </p>
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Perfil</th>
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Qué gestiona</th>
            <th className="text-left py-3 text-white/40 font-semibold text-xs uppercase tracking-wide">Métrica principal</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Media Buyer", "Publicidad de pago (Meta, Google, TikTok)", "ROAS / CPA / MER"],
            ["Community Manager", "Presencia orgánica en redes sociales", "Engagement / Alcance"],
            ["SEO Specialist", "Posicionamiento orgánico en buscadores", "Tráfico orgánico / Rankings"],
            ["Growth Hacker", "Experimentos de crecimiento multicanal", "CAC / LTV / Conversión"],
            ["Traffic Manager", "Todo el tráfico web (pago + orgánico)", "Tráfico total / ROAS global"],
          ].map(([perfil, gestion, metrica]) => (
            <tr key={perfil} className="border-b border-white/5">
              <td className="py-3 pr-4 text-white/80 font-medium">{perfil}</td>
              <td className="py-3 pr-4 text-white/50">{gestion}</td>
              <td className="py-3 text-white/50">{metrica}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Media buyer freelance vs agencia de paid media: qué elegir</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Esta es una de las decisiones más importantes para un founder D2C. Ambas opciones tienen ventajas reales, pero dependen del volumen de inversión, la complejidad de los canales y el nivel de soporte que necesitas.
    </p>
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Criterio</th>
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Media buyer freelance</th>
            <th className="text-left py-3 text-white/40 font-semibold text-xs uppercase tracking-wide">Agencia paid media</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Precio", "1.500€–4.500€/mes", "800€–3.000€/mes + gestión"],
            ["Disponibilidad", "Limitada (suele llevar varios clientes)", "Equipo dedicado"],
            ["Especialización D2C", "Depende del perfil", "Alta en agencias especializadas"],
            ["Escalabilidad", "Limitada por capacidad del individuo", "Alta — más recursos al crecer"],
            ["Riesgo", "Alto si se va o enferma", "Bajo — continuidad garantizada"],
          ].map(([criterio, freelance, agencia]) => (
            <tr key={criterio} className="border-b border-white/5">
              <td className="py-3 pr-4 text-white/80 font-medium">{criterio}</td>
              <td className="py-3 pr-4 text-white/50">{freelance}</td>
              <td className="py-3 text-white/50">{agencia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-white/70 leading-relaxed mb-6">
      Para saber cuánto invierte normalmente una agencia de paid media o cuánto cobra un media buyer, puedes consultar{" "}
      <a
        href="https://www.iabspain.es/wp-content/uploads/2025/02/InformeInversion_publicidadDigital_IABSpain_2024.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#de0015] hover:text-red-400 underline"
      >
        el estudio de inversión publicitaria de IAB Spain
      </a>
      {" "}como referencia del mercado español.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Señales de que necesitas un media buyer (o cambiarlo)</h2>
    <ul className="space-y-2 mb-8">
      {[
        "Tu ROAS lleva más de 2 meses estancado o bajando sin explicación clara",
        "Estás invirtiendo más de 3.000€/mes y no tienes un reporte claro de resultados",
        "Nadie en tu equipo sabe explicar por qué una campaña funciona o no",
        "Llevas meses sin hacer un test A/B de creatividades",
        "El CPA está subiendo mes a mes y nadie tiene un plan para reducirlo",
        "Tu agencia actual no te da acceso directo a un perfil senior",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-[#de0015] flex-shrink-0 mt-0.5">⚠</span>
          <span className="text-white/70 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>

    <h2 className="text-2xl font-black mt-10 mb-4">Cómo trabajamos en DayByDay</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      En DayByDay actuamos como el media buyer externo de tu ecommerce D2C. Trabajamos exclusivamente con marcas D2C, lo que significa que conocemos los benchmarks reales de tu sector: los ROAS medios por nicho en España, los CPAs típicos según el ticket medio, y las estrategias de escala que funcionan sin quemar el presupuesto.
    </p>
    <p className="text-white/70 leading-relaxed mb-6">
      Nuestro modelo es diferente al de una agencia tradicional: acceso directo al perfil senior que gestiona tus campañas, reporting semanal con métricas reales (no vanity metrics) y metodología propia de IA + automatización. Puedes ver en detalle{" "}
      <Link to="/como-trabajamos" className="text-[#de0015] hover:text-red-400 underline">
        cómo trabajamos
      </Link>{" "}
      antes de hablar con nosotros.
    </p>

    <div className="bg-[#1a1616] border border-white/10 rounded-2xl p-6 mb-8 text-center">
      <p className="text-white/60 text-sm mb-4">
        ¿Quieres saber si tu ecommerce necesita un media buyer especializado o estás pagando de más por resultados mediocres?
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
        ["/blog/media-buyer-vs-agencia-ecommerce-d2c", "Media buyer vs agencia de publicidad: qué necesita tu D2C"],
        ["/blog/cuanto-cobra-media-buyer-freelance-espana", "Cuánto cobra un media buyer freelance en España en 2026"],
        ["/blog/preguntas-contratar-agencia-paid-media", "10 preguntas que debes hacer antes de contratar una agencia de paid media"],
        ["/blog/checklist-auditoria-campanas-paid-media", "Checklist para auditar tus campañas de paid media"],
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

export default QueEsUnMediaBuyerPage;
