"use client";
import useCategoryStore from "@/store/store";
import Image from "next/image";
import React from "react";

const About = () => {
  const categories = useCategoryStore((state) => state.categories);
  const setCurrent = useCategoryStore((state) => state.setCurrent);
  const setMenuCategory = useCategoryStore((state) => state.setMenuCategory);
  const toggleMenu = useCategoryStore((state) => state.toggleMenu);
  return (
    <div className="fixed top-0 left-0 overflow-y-scroll inset-0">
      <div className="p-40 mb-design w-screen h-auto static bg-brOverlay bg-opacity-80 flex flex-col gap-4">
        <div className="opacity-80 text-[#ADA3A1] font-32 font-Rubik">ABOUT</div>
        <div>
          <div className="flex flex-col justify-center gap-1 ml--10">
            <Image
              src="./logos/People+Logo.svg"
              width={130}
              height={1}
              alt="ek step logo"
              className="object-cover z-10"
            />
           
          </div>
        </div>
        <div className="flex flex-col text-white text-2xl font-Rubik gap-6">
          <p>
            We believe societal change starts with people - when motivated individuals are equipped with the right
            resources, they can transform their own lives and the societies they live in.
          </p>
          <p>
            Here, we will meet a few everyday people who have been on extraordinary transformation journeys. We invite
            you to walk their paths with them and imagine how people-centric transformation, aided by technology can
            change the world.
          </p>
        </div>

        <div className="opacity-80 text-[#ADA3A1] font-32 font-Rubik mt-10 mb-5">TRANSFORMATION HEROES</div>
        <div className="flex flex-col gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="text-2xl md:text-2xl lg:text-2xl text-white font-Rubik cursor-pointer"
              onClick={() => {
                toggleMenu();
                setCurrent(category.name);
                setMenuCategory(category.name);
                toggleMenu();
              }}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
