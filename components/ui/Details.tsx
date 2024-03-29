"use client";
import useCategoryStore, { Category } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const Details = ({ category }: { category: Category }) => {
  const menuOpen = useCategoryStore((state) => state.menuOpen);
  const menuCategory = useCategoryStore((state) => state.menuCategory);

  return (
    <>
      {menuOpen && menuCategory === category.name && (
        <div className="fixed inset-0 overflow-y-scroll w-screen top-0 left-0  h-auto p-20 pt-40 z-20 ">
          <div className="w-full h-full fixed top-0 left-0 -z-10 bg-brOverlay opacity-20"></div>
          <div className="w-full h-full z-10 static">
            <Suspense
              fallback={
                <div className="z-10 text-white text-xl flex items-center justify-center w-full h-screen">
                  Loading...
                </div>
              }
            >
              <Image
                src={category.personaImage}
                alt="details slide"
                width={1000}
                height={1000}
                className="w-full h-auto z-10 object-cover"
              />
              <div className="w-full flex flex-col bg-[#7B4311] p-20 items-center justify-center">
                <div className="text-5xl text-white font-Rubik mb-20">EXPLORE</div>

                <div className="grid grid-cols-2 p-10 w-full items-center justify-between gap-y-8 gap-x-16">
                  {
                    category.links.map((link, idx) => {
                      return(
                      <DetaillLink title={link.title} url={link.url} />
                      )
                    })
                  }

                </div>

              </div>
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};
const DetaillLink = ({ title, url }: { title: string; url: string }) => {
  return (
    <Link href={url} target="_blank" className="h-full">
      <div className="bg-[#E2D3C6] font-Rubik text-lg lg:text-4xl font-bold flex items-center justify-between text-[#511917] p-8 rounded-xl w-full h-full">
        {title}
        <Image src={"/icons/PopUp-01.svg"} height={30} width={30} alt="open link" />
      </div>
    </Link>
  );
};

export default Details;
