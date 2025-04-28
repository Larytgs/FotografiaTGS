import React, { useState } from "react";

function ZoomableImage({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  const openImage = () => setIsOpen(true);
  const closeImage = () => setIsOpen(false);

  return (
    <>
      {/* Imagem pequena */}
      <img
        src={src}
        alt={alt}
        onClick={openImage}
        style={{
          width: "300px", // tamanho inicial
          cursor: "zoom-in",
          borderRadius: "8px",
          transition: "transform 0.3s",
        }}
      />

      {/* Modal da imagem ampliada */}
      {isOpen && (
        <div
          onClick={closeImage}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </>
  );
}

export default ZoomableImage;

// A imagem pequena fica clicável.

// Quando clica:
// Abre um modal cobrindo a tela com fundo preto semi-transparente.
// A imagem ocupa no máximo 90% da largura e altura da tela.
// Se clicar de novo na tela escura ou na imagem → fecha.

// E no responsivo?
// Como usamos max-width: 90% e max-height: 90%, ele se adapta automaticamente no celular, tablet, etc.
