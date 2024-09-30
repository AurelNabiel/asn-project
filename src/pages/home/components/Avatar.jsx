import React from "react";

export default function Avatar() {
  return (
    <div className="relative">
        {/* Avatar Image */}
        <img
          className="w-10 h-10 rounded-full"
          src="https://via.placeholder.com/150"
          alt="Avatar"
        />
        {/* Ring around the avatar */}
        <div className="absolute inset-0 w-full h-full rounded-full ring-2 ring-[#D19D1C]"></div>
      </div>
  );
}
