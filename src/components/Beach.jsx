import React from "react";

function Beach() {
  return (
    <section className="m-5 borde p-4 max-w-7xl">
      <h3 className="text-center font-bold mb-5">
        Fotos inspirados em Itapoá-SC
      </h3>
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
          src="/imgs/20230507_123923.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/20230514_180213.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/Imagem do WhatsApp de 2025-01-14 à(s) 19.12.07_45117cef.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/Imagem do WhatsApp de 2024-08-07 à(s) 12.35.54_fef27836.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/Imagem do WhatsApp de 2025-01-14 à(s) 19.12.59_52fd9a0d.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/IMG-20220728-WA0002.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/IMG-20220728-WA0006.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/IMG-20220728-WA0008.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/IMG-20220728-WA0009.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/IMG-20220728-WA0010.jpg"
          alt=""
        />
        <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/IMG-20220810-WA0030.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default Beach;
