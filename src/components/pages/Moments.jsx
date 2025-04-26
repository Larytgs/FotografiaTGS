// import React, { useRef, useEffect } from "react";

// export default function Moments() {
//   const containerRef = useRef(null);

//   const images = [
//     "/imgs/momentos/1.jpg",
//     "/imgs/momentos/2.jpg",
//     "/imgs/momentos/3.jpg",
//     "/imgs/momentos/4.jpg",
//   ];

//   useEffect(() => {
//     const container = containerRef.current;

//     const handleWheel = (e) => {
//       e.preventDefault(); // impede o scroll normal para baixo
//       container.scrollLeft += e.deltaY; // move o scroll para o lado
//     };

//     container.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       container.removeEventListener("wheel", handleWheel);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-screen h-screen overflow-x-scroll overflow-y-hidden flex snap-x snap-mandatory"
//     >
//       {images.map((src, index) => (
//         <div
//           key={index}
//           className="flex-shrink-0 w-screen h-screen flex items-center justify-center snap-center"
//         >
//           <img
//             src={src}
//             alt={`Imagem ${index}`}
//             className="w-[80%] h-auto object-cover rounded-2xl shadow-lg"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";

function Moments() {
  return (
    <section className="m-0 p-4 max-w-[100vw] bg-[#B584AD]">
      <h3 className="text-center font-bold mb-5">Momentos</h3>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {/* columns-2 → 2 colunas no mobile
          md:columns-3 → 3 colunas no tablet
          lg:columns-4 → 4 colunas no desktop
          space-y-4 → espaço vertical entre as imagens
          */}
        <img
          //   Cada imagem ocupa 100% da largura da coluna (w-full), mas a altura respeita o formato da imagem.
          //   Resultado: um efeito de encaixe perfeito, igualzinho Pinterest
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/1.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/2.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/3.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/4.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/5.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/6.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/7.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/8.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/9.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/10.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/11.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/12.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/13.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/14.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/15.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/16.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/17.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/18.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/19.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/20.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/21.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/22.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/23.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/24.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/25.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/26.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/27.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/28.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/29.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/30.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/31.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/32.jpg"
          alt=""
        />
        {/* <img
        className="w-full object-cover rounded-md shadow"
        src="/imgs/momentos/33.jpg"
        alt=""
      /> */}
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/34.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/35.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/36.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/37.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/38.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/39.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/40.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/41.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/momentos/42.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default Moments;
