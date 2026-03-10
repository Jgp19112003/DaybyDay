import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué es un embudo de captación de clientes automatizado?",
    a: "Un embudo de captación automatizado es un sistema que guía a un lead desde el primer contacto con tu marca hasta la conversión en cliente, con la mayor parte del proceso funcionando de forma automática: anuncios, landing pages, emails de nurturing, lead scoring y notificaciones al equipo de ventas. El objetivo es captar y cualificar leads sin intervención manual constante.",
  },
  {
    q: "¿Cuánto tiempo tarda en funcionar un embudo de captación?",
    a: "Un embudo básico puede estar funcionando en 2-4 semanas. El período de optimización real son los primeros 2-3 meses, donde ajustas los mensajes, los tiempos de las secuencias y el umbral de escalado a ventas en función de los datos reales de comportamiento de los leads.",
  },
  {
    q: "¿Qué tasa de conversión es normal en un embudo de captación?",
    a: "Las tasas varían mucho según el sector y el precio del servicio. En negocios B2B de servicios, una tasa de conversión de lead a llamada del 10-20% es razonable. De llamada a cliente, el 20-40% es un buen benchmark para servicios de consultoría. El embudo automatizado suele mejorar estas tasas porque reduce el tiempo de respuesta y personaliza la comunicación.",
  },
];

const EmbudoCaptacionPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Cómo construir un embudo de captación de clientes automatizado — Guía práctica"
    description="Aprende a construir un sistema de captación de clientes que funciona 24/7: anuncios, landing page, secuencia de emails, lead scoring y CRM conectado. Paso a paso con herramientas reales."
    slug="embudo-captacion-clientes"
    datePublished="2026-03-10"
    readingTime="8 min"
    category="Automatización"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <h2 className="text-2xl font-black mt-10 mb-4">Qué es un embudo de captación y por qué necesitas automatizarlo</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      Un embudo de captación de clientes es el recorrido que hace un desconocido desde que descubre tu marca hasta que se convierte en cliente. Sin automatización, cada paso de ese recorrido requiere intervención manual: responder al lead, enviar información, hacer seguimiento, calificar si vale la pena y cerrar la venta.
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      La automatización no reemplaza a los humanos en las partes que requieren criterio y empatía — el cierre de ventas, la negociación, la propuesta personalizada. Pero sí automatiza todo lo que es repetitivo: la captación, la cualificación inicial, el nurturing y el seguimiento sistemático.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Las cuatro fases de un embudo de captación automatizado</h2>
    <div className="space-y-4 mb-6">
      {[
        {
          fase: "Fase 1 — Atracción",
          desc: "Publicidad de pago (Meta Ads, Google Ads) o contenido orgánico (SEO, redes sociales) que lleva tráfico cualificado a tu landing page de captación.",
        },
        {
          fase: "Fase 2 — Conversión",
          desc: "La landing page convierte visitantes en leads. Un formulario con 3-5 campos (nombre, email, empresa/sector, presupuesto) es suficiente para la mayoría de negocios de servicios.",
        },
        {
          fase: "Fase 3 — Nurturing",
          desc: "Secuencia de emails automáticos que educa al lead, genera confianza y lo acerca a la decisión de compra antes de que hable con el equipo de ventas.",
        },
        {
          fase: "Fase 4 — Conversión a cliente",
          desc: "El lead cualificado (alto lead score) recibe una llamada del equipo de ventas o agenda directamente una reunión. El CRM gestiona el seguimiento post-llamada.",
        },
      ].map(({ fase, desc }) => (
        <div key={fase} className="bg-[#1a1616] border border-white/8 rounded-xl p-4">
          <p className="font-bold text-white text-sm mb-1">{fase}</p>
          <p className="text-white/60 text-sm">{desc}</p>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Cómo construir la landing page de captación</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      La landing page es el corazón del embudo. Su único objetivo es convertir visitantes en leads. Cada elemento debe estar al servicio de esa conversión.
    </p>
    <div className="space-y-3 mb-6">
      {[
        { elemento: "Titular", desc: "Propuesta de valor clara en una frase. No describas lo que haces — describe el resultado que consiguen." },
        { elemento: "Subtítulo", desc: "Elimina la mayor objeción en 1-2 líneas. '¿Cuánto tarda?' / '¿Cuánto cuesta?' / '¿Funciona para mi sector?'" },
        { elemento: "Prueba social", desc: "3 métricas de resultados reales (ROAS, CPA, leads) o logos de clientes reconocibles. Cuanto más específicos, mejor." },
        { elemento: "Formulario", desc: "3-5 campos máximo. Nombre, email y una pregunta de cualificación (sector, inversión actual, objetivo). Menos campos = más leads; más campos = leads mejor cualificados." },
        { elemento: "CTA", desc: "'Agendar llamada gratuita' o 'Obtener auditoría gratuita' funcionan mejor que 'Contáctanos' o 'Enviar'." },
      ].map(({ elemento, desc }) => (
        <div key={elemento} className="flex items-start gap-3 text-sm">
          <span className="font-bold text-white w-28 flex-shrink-0">{elemento}</span>
          <span className="text-white/60">{desc}</span>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">La secuencia de nurturing: de lead frío a cliente listo para comprar</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Una vez que el lead entra en el CRM, la secuencia de nurturing automatizada toma el control. El objetivo es educarlo y generar confianza antes de que el equipo de ventas entre en acción.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-5">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Secuencia de nurturing recomendada (7 emails / 14 días)</p>
      <div className="space-y-2 text-sm text-white/65">
        {[
          { dia: "Día 0", email: "Bienvenida + qué esperar. Fija expectativas y confirma que recibiste su solicitud." },
          { dia: "Día 2", email: "Caso de estudio relevante para su sector con métricas específicas." },
          { dia: "Día 4", email: "Artículo educativo o guía que resuelve un problema común de su perfil." },
          { dia: "Día 6", email: "FAQ — las 3 preguntas más frecuentes que hace alguien como él/ella." },
          { dia: "Día 8", email: "Testimonios en vídeo o citas de clientes similares." },
          { dia: "Día 11", email: "Propuesta de valor directa + CTA a agendar llamada." },
          { dia: "Día 14", email: "Último intento — urgencia suave + CTA final." },
        ].map(({ dia, email }) => (
          <div key={dia} className="flex items-start gap-3">
            <span className="text-[#de0015] font-bold w-12 flex-shrink-0">{dia}</span>
            <span>{email}</span>
          </div>
        ))}
      </div>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Lead scoring: cómo saber cuándo llamar a un lead</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El lead scoring asigna puntuaciones automáticas a cada lead según su comportamiento. Cuando alcanza un umbral (por ejemplo, 80 puntos), el CRM notifica automáticamente al comercial para que le llame.
    </p>
    <div className="space-y-2 mb-5">
      {[
        { accion: "Rellena el formulario", puntos: "+20 pts" },
        { accion: "Abre el primer email", puntos: "+5 pts" },
        { accion: "Hace clic en un enlace del email", puntos: "+10 pts" },
        { accion: "Visita la página de precios", puntos: "+15 pts" },
        { accion: "Visita la web más de 3 veces", puntos: "+10 pts" },
        { accion: "No abre ningún email en 7 días", puntos: "-10 pts (entra en reactivación)" },
      ].map(({ accion, puntos }) => (
        <div key={accion} className="flex justify-between items-center bg-[#1a1616] border border-white/8 rounded-xl px-4 py-2">
          <span className="text-white/65 text-sm">{accion}</span>
          <span className={`font-bold text-sm ${puntos.startsWith("-") ? "text-red-400/80" : "text-green-400"}`}>{puntos}</span>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Herramientas para implementar el embudo</h2>
    <div className="space-y-3 mb-6">
      {[
        { herramienta: "GoHighLevel", uso: "CRM + landing pages + email + SMS + lead scoring. La opción más completa para negocios de servicios." },
        { herramienta: "HubSpot (gratuito)", uso: "CRM básico + formularios + emails. Buena opción de inicio para equipos pequeños." },
        { herramienta: "Klaviyo + Shopify", uso: "Para eCommerce. Automatización de email con integración nativa de datos de compra." },
        { herramienta: "Calendly / Cal.com", uso: "Para automatizar la reserva de llamadas directamente desde el email de nurturing." },
      ].map(({ herramienta, uso }) => (
        <div key={herramienta} className="flex items-start gap-3 text-sm">
          <span className="font-bold text-white w-36 flex-shrink-0">{herramienta}</span>
          <span className="text-white/60">{uso}</span>
        </div>
      ))}
    </div>

    <p className="text-white/70 leading-relaxed">
      Si quieres implementar este sistema en tu negocio, consulta nuestro{" "}
      <Link to="/servicios/captacion-clientes" className="text-white underline underline-offset-2 hover:text-white/80">
        servicio de captación de clientes
      </Link>{" "}
      o lee sobre{" "}
      <Link to="/blog/automatizacion-marketing-que-es" className="text-white underline underline-offset-2 hover:text-white/80">
        automatización de marketing
      </Link>{" "}
      para entender el sistema completo.
    </p>
  </BlogPostLayout>
);

export default EmbudoCaptacionPage;
