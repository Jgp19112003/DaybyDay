import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Es mejor contratar una agencia o un equipo interno de marketing?",
    a: "Depende de la fase del negocio. Para empresas en fase de crecimiento con presupuesto publicitario mensual inferior a 20.000€, una agencia especializada suele tener mejor coste-efectividad que un equipo interno. Para empresas con inversiones superiores y necesidad de control total sobre la estrategia, un equipo mixto (equipo interno + agencia especializada) suele ser la opción óptima.",
  },
  {
    q: "¿Cuánto cuesta un equipo interno de marketing vs una agencia?",
    a: "Un equipo interno básico con un performance manager, un especialista en Meta Ads y un creativo cuesta entre 8.000-15.000€/mes en salarios brutos. Una agencia especializada para el mismo trabajo cuesta entre 2.000-5.000€/mes. La diferencia es significativa, pero el equipo interno ofrece mayor alineación con la marca y exclusividad.",
  },
  {
    q: "¿Qué ventaja tiene usar IA en marketing frente a los métodos tradicionales?",
    a: "La IA permite análisis de datos en tiempo real, personalización a escala, optimización automática de campañas y producción de contenido más rápida. Las agencias nativas en IA como DayByDay combinan la estrategia humana con herramientas de IA para ofrecer resultados más rápidos y con menor coste operativo que las agencias tradicionales.",
  },
];

