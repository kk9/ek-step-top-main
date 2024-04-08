import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <main className="w-screen h-screen overflow-hidden bg-brOverlay">
      <div className="flex absolute top-10 left-10 z-50 gap-4">
        <Image src="./logos/EkStep_logo_v2.svg" width={120} height={100} alt="ek step logo" className="object-cover z-50" />
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center around gap-4 z-50 absolute">
        <div className="font-Rubik absolute top-40 right-1/2 translate-x-1/2 text-3xl z-10 opacity-50 text-white">
          WELCOME TO THE
        </div>
      </div>
      <div  className="z-50 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src="./logos/People+Logo.svg" alt="people+ logo" width={400} height={300} className="z-50 object-cover" />
      </div>

      <div className="text-white font-Albert absolute top-[70%] left-1/2 -translate-x-1/2 animate-pulse">
        LOADING
      </div>
    </main>
  );
};

export default Loading;
