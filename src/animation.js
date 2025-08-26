import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const logoHangingAnimation = (logoElement) => {
  if (!logoElement) return;

  // Get individual word elements with more specific selectors
  const firstDay = logoElement.querySelector(".logo-first-line .logo-day");
  const secondDay = logoElement.querySelector(".logo-second-line .logo-day");
  const secondY = logoElement.querySelector(".logo-second-line .logo-y");
  const by = logoElement.querySelector(".logo-second-line .logo-by");

  // Clear any existing transforms first to avoid conflicts
  gsap.set([firstDay, secondDay, secondY, by], { clearProps: "all" });

  // Set initial state FIRST, before removing hiding class - same for all devices
  gsap.set([firstDay, secondDay, secondY, by], {
    y: -150,
    opacity: 0,
    rotation: (i) => -20 + i * 10, // Different rotation for each element
    force3D: true,
  });

  // Now remove initial hiding class
  logoElement.classList.remove("logo-hidden");

  // Use exact same animation parameters for all devices
  gsap.to(firstDay, {
    y: 0,
    opacity: 1,
    rotation: 0,
    duration: 1,
    ease: "bounce.out",
    delay: 0.2,
    force3D: true,
  });

  gsap.to(secondDay, {
    y: 0,
    opacity: 1,
    rotation: 0,
    duration: 1, // Same as firstDay
    ease: "bounce.out",
    delay: 0.4,
    force3D: true,
  });

  gsap.to(secondY, {
    y: 0,
    opacity: 1,
    rotation: 12, // Keep the original rotation
    duration: 0.9,
    ease: "bounce.out",
    delay: 0.6,
    force3D: true,
  });

  gsap.to(by, {
    y: 0,
    opacity: 1,
    rotation: 12, // Keep the original rotation
    duration: 0.8,
    ease: "bounce.out",
    delay: 0.8,
    force3D: true,
  });
};

export const navMenuAnimation = (navContainer) => {
  if (!navContainer) return Promise.resolve();

  return new Promise((resolve) => {
    const navLinks = navContainer.querySelectorAll(".nav-link");
    const isMobile = window.innerWidth <= 768;

    // Set initial state FIRST, before removing hiding class
    gsap.set(navLinks, {
      y: -80, // Increase mobile drop distance
      opacity: 0,
      scale: 1, // Add scale for mobile
    });

    // Smoothly remove the hidden class
    gsap.to(navContainer, {
      visibility: "visible",
      opacity: 1,
      duration: 0.3,
      onComplete: () => {
        navContainer.classList.remove("nav-hidden");
      },
    });

    gsap.to(navLinks, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: isMobile ? 0.8 : 0.2, // Longer duration for mobile
      ease: isMobile ? "back.out(1.7)" : "power3.out", // Bouncy ease for mobile
      delay: isMobile ? 0.2 : 0.2,
      stagger: 0.2, // Slower stagger for mobile
      onComplete: () => {
        // Don't clear props on mobile to maintain transform overrides
        if (!isMobile) {
          gsap.set(navLinks, { clearProps: "all" });
        }
        resolve();
      },
    });
  });
};

export const serviciosInfoAnimation = (infoRef, sectionRef) => {
  if (!infoRef.current) return;

  // Set initial states - simplified to not interfere with content
  gsap.set(infoRef.current, { opacity: 0, y: 60 });

  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top bottom", // Changed from "top 95%" to start when section enters viewport
    once: true,
    onEnter: () => {
      // Simple fade in animation without touching paragraph content
      gsap.to(infoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    },
  });
};

export const serviciosTitleAnimation = (titleRef, sectionRef) => {
  if (!titleRef.current) return Promise.resolve();

  // Set initial state - ensure element is hidden
  gsap.set(titleRef.current, { opacity: 0 });

  // Kill any existing scroll triggers for this element to prevent conflicts
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.trigger === sectionRef.current) {
      trigger.kill();
    }
  });

  // Return a Promise that resolves when animation is complete
  return new Promise((resolve) => {
    // Create scroll trigger that starts the scramble animation
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom", // Changed from "top 95%" to start when section enters viewport
      once: true,
      onEnter: () => {
        // Fade in the element and start the scramble animation
        gsap.to(titleRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            // Use unified scramble animation and resolve when complete
            scrambleTextAnimation(titleRef.current, "Servicios", {
              duration: 800, // Reduced from 1000 to make text appear faster
              delay: 0, // Reduced from 200 to start immediately
            }).then(() => {
              resolve(); // Resolve the promise when text animation is complete
            });
          },
        });
      },
    });
  });
};

