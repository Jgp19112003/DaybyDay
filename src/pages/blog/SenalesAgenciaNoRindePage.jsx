import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Cuáles son las señales de que mi agencia de publicidad no está rindiendo?",
    a: "Las señales más claras son: ROAS decreciente sin explicación durante más de 2 meses, ausencia de tests A/B en creatividades, reportes superficiales sin análisis real, no acceder directamente a la cuenta publicitaria y falta de propuestas proactivas de mejora. Si tienes 3 o más de estas señales, es momento de actuar.",
  },
  {
    q: "¿Qué ROAS debería estar consiguiendo mi agencia en Meta Ads?",
    a: "Depende del sector y el ticket medio, pero como referencia general en ecommerce D2C español: ROAS 3x-5x es la media en moda y lifestyle, 4x-7x en suplementos y salud, 2x-4x en decoración y hogar. Si llevas más de 3 meses por debajo de la media de tu sector sin plan de mejora, es una señal de alerta.",
  },
  {
    q: "¿Con qué frecuencia debería reportar mi agencia de paid media?",
    a: "Una agencia que gestiona más de 3.000€/mes en inversión debería enviar un reporte semanal de métricas clave (ROAS, CPA, gasto) y un análisis mensual con contexto, insights y recomendaciones para el siguiente mes. Si solo recibes reportes mensuales sin datos intermedios, hay falta de proactividad.",
  },
  {
    q: "¿Cuándo es el momento correcto para cambiar de agencia de paid media?",
    a: "Cuando el ROAS lleva más de 90 días cayendo sin un plan claro de mejora, cuando no tienes acceso directo a tu cuenta publicitaria, cuando el equipo que te atiende cambia frecuentemente o cuando llevas meses sin una sola propuesta nueva de optimización. No esperes a quemar todo el presupuesto.",
  },
  {
    q: "¿Cómo evaluar objetivamente si mi agencia de publicidad está haciendo bien su trabajo?",
    a: "Revisa estas 4 métricas mensualmente: evolución del ROAS (¿sube, baja o se mantiene?), frecuencia de tests A/B (¿hay creatividades nuevas cada 2-4 semanas?), calidad del reporting (¿explican el porqué o solo el qué?) y acceso y transparencia (¿tienes acceso completo a tu cuenta sin filtros?).",
  },
];

