"use client";
import useCategoryStore from "@/store/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Logo = () => {
  const menuOpen = useCategoryStore((state) => state.menuOpen);
  const toggleMenu = useCategoryStore((state) => state.toggleMenu);
  const setMenuCategory = useCategoryStore((state) => state.setMenuCategory);
  const [soundPlaying, setSoundPlaying] = useState(false);
  const [ambience, setAmbience] = useState<any>(null);
  useEffect(() => {
    if(!ambience) return;
    if (soundPlaying) {
      ambience.play();
    } else {
      ambience.pause();
    }
  }, [soundPlaying, ambience]);

  const [logoMoved, setLogoMoved] = useState(false);
  useEffect(() => {
    setAmbience(new Audio("./sounds/Ambience.mp3"));
    const clickSound = new Audio("./sounds/click.wav");
    clickSound.volume = 0.5;
    setTimeout(() => setLogoMoved(true), 4000);
    window.addEventListener("mousedown", () => clickSound.play());
  }, []);

  return (
    <div className="z-50">
    <div className="flex absolute top-10 left-10 z-10 gap-4">
      <div>
        <Image src="./logos/EkStep_logo_v2.svg" width={120} height={100} alt="ek step logo" className="object-cover z-10 " />
      </div>
       { logoMoved && 
      <div className="flex flex-col justify-center border-l border-white px-4 gap-1 animate-fadeIn ">
        <Image src="./logos/People+Logo.svg" width={100} height={1} alt="ek step logo" className="object-cover z-10" />
        
      </div>
        }
    </div>
      <div className="absolute top-10 right-10 z-50 flex gap-4">
        <button onClick={() => setSoundPlaying((state) => !state)}>
          {soundPlaying ? (
            <Image src="./icons/SoundIcon.svg" width={50} height={50} alt="sound icon" className="object-cover z-10" />
          ) : (
            <Image src="./icons/MuteIcon-01.svg" width={50} height={50} alt="mute icon" className="object-cover z-10" />
          )}
        </button>
        {menuOpen ? (
          <button onClick={() => toggleMenu()}>
            <Image src="./icons/CloseIcon.svg" width={50} height={50} alt="close button" className="object-cover z-10" />
          </button>
        ) : (
          <button
            onClick={() => {
              setMenuCategory("About");
              toggleMenu();
            }}
          >
            <Image src="./icons/MenuIcon-01.svg" width={50} height={50} alt="open button" className="object-cover z-10" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Logo;