export const scrambleTextAnimation = (element, targetText, options = {}) => {
  if (!element) return Promise.resolve();

  const {
    duration = 1200,
    characters = "!@#$%^&*()_+-=[]{}|;:,.<>?~`",
    delay = 0,
    scramblePhaseRatio = 0.3,
    revealSpeed = 50,
  } = options;

  return new Promise((resolve) => {
    const textLength = targetText.length;
    const scrambleDuration = Math.floor(duration * scramblePhaseRatio);
    const revealDuration = duration - scrambleDuration;
    const charRevealSpeed =
      textLength > 0
        ? Math.max(20, Math.floor(revealDuration / textLength))
        : revealSpeed;

    let currentText = new Array(textLength).fill("");
    let revealedIndices = new Set();
    let scrambleInterval;

    // IMPORTANTE: Limpiar el elemento INMEDIATAMENTE antes de cualquier animación
    element.textContent = "";

    // Asegurar que el elemento esté visible pero sin contenido
    gsap.set(element, {
      opacity: 1,
      visibility: "visible",
    });

    const startAnimation = () => {
      const scrambleStartTime = Date.now();
      let revealStarted = false;

      // Scrambling phase
      const scrambleLoop = () => {
        const elapsed = Date.now() - scrambleStartTime;

        if (elapsed < scrambleDuration && !revealStarted) {
          // Generate scrambled text
          for (let i = 0; i < textLength; i++) {
            if (!revealedIndices.has(i)) {
              currentText[i] =
                targetText[i] === " "
                  ? " "
                  : characters[Math.floor(Math.random() * characters.length)];
            }
          }
          element.textContent = currentText.join("");
          scrambleInterval = setTimeout(scrambleLoop, 50);
        } else if (!revealStarted) {
          startRevealPhase();
          revealStarted = true;
        }
      };

      // Start revealing phase
      const startRevealPhase = () => {
        clearTimeout(scrambleInterval);

        const indicesToReveal = [];
        for (let i = 0; i < textLength; i++) {
          if (targetText[i] !== " ") {
            indicesToReveal.push(i);
          } else {
            // Immediately reveal spaces
            currentText[i] = " ";
            revealedIndices.add(i);
          }
        }

        let revealIndex = 0;

        const revealNextCharacter = () => {
          if (revealIndex < indicesToReveal.length) {
            const index = indicesToReveal[revealIndex];
            revealedIndices.add(index);
            currentText[index] = targetText[index];
            element.textContent = currentText.join("");
            revealIndex++;

            setTimeout(revealNextCharacter, charRevealSpeed);
          } else {
            // Animation complete - resolve the promise
            element.textContent = targetText;
            resolve();
          }
        };

        revealNextCharacter();
      };

      scrambleLoop();
    };

    // Start animation after delay
    if (delay > 0) {
      setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }
  });
};

export const serviciosCardsAnimation = (cardsRef) => {
  const isMobile = window.innerWidth <= 768;

  // Dispatch event to show navbar right when cards animation starts
  window.dispatchEvent(new CustomEvent("serviciosCardsAnimationStart"));

  if (isMobile) {
    // On mobile, use the same dramatic entrance as desktop
    gsap.set(cardsRef.current, {
      opacity: 0,
      scale: 2,
      transformOrigin: "center center",
    });

    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        scale: 2,
        transformOrigin: "center center",
      },
      {
        delay: 0.5,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.4,
        ease: "elastic.out(0.8, 0.4)",
      }
    );
    return;
  }

  // Desktop animation
  gsap.set(cardsRef.current, {
    opacity: 0,
    scale: 2,
    transformOrigin: "center center",
  });

  gsap.fromTo(
    cardsRef.current,
    {
      opacity: 0,
      scale: 2,
      transformOrigin: "center center",
    },
    {
      delay: 0.5,
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.4,
      ease: "elastic.out(0.8, 0.4)",
    }
  );
};

