import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Cómo sé si una agencia de paid media es buena?",
    a: "Una buena agencia de paid media puede mostrar casos de estudio con métricas reales (ROAS, CPA, inversión), explica su metodología con claridad, tiene acceso directo a tu cuenta publicitaria (no trabaja en cuentas propias), y te ofrece reportes transparentes con los datos brutos de las plataformas.",
  },
  {
    q: "¿Cuánto debería cobrar una agencia por gestionar Meta Ads?",
    a: "El modelo más habitual es una tarifa fija mensual más porcentaje de la inversión. Para inversiones entre 3.000-10.000€/mes, una tarifa de 1.500-3.000€/mes de gestión más un 10-15% sobre la inversión es razonable en el mercado español. Ten cuidado con agencias que cobran solo porcentaje — tienen incentivo para gastar más, no para gastar mejor.",
  },
  {
    q: "¿En cuánto tiempo debería ver resultados con una agencia de publicidad?",
    a: "Los primeros resultados medibles (datos de campaña, primeras conversiones) deberían aparecer en las primeras 2-4 semanas. Un ROAS o CPA estable y optimizado normalmente se alcanza entre el mes 2 y 3, cuando el algoritmo ha acumulado suficientes datos y las primeras rondas de optimización se han aplicado.",
  },
];

const PreguntasAgenciaPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="10 preguntas que debes hacer antes de contratar una agencia de paid media"
    description="Antes de firmar con una agencia de Meta Ads o paid media, estas son las 10 preguntas que separan una buena agencia de una que te va a hacer perder tiempo y dinero."
    slug="preguntas-contratar-agencia-paid-media"
    datePublished="2026-03-10"
    readingTime="6 min"
    category="Estrategia"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <h2 className="text-2xl font-black mt-10 mb-4">Por qué elegir mal una agencia de publicidad sale muy caro</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      Contratar la agencia equivocada no solo cuesta el fee mensual. Cuesta el presupuesto publicitario gestionado mal durante meses, el coste de oportunidad de no haber tenido los resultados que podías haber tenido, y el tiempo perdido en cambiar de agencia y empezar de cero con el algoritmo.
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      Estas 10 preguntas están diseñadas para separar con rapidez las agencias que saben lo que hacen de las que no. Hazte estas preguntas antes de cualquier reunión.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Las 10 preguntas clave</h2>

    <h3 className="text-lg font-bold mt-6 mb-3">1. ¿Trabajáis en mi cuenta publicitaria o en una cuenta de agencia propia?</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      Respuesta correcta: trabajan en tu cuenta. Si la agencia gestiona los anuncios en una cuenta propia, cuando termines la relación perderás todos los datos históricos, el pixel entrenado y los públicos acumulados. Es uno de los mayores red flags en el sector.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">2. ¿Podéis mostrarme 2-3 casos de éxito con métricas reales?</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      Cualquier agencia competente tiene resultados que puede enseñar. Busca casos con tu mismo modelo de negocio (B2C, B2B, eCommerce, servicios) e inversión similar. Si los casos son vagos ("mejoramos el ROAS") sin números concretos, es una señal de alerta.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">3. ¿Quién va a gestionar mi cuenta día a día?</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      Muchas agencias venden el expertise de sus socios senior y luego asignan la cuenta a un junior con poca experiencia. Pregunta el nombre de la persona que gestionará tu cuenta, su experiencia y cuántas cuentas gestiona simultáneamente. Más de 8-10 cuentas por gestor suele significar poca atención.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">4. ¿Cómo es vuestra estructura de reporting? ¿Qué métricas seguís?</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      Respuesta correcta: reportes semanales o quincenales con métricas de negocio (ROAS, CPA, ingresos atribuidos) no solo métricas de vanidad (impresiones, alcance, CTR). Si el reporte es un PDF bonito sin datos brutos, pregunta si puedes acceder directamente a la plataforma.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">5. ¿Qué estrategia usáis para los creativos? ¿Los producís vosotros?</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      El creativo es el factor diferencial en Meta Ads. Una agencia que no tiene capacidad de producción creativa interna o una metodología clara de testing es una agencia que solo gestiona presupuesto, no que optimiza. Pregunta cuántas variaciones de creatividades producen por mes y cómo las testean.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">6. ¿Cuánto tiempo os comprometéis a trabajar antes de ver primeros resultados?</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      Respuesta honesta: 4-6 semanas para primeros datos útiles, 2-3 meses para resultados estables y optimizados. Si una agencia te promete resultados en la primera semana o garantiza ROAS específicos antes de ver la cuenta, desconfía.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">7. ¿Cómo gestionáis el período de aprendizaje del algoritmo?</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      Una agencia que entiende el algoritmo sabe que hacer muchos cambios en las primeras semanas reinicia el aprendizaje y penaliza el rendimiento. Pregunta qué cambios hacen durante la fase de aprendizaje y cuánto tiempo la respetan antes de optimizar.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">8. ¿Cómo es vuestra estructura de precios y qué está incluido?</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      Pide que te expliquen exactamente qué incluye el fee: gestión de campaña, producción creativa, copywriting, informes, consultoría estratégica. Las sorpresas en la factura (costes por creatividades extra, reuniones de estrategia aparte) son frecuentes con agencias poco transparentes.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">9. ¿Cuál es la duración mínima del contrato y cuáles son las condiciones de salida?</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      Los contratos de 12 meses con penalización por salida anticipada son una señal de que la agencia no confía en sus propios resultados. Lo razonable es un compromiso inicial de 3 meses (tiempo mínimo para ver resultados reales) con preaviso de 30 días después.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">10. ¿Usáis IA o herramientas avanzadas de optimización en vuestra gestión?</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      En 2026, las agencias que no han integrado IA en su flujo de trabajo (análisis de datos, producción de contenido, optimización de pujas) están compitiendo con herramientas de hace cinco años. No es solo sobre usar IA — es sobre cómo la usan para mejorar tus resultados específicamente.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Red flags que deberían hacerte salir de la reunión</h2>
    <div className="space-y-2 mb-6">
      {[
        "Garantizan resultados específicos antes de auditar tu cuenta",
        "No pueden mostrar acceso a tus cuentas publicitarias directamente",
        "No tienen casos de éxito con métricas verificables",
        "Cobran solo porcentaje de la inversión (incentivo de gastar más, no mejor)",
        "No explican qué hace exactamente su equipo mes a mes",
        "Prometen 'viralidad' o resultados en redes sociales sin publicidad",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <p className="text-white/70 leading-relaxed">
      Si quieres ver cómo respondemos nosotros a estas preguntas, consulta{" "}
      <Link to="/como-trabajamos" className="text-white underline underline-offset-2 hover:text-white/80">
        cómo trabajamos en DayByDay
      </Link>{" "}
      o revisa nuestros{" "}
      <Link to="/resultados" className="text-white underline underline-offset-2 hover:text-white/80">
        casos de éxito con métricas reales
      </Link>.
    </p>
  </BlogPostLayout>
);

export default PreguntasAgenciaPage;
