import React from "react";

export default function Title({ text, desc = "" }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="py-2 px-10 border border-transparent w-fit flex items-center rounded-full bg-[#D49F1B]">
        <h2 className="text-white font-bold  text-2xl">{text}</h2>
      </div>
     <p className="pt-2 text-[#1C406D] font-semibold text-lg ">{desc}</p>
    </div>
  );
}