export const serviciosCardHoverAnimation = (cardsRef) => {
  const isMobile = window.innerWidth <= 768;

  cardsRef.current.forEach((card) => {
    if (!card) return;

    // Limpia listeners previos
    card.onmouseenter = null;
    card.onmouseleave = null;
    card.onclick = null;

    const title = card.querySelector(".card-title");
    const description = card.querySelector(".card-description");
    const tags = card.querySelectorAll(".card-tag");
    const svg = card.querySelector(".card-title svg");

    // Helper para cambiar SVG color
    const setSvgColor = (color) => {
      if (!svg) return;
      if (svg.hasAttribute("fill")) svg.setAttribute("fill", color);
      if (svg.hasAttribute("stroke")) svg.setAttribute("stroke", color);
      // Para los hijos
      svg.querySelectorAll("path, rect, circle").forEach((el) => {
        if (el.hasAttribute("fill")) el.setAttribute("fill", color);
        if (el.hasAttribute("stroke")) el.setAttribute("stroke", color);
      });
    };

    if (isMobile) {
      // Mobile: click para activar/desactivar
      card.addEventListener("click", () => {
        cardsRef.current.forEach((otherCard) => {
          if (!otherCard) return;
          const otherTitle = otherCard.querySelector(".card-title");
          const otherDescription = otherCard.querySelector(".card-description");
          const otherTags = otherCard.querySelectorAll(".card-tag");
          const otherSvg = otherCard.querySelector(".card-title svg");

          if (otherCard === card) {
            // Activar
            otherCard.classList.remove("card-dark");
            gsap.to(otherCard, {
              scale: 1.04,
              duration: 0.35,
              ease: "power2.out",
            });
            gsap.to([otherTitle, otherDescription], {
              color: "#181414",
              duration: 0.35,
            });
            gsap.to(otherTags, {
              backgroundColor: "#ff3131",
              borderColor: "transparent",
              color: "#fff",
              duration: 0.35,
            });
            setSvgColor("#181414");
          } else {
            // Desactivar
            otherCard.classList.add("card-dark");
            gsap.to(otherCard, {
              scale: 1,
              duration: 0.35,
              ease: "power2.out",
            });
            gsap.to([otherTitle, otherDescription], {
              color: "#fff",
              duration: 0.35,
            });
            gsap.to(otherTags, {
              backgroundColor: "#232323",
              borderColor: "#333",
              color: "#fff",
              duration: 0.35,
            });
            if (otherSvg) setSvgColor("#fff");
          }
        });
      });
    } else {
      // Desktop: hover
      card.addEventListener("mouseenter", () => {
        card.classList.remove("card-dark");
        gsap.to(card, { scale: 1.06, duration: 0.28, ease: "power2.out" });
        gsap.to([title, description], { color: "#181414", duration: 0.28 });
        gsap.to(tags, {
          backgroundColor: "#ff3131",
          borderColor: "transparent",
          color: "#fff",
          duration: 0.28,
        });
        setSvgColor("#181414");
      });
      card.addEventListener("mouseleave", () => {
        card.classList.add("card-dark");
        gsap.to(card, { scale: 1, duration: 0.28, ease: "power2.out" });
        gsap.to([title, description], { color: "#fff", duration: 0.28 });
        gsap.to(tags, {
          backgroundColor: "#232323",
          borderColor: "#333",
          color: "#fff",
          duration: 0.28,
        });
        setSvgColor("#fff");
      });
    }
  });
};

export const initServiceCardsCycling = (cardsRef, tagsRef) => {
  if (!cardsRef.current || !tagsRef.current) return null;

  // Set all cards to dark theme initially
  cardsRef.current.forEach((card) => {
    if (!card) return;

    const title = card.querySelector(".card-title");
    const description = card.querySelector(".card-description");
    const tags = card.querySelectorAll(".card-tag");

    // All cards start dark
    card.classList.add("card-dark");
    gsap.set(card, { scale: 1 });
    gsap.set([title, description], { color: "#ffffff" });
    gsap.set(tags, {
      backgroundColor: "#232323",
      borderColor: "#333333",
      color: "#ffffff",
    });
  });

  // Return empty cleanup function since there's no interval
  return () => {};
};