const SenalesAgenciaNoRindePage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Señales de que tu agencia de publicidad no está rindiendo"
    description="Descubre las 8 señales clave de que tu agencia de paid media no está dando resultados: métricas, reporting, transparencia y cuándo es el momento de cambiar. Guía práctica 2026."
    slug="senales-agencia-publicidad-no-rinde"
    datePublished="2026-03-12"
    dateModified="2026-03-12"
    readingTime="6 min"
    category="Estrategia"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <p className="text-white/70 leading-relaxed mb-6">
      Saber si tu <strong>agencia de publicidad está rindiendo</strong> no debería ser difícil, pero muchos founders D2C pasan meses pagando sin resultados claros porque no saben exactamente qué mirar. Aquí tienes las 8 señales que delatan que algo no funciona — y qué hacer cuando las detectas.
    </p>

    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-8">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Contexto importante</p>
      <p className="text-white/70 text-sm leading-relaxed">
        Según datos internos de DayByDay, el <strong>63% de los ecommerces D2C</strong> que llegan a nosotros pidiendo auditoría llevan más de 4 meses con resultados planos o negativos sin haber recibido una propuesta de mejora concreta de su agencia anterior.
      </p>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Las 8 señales de alerta más claras</h2>

    <div className="space-y-4 mb-8">
      {[
        {
          num: "01",
          title: "El ROAS lleva meses cayendo sin explicación",
          desc: "Si tu ROAS baja durante más de 60 días consecutivos y tu agencia no tiene un plan concreto de corrección (con acciones específicas y plazos), no están gestionando activamente tus campañas. Una caída puntual es normal; una caída sostenida sin plan es negligencia.",
        },
        {
          num: "02",
          title: "No tienes acceso a tu propia cuenta publicitaria",
          desc: "Tu cuenta de Meta Ads Business Manager y Google Ads te pertenece a ti, no a tu agencia. Si no tienes acceso de administrador a tu propia cuenta o te niegan el acceso completo, es una señal grave. Puedes perder todo tu historial de campañas si cambias de agencia.",
        },
        {
          num: "03",
          title: "Los reportes no explican el porqué",
          desc: "Un buen reporting no solo dice 'el ROAS fue 3.2x este mes'. Debe explicar por qué subió o bajó, qué tests se hicieron, qué aprendimos y qué haremos el mes que viene. Si recibes PDFs con métricas pero sin análisis, no te están añadiendo valor real.",
        },
        {
          num: "04",
          title: "No hay creatividades nuevas desde hace semanas",
          desc: "Las audiencias se saturan con rapidez. Una buena agencia debería testear creatividades nuevas cada 2-4 semanas como mínimo. Si llevas más de un mes con los mismos anuncios sin ningún test, el rendimiento inevitable es que la frecuencia suba y el ROAS baje.",
        },
        {
          num: "05",
          title: "El equipo que te atiende cambia constantemente",
          desc: "Cada vez que hay un cambio de account manager, hay una curva de aprendizaje de tu negocio. Si en 6 meses has tenido 2 o más cambios de interlocutor, la continuidad de la estrategia está comprometida y el conocimiento acumulado de tu cuenta se pierde.",
        },
        {
          num: "06",
          title: "Solo te hablan de métricas de vanidad",
          desc: "Impresiones, clics, CTR y seguidores son interesantes pero no pagan las facturas. Si tu agencia centra los reportes en estas métricas en lugar de ROAS, CPA, ingresos atribuidos y MER (Marketing Efficiency Ratio), no están enfocados en lo que realmente importa.",
        },
        {
          num: "07",
          title: "No hay propuestas proactivas de mejora",
          desc: "¿Tu agencia solo reacciona cuando les preguntas o también propone cosas nuevas? Una buena agencia de paid media debería enviarte al menos una propuesta de optimización o experimento al mes. Si siempre estás tú tirando del hilo, la relación está desequilibrada.",
        },
        {
          num: "08",
          title: "Te cobran por encima de mercado sin resultados proporcionales",
          desc: "Si pagas más de 2.000€/mes en gestión y llevas 3 meses con ROAS por debajo de los benchmarks de tu sector sin mejoras, estás pagando cara la inacción. El precio debe estar justificado por resultados medibles, no por el tamaño de la agencia.",
        },
      ].map(({ num, title, desc }) => (
        <div key={num} className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
          <div className="flex items-start gap-4">
            <span className="text-[#de0015] font-black text-lg flex-shrink-0">{num}</span>
            <div>
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Qué métricas revisar para evaluar a tu agencia</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Estas son las 4 preguntas concretas que debes poder responder cada mes sobre tu agencia:
    </p>
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Pregunta</th>
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Verde ✓</th>
            <th className="text-left py-3 text-white/40 font-semibold text-xs uppercase tracking-wide">Rojo ✗</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["¿Cómo evoluciona el ROAS?", "Estable o creciendo", "Cayendo >2 meses sin plan"],
            ["¿Hay tests de creatividades?", "Al menos 1 test cada 3-4 semanas", "Mismos anuncios +6 semanas"],
            ["¿El reporting incluye análisis?", "Por qué pasó + qué haremos", "Solo datos sin contexto"],
            ["¿Tienes acceso completo?", "Sí, eres admin de tu cuenta", "No tienes acceso directo"],
          ].map(([pregunta, verde, rojo]) => (
            <tr key={pregunta} className="border-b border-white/5">
              <td className="py-3 pr-4 text-white/80 font-medium">{pregunta}</td>
              <td className="py-3 pr-4 text-green-400/80 text-sm">{verde}</td>
              <td className="py-3 text-red-400/80 text-sm">{rojo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Cuándo es el momento de cambiar de agencia</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Si identificas 3 o más de las señales anteriores y llevan más de 60 días presentes, es el momento de actuar. El proceso de cambio de agencia no tiene que ser traumático: antes de hacerlo, asegúrate de tener acceso a tu cuenta publicitaria, exporta el historial de campañas y documenta qué estrategias se han probado.
    </p>
    <p className="text-white/70 leading-relaxed mb-6">
      Para asegurarte de no volver a cometer los mismos errores al elegir la siguiente agencia, utiliza{" "}
      <a
        href="https://www.clutch.co/es/agencies/pay-per-click"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#de0015] hover:text-red-400 underline"
      >
        plataformas de evaluación de agencias como Clutch
      </a>
      {" "}y consulta reseñas verificadas de otros clientes del mismo sector.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Cómo trabajamos en DayByDay</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      En DayByDay somos conscientes de que muchos de nuestros clientes llegan frustrados de experiencias anteriores. Por eso nuestra metodología está diseñada desde la transparencia: acceso completo a la cuenta desde el día uno, reporte semanal de métricas clave, y al menos dos propuestas de optimización por mes.
    </p>
    <p className="text-white/70 leading-relaxed mb-6">
      Antes de arrancar con cualquier cliente hacemos una{" "}
      <Link to="/blog/checklist-auditoria-campanas-paid-media" className="text-[#de0015] hover:text-red-400 underline">
        auditoría completa de las campañas activas
      </Link>
      {" "}para identificar exactamente qué está fallando y por qué. Sin humo, sin excusas: diagnóstico claro y plan de acción en la primera semana.
    </p>

    <div className="bg-[#1a1616] border border-white/10 rounded-2xl p-6 mb-8 text-center">
      <p className="text-white/60 text-sm mb-4">
        ¿Tienes dudas sobre si tu agencia actual está rindiendo? Te auditamos las campañas gratis y te damos un diagnóstico honesto.
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
        ["/blog/checklist-auditoria-campanas-paid-media", "Checklist completo para auditar tus campañas de paid media"],
        ["/blog/preguntas-contratar-agencia-paid-media", "10 preguntas que hacer antes de contratar una agencia paid media"],
        ["/blog/media-buyer-vs-agencia-ecommerce-d2c", "Media buyer vs agencia de publicidad: qué necesita tu D2C"],
        ["/blog/buen-roas-por-nicho-benchmarks-2026", "¿Qué es un buen ROAS? Benchmarks por nicho para 2026"],
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

export default SenalesAgenciaNoRindePage;
