import React from "react";
import ZoomableImage from "../Zoom/ZoomableImage";

function Beach() {
  return (
    <section className="m-0 p-4 max-w-[100vw] bg-[#d4a14e9a]">
      <h3 className="text-center font-bold mt-2 mb-2">
        Fotos inspirados em Itapoá-SC
      </h3>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {/* columns-2 → 2 colunas no mobile
            md:columns-3 → 3 colunas no tablet
            lg:columns-4 → 4 colunas no desktop
            space-y-4 → espaço vertical entre as imagens 
            */}
        <ZoomableImage
          //   Cada imagem ocupa 100% da largura da coluna (w-full), mas a altura respeita o formato da imagem.
          //   Resultado: um efeito de encaixe perfeito, igualzinho Pinterest
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/1.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/2.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/3.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/27.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/28.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/4.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/5.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/6.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/7.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/8.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/9.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/10.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/11.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/31.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/32.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/33.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/41.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/42.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/43.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/12.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/13.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/14.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/15.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/16.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/17.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/18.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/19.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/20.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/21.jpg"
          alt=""
        />
        {/* <img
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/22.jpg"
          alt=""
        /> */}
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/23.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/24.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/25.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/26.jpg"
          alt=""
        />
        {/*27 e 28 ta la em cima */}
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/29.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/30.jpg"
          alt=""
        />
        {/*31, 32 e 33 ta la em cima */}
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/34.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/35.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/36.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/37.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/38.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/39.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/40.jpg"
          alt=""
        />
        {/*41, 42 e 43 ta la em cima */}
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/44.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/45.jpg"
          alt=""
        />

        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/46.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/47.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/48.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/49.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/50.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/51.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/52.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/53.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/54.jpg"
          alt=""
        />
        <ZoomableImage
          className="w-full object-cover rounded-md shadow"
          src="/imgs/praia/55.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default Beach;
