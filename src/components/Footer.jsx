import React, { useEffect, useRef } from "react";

const Footer = () => {
  const pathRef = useRef(null);
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
      const width = window.innerWidth;
      const height = 200;

      let d = `M0 ${height}`;

      // Crear puntos de control para curvas suaves
      const points = [];
      const stepSize = width / 50; // Menos puntos para curvas más suaves

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

      // Cerrar el path
      d += ` L${width} ${height} Z`;

      if (pathRef.current) pathRef.current.setAttribute("d", d);
      raf = requestAnimationFrame(animateWave);
    };

    animateWave();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <footer
      className="footer-wave"
      style={{
        width: "100vw",
        overflow: "hidden",
        position: "relative", // Cambiado de fixed a relative
        left: 0,
        bottom: 0,
        minHeight: "200px",
        background: "transparent",
      }}
    >
      <svg
        width="100%"
        height="200"
        viewBox={`0 0 ${window.innerWidth} 200`} // Updated viewBox height
        className="wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "200px", // Updated SVG height
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