export const serviciosMouseFollowAnimation = (
  sectionRef,
  titleRef,
  infoRef,
  cardsRef,
  extraRefs = {}
) => {
  if (!sectionRef.current) return null;

  const isMobile = window.innerWidth <= 768;
  if (isMobile) return () => {};

  // Desestructura los refs extra
  const {
    badgeRef,
    headingRef,
    p1Ref,
    p2Ref,
    statCardsRef,
    cardTitleRefs,
    cardDescRefs,
    cardTagsRefs,
    cardSvgRefs,
  } = extraRefs || {};

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Mouse position as percentage (-1 to 1)
    const xPercent = (clientX / innerWidth - 0.5) * 2;
    const yPercent = (clientY / innerHeight - 0.5) * 2;

    // Título
    if (titleRef?.current) {
      gsap.to(titleRef.current, {
        x: xPercent * 8,
        y: yPercent * 4,
        duration: 0.6,
        ease: "power2.out",
      });
    }
    // Info principal
    if (infoRef?.current) {
      gsap.to(infoRef.current, {
        x: xPercent * 6,
        y: yPercent * 3,
        duration: 0.8,
        ease: "power2.out",
      });
    }
    // Cartas
    cardsRef?.current?.forEach((card, index) => {
      if (card) {
        const intensity = 4 + index * 1.5;
        gsap.to(card, {
          x: xPercent * intensity,
          y: yPercent * (intensity * 0.6),
          duration: 0.7 + index * 0.1,
          ease: "power2.out",
        });
      }
    });
    // Badge
    if (badgeRef?.current) {
      gsap.to(badgeRef.current, {
        x: xPercent * 10,
        y: yPercent * 6,
        duration: 0.7,
        ease: "power2.out",
      });
    }
    // Heading
    if (headingRef?.current) {
      gsap.to(headingRef.current, {
        x: xPercent * 8,
        y: yPercent * 5,
        duration: 0.7,
        ease: "power2.out",
      });
    }
    // Párrafos
    if (p1Ref?.current) {
      gsap.to(p1Ref.current, {
        x: xPercent * 7,
        y: yPercent * 4,
        duration: 0.7,
        ease: "power2.out",
      });
    }
    if (p2Ref?.current) {
      gsap.to(p2Ref.current, {
        x: xPercent * 7,
        y: yPercent * 4,
        duration: 0.7,
        ease: "power2.out",
      });
    }
    // Métricas
    if (statCardsRef?.current) {
      statCardsRef.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            x: xPercent * (6 + i * 2),
            y: yPercent * (3 + i * 1.5),
            duration: 0.7 + i * 0.1,
            ease: "power2.out",
          });
        }
      });
    }

    // Contenido interno de las cartas de la derecha
    if (cardTitleRefs?.current) {
      cardTitleRefs.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            x: xPercent * (10 + i * 2),
            y: yPercent * (6 + i * 1.5),
            duration: 0.7 + i * 0.1,
            ease: "power2.out",
          });
        }
      });
    }
    if (cardDescRefs?.current) {
      cardDescRefs.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            x: xPercent * (8 + i * 2),
            y: yPercent * (5 + i * 1.2),
            duration: 0.7 + i * 0.1,
            ease: "power2.out",
          });
        }
      });
    }
    if (cardTagsRefs?.current) {
      cardTagsRefs.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            x: xPercent * (7 + i * 1.5),
            y: yPercent * (4 + i * 1.1),
            duration: 0.7 + i * 0.1,
            ease: "power2.out",
          });
        }
      });
    }
    if (cardSvgRefs?.current) {
      cardSvgRefs.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            x: xPercent * (10 + i * 2),
            y: yPercent * (6 + i * 1.5),
            duration: 0.7 + i * 0.1,
            ease: "power2.out",
          });
        }
      });
    }
  };

  document.addEventListener("mousemove", handleMouseMove);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };
};

