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
  // Kill previous SplitText if exists
  if (titleRef.current._splitText) {
    titleRef.current._splitText.revert();
    delete titleRef.current._splitText;
  }
  try {
    const split = new SplitText(titleRef.current, { type: "chars" });
    titleRef.current._splitText = split;
    gsap.fromTo(
      split.chars,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  } catch {
    gsap.fromTo(
      titleRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }
};

export const serviciosInfoAnimation = (infoRef, sectionRef) => {
  if (!infoRef.current) return;
  gsap.fromTo(
    infoRef.current,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    }
  );
};

export const serviciosCardsAnimation = (cardsRef, sectionRef) => {
  gsap.fromTo(
    cardsRef.current,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.18,
      ease: "expo.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        once: true,
      },
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
      gsap.to(card, {
        y: -10,
        boxShadow: "0 12px 32px 0 rgba(0,0,0,0.18)",
        duration: 0.3,
        ease: "power2.out",
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        boxShadow: card.classList.contains("dark")
          ? "0 4px 24px 0 rgba(0,0,0,0.4)"
          : "0 4px 24px 0 rgba(0,0,0,0.1)",
        duration: 0.3,
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
