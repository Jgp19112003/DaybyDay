import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const logoHangingAnimation = (logoElement) => {
  if (!logoElement) return;

  // Get individual word elements
  const firstDay = logoElement.querySelector(".logo-first-line .logo-day");
  const secondDay = logoElement.querySelector(".logo-second-line .logo-day");
  const secondY = logoElement.querySelector(".logo-second-line .logo-y");
  const by = logoElement.querySelector(".logo-second-line .logo-by");

  // Set initial state FIRST, before removing hiding class
  gsap.set([firstDay, secondDay, secondY, by], {
    y: -150,
    opacity: 0,
    rotation: (i) => -20 + i * 10, // Different rotation for each element
  });

  // Now remove initial hiding class
  logoElement.classList.remove("logo-hidden");

  // Animate each word falling with different delays
  gsap.to(firstDay, {
    y: 0,
    opacity: 1,
    rotation: 0,
    duration: 1,
    ease: "bounce.out",
    delay: 0.2,
  });

  gsap.to(secondDay, {
    y: 0,
    opacity: 1,
    rotation: 0,
    duration: 1.1,
    ease: "bounce.out",
    delay: 0.4,
  });

  gsap.to(secondY, {
    y: 0,
    opacity: 1,
    rotation: 12, // Keep the original rotation
    duration: 0.9,
    ease: "bounce.out",
    delay: 0.6,
  });

  gsap.to(by, {
    y: 0,
    opacity: 1,
    rotation: 12, // Keep the original rotation
    duration: 0.8,
    ease: "bounce.out",
    delay: 0.8,
  });
};

export const navMenuAnimation = (navContainer) => {
  if (!navContainer) return Promise.resolve();

  return new Promise((resolve) => {
    const navLinks = navContainer.querySelectorAll(".nav-link");
    const isMobile = window.innerWidth <= 768;

    // Set initial state FIRST, before removing hiding class
    gsap.set(navLinks, {
      y: isMobile ? -30 : -80,
      opacity: 0,
    });

    // Now remove initial hiding class
    navContainer.classList.remove("nav-hidden");

    gsap.to(navLinks, {
      y: 0,
      opacity: 1,
      duration: isMobile ? 0.4 : 0.2,
      ease: "power3.out",
      delay: isMobile ? 0.1 : 0.2,
      stagger: isMobile ? 0.1 : 0.3,
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

export const serviciosTitleAnimation = (titleRef, sectionRef) => {
  if (!titleRef.current) return;

  // Set initial state
  gsap.set(titleRef.current, { opacity: 0 });

  // Create scroll trigger that starts the code typing animation
  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top 80%",
    once: true,
    onEnter: () => {
      // Fade in the element first
      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          // Start the code typing animation
          codeTypingAnimation(titleRef.current, "Servicios", {
            duration: 2500,
            scrambleDuration: 1800,
            delay: 200,
          });
        },
      });
    },
  });
};

export const serviciosInfoAnimation = (infoRef, sectionRef) => {
  if (!infoRef.current) return;

  // Get the paragraph element
  const paragraph = infoRef.current.querySelector("p");
  const button = infoRef.current.querySelector("button");

  // Set initial states
  gsap.set(infoRef.current, { opacity: 0, y: 60 });
  if (button) gsap.set(button, { opacity: 0, y: 20 });

  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top 80%",
    once: true,
    onEnter: () => {
      // First fade in the container
      gsap.to(infoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => {
          // Simple fade in for paragraph - no code typing
          if (paragraph) {
            gsap.fromTo(
              paragraph,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.3,
              }
            );
          }

          // Animate button after paragraph
          if (button) {
            gsap.to(button, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
              delay: 1.1,
            });
          }
        },
      });
    },
  });
};

export const serviciosCardsAnimation = (cardsRef) => {
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

export const serviciosTagsAnimation = (tagsRef, cardsRef) => {
  tagsRef.current.forEach((tags, idx) => {
    gsap.fromTo(
      tags.querySelectorAll(".service-tag"),
      { opacity: 0, scale: 0.7, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.07,
        delay: 0.5 + idx * 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current[idx],
          start: "top 90%",
          once: true,
        },
      }
    );
  });
};