export const codeTypingAnimation = (element, text, options = {}) => {
  if (!element) return;

  const {
    totalDuration = 1000,
    characters = "!@#$%^&*()_+-=[]{}|;:,.<>?~`",
    delay = 0,
    scramblePhaseRatio = 0.4,
    initialScrambleSpeed = 25,
    finalScrambleSpeed = 60,
    skipInitialScramble = false, // New option to skip scrambling phase
  } = options;

  const targetText = text || element.textContent;
  const textLength = targetText.length;
  const nonSpaceChars = targetText.replace(/ /g, "").length;

  // Calculate timing based on total duration
  const scrambleDuration = skipInitialScramble
    ? 0
    : Math.floor(totalDuration * scramblePhaseRatio);
  const revealDuration = totalDuration - scrambleDuration;
  const revealSpeed =
    nonSpaceChars > 0
      ? Math.max(20, Math.floor(revealDuration / nonSpaceChars))
      : 50;

  let currentText = new Array(textLength).fill("");
  let revealedIndices = new Set();
  let scrambleInterval;
  let revealTimeout;

  // Initialize current text from element if skipping scramble
  if (skipInitialScramble) {
    const elementText = element.textContent;
    for (let i = 0; i < textLength; i++) {
      currentText[i] = i < elementText.length ? elementText[i] : "";
    }
  } else {
    // Clear the element initially
    element.textContent = "";
  }

  // Start after delay
  setTimeout(() => {
    let scrambleStartTime = Date.now();
    let revealStarted = false;

    if (skipInitialScramble) {
      // Skip directly to reveal phase
      startRevealPhase();
      revealStarted = true;
    } else {
      // Normal scrambling phase
      const scrambleLoop = () => {
        const elapsed = Date.now() - scrambleStartTime;
        const revealProgress = revealedIndices.size / nonSpaceChars;
        const currentScrambleSpeed =
          initialScrambleSpeed +
          (finalScrambleSpeed - initialScrambleSpeed) * revealProgress;

        if (elapsed < scrambleDuration || revealStarted) {
          for (let i = 0; i < textLength; i++) {
            if (!revealedIndices.has(i)) {
              if (targetText[i] === " ") {
                currentText[i] = " ";
              } else {
                currentText[i] =
                  characters[Math.floor(Math.random() * characters.length)];
              }
            }
          }

          element.textContent = currentText.join("");

          if (revealedIndices.size < nonSpaceChars) {
            scrambleInterval = setTimeout(scrambleLoop, currentScrambleSpeed);
          }
        }

        if (elapsed >= scrambleDuration && !revealStarted) {
          startRevealPhase();
          revealStarted = true;
        }
      };

      scrambleLoop();
    }

    // Start revealing phase with smooth sequential reveals
    function startRevealPhase() {
      const indicesToReveal = [];
      for (let i = 0; i < textLength; i++) {
        if (targetText[i] !== " ") {
          indicesToReveal.push(i);
        }
      }

      let revealIndex = 0;

      const revealNextCharacter = () => {
        if (revealIndex < indicesToReveal.length) {
          const index = indicesToReveal[revealIndex];
          revealedIndices.add(index);
          currentText[index] = targetText[index];
          element.textContent = currentText.join("");
          revealIndex++;

          revealTimeout = setTimeout(revealNextCharacter, revealSpeed);
        } else {
          clearTimeout(scrambleInterval);
          element.textContent = targetText;
        }
      };

      revealNextCharacter();
    }
  }, delay);

  return () => {
    clearTimeout(scrambleInterval);
    clearTimeout(revealTimeout);
  };
};

export const btnPrimaryAppearAnimation = (btnRef) => {
  if (!btnRef?.current) return;
  gsap.set(btnRef.current, { opacity: 0, scale: 0.95 });
  gsap.to(btnRef.current, {
    opacity: 1,
    scale: 1,
    duration: 0.7,
    ease: "power2.out",
  });
};

