import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué diferencia a DayByDay de otras agencias de marketing digital?",
    a: "La diferencia principal es la combinación de tres pilares que pocas agencias aplican juntos: inteligencia artificial para análisis y optimización en tiempo real, automatización de procesos para reducir trabajo manual y escalar sin aumentar equipo, y estrategia de paid media full-funnel con foco en resultados medibles (ROAS, CPA, CAC). No gestionamos campañas por separado — construimos ecosistemas de crecimiento integrados.",
  },
  {
    q: "¿Cómo usa DayByDay la inteligencia artificial en sus campañas?",
    a: "Usamos IA en tres áreas: (1) análisis predictivo de audiencias para identificar los segmentos con mayor probabilidad de conversión antes de lanzar campañas, (2) optimización dinámica de pujas y presupuestos basada en señales de rendimiento en tiempo real, y (3) generación y prueba de variaciones creativas a escala — podemos testear 30+ variantes simultáneas y el algoritmo identifica las ganadoras en horas, no semanas.",
  },
  {
    q: "¿Qué tipo de empresas trabajan con DayByDay?",
    a: "Trabajamos principalmente con empresas B2C y D2C en España con inversiones en paid media de entre 5.000€ y 100.000€ al mes. Nuestros clientes principales están en los sectores de moda, educación, salud y bienestar, y tecnología de consumo. Lo que tienen en común es que quieren crecer de forma escalable sin aumentar el coste fijo de su equipo interno.",
  },
  {
    q: "¿Qué es una estrategia full-funnel y por qué es importante?",
    a: "Una estrategia full-funnel gestiona las tres fases del customer journey: TOFU (conciencia de marca, audiencias frías), MOFU (consideración, usuarios que ya conocen la marca) y BOFU (conversión, retargeting de alta intención). La mayoría de empresas solo invierten en BOFU (retargeting) y se preguntan por qué el ROAS cae con el tiempo: es porque no están alimentando el embudo con audiencias nuevas.",
  },
];

const MetodologiaDayByDayPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="La Metodología DayByDay: Cómo Combinamos IA, Automatización y Paid Media para Escalar tu Negocio"
    description="Descubre cómo DayByDay Consulting combina inteligencia artificial, automatización de procesos y estrategia de paid media full-funnel para conseguir más clientes con el mismo equipo."
    slug="metodologia-daybyday-ia-automatizacion-paid-media"
    datePublished="2026-03-10"
    readingTime="9 min"
    category="Estrategia"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <h2 className="text-2xl font-black mt-10 mb-4">Por qué la mayoría de agencias de marketing no escalan</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      El problema de la mayoría de agencias de marketing digital es que venden servicios, no sistemas. Gestionan tus campañas de Meta Ads o Google Ads, te dan un informe mensual y el siguiente mes repiten el proceso. El rendimiento depende de la habilidad manual del ejecutor y del tiempo disponible — y ambas cosas tienen un techo muy claro.
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      En DayByDay hemos construido una metodología distinta. En lugar de más horas o más personas, usamos tres pilares que se refuerzan entre sí: inteligencia artificial para procesar datos y anticipar decisiones, automatización de procesos para ejecutar tareas repetitivas sin intervención humana, y paid media full-funnel para traducir esa eficiencia en ingresos reales. El resultado es un sistema de crecimiento que escala contigo, no uno que te frena.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Los tres pilares de la metodología DayByDay</h2>

    <h3 className="text-lg font-bold mt-8 mb-3">Pilar 1: Inteligencia Artificial aplicada al paid media</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      La inteligencia artificial no reemplaza la estrategia — la acelera. En DayByDay aplicamos IA en tres puntos críticos del proceso de paid media donde el margen de mejora es mayor:
    </p>
    <div className="space-y-3 mb-6">
      {[
        {
          titulo: "Análisis predictivo de audiencias",
          desc: "Antes de lanzar una campaña, analizamos patrones de comportamiento en los datos históricos para identificar qué segmentos tienen mayor probabilidad de conversión. Esto reduce el periodo de aprendizaje del algoritmo y el coste por resultado en las primeras semanas.",
        },
        {
          titulo: "Optimización dinámica de presupuesto",
          desc: "Monitorizamos el rendimiento en tiempo real y redistribuimos presupuesto automáticamente hacia los anuncios y audiencias con mejor ROAS. Lo que antes tardaba días en ajustarse manualmente, ahora ocurre en horas.",
        },
        {
          titulo: "Producción y test de creatividades a escala",
          desc: "Generamos más de 30 variaciones creativas por ciclo (copy, imagen, formato, CTA) y usamos el modelo de Advantage+ de Meta junto con nuestro propio sistema de scoring para identificar las ganadoras en días. La fatiga creativa deja de ser un problema.",
        },
      ].map(({ titulo, desc }) => (
        <div key={titulo} className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
          <div className="font-bold text-sm text-white mb-2">{titulo}</div>
          <div className="text-white/60 text-sm leading-relaxed">{desc}</div>
        </div>
      ))}
    </div>

    <h3 className="text-lg font-bold mt-8 mb-3">Pilar 2: Automatización de procesos de marketing</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      La automatización no es un complemento — es lo que permite que el sistema funcione sin intervención manual constante. Identificamos los procesos repetitivos de tu operación de marketing y los convertimos en flujos automáticos que se ejecutan solos, sin errores y a cualquier hora.
    </p>
    <div className="space-y-3 mb-6">
      {[
        "Flujos de email marketing automatizados según comportamiento del usuario (abandono de carrito, post-compra, reactivación)",
        "CRM automatizado con lead scoring y nurturing segmentado por etapa del embudo",
        "Reporting automático de KPIs con alertas cuando un indicador sale del rango objetivo",
        "Sincronización automática de datos entre plataformas (Meta, Google, Shopify, CRM)",
        "Automatización de respuestas en canales de atención al cliente para consultas frecuentes",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-[#f0a500] mt-0.5 flex-shrink-0">→</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p className="text-white/70 leading-relaxed mb-4">
      El resultado directo es que tu equipo dedica tiempo a decisiones estratégicas en lugar de tareas operativas. Y en nuestro caso, que podemos gestionar más cuentas con mayor calidad sin añadir más personas al equipo.
    </p>

    <h3 className="text-lg font-bold mt-8 mb-3">Pilar 3: Estrategia de paid media full-funnel</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      La IA y la automatización no sirven de nada si la estrategia de medios está mal estructurada. El tercer pilar es la estrategia full-funnel: gestionar simultáneamente las tres fases del customer journey para que el sistema de adquisición funcione como un todo coherente.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {[
        {
          fase: "TOFU",
          nombre: "Top of Funnel",
          objetivo: "Conciencia de marca",
          canales: "Meta Ads (frío), Google Display, YouTube",
          kpi: "CPM, alcance, tasa de reproducción",
          color: "text-blue-400",
        },
        {
          fase: "MOFU",
          nombre: "Middle of Funnel",
          objetivo: "Consideración",
          canales: "Meta Ads (retargeting suave), Google Shopping",
          kpi: "CTR, visitas a ficha de producto, add-to-cart",
          color: "text-yellow-400",
        },
        {
          fase: "BOFU",
          nombre: "Bottom of Funnel",
          objetivo: "Conversión",
          canales: "Meta Retargeting (7d/14d), Google Brand Search",
          kpi: "ROAS, CPA, tasa de conversión",
          color: "text-green-400",
        },
      ].map(({ fase, nombre, objetivo, canales, kpi, color }) => (
        <div key={fase} className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
          <div className={`font-black text-lg mb-1 ${color}`}>{fase}</div>
          <div className="text-white/40 text-xs mb-3">{nombre}</div>
          <div className="text-xs text-white/70 mb-2"><span className="text-white/40">Objetivo: </span>{objetivo}</div>
          <div className="text-xs text-white/70 mb-2"><span className="text-white/40">Canales: </span>{canales}</div>
          <div className="text-xs text-white/70"><span className="text-white/40">KPI: </span>{kpi}</div>
        </div>
      ))}
    </div>

    <p className="text-white/70 leading-relaxed mb-5">
      El error más frecuente en eCommerce es invertir solo en BOFU (retargeting a usuarios que ya han visitado la web) y preguntarse por qué el ROAS cae cada trimestre. La respuesta es sencilla: si no metes audiencias nuevas en el TOFU, el BOFU se agota. Una estrategia full-funnel bien ejecutada mantiene el ROAS estable o creciente a lo largo del tiempo porque siempre hay demanda entrando por arriba.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Cómo se aplica la metodología: el proceso en 4 fases</h2>

    <div className="space-y-4 mb-8">
      {[
        {
          num: "01",
          titulo: "Diagnóstico y auditoría de datos",
          desc: "Antes de tocar ninguna campaña, analizamos en profundidad los datos históricos: rendimiento por campaña, segmento y creativo; estructura del pixel de Meta y del tag de Google; calidad del CRM y del flujo de datos entre plataformas. Este diagnóstico define la hoja de ruta completa.",
        },
        {
          num: "02",
          titulo: "Diseño de la arquitectura de campañas",
          desc: "Construimos la estructura full-funnel adaptada a tu negocio: qué canales usar en cada fase, qué audiencias construir, qué mensajes llevan cada etapa y cómo se comunican las campañas entre sí. No usamos plantillas — cada arquitectura es específica para el modelo de negocio, el ticket medio y el ciclo de compra del cliente.",
        },
        {
          num: "03",
          titulo: "Activación con test de aprendizaje acelerado",
          desc: "En las primeras 4-6 semanas lanzamos versiones paralelas con variaciones controladas (audiencias, creatividades, formatos) para que el algoritmo aprenda rápido. Usamos más de 30 variantes creativas desde el primer día para minimizar el riesgo de fatiga en el periodo de aprendizaje.",
        },
        {
          num: "04",
          titulo: "Optimización y escalado sistemático",
          desc: "A partir del mes 2, con datos suficientes, empezamos a escalar lo que funciona y a podar lo que no. El escalado no es solo subir presupuesto — es expandir audiencias, multiplicar los creativos ganadores y activar nuevos canales de forma escalonada para no romper el rendimiento.",
        },
      ].map(({ num, titulo, desc }) => (
        <div key={num} className="flex gap-5 bg-[#1a1616] border border-white/8 rounded-xl p-5">
          <div className="font-black text-3xl text-white/10 flex-shrink-0 leading-none">{num}</div>
          <div>
            <div className="font-bold text-white text-sm mb-2">{titulo}</div>
            <div className="text-white/60 text-sm leading-relaxed">{desc}</div>
          </div>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Resultados reales con la metodología DayByDay</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      La metodología no es una promesa — es el proceso detrás de los resultados que hemos conseguido para nuestros clientes:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      {[
        {
          cliente: "Garett España",
          sector: "eCommerce tecnología",
          resultado: "CPA de 4,8€",
          contexto: "3.179€ invertidos, 14.936 clicks, 661 inicios de pago en Meta Ads",
        },
        {
          cliente: "Evercreate × Universidad privada",
          sector: "Educación superior",
          resultado: "CTR 10,35% en Google Ads",
          contexto: "253.679€ gestionados, CPC de 0,24€ en Meta Ads lead gen",
        },
        {
          cliente: "Clientes D2C moda",
          sector: "Fashion eCommerce",
          resultado: "ROAS 4x-7x sostenido",
          contexto: "Full-funnel con +30 variantes creativas por ciclo y Advantage+ Shopping",
        },
        {
          cliente: "Clientes sector salud",
          sector: "Health & Wellness",
          resultado: "CAC reducido -35%",
          contexto: "Automatización CRM + retargeting segmentado por comportamiento de compra",
        },
      ].map(({ cliente, sector, resultado, contexto }) => (
        <div key={cliente} className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
          <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{sector}</div>
          <div className="font-bold text-white text-sm mb-1">{cliente}</div>
          <div className="font-black text-xl text-white mb-2">{resultado}</div>
          <div className="text-white/50 text-xs leading-relaxed">{contexto}</div>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">¿Esta metodología es para tu empresa?</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      La metodología DayByDay funciona mejor para empresas con estas características:
    </p>
    <div className="space-y-2 mb-6">
      {[
        "eCommerce B2C o D2C con facturación mensual de al menos 50.000€",
        "Inversión en paid media de 5.000€/mes o superior (o voluntad de llegar ahí)",
        "Producto o servicio con márgenes suficientes para sostener paid media (margen bruto >30%)",
        "Empresa con voluntad de escalar: no buscar solo 'mantener' sino crecer de forma medible",
        "Disposición a compartir datos de negocio (márgenes, LTV, datos CRM) para tomar decisiones reales",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p className="text-white/70 leading-relaxed mb-5">
      Si tu empresa cumple estos criterios y quieres entender cómo aplicar la metodología DayByDay a tu caso concreto, el primer paso es una consulta estratégica gratuita donde analizamos tu situación actual y te proponemos una hoja de ruta específica.
    </p>
    <p className="text-white/70 leading-relaxed">
      También puedes explorar en detalle cada uno de los servicios que forman la metodología:{" "}
      <Link to="/servicios/paid-media" className="text-white underline underline-offset-2 hover:text-white/80">estrategia de paid media</Link>,{" "}
      <Link to="/servicios/automatizacion" className="text-white underline underline-offset-2 hover:text-white/80">automatización de marketing</Link> y{" "}
      <Link to="/servicios/meta-ads" className="text-white underline underline-offset-2 hover:text-white/80">gestión de Meta Ads</Link>.
    </p>
  </BlogPostLayout>
);

export default MetodologiaDayByDayPage;
