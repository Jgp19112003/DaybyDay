import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "components/NavBar";
import WhatsAppButton from "components/WhatsAppButton";
import Servicios from "components/Servicios";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <NavBar />
      <WhatsAppButton />
      <Servicios />
    </main>
  );
};

export default App;