export const initNavbarScrollVisibility = (navbarElement) => {
  if (!navbarElement) return () => {};

  let isVisible = false;
  let ticking = false;
  let hasBeenTriggered = false;
  let lastScrollY = window.scrollY;
  let scrollDirection = "up";
  let scrollThreshold = 10; // Pixels mínimos para detectar scroll significativo
  let graceTimeout = null; // Timeout para el período de gracia
  let isInGracePeriod = false; // Flag para controlar el período de gracia

  const isMobile = window.innerWidth <= 768;

  const showNavbar = () => {
    if (!isVisible) {
      isVisible = true;
      if (isMobile) {
        // Móvil: transición rápida pero suave
        gsap.to(navbarElement, {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out",
          display: "flex",
        });
      } else {
        // Desktop: animación suave
        gsap.to(navbarElement, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          display: "flex",
        });
      }
    }
  };

  const hideNavbar = () => {
    if (isVisible) {
      isVisible = false;
      if (isMobile) {
        // Móvil: transición rápida pero suave hacia arriba
        gsap.to(navbarElement, {
          opacity: 0,
          y: -60,
          duration: 0.15,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(navbarElement, { display: "none" });
          },
        });
      } else {
        // Desktop: animación suave
        gsap.to(navbarElement, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(navbarElement, { display: "none" });
          },
        });
      }
    }
  };

  const updateNavbarVisibility = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const serviciosSection = document.querySelector("#servicios");

    // Detectar dirección del scroll con threshold para evitar micro-movimientos
    const scrollDiff = scrollY - lastScrollY;
    if (Math.abs(scrollDiff) > scrollThreshold) {
      scrollDirection = scrollDiff > 0 ? "down" : "up";
    }

    // --- MÓVIL: lógica de scroll con período de gracia ---
    if (isMobile && hasBeenTriggered) {
      // Si estamos en período de gracia, no aplicar la lógica de scroll
      if (isInGracePeriod) {
        lastScrollY = scrollY;
        ticking = false;
        return;
      }

      // Verificar si estamos en el hero para ocultarlo
      const heroSection = document.querySelector("#inicio");
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // En móvil, si el hero está visible, ocultar navbar
        const heroIsVisible =
          heroRect.bottom > windowHeight * 0.3 &&
          heroRect.top <= windowHeight * 0.7;

        if (heroIsVisible) {
          if (isVisible) {
            hideNavbar();
          }
          lastScrollY = scrollY;
          ticking = false;
          return;
        }
      }

      // Aplicar lógica de scroll normal si no estamos en el hero
      if (Math.abs(scrollDiff) > scrollThreshold) {
        if (scrollDirection === "down" && scrollY > 100) {
          // Scroll hacia abajo y no estamos en el top: ocultar inmediatamente
          hideNavbar();
        } else if (scrollDirection === "up") {
          // Scroll hacia arriba: mostrar inmediatamente (solo si no estamos en hero)
          showNavbar();
        }
      }

      lastScrollY = scrollY;
      ticking = false;
      return;
    }

    // --- Lógica normal para desktop o antes de que aparezca por primera vez ---
    if (!isMobile && hasBeenTriggered) {
      // Desktop: lógica mejorada basada en la visibilidad del hero
      const heroSection = document.querySelector("#inicio");
      const serviciosSection = document.querySelector("#servicios");

      if (heroSection && serviciosSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const serviciosRect = serviciosSection.getBoundingClientRect();

        // En PC, desaparecer mucho antes - cuando el hero apenas empiece a aparecer
        const heroIsVisible =
          heroRect.bottom > windowHeight * 0.6 &&
          heroRect.top <= windowHeight * 0.8;

        // Si servicios está en el viewport
        const serviciosIsVisible = serviciosRect.top <= windowHeight * 0.8;

        if (heroIsVisible && !serviciosIsVisible) {
          // Estamos en el hero, ocultar navbar
          if (isVisible) {
            hideNavbar();
          }
        } else if (serviciosIsVisible) {
          // Servicios está visible, mostrar navbar
          if (!isVisible) {
            showNavbar();
          }
        }
      }
    } else if (!hasBeenTriggered && serviciosSection) {
      // Lógica original para la primera aparición
      const serviciosRect = serviciosSection.getBoundingClientRect();
      const serviciosTop = serviciosRect.top + scrollY;

      const shouldShow = scrollY >= serviciosTop - windowHeight * 0.8;

      if (shouldShow && !isVisible) {
        showNavbar();
      }
    }

    lastScrollY = scrollY;
    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateNavbarVisibility);
      ticking = true;
    }
  };

  // Set initial state - hidden
  gsap.set(navbarElement, {
    opacity: 0,
    y: -20,
    display: "none",
  });

  window.addEventListener("scroll", handleScroll, { passive: true });

  // Listen for custom event to show navbar when cards animation starts
  const handleServiciosCardsStart = () => {
    hasBeenTriggered = true;
    showNavbar();

    // Iniciar período de gracia de 3 segundos solo en móvil
    if (isMobile) {
      isInGracePeriod = true;
      if (graceTimeout) clearTimeout(graceTimeout);
      graceTimeout = setTimeout(() => {
        isInGracePeriod = false;
      }, 1500);
    }
  };

  window.addEventListener(
    "serviciosCardsAnimationStart",
    handleServiciosCardsStart
  );

  // Cleanup function
  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener(
      "serviciosCardsAnimationStart",
      handleServiciosCardsStart
    );
    if (graceTimeout) clearTimeout(graceTimeout);
  };
};
