import React from "react";

export default function Title({ text }) {
  return (
    <div className="flex  justify-center w-full">
      <div className="py-2 px-10 border border-transparent flex items-center rounded-full bg-[#D49F1B]">
        <h2 className="text-white font-bold text-2xl">{text}</h2>
      </div>
     
    </div>
  );
}
