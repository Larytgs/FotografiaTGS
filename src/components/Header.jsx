//Componente FILHO
import React from "react";

const Header = () => {
  return (
    <section className="flex">
      <h1 className="font-black text-left">Fotografia Tgs</h1>
      <div className="flex m-2 gap-3 text-rigth">
        <a href="#">Home</a>
        <a href="#">Beach</a>
        <a href="#">Food</a>
        <a href="#">Moments</a>
      </div>
    </section>
  );
};

export default Header;
