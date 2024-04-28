import useCategoryStore from "@/store/store";
import React, { useEffect } from "react";

const ProgressBar = () => {
  const current = useCategoryStore((state) => state.current);
  const categories = useCategoryStore((state) => state.categories);
  const introDone = useCategoryStore((state) => state.introDone);

  const setCurrent = useCategoryStore((state) => state.setCurrent);
  return (
    <div className="mb-progress absolute bottom-0 w-screen p-10 pb-[3.5rem] font-Rubik font-bold text-white bg-gradient-to-t from-[#554342] via-[#554342] to-transparent">
      <div className="flex w-full cursor-pointer">
        {introDone &&
          categories.map((category, index) => (
            <div className={"flex flex-col items-center justify-center w-[15%] "} key={index} onClick={() => setCurrent(category.name)}>
              <div className="shadow text-sm lg:text-lg h-4 mb-4 mb-font">{index + 1}</div>
              <div
                key={index}
                className={`${current === category.name ? "bg-white" : ""} h-2 border-y border-white w-full mb-1 ${index === 0 ? "border-l" : ""} ${index === categories.length - 1 ? "border-r" : ""}`}
              ></div>
              <div className="shadow text-sm lg:text-lg h-4 mb-font">{category.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProgressBar;