const AgenciaVsInhousePage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Agencia vs In-House vs IA: el desglose honesto de costes y resultados"
    description="¿Contratas una agencia de marketing, construyes un equipo interno o usas IA? Comparativa honesta de costes, ventajas y desventajas de cada opción para que tomes la decisión correcta."
    slug="agencia-vs-inhouse-vs-ia"
    datePublished="2026-03-10"
    readingTime="7 min"
    category="Estrategia"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <h2 className="text-2xl font-black mt-10 mb-4">La pregunta que más nos hacen los fundadores</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      Cuando una empresa alcanza cierto volumen, la pregunta es inevitable: ¿contrato una agencia de marketing, construyo un equipo interno o uso herramientas de IA para hacerlo yo? No hay una respuesta universal, pero sí hay factores concretos que determinan qué opción tiene más sentido en cada situación.
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      Este análisis está basado en nuestra experiencia auditando decenas de empresas y en los costes reales del mercado español en 2026.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">El coste real de cada opción</h2>

    <h3 className="text-lg font-bold mt-6 mb-3">Equipo interno (In-House)</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Construir un equipo de marketing interno parece la opción más controlada, pero el coste total es frecuentemente subestimado.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-5">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Coste mensual estimado — equipo básico</p>
      <div className="space-y-2 text-sm">
        {[
          { rol: "Performance Manager (Meta + Google)", salario: "3.500-5.000 €/mes bruto" },
          { rol: "Creativo / Diseñador", salario: "2.500-3.500 €/mes bruto" },
          { rol: "Especialista SEO/Contenidos", salario: "2.000-3.000 €/mes bruto" },
          { rol: "Herramientas y software", salario: "500-1.000 €/mes" },
          { rol: "TOTAL", salario: "8.500-12.500 €/mes" },
        ].map(({ rol, salario }) => (
          <div key={rol} className="flex justify-between">
            <span className={`text-white/65 ${rol === "TOTAL" ? "font-bold text-white" : ""}`}>{rol}</span>
            <span className={`${rol === "TOTAL" ? "font-bold text-white" : "text-white/40"}`}>{salario}</span>
          </div>
        ))}
      </div>
    </div>
    <p className="text-white/70 leading-relaxed mb-4">
      A esto hay que añadir tiempo de onboarding (3-6 meses hasta rendimiento pleno), riesgo de rotación, coste de selección y curva de aprendizaje. El equipo interno tiene sentido cuando el volumen de trabajo justifica la dedicación completa de varios perfiles.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">Agencia de marketing tradicional</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Las agencias tradicionales cobran honorarios de gestión (porcentaje de la inversión publicitaria o tarifa fija) más la inversión en medios. Sus ventajas son la especialización y la velocidad de arranque; sus desventajas, la falta de exclusividad y la rotación de cuentas.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-5">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Estructura de costes agencia tradicional</p>
      <div className="space-y-2 text-sm">
        {[
          { concepto: "Fee de gestión mensual", coste: "1.500-4.000 €/mes" },
          { concepto: "Porcentaje sobre inversión", coste: "10-20% del presupuesto" },
          { concepto: "Producción creativa", coste: "Variable (a veces incluido)" },
          { concepto: "TOTAL para 5.000€/mes en ads", coste: "~2.500-3.500 €/mes" },
        ].map(({ concepto, coste }) => (
          <div key={concepto} className="flex justify-between">
            <span className={`text-white/65 ${concepto.startsWith("TOTAL") ? "font-bold text-white" : ""}`}>{concepto}</span>
            <span className={`${concepto.startsWith("TOTAL") ? "font-bold text-white" : "text-white/40"}`}>{coste}</span>
          </div>
        ))}
      </div>
    </div>

    <h3 className="text-lg font-bold mt-6 mb-3">Agencia nativa en IA (el modelo DayByDay)</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Las agencias que han integrado IA en su operativa pueden ofrecer más por menos: análisis de datos en tiempo real, producción creativa más rápida, optimización algorítmica y automatización de la parte operativa. El coste es similar o inferior al de una agencia tradicional, con mayor capacidad de escala.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-5">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Qué incluye un modelo de agencia AI-native</p>
      <div className="space-y-2 text-sm text-white/65">
        {[
          "Gestión de paid media (Meta Ads + Google Ads) con optimización algorítmica",
          "Producción creativa asistida por IA (mayor volumen, menor coste)",
          "Automatización de nurturing y seguimiento de leads",
          "Reportes automáticos en tiempo real",
          "Estrategia y consultoría humana en cada fase",
        ].map((item) => (
          <div key={item} className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Comparativa directa: cuándo elegir cada opción</h2>
    <div className="space-y-3 mb-6">
      {[
        {
          opcion: "Equipo In-House",
          cuando: "Inversión en ads >30.000€/mes, necesitas control total de la estrategia, tienes recursos para onboarding largo.",
          noQuando: "Estás en fase de crecimiento, presupuesto limitado o no tienes tiempo para gestionar un equipo.",
        },
        {
          opcion: "Agencia Tradicional",
          cuando: "Necesitas velocidad de arranque, tu inversión es media (5.000-20.000€/mes) y prefieres un contrato flexible.",
          noQuando: "Buscas exclusividad, tienes necesidades muy específicas o quieres integración profunda con tu negocio.",
        },
        {
          opcion: "Agencia AI-Native",
          cuando: "Quieres los resultados de un equipo senior con la agilidad de una agencia moderna. Inversión entre 3.000-25.000€/mes.",
          noQuando: "Necesitas un equipo completamente interno o tu negocio requiere presencia física constante.",
        },
      ].map(({ opcion, cuando, noQuando }) => (
        <div key={opcion} className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
          <p className="font-bold text-white mb-3">{opcion}</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2 text-green-400">
              <span className="flex-shrink-0">✓ Elige esto si:</span>
              <span className="text-white/60">{cuando}</span>
            </div>
            <div className="flex items-start gap-2 text-red-400/70">
              <span className="flex-shrink-0">✗ No es ideal si:</span>
              <span className="text-white/60">{noQuando}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">El modelo híbrido: la opción más frecuente a escala</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      La mayoría de empresas que superan cierto volumen acaban adoptando un modelo mixto: un responsable interno de marketing (o CMO) que marca la estrategia y la visión de marca, combinado con una agencia especializada para la ejecución de paid media, automatización y producción de contenido.
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      Este modelo combina lo mejor de ambos mundos: conocimiento profundo del negocio (interno) con especialización técnica y economías de escala (agencia).
    </p>

    <p className="text-white/70 leading-relaxed">
      Si estás evaluando qué modelo tiene más sentido para tu empresa, puedes{" "}
      <Link to="/como-trabajamos" className="text-white underline underline-offset-2 hover:text-white/80">
        conocer cómo trabajamos en DayByDay
      </Link>{" "}
      o consultar nuestros{" "}
      <Link to="/resultados" className="text-white underline underline-offset-2 hover:text-white/80">
        resultados y casos de éxito
      </Link>.
    </p>
  </BlogPostLayout>
);

export default AgenciaVsInhousePage;
