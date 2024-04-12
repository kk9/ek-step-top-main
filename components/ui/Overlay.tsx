"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useCategoryStore from "@/store/store";

const Overlay = (props: any) => {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const enterRef = useRef<HTMLDivElement>(null);
  const bgImgeRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const enterBtnRef = useRef<HTMLDivElement>(null);
  const peopleLogo = useRef<any>(null);
  const topLogo = useRef<any>(null);

  const tl = gsap.timeline();
  const setIntroDone = useCategoryStore((state) => state.setIntroDone);

  const { contextSafe } = useGSAP(() => {
    tl.to(welcomeRef.current, { duration: 2, opacity: 0 }, 2)
      .to(peopleLogo.current, { duration: 2, opacity: 0 }, 2)
      .to(topLogo.current,    { duration: 2, opacity: 0 }, 2)
      .to(bgImgeRef.current,  { duration: 2, opacity: 1 }, 3)
      .to(detailRef.current,  { duration: 10, opacity: 1 }, 3)
      .to(detailRef.current,  { duration: 2, opacity: 0 }, 13)
      .to(enterRef.current,   { duration: 1, opacity: 1 }, 15)
      .to(enterBtnRef.current,{ duration: 2, opacity: 1 }, 15);
  });

  const enter = contextSafe(() => {
    tl.to(
      [welcomeRef.current, detailRef.current, enterRef.current, bgImgeRef.current, overlayRef.current, enterBtnRef.current],
      {duration: 2,opacity: 0,ease: "power2.inOut",},0,)
    .to([welcomeRef.current, detailRef.current, enterRef.current, bgImgeRef.current, overlayRef.current, enterBtnRef.current],
        {duration: 1, display: 'none'}, 2);
    setIntroDone();
  });

  return (
    <>
      <>
          <div className="w-screen h-screen absolute top-0 left-0 overflow-hidden pointer-events-none" {...props}>
            <Welcome forwardRef={welcomeRef} logoRef={peopleLogo} subLogoRef={topLogo} />
            <Detail forwardRef={detailRef} />
            <Enter forwardRef={enterRef} callback={() => enter()} enterBtnRef={enterBtnRef} />
            <BgImage forwardRef={bgImgeRef} />
          </div>
      </>
      <div className="absolute top-0 left-0 w-screen h-screen bg-brOverlay bg-opacity-80 pointer-events-none" ref={overlayRef} />
    </>
  );
};

const Welcome = ({ forwardRef, logoRef, subLogoRef }: { forwardRef: React.RefObject<HTMLDivElement>; logoRef: any; subLogoRef: any }) => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center around gap-4 z-50 absolute">
        <div className="font-Rubik absolute top-40 right-[53%] translate-x-1/2 text-3xl z-10 opacity-50" ref={forwardRef}>
          WELCOME TO THE
        </div>
      </div>
      <div  className="z-50 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2" ref={logoRef}>
        <Image src="./logos/People+Logo.svg" alt="people+ logo" width={400} height={300} className="z-50 object-cover" />
      </div>
      
    </>
  );
};

const Detail = ({ forwardRef }: { forwardRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div className="opacity-0 font-Rubik absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 md:text-2xl text-2xl lg:text-4xl z-10 text-center" ref={forwardRef}>
      We believe societal change starts with people - when motivated individuals are equipped with the right resources, they can transform their own
      lives and the societies they live in.
    </div>
  );
};

const BgImage = ({ forwardRef }: { forwardRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div className="opacity-0" ref={forwardRef}>
      <Image
        src="./images/Combined-01 1.png"
        alt="people+ logo"
        width={1200}
        height={300}
        className="object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      />
    </div>
  );
};

const Enter = ({
  forwardRef,
  enterBtnRef,
  callback,
}: {
  forwardRef: React.RefObject<HTMLDivElement>;
  enterBtnRef: React.RefObject<HTMLDivElement>;
  callback: () => void;
}) => {
  return (
    <div className="">
      <div
        ref={forwardRef}
        className="opacity-0 font-Rubik absolute w-2/4 top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 text-2xl md:text-2xl lg:text-4xl z-10 text-center"
      >
        In the next few minutes, we will meet a few everyday people who have been on extraordinary transformation journeys. We invite you to walk
        their paths with them and imagine how people-centric transformation, aided by technology can change the world.
      </div>
      {/* enter button */}
      <div
        className="opacity-0 rounded-full top-[80%] left-1/2 w-40 h-40 absolute -translate-y-1/2 -translate-x-1/2 hover:scale-110 cursor-pointer z-50 pointer-events-auto mt-30"
        ref={enterBtnRef} onClick={() => callback()}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-full bg-white opacity-20"></div>
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2" onClick={() => callback()}>
          <Image src="./icons/EnterButtonText-01.svg" alt="enter" width={100} height={300} className="object-cover animate-rotate " />
        </div>
        <Image
          src="./icons/ArrowIcon-01.svg"
          alt="enter"
          width={20}
          height={300}
          className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        />
      </div>
    </div>
  );
};

export default Overlay;