export const serviciosCardHoverAnimation = (cardsRef) => {
  cardsRef.current.forEach((card) => {
    if (!card) return;
    // Remove previous listeners to avoid stacking
    card.onmouseenter = null;
    card.onmouseleave = null;

    card.addEventListener("mouseenter", () => {
      // Tick rápido y suave: pequeño crecimiento y vuelta inmediata
      gsap
        .timeline()
        .to(card, {
          scale: 1.2,
          duration: 0.1,
          ease: "power2.out",
        })
        .to(card, {
          scale: card.classList.contains("card-dark") ? 1 : 1.02,
          duration: 0.15,
          ease: "power2.inOut",
        });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: card.classList.contains("card-dark") ? 1 : 1.02,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  });
};

export const serviciosCardCyclingAnimation = (
  cardsRef,
  tagsRef,
  activeCard
) => {
  if (!cardsRef.current || !tagsRef.current) return;

  const tl = gsap.timeline();

  cardsRef.current.forEach((card, index) => {
    if (!card) return;

    const title = card.querySelector(".card-title");
    const description = card.querySelector(".card-description");
    const tags = tagsRef.current[index]?.querySelectorAll(".card-tag") || [];

    if (index === activeCard) {
      // Animate to light theme - only text colors and scale
      card.classList.remove("card-dark");
      tl.to(
        card,
        {
          scale: 1.02,
          duration: 1.5,
          ease: "power1.inOut",
        },
        0
      )
        .to(
          [title, description],
          {
            color: "#181414",
            duration: 1.2,
            ease: "power1.inOut",
          },
          0.3
        )
        .to(
          tags,
          {
            backgroundColor: "#ede6d6",
            borderColor: "transparent",
            color: "#181414",
            duration: 1.0,
            stagger: 0.08,
            ease: "power1.inOut",
          },
          0.5
        );
    } else {
      // Animate to dark theme - only text colors and scale
      card.classList.add("card-dark");
      tl.to(
        card,
        {
          scale: 1,
          duration: 1.5,
          ease: "power1.inOut",
        },
        0
      )
        .to(
          [title, description],
          {
            color: "#ffffff",
            duration: 1.2,
            ease: "power1.inOut",
          },
          0.3
        )
        .to(
          tags,
          {
            backgroundColor: "#232323",
            borderColor: "#333333",
            color: "#ffffff",
            duration: 1.0,
            stagger: 0.08,
            ease: "power1.inOut",
          },
          0.5
        );
    }
  });

  return tl;
};

export const initServiceCardsCycling = (cardsRef, tagsRef) => {
  if (!cardsRef.current || !tagsRef.current) return null;

  let currentCard = 0;
  const totalCards = cardsRef.current.length;

  // Set initial state
  cardsRef.current.forEach((card, index) => {
    if (!card) return;

    const title = card.querySelector(".card-title");
    const description = card.querySelector(".card-description");
    const tags = tagsRef.current[index]?.querySelectorAll(".card-tag") || [];

    if (index === 0) {
      // First card starts light
      card.classList.remove("card-dark");
      gsap.set(card, { scale: 1.02 });
      gsap.set([title, description], { color: "#181414" });
      gsap.set(tags, {
        backgroundColor: "#ede6d6",
        borderColor: "transparent",
        color: "#181414",
      });
    } else {
      // Other cards start dark
      card.classList.add("card-dark");
      gsap.set(card, { scale: 1 });
      gsap.set([title, description], { color: "#ffffff" });
      gsap.set(tags, {
        backgroundColor: "#232323",
        borderColor: "#333333",
        color: "#ffffff",
      });
    }
  });

  const cycleCards = () => {
    currentCard = (currentCard + 1) % totalCards;
    serviciosCardCyclingAnimation(cardsRef, tagsRef, currentCard);
  };

  const interval = setInterval(cycleCards, 6000);

  return () => clearInterval(interval);
};

export const serviciosMouseFollowAnimation = (
  sectionRef,
  titleRef,
  infoRef,
  cardsRef
) => {
  if (!sectionRef.current) return null;

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
    totalDuration = 1000, // Total animation duration in ms (1 second by default)
    characters = "!@#$%^&*()_+-=[]{}|;:,.<>?~`",
    delay = 0,
    scramblePhaseRatio = 0.4, // What percentage of total time is scrambling (30% by default)
    initialScrambleSpeed = 25, // Initial scramble speed (ms)
    finalScrambleSpeed = 60, // Final scramble speed (ms)
  } = options;

  const targetText = text || element.textContent;
  const textLength = targetText.length;
  const nonSpaceChars = targetText.replace(/ /g, "").length;

  // Calculate timing based on total duration
  const scrambleDuration = Math.floor(totalDuration * scramblePhaseRatio);
  const revealDuration = totalDuration - scrambleDuration;
  const revealSpeed =
    nonSpaceChars > 0
      ? Math.max(20, Math.floor(revealDuration / nonSpaceChars))
      : 50;

  let currentText = new Array(textLength).fill("");
  let revealedIndices = new Set();
  let scrambleInterval;
  let revealTimeout;

  // Clear the element initially
  element.textContent = "";

  // Start after delay
  setTimeout(() => {
    let scrambleStartTime = Date.now();
    let revealStarted = false;

    // Scrambling phase with dynamic speed
    const scrambleLoop = () => {
      const elapsed = Date.now() - scrambleStartTime;

      // Calculate dynamic scramble speed based on how much text is revealed
      const revealProgress = revealedIndices.size / nonSpaceChars;
      const currentScrambleSpeed =
        initialScrambleSpeed +
        (finalScrambleSpeed - initialScrambleSpeed) * revealProgress;

      if (elapsed < scrambleDuration || revealStarted) {
        // Generate random characters for non-revealed positions
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

        // Continue scrambling if not all characters are revealed
        if (revealedIndices.size < nonSpaceChars) {
          scrambleInterval = setTimeout(scrambleLoop, currentScrambleSpeed);
        }
      }

      // Start revealing after initial scramble period
      if (elapsed >= scrambleDuration && !revealStarted) {
        startRevealPhase();
        revealStarted = true;
      }
    };

    // Start revealing phase with smooth sequential reveals
    const startRevealPhase = () => {
      // Reveal characters sequentially from left to right
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
          // Ensure final text is correct and stop scrambling
          clearTimeout(scrambleInterval);
          element.textContent = targetText;
        }
      };

      revealNextCharacter();
    };

    scrambleLoop();
  }, delay);

  // Return cleanup function
  return () => {
    clearTimeout(scrambleInterval);
    clearTimeout(revealTimeout);
  };
};
