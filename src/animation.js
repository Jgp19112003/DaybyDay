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

// ====================== SECTORES ANIMATIONS ======================

export const sectoresCardsEntranceAnimation = (cardRefs, options = {}) => {
  if (!cardRefs || !cardRefs.current) return;

  const {
    stagger = 0.15,
    duration = 0.8,
    delay = 0.2,
    ease = "back.out(1.7)",
    startScale = 0.8,
    startY = 60,
    startOpacity = 0,
  } = options;

  const cards = cardRefs.current.filter(Boolean);

  // Set initial state
  gsap.set(cards, {
    opacity: startOpacity,
    scale: startScale,
    y: startY,
    rotationX: 10,
    transformOrigin: "center center",
    force3D: true,
  });

  // Entrance animation with stagger
  return gsap.to(cards, {
    opacity: 1,
    scale: 1,
    y: 0,
    rotationX: 0,
    duration: duration,
    stagger: stagger,
    delay: delay,
    ease: ease,
    force3D: true,
    onComplete: () => {
      // Clean up transform properties after animation
      gsap.set(cards, { clearProps: "transform" });
    },
  });
};

export const sectoresCardsScrollAnimation = (cardRefs, options = {}) => {
  if (!cardRefs || !cardRefs.current) return [];

  const {
    triggerStart = "top 85%",
    triggerEnd = "bottom 20%",
    scrub = 1.2,
    initialOpacity = 0.3,
    initialY = 40,
    initialScale = 0.98,
  } = options;

  const cards = cardRefs.current.filter(Boolean);
  const animations = [];

  cards.forEach((card, index) => {
    if (!card) return;

    // Kill existing scroll trigger if any
    if (card.__sectoresScrollTrigger) {
      card.__sectoresScrollTrigger.kill();
    }

    // Check if element still exists in DOM before creating animation
    if (!document.contains(card)) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: triggerStart,
        end: triggerEnd,
        scrub: scrub,
        fastScrollEnd: true,
        preventOverlaps: true,
        id: `sectores-card-${index}`,
        onEnter: () => {
          // Check if element still exists before animating
          if (document.contains(card)) {
            gsap.fromTo(
              card,
              { scale: 0.99 },
              { scale: 1, duration: 0.3, ease: "power2.out", overwrite: "auto" }
            );
          }
        },
        onLeave: () => {
          // Check if element still exists before animating
          if (document.contains(card)) {
            gsap.to(card, {
              scale: 0.99,
              duration: 0.2,
              ease: "power2.in",
              overwrite: "auto",
            });
          }
        },
        onRefresh: () => {
          // Kill animation if element no longer exists
          if (!document.contains(card)) {
            tl.kill();
          }
        },
      },
    });

    tl.fromTo(
      card,
      {
        y: initialY,
        autoAlpha: initialOpacity,
        scale: initialScale,
        rotationX: 5,
      },
      {
        y: -20,
        autoAlpha: 1,
        scale: 1.01,
        rotationX: 0,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Animate quick wins if they exist
    const wins = card.querySelectorAll(".sb-win");
    if (wins.length) {
      tl.fromTo(
        wins,
        { y: 20, autoAlpha: 0, scale: 0.95 },
        {
          y: -8,
          autoAlpha: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }

    // Animate projects if they exist
    const projects = card.querySelectorAll(".sb-project");
    if (projects.length) {
      tl.fromTo(
        projects,
        { x: 30, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }

    // Animate KPIs if they exist
    const kpis = card.querySelectorAll(".sb-kpi");
    if (kpis.length) {
      tl.fromTo(
        kpis,
        { scale: 0.8, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          stagger: 0.05,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
    }

    card.__sectoresScrollTrigger = tl.scrollTrigger;
    animations.push(tl);
  });

  return animations;
};

export const sectoresCardsHoverAnimation = (cardRefs) => {
  if (!cardRefs || !cardRefs.current) return;

  const cards = cardRefs.current.filter(Boolean);

  cards.forEach((card) => {
    if (!card) return;

    const handleMouseEnter = () => {
      // Check if element still exists before animating
      if (!document.contains(card)) return;

      gsap.to(card, {
        scale: 1.02,
        y: -8,
        boxShadow: "0 12px 36px rgba(0,0,0,0.25)",
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Animate internal elements
      const badge = card.querySelector(".sb-badge");
      const wins = card.querySelectorAll(".sb-win");
      const cta = card.querySelector(".sb-cta");

      if (badge) {
        gsap.to(badge, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (wins.length) {
        gsap.to(wins, {
          scale: 1.02,
          duration: 0.3,
          stagger: 0.02,
          ease: "power2.out",
        });
      }

      if (cta) {
        gsap.to(cta, {
          scale: 1.05,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      }
    };

    const handleMouseLeave = () => {
      // Check if element still exists before animating
      if (!document.contains(card)) return;

      gsap.to(card, {
        scale: 1,
        y: 0,
        boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Reset internal elements
      const badge = card.querySelector(".sb-badge");
      const wins = card.querySelectorAll(".sb-win");
      const cta = card.querySelector(".sb-cta");

      if (badge) {
        gsap.to(badge, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (wins.length) {
        gsap.to(wins, {
          scale: 1,
          duration: 0.3,
          stagger: 0.02,
          ease: "power2.out",
        });
      }

      if (cta) {
        gsap.to(cta, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    // Remove existing listeners to prevent duplicates
    card.removeEventListener("mouseenter", handleMouseEnter);
    card.removeEventListener("mouseleave", handleMouseLeave);

    // Add new listeners
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
  });
};

export const sectoresCardsExitAnimation = (cardRefs, options = {}) => {
  if (!cardRefs || !cardRefs.current) return;

  const {
    stagger = 0.1,
    duration = 0.5,
    ease = "power2.in",
    exitScale = 0.9,
    exitY = 40,
    exitOpacity = 0,
  } = options;

  const cards = cardRefs.current.filter(Boolean);

  return gsap.to(cards, {
    opacity: exitOpacity,
    scale: exitScale,
    y: exitY,
    rotationX: -10,
    duration: duration,
    stagger: stagger,
    ease: ease,
    force3D: true,
  });
};

// Additional animation utilities can be added here

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
  let scrollLogicTimeout = null; // Timeout para activar lógica de scroll en móvil
  let scrollLogicActive = false; // Flag para controlar si la lógica de scroll está activa

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
    // Check if navbar element still exists in DOM
    if (!document.contains(navbarElement)) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectoresSection = document.querySelector("#sectores");

    // Detectar dirección del scroll con threshold para evitar micro-movimientos
    const scrollDiff = scrollY - lastScrollY;
    if (Math.abs(scrollDiff) > scrollThreshold) {
      scrollDirection = scrollDiff > 0 ? "down" : "up";
    }

    // --- LÓGICA PARA DESPUÉS DE LA PRIMERA APARICIÓN ---
    if (hasBeenTriggered) {
      // Si estamos en período de gracia (solo móvil), mantener visible y no aplicar lógica
      if (isMobile && isInGracePeriod) {
        // Durante 1.5s: mantener navbar visible ignorando scroll
        if (!isVisible) {
          showNavbar();
        }
        lastScrollY = scrollY;
        ticking = false;
        return;
      }

      // Verificar si estamos en la sección de inicio para ocultarlo (tanto móvil como desktop)
      const heroSection = document.querySelector("#inicio");
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();

        let heroIsVisible = false;

        if (isMobile) {
          // Lógica de móvil
          heroIsVisible =
            heroRect.bottom > windowHeight * 0.3 &&
            heroRect.top <= windowHeight * 0.7;
        } else {
          // Para desktop: ocultar cuando realmente estamos viendo el inicio/hero
          heroIsVisible =
            heroRect.bottom > windowHeight * 0.6 &&
            heroRect.top <= windowHeight * 0.4;
        }

        // Si estamos en el hero, ocultar y salir
        if (heroIsVisible) {
          if (isVisible) {
            hideNavbar();
          }
          lastScrollY = scrollY;
          ticking = false;
          return;
        }
      }

      // Para desktop: si no estamos en el hero, siempre mostrar el navbar (no se oculta por scroll)
      if (!isMobile) {
        if (!isVisible) {
          showNavbar();
        }
        lastScrollY = scrollY;
        ticking = false;
        return;
      }

      // LÓGICA DE SCROLL SOLO PARA MÓVIL: después de 1.5s y solo si NO estamos en hero
      if (
        isMobile &&
        scrollLogicActive &&
        Math.abs(scrollDiff) > scrollThreshold
      ) {
        if (scrollDirection === "down" && scrollY > 100) {
          // Scroll hacia abajo después de 1.5s: ocultar
          hideNavbar();
        } else if (scrollDirection === "up") {
          // Scroll hacia arriba después de 1.5s: mostrar
          showNavbar();
        }
      }

      lastScrollY = scrollY;
      ticking = false;
      return;
    }

    // --- Lógica para la primera aparición (antes de que hasBeenTriggered sea true) ---
    if (!hasBeenTriggered && sectoresSection) {
      const sectoresRect = sectoresSection.getBoundingClientRect();
      const sectoresTop = sectoresRect.top + scrollY;

      const shouldShow = scrollY >= sectoresTop - windowHeight * 0.8;

      if (shouldShow && !isVisible) {
        showNavbar();
        hasBeenTriggered = true;

        // En móvil: activar período de gracia de 1.5s donde se ignora lógica de scroll
        if (isMobile) {
          isInGracePeriod = true;

          graceTimeout = setTimeout(() => {
            isInGracePeriod = false;
            scrollLogicActive = true;
          }, 1500);

          scrollLogicTimeout = setTimeout(() => {
            scrollLogicActive = true;
          }, 1500);
        } else {
          // En desktop: la lógica ya está activa (no necesita scroll logic)
          scrollLogicActive = true;
        }
      }
    }

    lastScrollY = scrollY;
    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking && document.contains(navbarElement)) {
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

  // Cleanup function
  return () => {
    window.removeEventListener("scroll", handleScroll);
    if (graceTimeout) clearTimeout(graceTimeout);
    if (scrollLogicTimeout) clearTimeout(scrollLogicTimeout);

    // Kill any remaining animations on this element
    if (document.contains(navbarElement)) {
      gsap.killTweensOf(navbarElement);
    }
  };
};

// Add a utility function to safely kill all animations
export const killAllAnimations = () => {
  // Kill all ScrollTriggers
  ScrollTrigger.getAll().forEach((st) => {
    try {
      st.kill();
    } catch (e) {
      console.warn("Error killing ScrollTrigger:", e);
    }
  });

  // Kill all GSAP tweens
  try {
    gsap.killTweensOf("*");
  } catch (e) {
    console.warn("Error killing GSAP tweens:", e);
  }
};
