//Componente FILHO
import React from "react";

const Header = () => {
  return (
    <section>
      <div className="flex justify-around m-2">
        <h1 className="font-black text-left m-5">Fotografia Tgs</h1>
        <div className="mt-10 flex gap-6">
          <a href="#">Home</a>
          <a href="#">Beach</a>
          <a href="#">Food</a>
          <a href="#">Moments</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
