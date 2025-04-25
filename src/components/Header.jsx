//Componente FILHO
import React from "react";

const Header = () => {
  return (
    <section>
      <div className="flex justify-around m-2">
        <h1 className="font-black text-left m-5">Fotografia Tgs</h1>
        <div className="mt-10 flex gap-6">
          <a className="text-blue-800 hover:text-[#00D6D8] font-bold" href="#">
            Home
          </a>
          <a className="text-blue-800 hover:text-[#00D6D8] font-bold" href="#">
            Beach
          </a>
          <a className="text-blue-800 hover:text-[#00D6D8] font-bold" href="#">
            Food
          </a>
          <a className="text-blue-800 hover:text-[#00D6D8] font-bold" href="#">
            Moments
          </a>
          <a className="text-blue-800 hover:text-[#00D6D8] font-bold" href="#">
            Animals
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
