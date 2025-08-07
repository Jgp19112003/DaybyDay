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

  // Get the title, paragraph and button elements
  const title = infoRef.current.querySelector("h2");
  const paragraph = infoRef.current.querySelector("p");
  const button = infoRef.current.querySelector("button");

  // Set initial states - reset on every call
  gsap.set(infoRef.current, { opacity: 0, y: 60 });
  if (title) gsap.set(title, { opacity: 0 });
  if (paragraph) gsap.set(paragraph, { opacity: 0, y: 20 });
  if (button) gsap.set(button, { opacity: 0, y: 20 });

  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top 80%",
    once: true,
    onEnter: () => {
      // NO remover clases, la sección ya debe ser visible

      // First fade in the container
      gsap.to(infoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => {
          // Start scramble animation for title
          if (title) {
            gsap.to(title, {
              opacity: 1,
              duration: 0.3,
              onComplete: () => {
                // Use unified scramble animation
                scrambleTextAnimation(title, "Servicios", {
                  duration: 1200,
                  delay: 0,
                }).then(() => {
                  // Show paragraph after title animation completes
                  if (paragraph) {
                    gsap.to(paragraph, {
                      opacity: 1,
                      y: 0,
                      duration: 0.8,
                      ease: "power2.out",
                      delay: 0.2,
                    });
                  }

                  // Animate button after paragraph
                  if (button) {
                    gsap.to(button, {
                      opacity: 1,
                      y: 0,
                      duration: 0.8,
                      ease: "back.out(1.7)",
                      delay: 1.0,
                    });
                  }
                });
              },
            });
          }
        },
      });
    },
  });
};

export const serviciosTitleAnimation = (titleRef, sectionRef) => {
  if (!titleRef.current) return;

  // Set initial state - ensure element is hidden
  gsap.set(titleRef.current, { opacity: 0 });

  // Kill any existing scroll triggers for this element to prevent conflicts
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.trigger === sectionRef.current) {
      trigger.kill();
    }
  });

  // Create scroll trigger that starts the scramble animation
  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top 80%",
    once: true,
    onEnter: () => {
      // NO remover clases, la sección ya debe ser visible

      // Fade in the element and start the scramble animation
      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          // Use unified scramble animation
          scrambleTextAnimation(titleRef.current, "Servicios", {
            duration: 1000,
            delay: 200,
          });
        },
      });
    },
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
            // Animation complete
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
        delay: 2.5, // Delay to allow text content to appear first
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.4,
        ease: "elastic.out(0.8, 0.4)",
      }
    );
    return;
  }

  // Desktop animation - keep the original dramatic entrance but with increased delay
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
      delay: 1.5, // Increased delay to allow text content to appear first
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

  cardsRef.current.forEach((card, index) => {
    if (!card) return;

    // Remove previous listeners to avoid stacking
    card.onmouseenter = null;
    card.onmouseleave = null;
    card.onclick = null;

    const title = card.querySelector(".card-title");
    const description = card.querySelector(".card-description");
    const tags = card.querySelectorAll(".card-tag");

    if (isMobile) {
      // Mobile: exclusive selection on click
      card.addEventListener("click", () => {
        // First, reset all other cards to dark theme
        cardsRef.current.forEach((otherCard, otherIndex) => {
          if (!otherCard || otherIndex === index) return;

          const otherTitle = otherCard.querySelector(".card-title");
          const otherDescription = otherCard.querySelector(".card-description");
          const otherTags = otherCard.querySelectorAll(".card-tag");

          // Switch other cards to dark theme with smooth transition
          otherCard.classList.add("card-dark");

          gsap.to(otherCard, {
            scale: 1,
            duration: 0.6,
            ease: "power2.inOut",
          });

          gsap.to([otherTitle, otherDescription], {
            color: "#ffffff",
            duration: 0.6,
            ease: "power2.inOut",
          });

          gsap.to(otherTags, {
            backgroundColor: "#232323",
            borderColor: "#333333",
            color: "#ffffff",
            duration: 0.6,
            ease: "power2.inOut",
          });
        });

        // Then activate the clicked card with smooth transition
        card.classList.remove("card-dark");

        gsap.to(card, {
          scale: 1.05,
          duration: 0.6,
          ease: "power2.inOut",
        });

        gsap.to([title, description], {
          color: "#181414",
          duration: 0.6,
          ease: "power2.inOut",
        });

        gsap.to(tags, {
          backgroundColor: "#ff3131",
          borderColor: "transparent",
          color: "#ffffff",
          duration: 0.6,
          ease: "power2.inOut",
        });
      });
    } else {
      // Desktop: hover behavior with smooth continuous transitions
      card.addEventListener("mouseenter", () => {
        // Switch to light theme and scale up smoothly
        card.classList.remove("card-dark");

        gsap.to(card, {
          scale: 1.05,
          duration: 0.5,
          ease: "power1.inOut", // Smoother, more continuous easing
        });

        // Animate text to dark color smoothly
        gsap.to([title, description], {
          color: "#181414",
          duration: 0.4,
          ease: "power1.inOut",
        });

        // Animate tags to red style with smooth transition
        gsap.to(tags, {
          backgroundColor: "#ff3131",
          borderColor: "transparent",
          color: "#ffffff",
          duration: 0.4,
          ease: "power1.inOut",
        });
      });

      card.addEventListener("mouseleave", () => {
        // Switch back to dark theme and scale down smoothly
        card.classList.add("card-dark");

        gsap.to(card, {
          scale: 1,
          duration: 0.4,
          ease: "power1.inOut", // Smoother, more continuous easing
        });

        // Animate text to white color smoothly
        gsap.to([title, description], {
          color: "#ffffff",
          duration: 0.4,
          ease: "power1.inOut",
        });

        // Animate tags to dark style with smooth transition
        gsap.to(tags, {
          backgroundColor: "#232323",
          borderColor: "#333333",
          color: "#ffffff",
          duration: 0.4,
          ease: "power1.inOut",
        });
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
  cardsRef
) => {
  if (!sectionRef.current) return null;

  const isMobile = window.innerWidth <= 768;

  // Disable mouse follow animation on mobile for better performance
  if (isMobile) {
    return () => {}; // Return empty cleanup function
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculate mouse position as percentage (-1 to 1)
    const xPercent = (clientX / innerWidth - 0.5) * 2;
    const yPercent = (clientY / innerHeight - 0.5) * 2;

    // Apply different movement intensities to different elements
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        x: xPercent * 8,
        y: yPercent * 4,
        duration: 0.6,
        ease: "power2.out",
      });
    }

    if (infoRef.current) {
      gsap.to(infoRef.current, {
        x: xPercent * 6,
        y: yPercent * 3,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    // Move cards with different intensities
    cardsRef.current.forEach((card, index) => {
      if (card) {
        const intensity = 4 + index * 1.5; // Different intensity for each card
        gsap.to(card, {
          x: xPercent * intensity,
          y: yPercent * (intensity * 0.6),
          duration: 0.7 + index * 0.1,
          ease: "power2.out",
        });
      }
    });
  };

  // Add mouse move listener
  document.addEventListener("mousemove", handleMouseMove);

  // Return cleanup function
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
