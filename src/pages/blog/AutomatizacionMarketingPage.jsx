import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué es la automatización de marketing?",
    a: "La automatización de marketing es el uso de software y tecnología para ejecutar tareas de marketing de forma automática: envío de emails, segmentación de leads, nurturing, publicación en redes sociales y seguimiento de clientes potenciales. El objetivo es hacer crecer el negocio sin aumentar el equipo de forma proporcional.",
  },
  {
    q: "¿Qué herramientas se usan para automatizar el marketing?",
    a: "Las herramientas más usadas son CRMs con automatización integrada (HubSpot, GoHighLevel, ActiveCampaign), plataformas de email marketing (Klaviyo, Mailchimp), herramientas de automatización de flujos (Zapier, Make) y plataformas de publicidad automatizada como Meta Advantage+ y Google Performance Max.",
  },
  {
    q: "¿Cuánto cuesta implementar automatización de marketing?",
    a: "Los costes varían enormemente. Una pila básica de automatización (CRM + email + automatización de tareas) puede costar entre 150-500€/mes en software. Una implementación completa con integración y configuración personalizada suele requerir entre 2.000-5.000€ de inversión inicial, con un retorno que normalmente se recupera en 3-6 meses.",
  },
];

const AutomatizacionMarketingPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Automatización de marketing: qué es, cómo funciona y por qué implementarla"
    description="La automatización de marketing permite escalar tu captación de clientes sin aumentar tu equipo. Explicamos qué es, cómo funciona, qué herramientas usar y cómo implantarla paso a paso."
    slug="automatizacion-marketing-que-es"
    datePublished="2026-03-10"
    readingTime="7 min"
    category="Automatización"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <h2 className="text-2xl font-black mt-10 mb-4">Qué es la automatización de marketing</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      La automatización de marketing es el uso de tecnología para ejecutar tareas de marketing repetitivas de forma automática, sin intervención manual en cada interacción. En la práctica, significa que tu negocio puede contactar a un lead exactamente en el momento adecuado, con el mensaje correcto, sin que alguien del equipo tenga que hacerlo manualmente.
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      No es solo enviar emails programados. La automatización de marketing moderna conecta tu publicidad de pago, tu web, tu CRM, tu canal de ventas y tus comunicaciones en un sistema que actúa de forma inteligente según el comportamiento de cada usuario.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-6">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Ejemplo básico de automatización</p>
      <div className="space-y-2 text-sm">
        {[
          "Usuario ve tu anuncio en Meta Ads",
          "Hace clic y rellena un formulario de contacto",
          "El CRM crea automáticamente el lead y lo segmenta",
          "Recibe un email de bienvenida en los primeros 5 minutos",
          "A los 2 días recibe un caso de estudio relevante para su sector",
          "A los 5 días recibe una propuesta personalizada o una invitación a agendar llamada",
          "Si no abre los emails, se activa un SMS de seguimiento automático",
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3 text-white/65">
            <span className="text-[#de0015] font-bold flex-shrink-0">{i + 1}.</span>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Por qué la automatización de marketing es urgente para tu negocio</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Las empresas que gestionan su marketing de forma manual tienen un límite de crecimiento muy claro: el tiempo disponible del equipo. Cada lead nuevo requiere atención manual, cada seguimiento depende de que alguien recuerde hacerlo, y cada campaña se lanza con el mismo esfuerzo independientemente del volumen.
    </p>
    <p className="text-white/70 leading-relaxed mb-4">
      La automatización rompe ese límite. Con los sistemas correctos, el volumen de leads puede multiplicarse sin que el coste operativo crezca de forma proporcional. Esto es lo que diferencia a los negocios que escalan de los que se estancan.
    </p>
    <div className="grid grid-cols-2 gap-3 mb-6">
      {[
        { sin: "Seguimiento manual de leads", con: "Secuencias automáticas 24/7" },
        { sin: "Emails escritos uno a uno", con: "Flujos personalizados por comportamiento" },
        { sin: "Reportes manuales semanales", con: "Dashboards en tiempo real" },
        { sin: "Campañas gestionadas manualmente", con: "Optimización algorítmica continua" },
      ].map(({ sin, con }) => (
        <div key={sin} className="bg-[#1a1616] border border-white/8 rounded-xl p-4">
          <p className="text-red-400/70 text-xs mb-1 line-through">{sin}</p>
          <p className="text-green-400 text-xs font-semibold">{con}</p>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Los cinco pilares de la automatización de marketing</h2>

    <h3 className="text-lg font-bold mt-6 mb-3">1. Captación automatizada de leads</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      El primer paso es convertir el tráfico (orgánico o de pago) en leads de forma automática. Esto incluye formularios integrados con el CRM, lead magnets descargables que activan secuencias de nurturing, y chatbots que precalifican leads en tu web o Instagram antes de que hablen con una persona.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">2. Segmentación y scoring automático</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      No todos los leads son iguales. Un sistema de automatización bien configurado asigna puntuaciones a los leads según su comportamiento (páginas visitadas, emails abiertos, tiempo en la web) y los segmenta automáticamente para enviarles contenido relevante o escalarlos al equipo de ventas cuando están listos.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">3. Nurturing por email y SMS</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Una secuencia de nurturing bien diseñada guía al lead desde el primer contacto hasta la decisión de compra sin intervención humana. Lo habitual es una secuencia de 5-7 emails a lo largo de 2-3 semanas que combina educación (casos de estudio, artículos), generación de confianza (testimonios) y CTAs progresivos hacia la conversión.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">4. Integración con publicidad de pago</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      La automatización no se limita al email. Los sistemas más avanzados conectan el CRM con Meta Ads y Google Ads: los leads que entran al CRM se añaden automáticamente a audiencias de retargeting, los que convierten se excluyen de la prospección, y los atributos del cliente alimentan las audiencias lookalike para mejorar la prospección fría.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">5. Reportes y optimización continua</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      La automatización genera datos en tiempo real sobre cada punto del funnel: tasa de apertura, clics, conversión de leads a clientes, tiempo medio de cierre. Estos datos permiten identificar dónde se rompe el funnel y optimizar de forma continua.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Stack de herramientas recomendado para automatización</h2>
    <div className="space-y-3 mb-6">
      {[
        { herramienta: "GoHighLevel", rol: "CRM + email + SMS + automatización de flujos + páginas de captura. Todo en uno para agencias y consultores." },
        { herramienta: "HubSpot", rol: "CRM empresarial con automatización avanzada. Mejor para equipos de ventas estructurados." },
        { herramienta: "Klaviyo", rol: "Automatización de email para eCommerce. Integración nativa con Shopify y Meta." },
        { herramienta: "ActiveCampaign", rol: "Email marketing + CRM ligero. Buena opción para negocios de servicios con presupuesto ajustado." },
        { herramienta: "Make (Zapier)", rol: "Automatización de flujos entre herramientas. Conecta CRM, publicidad, hojas de cálculo y cualquier API." },
      ].map(({ herramienta, rol }) => (
        <div key={herramienta} className="flex items-start gap-3 text-sm">
          <span className="font-bold text-white w-36 flex-shrink-0">{herramienta}</span>
          <span className="text-white/60">{rol}</span>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Cómo implementar la automatización en 4 semanas</h2>
    <div className="space-y-4 mb-6">
      {[
        { semana: "Semana 1", tarea: "Elegir CRM y configurar la integración con la web y el formulario de contacto. Importar leads existentes." },
        { semana: "Semana 2", tarea: "Crear la secuencia de bienvenida (5-7 emails). Conectar con Meta Ads para sincronizar audiencias personalizadas." },
        { semana: "Semana 3", tarea: "Configurar el lead scoring. Definir umbrales de escalado al equipo de ventas. Activar las notificaciones automáticas." },
        { semana: "Semana 4", tarea: "Revisar datos, ajustar tasas de apertura y clics. Lanzar flujo de reactivación para leads fríos." },
      ].map(({ semana, tarea }) => (
        <div key={semana} className="bg-[#1a1616] border border-white/8 rounded-xl p-4">
          <p className="text-[#de0015] font-bold text-xs uppercase tracking-wider mb-1">{semana}</p>
          <p className="text-white/65 text-sm">{tarea}</p>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Caso real: automatización de captación para negocio de servicios B2B</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Un cliente del sector de consultoría B2B llegó a DayByDay gestionando sus leads de forma completamente manual: WhatsApp, hojas de cálculo y seguimientos olvidados. Implementamos un sistema de automatización completo sobre GoHighLevel.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-6 mb-5">
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Tiempo de respuesta a leads", value: "< 5 minutos (automático)" },
          { label: "Tasa de conversión lead → llamada", value: "+34%" },
          { label: "Leads contactados mensualmente", value: "x3 sin más equipo" },
          { label: "Horas de trabajo manual ahorradas", value: "~15h/semana" },
        ].map(({ label, value }) => (
          <div key={label}>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{label}</div>
            <div className="font-bold text-white text-sm">{value}</div>
          </div>
        ))}
      </div>
    </div>
    <p className="text-white/70 leading-relaxed">
      Si quieres conocer cómo aplicamos esto en tu negocio, consulta nuestro{" "}
      <Link to="/servicios/automatizacion" className="text-white underline underline-offset-2 hover:text-white/80">
        servicio de automatización de marketing
      </Link>{" "}
      o nuestro sistema de{" "}
      <Link to="/servicios/captacion-clientes" className="text-white underline underline-offset-2 hover:text-white/80">
        captación de clientes
      </Link>.
    </p>
  </BlogPostLayout>
);

export default AutomatizacionMarketingPage;
