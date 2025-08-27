import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { scrambleTextAnimation } from "../animation";

const AgendarReunion = ({ onBackToHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const successRef = useRef(null);
  const successTitleRef = useRef(null);

  // Animation setup
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Add body class to prevent scrollbar changes
    document.body.classList.add("animating");

    // Set initial states immediately before any rendering
    if (sectionRef.current) {
      sectionRef.current.classList.add("meeting-scheduler-container");
      gsap.set(sectionRef.current, {
        opacity: 0,
        y: 60,
        visibility: "hidden",
        overflow: "hidden",
      });
    }

    if (titleRef.current) {
      gsap.set(titleRef.current, {
        opacity: 0,
        visibility: "hidden",
      });
      titleRef.current.textContent = "";
    }

    if (formRef.current) {
      gsap.set(formRef.current, {
        opacity: 0,
        y: 40,
        overflow: "hidden",
      });
    }

    // Small delay to ensure DOM is ready
    const animationTimer = setTimeout(() => {
      // Remove body animating class
      document.body.classList.remove("animating");

      // Mark as initialized
      if (sectionRef.current) {
        sectionRef.current.classList.add("initialized");
      }

      // Animate in
      gsap
        .timeline()
        .to(sectionRef.current, {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.6,
          ease: "power3.out",
        })
        .to(
          titleRef.current,
          {
            visibility: "visible",
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              scrambleTextAnimation(titleRef.current, "Agenda tu Reunión", {
                duration: 1200,
              });
            },
          },
          0.3
        )
        .to(
          formRef.current,
          {
            opacity: 1,
            y: 0,
            overflow: "visible",
            duration: 0.8,
            ease: "power2.out",
          },
          0.8
        );
      // import { useEffect } from "react"; // Ya está importado arriba
    }, 50);

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.body.classList.remove("animating");
      clearTimeout(animationTimer);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#agendar" && onBackToHome) {
        onBackToHome(); // Ensure the component is displayed
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [onBackToHome]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
    }

    if (!selectedDate) {
      newErrors.date = true;
    }

    if (!selectedTime) {
      newErrors.time = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function with exact code structure but using real form data
  const createMeetingEvent = (meetingData) => {
    // Parse the date and time to create ISO 8601 format
    const [day, month, year] = meetingData.date.split("/");
    const [hours, minutes] = meetingData.time.split(":");

    const startDate = new Date(year, month - 1, day, hours, minutes);
    const endDate = new Date(startDate.getTime() + 30 * 60000); // 30 minutes later

    // Use real form data instead of static example
    const eventData = {
      title: `Reunión con ${meetingData.name} - DaybyDay`,
      startTime: startDate.toISOString(),
      endTime: endDate.toISOString(),
      // Add additional form data for Make to process
      clientName: meetingData.name,
      clientEmail: meetingData.email,
      clientPhone: meetingData.phone || "No proporcionado",
      clientCompany: meetingData.company || "No proporcionada",
      clientMessage: meetingData.message || "Sin mensaje adicional",
    };

    // Return a promise to handle success/error properly
    return fetch("https://hook.eu2.make.com/zauuer8f06yoqm498iekgfou7m3vxkm1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error creando el evento");
        return response.text();
      })
      .then((data) => {
        console.log("Evento creado en Google Calendar:", data);
        return true; // Success
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error; // Re-throw to be caught by handleFormSubmit
      });
  };

  // Success animation function (now handles both success and error)
  const showResultAnimation = (isSuccess = true) => {
    setIsSubmitting(true);

    // Close the form with curtain effect from top to bottom
    gsap.to(formRef.current, {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        // Show result message
        gsap.set(successRef.current, {
          display: "flex",
          opacity: 0,
          y: -50,
        });

        // Show/hide appropriate message content
        const successMessage =
          successRef.current.querySelector("#success-message");
        const errorMessage = successRef.current.querySelector("#error-message");

        if (isSuccess) {
          successMessage.classList.remove("hidden");
          errorMessage.classList.add("hidden");
        } else {
          successMessage.classList.add("hidden");
          errorMessage.classList.remove("hidden");
        }

        // Set initial state for result title
        gsap.set(successTitleRef.current, { opacity: 0, visibility: "hidden" });
        successTitleRef.current.textContent = "";

        gsap.to(successRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          onComplete: () => {
            // Start code typing animation for title
            gsap.to(successTitleRef.current, {
              visibility: "visible",
              opacity: 1,
              duration: 0.5,
              onComplete: () => {
                const titleText = isSuccess
                  ? "¡Reunión Agendada!"
                  : "Error al Agendar";

                scrambleTextAnimation(successTitleRef.current, titleText, {
                  duration: 1200,
                });
              },
            });
          },
        });

        // Animate icon (checkmark or X)
        const checkPath = successRef.current.querySelector(".check-path");
        const xPath1 = successRef.current.querySelector(".x-path");
        const xPath2 = successRef.current.querySelector(".x-path-2");

        if (isSuccess && checkPath) {
          // Hide X paths, show checkmark
          gsap.set([xPath1, xPath2], { opacity: 0 });
          gsap.set(checkPath, { opacity: 1, strokeDashoffset: 100 });
          gsap.to(checkPath, {
            strokeDashoffset: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out",
          });
        } else if (!isSuccess && xPath1 && xPath2) {
          // Hide checkmark, show X paths
          gsap.set(checkPath, { opacity: 0 });
          gsap.set([xPath1, xPath2], { opacity: 1, strokeDashoffset: 50 });
          gsap.to([xPath1, xPath2], {
            strokeDashoffset: 0,
            duration: 0.6,
            delay: 0.3,
            ease: "power2.out",
          });
        }

        // Auto return to home after delay (longer for error to read contact info)
        setTimeout(
          () => {
            if (onBackToHome) onBackToHome();
          },
          isSuccess ? 4000 : 6000
        );
      },
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm() || isSubmitting) {
      return;
    }

    // Scroll to top immediately when form is submitted
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const meetingData = {
      ...formData,
      date: selectedDate.toLocaleDateString("es-ES"),
      time: selectedTime,
      duration: "30", // Always 30 minutes
    };

    try {
      // Execute the function with real meeting data - await the promise
      await createMeetingEvent(meetingData);

      // Show success animation only if no error was thrown
      showResultAnimation(true);
    } catch (error) {
      console.error("Error processing meeting:", error);

      // Show error animation when fetch fails
      showResultAnimation(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: false });
    }
  };

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const weekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const generateCalendarDays = () => {
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
    const firstDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const handleDateSelect = (day) => {
    if (!day) return;
    const today = new Date();
    const selected = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );

    // Don't allow past dates
    if (selected < today.setHours(0, 0, 0, 0)) return;

    setSelectedDate(selected);
    setSelectedTime(""); // Reset time when date changes
  };

  const availableTimes = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];

  return (
    <section
      ref={sectionRef}
      className="meeting-scheduler-container w-full max-w-full flex flex-col items-center mt-[180px] px-4 lg:px-0 min-h-screen mb-[40px]"
    >
      <div className="max-w-6xl w-full relative">
        <h2
          ref={titleRef}
          className="meeting-title-container text-[2.5rem] lg:text-[4rem] font-black mb-16 lg:mb-20 leading-none tracking-tight text-center text-white pb-3"
        ></h2>

        {/* Success/Error Message - Initially Hidden */}
        <div
          ref={successRef}
          className="absolute inset-0 z-10 flex-col items-center justify-center text-center bg-[#181414] rounded-[20px] p-8 hidden"
          style={{
            height: "fit-content",
            minHeight: "400px",
          }}
        >
          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto mb-6"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#fff"
                strokeWidth="3"
                fill="none"
              />
              {/* Success checkmark */}
              <path
                className="check-path"
                d="M25 50L40 65L75 30"
                stroke="#fff"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="100"
                strokeDashoffset="100"
              />
              {/* Error X paths */}
              <path
                className="x-path"
                d="M35 35L65 65"
                stroke="#ff3131"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="42.426"
                strokeDashoffset="42.426"
              />
              <path
                className="x-path-2"
                d="M65 35L35 65"
                stroke="#ff3131"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="42.426"
                strokeDashoffset="42.426"
              />
            </svg>
          </div>
          <h2
            ref={successTitleRef}
            className="text-[2rem] lg:text-[3rem] font-black text-white mb-4"
          ></h2>
          <div
            id="success-message"
            className="text-[#e0e0e0] text-lg lg:text-xl mb-6 max-w-md"
          >
            Tu reunión ha sido agendada exitosamente. Aceptala en tu correo para
            no perdertela.
          </div>
          <div
            id="error-message"
            className="text-[#e0e0e0] text-lg lg:text-xl mb-6 max-w-md hidden"
          >
            <p className="mb-4">
              No se pudo agendar la reunión. Por favor, contáctanos
              directamente:
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/34645239745?text=Hola, quiero agendar una reunión"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded-lg hover:bg-[#20b954] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:pablo@daybydayconsulting.com?subject=Solicitud de Reunión"
                className="flex items-center justify-center gap-2 bg-[#666] text-white py-3 px-6 rounded-lg hover:bg-[#555] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-[#e0e0e0] text-sm">
            <div className="w-2 h-2 bg-[#e0e0e0] rounded-full animate-pulse"></div>
          </div>
        </div>

        <div
          ref={formRef}
          className="meeting-form-container flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px]"
        >
          {/* Calendar Section */}
          <div
            className="flex-1 bg-[#f5f5f5] rounded-[20px] p-6 lg:p-8 mb-5"
            style={{ boxShadow: "4px 6px 1px #e0e0e0", overflow: "hidden" }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#181414] mb-2">
                Elige una fecha
              </h3>
              <p className="text-[#666] text-sm">
                Selecciona el día que mejor te convenga
              </p>
              {errors.date && (
                <p className="text-[#ff3131] text-sm mt-1">
                  Por favor selecciona una fecha
                </p>
              )}
            </div>

            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() - 1
                    )
                  )
                }
                className="p-2 hover:bg-[#e0e0e0] rounded-lg transition-colors"
              >
                ←
              </button>
              <h4 className="text-lg font-bold text-[#181414]">
                {monthNames[currentMonth.getMonth()]}{" "}
                {currentMonth.getFullYear()}
              </h4>
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() + 1
                    )
                  )
                }
                className="p-2 hover:bg-[#e0e0e0] rounded-lg transition-colors"
              >
                →
              </button>
            </div>

            {/* Week days */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold text-[#666] p-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {generateCalendarDays().map((day, index) => {
                const dayDate = day
                  ? new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth(),
                      day
                    )
                  : null;

                const isPastDate =
                  dayDate && dayDate < new Date().setHours(0, 0, 0, 0);

                return (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(day)}
                    disabled={!day || isPastDate || isSubmitting}
                    className={`
                      p-3 text-center rounded-lg transition-all
                      ${!day ? "invisible" : ""}
                      ${
                        isPastDate || isSubmitting
                          ? "text-[#ccc] cursor-not-allowed"
                          : "hover:bg-[#e0e0e0] cursor-pointer"
                      }
                      ${
                        selectedDate &&
                        selectedDate.getDate() === day &&
                        selectedDate.getMonth() === currentMonth.getMonth() &&
                        selectedDate.getFullYear() ===
                          currentMonth.getFullYear()
                          ? "bg-[#181414] text-white"
                          : "text-[#181414]"
                      }
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <div className="mt-6 pt-6 border-t border-[#e0e0e0]">
                <h4 className="text-lg font-bold text-[#181414] mb-4">
                  Horarios disponibles para{" "}
                  {selectedDate.toLocaleDateString("es-ES")}
                </h4>
                {errors.time && (
                  <p className="text-[#ff3131] text-sm mb-2">
                    Por favor selecciona una hora
                  </p>
                )}
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => {
                        if (!isSubmitting) {
                          setSelectedTime(time);
                          setErrors({ ...errors, time: false });
                        }
                      }}
                      disabled={isSubmitting}
                      className={`
                        p-2 rounded-lg text-sm font-medium transition-all
                        ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}
                        ${
                          selectedTime === time
                            ? "bg-[#181414] text-white"
                            : "bg-[#e0e0e0] text-[#181414] hover:bg-[#d0d0d0]"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Form Section */}
          <div
            className="flex-1 bg-[#f5f5f5] rounded-[20px] p-6 lg:p-8 mb-5"
            style={{ boxShadow: "4px 6px 1px #e0e0e0", overflow: "hidden" }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#181414] mb-2">
                Tu información
              </h3>
              <p className="text-[#666] text-sm">Cuéntanos sobre tu proyecto</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#181414] mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  disabled={isSubmitting}
                  className={`w-full p-3 rounded-lg border text-[#181414] font-medium placeholder-[#666] ${
                    errors.name ? "border-[#ff3131]" : "border-transparent"
                  } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  placeholder="Tu nombre completo"
                />
                {errors.name && <p className="text-[#ff3131] text-sm mt-1"></p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#181414] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={isSubmitting}
                  className={`w-full p-3 rounded-lg border text-[#181414] font-medium placeholder-[#666] ${
                    errors.email ? "border-[#ff3131]" : "border-transparent"
                  } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-[#ff3131] text-sm mt-1"></p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[#181414] mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  disabled={isSubmitting}
                  className={`w-full p-3 rounded-lg border text-[#181414] font-medium placeholder-[#666] ${
                    errors.phone ? "border-[#ff3131]" : "border-transparent"
                  } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  placeholder="+34 xxx xxx xxx"
                />
                {errors.phone && (
                  <p className="text-[#ff3131] text-sm mt-1"></p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-[#181414] mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  disabled={isSubmitting}
                  className={`w-full p-3 rounded-lg border text-[#181414] font-medium placeholder-[#666] ${
                    errors.company ? "border-[#ff3131]" : "border-transparent"
                  } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  placeholder="Nombre de tu empresa"
                />
                {errors.company && (
                  <p className="text-[#ff3131] text-sm mt-1"></p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#181414] mb-2">
                  Mensaje
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  disabled={isSubmitting}
                  rows={2}
                  className={`w-full p-3 rounded-lg border text-[#181414] font-medium placeholder-[#666] resize-none ${
                    errors.message ? "border-[#ff3131]" : "border-transparent"
                  } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  placeholder="Cuéntanos brevemente sobre tu proyecto o necesidades..."
                />
                {errors.message && (
                  <p className="text-[#ff3131] text-sm mt-1">
                    Completa este campo
                  </p>
                )}
              </div>

              {/* Summary */}
              {selectedDate && selectedTime && (
                <div className="">
                  <h4 className="text-sm font-bold text-[#181414]">
                    Resumen de tu cita:
                  </h4>
                  <div className="bg-[#e0e0e0] p-4 rounded-lg">
                    <p className="text-sm text-[#181414]">
                      <strong>Fecha:</strong>{" "}
                      {selectedDate.toLocaleDateString("es-ES")}
                    </p>
                    <p className="text-sm text-[#181414]">
                      <strong>Hora:</strong> {selectedTime}
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#181414] text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#2a2a2a] hover:transform hover:scale-[1.02]"
                }`}
              >
                {isSubmitting ? "Agendando..." : "Agendar Reunión"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendarReunion;
