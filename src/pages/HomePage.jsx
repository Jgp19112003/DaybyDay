import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Inicio from "../components/Inicio";
import Sectores from "../components/Sectores";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HomePage = ({ onNavScroll, openCalendly }) => {
  return (
    <>
      <Inicio />
      <Sectores onAgendarClick={openCalendly} />
      <Nosotros onAgendarClick={openCalendly} />
      <Footer onAgendarClick={openCalendly} />
    </>
  );
};

export default HomePage;
