import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { scrambleTextAnimation } from "../animation";

const AgendarReunion = ({ onBackToHome }) => {
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
  const [isMobile, setIsMobile] = useState(false);

  // Animation setup
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    gsap.set(sectionRef.current, { opacity: 0, y: 60 });
    gsap.set(titleRef.current, { opacity: 0, visibility: "hidden" });
    titleRef.current.textContent = "";
    gsap.set(formRef.current, { opacity: 0, y: 40 });

    // Animate in
    gsap
      .timeline()
      .to(sectionRef.current, {
        opacity: 1,
        y: 0,
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
          duration: 0.8,
          ease: "power2.out",
        },
        0.8
      );
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

  // Function to create calendar event using crearMeeting logic
  const createCalendarEvent = async (meetingData) => {
    try {
      // Parse the date and time to create ISO 8601 format
      const [day, month, year] = meetingData.date.split("/");
      const [hours, minutes] = meetingData.time.split(":");

      const startDate = new Date(year, month - 1, day, hours, minutes);
      const endDate = new Date(startDate.getTime() + 30 * 60000); // 30 minutes later

      const eventData = {
        title: `Reunión con ${meetingData.name} - DaybyDay`,
        startTime: startDate.toISOString(),
        endTime: endDate.toISOString(),
      };

      // Call Make webhook (same as crearMeeting.js)
      const response = await fetch(
        "https://hook.eu2.make.com/mm4hl8ma5ms5iickz72xvoyqz2i2s36q",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        }
      );

      if (!response.ok) throw new Error("Error creando el evento");

      const data = await response.text();
      console.log("Evento creado en Google Calendar:", data);
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
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

    // Llamada al webhook de Make
    fetch("https://hook.eu2.make.com/mm4hl8ma5ms5iickz72xvoyqz2i2s36q", {
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
        // Aquí puedes mostrar un mensaje o redirigir según tu lógica
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const meetingData = {
      ...formData,
      date: selectedDate.toLocaleDateString("es-ES"),
      time: selectedTime,
      duration: "30", // Always 30 minutes
    };

    try {
      // Execute the function with real meeting data
      createMeetingEvent(meetingData);

      console.log("Meeting data:", meetingData);

      alert("¡Reunión agendada exitosamente! Te contactaremos pronto.");

      // Navigate back to home
      if (onBackToHome) onBackToHome();
    } catch (error) {
      console.error("Error processing meeting:", error);
      alert(
        "Hubo un error al procesar tu solicitud. Por favor, intenta de nuevo."
      );
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
      className={`w-full max-w-full flex flex-col items-center ${
        isMobile
          ? "meeting-scheduler-mobile mt-[120px] mb-[100px]"
          : "mt-[80px]"
      } px-4 lg:px-0 min-h-screen`}
    >
      <div className="max-w-6xl w-full">
        <h2
          ref={titleRef}
          className="text-[2.5rem] lg:text-[4rem] font-black mb-12 leading-none tracking-tight text-center text-white"
        ></h2>

        <div
          ref={formRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          {/* Calendar Section */}
          <div
            className="flex-1 bg-[#f5f5f5] rounded-[20px] p-6 lg:p-8"
            style={{ boxShadow: "4px 6px 1px #e0e0e0" }}
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
                    disabled={!day || isPastDate}
                    className={`
                      p-3 text-center rounded-lg transition-all
                      ${!day ? "invisible" : ""}
                      ${
                        isPastDate
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
                        setSelectedTime(time);
                        setErrors({ ...errors, time: false });
                      }}
                      className={`
                        p-2 rounded-lg text-sm font-medium transition-all
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
            className="flex-1 bg-[#f5f5f5] rounded-[20px] p-6 lg:p-8"
            style={{ boxShadow: "4px 6px 1px #e0e0e0" }}
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
                  className={`w-full p-3 rounded-lg border text-[#181414] font-medium placeholder-[#666] ${
                    errors.name ? "border-[#ff3131]" : "border-transparent"
                  }`}
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
                  className={`w-full p-3 rounded-lg border text-[#181414] font-medium placeholder-[#666] ${
                    errors.email ? "border-[#ff3131]" : "border-transparent"
                  }`}
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
                  className={`w-full p-3 rounded-lg border text-[#181414] font-medium placeholder-[#666] ${
                    errors.phone ? "border-[#ff3131]" : "border-transparent"
                  }`}
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
                  className={`w-full p-3 rounded-lg border text-[#181414] font-medium placeholder-[#666] ${
                    errors.company ? "border-[#ff3131]" : "border-transparent"
                  }`}
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
                  rows={2}
                  className={`w-full p-3 rounded-lg border text-[#181414] font-medium placeholder-[#666] resize-none ${
                    errors.message ? "border-[#ff3131]" : "border-transparent"
                  }`}
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
                className="w-full bg-[#181414] text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:bg-[#2a2a2a] hover:transform hover:scale-[1.02]"
              >
                Agendar Reunión
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendarReunion;
