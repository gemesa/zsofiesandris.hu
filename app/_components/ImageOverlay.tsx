"use client";
import dynamic from "next/dynamic";
import { FC } from "react";

const Counter = dynamic(() => import("@/app/_components/Counter"), {
  ssr: false,
});

const ImageOverlay: FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-kombu-green animate-fadeIn -translate-y-3">
      <h1 className="text-4xl text-[42px] font-playfair sm:text-6xl text-center font-normal">
        Eszter és István
      </h1>
      <h2 className="font-libre text-xl font-medium italic pb-10">
        nagy napja
      </h2>
      <div className="w-full h-24 flex items-center justify-center">
        <Counter />
      </div>
    </div>
  );
};

export default ImageOverlay;
