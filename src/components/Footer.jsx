import React, { useEffect, useRef, useState } from "react";

const SVG_WIDTH = 1920; // ancho fijo para la ola

const Footer = ({ onAgendarClick }) => {
  const pathRef = useRef(null);
  const [ctaHover, setCtaHover] = useState(false);
  const [ctaActive, setCtaActive] = useState(false);

  // Small helper for social links with inline hover styles
  const SocialLink = ({ href, label, title, children, external = true }) => {
    const [hover, setHover] = useState(false);
    const baseStyle = {
      width: 44,
      height: 44,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      background: hover ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.08)",
      border: `1px solid ${
        hover ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.14)"
      }`,
      borderRadius: 10,
      transform: hover ? "translateY(-2px)" : "none",
      transition:
        "transform 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
      textDecoration: "none",
    };
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={label}
        title={title}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={baseStyle}
      >
        {children}
      </a>
    );
  };
  useEffect(() => {
    let frame = 0;
    let raf;

    // Simple noise function for randomness
    const noise = (x = 0) => {
      return (
        (Math.sin(x * 0.01) + Math.sin(x * 0.013) + Math.sin(x * 0.007)) / 3
      );
    };

    const animateWave = () => {
      frame += 0.003; // Much slower for liquid-like motion
      const width = SVG_WIDTH;
      const height = 200;

      let d = `M0 ${height}`;

      // Crear puntos de control para curvas suaves
      const points = [];
      const stepSize = width / 50; // Menos puntos para curvas más suaves

      // Asegurar que el primer punto esté en x=0
      for (let x = 0; x <= width; x += stepSize) {
        // Ondas más uniformes y predecibles
        const primaryWave = Math.sin(frame + x * 0.003) * 28;
        const secondaryWave = Math.sin(frame * 0.6 + x * 0.0015) * 15;
        const tertiaryWave = Math.sin(frame * 1.1 + x * 0.0008) * 8;

        // Variación orgánica muy sutil
        const organicOffset = noise(x * 0.1 + frame * 20) * 2;

        const y =
          height -
          65 -
          (primaryWave + secondaryWave + tertiaryWave + organicOffset);
        points.push({ x, y });
      }

      // Asegurar que el último punto esté exactamente en x=width
      if (points[points.length - 1].x < width) {
        const x = width;
        const primaryWave = Math.sin(frame + x * 0.003) * 28;
        const secondaryWave = Math.sin(frame * 0.6 + x * 0.0015) * 15;
        const tertiaryWave = Math.sin(frame * 1.1 + x * 0.0008) * 8;
        const organicOffset = noise(x * 0.1 + frame * 20) * 2;
        const y =
          height -
          65 -
          (primaryWave + secondaryWave + tertiaryWave + organicOffset);
        points.push({ x, y });
      }

      // Agregar el primer punto
      d += ` L${points[0].x} ${points[0].y}`;

      // Crear curvas suaves usando curvas Bézier cuadráticas
      for (let i = 1; i < points.length - 1; i++) {
        const current = points[i];
        const next = points[i + 1];

        // Calcular punto de control para curva suave
        const controlX = current.x + (next.x - current.x) * 0.5;
        const controlY = current.y;

        d += ` Q${controlX} ${controlY} ${next.x} ${next.y}`;
      }

      // Agregar el último punto si existe
      if (points.length > 1) {
        const lastPoint = points[points.length - 1];
        d += ` L${lastPoint.x} ${lastPoint.y}`;
      }

      // Cerrar el path asegurando que llegue al borde derecho
      d += ` L${width} ${height} Z`;

      if (pathRef.current) pathRef.current.setAttribute("d", d);
      raf = requestAnimationFrame(animateWave);
    };

    animateWave();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <footer
      id="footer"
      className="footer-wave"
      style={{
        width: "100vw",
        overflow: "hidden",
        position: "relative",
        left: 0,
        bottom: 0,
        background: "transparent",
      }}
    >
      {/* CTA + Redes */}
      <div
        className="footer-content"
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "48px 24px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <h3
          style={{
            color: "#fff",
            fontSize: "clamp(1.25rem, 1.2rem + 1vw, 2rem)",
            textAlign: "center",
            margin: 0,
            fontWeight: 900,
          }}
        >
          ¿Listo para escalar tu negocio día a día?
        </h3>

        <button
          type="button"
          onClick={() => {
            if (typeof onAgendarClick === "function") {
              onAgendarClick();
            } else {
              const url = "https://calendly.com/jorgedaybydayconsulting/30min";
              if (window.Calendly && window.Calendly.initPopupWidget) {
                window.Calendly.initPopupWidget({ url });
              } else {
                window.open(url, "_blank", "noopener,noreferrer");
              }
            }
          }}
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => {
            setCtaHover(false);
            setCtaActive(false);
          }}
          onMouseDown={() => setCtaActive(true)}
          onMouseUp={() => setCtaActive(false)}
          aria-label="Agendar una reunión"
          style={{
            marginTop: 8,
            fontWeight: 600,
            color: "#fff",
            background: "linear-gradient(#2a2a2a, #000000)",
            boxShadow: ctaActive
              ? "inset 0pt 3pt 2pt -1pt #4a4a4a, 0pt 3pt 4pt -2pt #0000"
              : "inset 0pt 3pt 2pt -1pt #4a4a4a, 0pt 3pt 4pt -2pt #0009",
            border: "none",
            borderBottom: `${
              ctaHover ? 3 : ctaActive ? 0.5 : 1.5
            }pt solid #000000`,
            transform:
              ctaHover && !ctaActive ? "translateY(-0.5pt)" : "translateY(0)",
            transition: "all 0.15s cubic-bezier(0.4,0,0.2,1)",
            padding:
              "clamp(14px, 1rem + 0.6vw, 18px) clamp(20px, 1.2rem + 0.6vw, 28px)",
            fontSize: "clamp(16px, 1rem + 0.6vw, 22px)",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          Agendar una reunión
        </button>

        <div
          className="social-icons"
          style={{
            display: "flex",
            gap: 14,
            marginTop: 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* WhatsApp */}
          <SocialLink
            href="https://wa.me/34644387715?text=Hola, quiero agendar una reunión"
            label="WhatsApp"
            title="WhatsApp"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.52 3.48A11.86 11.86 0 0012.02 0C5.4 0 .03 5.37.03 12c0 2.11.55 4.19 1.6 6.02L0 24l6.15-1.6A11.93 11.93 0 0012.02 24C18.65 24 24 18.63 24 12c0-3.18-1.24-6.17-3.48-8.52zM12.02 22a9.9 9.9 0 01-5.06-1.43l-.36-.22-3.76.99.99-3.68-.23-.38A9.93 9.93 0 1122 12c0 5.49-4.49 10-9.98 10zm5.12-7.51c-.3-.15-1.77-.87-2.05-.97-.29-.1-.47-.15-.68.14-.2.3-.77.97-.95 1.17-.18.2-.35.22-.64.08-.3-.15-1.26-.47-2.41-1.49-.89-.8-1.49-1.79-1.67-2.08-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.63-.92-2.23-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.08.15.2 2.1 3.22 5.09 4.51.71.31 1.27.49 1.71.63.71.23 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.57-.35z"
                fill="currentColor"
              />
            </svg>
          </SocialLink>

          {/* Email */}
          <SocialLink
            href="mailto:pablo@daybydayconsulting.com?subject=Contacto"
            label="Email"
            title="Email"
            external={false}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                fill="currentColor"
              />
            </svg>
          </SocialLink>
        </div>
      </div>

      <svg
        width="100vw"
        height="200"
        viewBox={`0 0 ${SVG_WIDTH} 200`}
        className="wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100vw",
          height: "200px",
          minWidth: 0,
          maxWidth: "100vw",
        }}
      >
        <path ref={pathRef} fill="#fff" />
      </svg>
      {/* No texto, solo la onda */}
    </footer>
  );
};

export default Footer;
