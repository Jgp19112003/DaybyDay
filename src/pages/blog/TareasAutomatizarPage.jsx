import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Por dónde empezar a automatizar el marketing?",
    a: "El mejor punto de partida es el email de bienvenida a nuevos leads. Es la secuencia con mayor impacto y la más sencilla de implementar. Configura tu CRM para que cada nuevo lead reciba automáticamente un email de bienvenida en los primeros 5 minutos y tendrás el primer flujo automatizado funcionando.",
  },
  {
    q: "¿Qué tareas de marketing NO se deben automatizar?",
    a: "Las conversaciones de ventas complejas, las negociaciones con clientes, la creación de contenido estratégico y las respuestas a crisis de comunicación requieren intervención humana. La automatización complementa al equipo, no lo sustituye en las interacciones que requieren criterio y empatía.",
  },
  {
    q: "¿Cuánto tiempo se tarda en automatizar el marketing de un negocio?",
    a: "Una implementación básica (email de bienvenida, nurturing y notificaciones al equipo de ventas) puede estar funcionando en 1-2 semanas. Un sistema completo con integración de publicidad, lead scoring y múltiples flujos de nurturing requiere entre 4-8 semanas de configuración.",
  },
];

const TareasAutomatizarPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Las 7 tareas de marketing que deberías automatizar ahora mismo"
    description="Descubre las 7 tareas de marketing que más tiempo consumen y que puedes automatizar con las herramientas adecuadas para escalar tu negocio sin aumentar tu equipo."
    slug="tareas-marketing-automatizar"
    datePublished="2026-03-10"
    readingTime="6 min"
    category="Automatización"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <h2 className="text-2xl font-black mt-10 mb-4">Por qué la automatización libera tiempo y escala resultados</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      Si tu equipo dedica horas a tareas repetitivas de marketing — responder leads, enviar emails de seguimiento, publicar en redes sociales, generar informes — estás pagando precio de estrategia por trabajo operativo. La automatización transforma ese tiempo en capacidad de crecimiento.
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      Estas son las 7 tareas que más tiempo consumen y que se pueden automatizar de forma efectiva con las herramientas disponibles hoy.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">1. Email de bienvenida y primera secuencia de nurturing</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El 80% de los leads que no reciben respuesta en la primera hora se enfrían. Automatizar el email de bienvenida garantiza contacto inmediato independientemente del horario o del volumen de leads. Una secuencia de 5-7 emails entregados en los primeros 14 días puede triplicar la tasa de conversión frente a un seguimiento manual.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-5">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Secuencia de bienvenida recomendada</p>
      <div className="space-y-2 text-sm text-white/65">
        {[
          "Email 1 (día 0): Bienvenida + lo que puedes esperar",
          "Email 2 (día 2): Caso de estudio relevante para su sector",
          "Email 3 (día 4): Contenido educativo de valor (guía, artículo)",
          "Email 4 (día 7): Testimonios y prueba social",
          "Email 5 (día 10): Oferta de auditoría gratuita o llamada estratégica",
          "Email 6 (día 14): Último intento — urgencia suave",
        ].map((email, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-[#de0015]">→</span>
            <span>{email}</span>
          </div>
        ))}
      </div>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">2. Segmentación y etiquetado de leads según comportamiento</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Segmentar leads manualmente es imposible a escala. Con automatización, cada acción del usuario (abrir un email, hacer clic en una página de precio, visitar tu web dos veces en tres días) puede asignar etiquetas y puntuaciones automáticamente. Así el equipo de ventas sabe exactamente a qué leads llamar primero.
    </p>
    <div className="space-y-2 mb-5">
      {[
        "Abre email sobre precios → etiqueta 'interés alto'",
        "Visita /servicios 3 veces → notificación automática al comercial",
        "Completa formulario → lead score +20 puntos",
        "No abre ningún email en 7 días → entra en flujo de reactivación",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/65">
          <span className="text-[#de0015] mt-0.5 flex-shrink-0">→</span>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">3. Publicación y distribución de contenido en redes sociales</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Publicar manualmente en Instagram, LinkedIn, Facebook y X cada semana consume entre 3-5 horas semanales. Con herramientas como Buffer, Metricool o el planificador nativo de Meta Business Suite, puedes programar un mes de contenido en una sola sesión. La clave es separar la creación (trabajo humano) de la distribución (automática).
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">4. Seguimiento de leads no convertidos (reactivación)</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      La mayoría de leads que no convierten en la primera semana no son leads malos — simplemente no estaban listos. Un flujo de reactivación automatizado vuelve a contactarles 30, 60 y 90 días después con nuevo contenido relevante. Es una de las acciones con mejor ROI porque trabaja sobre una audiencia que ya expresó interés.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">5. Actualización de audiencias publicitarias desde el CRM</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Sincronizar tu CRM con Meta Ads y Google Ads manualmente es tedioso y genera errores. Automatizar esta sincronización garantiza que las audiencias de retargeting siempre están actualizadas: los compradores recientes se excluyen de la prospección, los leads activos reciben anuncios de consideración y los clientes inactivos entran en campañas de reactivación.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-5">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Sincronización CRM → Meta Ads</p>
      <div className="space-y-2 text-sm text-white/65">
        {[
          "Lead nuevo en CRM → añadir a audiencia 'Leads activos' en Meta",
          "Cliente convertido → añadir a 'Compradores 30d', excluir de prospección",
          "Lead frío (sin actividad 60d) → añadir a campaña de reactivación",
          "Cliente con LTV alto → crear lookalike basado en ese segmento",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-[#de0015]">→</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">6. Generación de informes y dashboards</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Los informes manuales son uno de los mayores ladrones de tiempo en marketing. Automatizar la generación de dashboards con herramientas como Looker Studio (Google Data Studio), Supermetrics o los informes automáticos de tu CRM permite tener visibilidad en tiempo real sin invertir horas semanales en copiar datos de distintas plataformas.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">7. Onboarding de nuevos clientes</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El proceso de incorporación de nuevos clientes es repetitivo y crítico para la retención. Automatizar el onboarding — envío de contrato, bienvenida, accesos, primeras reuniones, kickoff — reduce el tiempo de activación del cliente y mejora su experiencia inicial, que es el predictor más fuerte de la tasa de renovación.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Tabla resumen: qué automatizar y con qué herramienta</h2>
    <div className="space-y-2 mb-6">
      {[
        { tarea: "Email de bienvenida y nurturing", herramienta: "GoHighLevel / Klaviyo / ActiveCampaign" },
        { tarea: "Segmentación y lead scoring", herramienta: "HubSpot / GoHighLevel" },
        { tarea: "Publicación en redes sociales", herramienta: "Metricool / Buffer / Meta Business Suite" },
        { tarea: "Reactivación de leads fríos", herramienta: "ActiveCampaign / GoHighLevel" },
        { tarea: "Audiencias publicitarias desde CRM", herramienta: "Meta CAPI + HubSpot / GoHighLevel" },
        { tarea: "Informes automáticos", herramienta: "Looker Studio + Supermetrics" },
        { tarea: "Onboarding de clientes", herramienta: "GoHighLevel / HubSpot + Zapier" },
      ].map(({ tarea, herramienta }) => (
        <div key={tarea} className="flex items-start gap-3 bg-[#1a1616] border border-white/8 rounded-xl p-3">
          <div className="flex-1">
            <p className="text-white text-sm font-semibold">{tarea}</p>
          </div>
          <div className="text-white/40 text-xs text-right flex-shrink-0 max-w-[200px]">{herramienta}</div>
        </div>
      ))}
    </div>

    <p className="text-white/70 leading-relaxed">
      Si quieres implementar automatización de marketing en tu negocio, consulta nuestro{" "}
      <Link to="/servicios/automatizacion" className="text-white underline underline-offset-2 hover:text-white/80">
        servicio de automatización
      </Link>{" "}
      o lee más sobre{" "}
      <Link to="/blog/automatizacion-marketing-que-es" className="text-white underline underline-offset-2 hover:text-white/80">
        qué es la automatización de marketing y cómo funciona
      </Link>.
    </p>
  </BlogPostLayout>
);

export default TareasAutomatizarPage;
