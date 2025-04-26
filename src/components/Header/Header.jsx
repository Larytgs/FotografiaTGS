//Componente FILHO
import { useState } from "react";
import React from "react";

// import Home from "../Home/Home";
import { Animals, Beach, Food, Moments } from "../pages/Todos";
import Button, { Ul } from "./Style";
import Footer from "../Footer/Footer";

const Header = () => {
  // Inicializando "beach" como a seção visível
  // A variável "visibleSection" irá armazenar a seção visível atualmente (ou null se nenhuma)
  const [visibleSection, setVisibleSection] = useState("beach");

  // A função toggleSection vai alternar entre mostrar e esconder a seção
  const toggleSection = (section) => {
    // Se a seção clicada for a mesma que já está visível, ela permanece, senão, troca
    setVisibleSection(visibleSection === section ? visibleSection : section);
  };

  // Cada botão muda, da seção + muda o background + muda a cor do header.
  // Essa sectionColors é só um objeto que liga cada seção a uma cor.
  const sectionBackgroundColors = {
    beach: "#d4a14e9a",
    food: "#60210C",
    moments: "#B584AD",
    animals: "#A9CA76",
  };

  // Cada botão muda, da seção + muda a letra do header.
  // Essa textColors é só um objeto que liga cada seção a uma cor.
  const textColors = {
    beach: "#006182",
    food: "#8AA33B",
    moments: "#B7011F",
    animals: "#4D392E",
  };

  return (
    <>
      <section
        style={{
          backgroundColor: sectionBackgroundColors[visibleSection],
          color: textColors[visibleSection],
          Height: "100vh",
        }}
      >
        <div
          className="md:flex justify-around"
          style={{
            backgroundColor: sectionBackgroundColors[visibleSection],
            color: textColors[visibleSection],
          }}
        >
          <h1
            style={{
              color: textColors[visibleSection],
            }}
            className="font-black text-center m-5 text-[1.9em] 
            md:text-left md:text-[2.8em]"
          >
            Fotografia Tgs
          </h1>
          <Ul>
            {/* <li>
              <Button onClick={() => toggleSection("home")}>Home</Button>
            </li> */}
            <li>
              <Button onClick={() => toggleSection("beach")}>Beach</Button>
            </li>
            <li>
              <Button onClick={() => toggleSection("food")}>Food</Button>
            </li>
            <li>
              <Button onClick={() => toggleSection("moments")}>Moments</Button>
            </li>
            <li>
              <Button onClick={() => toggleSection("animals")}>Animals</Button>
            </li>
          </Ul>
        </div>

        <div>
          {visibleSection === "home" && <Home />}
          {visibleSection === "beach" && <Beach />}
          {visibleSection === "food" && <Food />}
          {visibleSection === "moments" && <Moments />}
          {visibleSection === "animals" && <Animals />}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Header;
