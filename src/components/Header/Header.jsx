//Componente FILHO
import { useState } from "react";
import React from "react";

import { Animals, Beach, Food, Moments } from "../pages/Todos";
import Button, { Ul } from "./Style";

const Header = () => {
  // Inicializando "presentation" como a seção visível
  // A variável "visibleSection" irá armazenar a seção visível atualmente (ou null se nenhuma)
  const [visibleSection, setVisibleSection] = useState("presentation");

  // A função toggleSection vai alternar entre mostrar e esconder a seção
  const toggleSection = (section) => {
    // Se a seção clicada for a mesma que já está visível, ela permanece, senão, troca
    setVisibleSection(visibleSection === section ? visibleSection : section);
  };

  return (
    <>
      <section>
        <div className="flex justify-around m-2">
          <h1 className="font-black text-left m-5">Fotografia Tgs</h1>
          <Ul>
            <li>
              <Button>Home</Button>
            </li>
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
          {visibleSection === "beach" && <Beach />}
          {visibleSection === "food" && <Food />}
          {visibleSection === "moments" && <Moments />}
          {visibleSection === "animals" && <Animals />}
        </div>
      </section>

      {/* <Footer/> */}
    </>
  );
};

export default Header;
