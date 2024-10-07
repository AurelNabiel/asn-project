import React from "react";
import kemendagri from "../../../assets/kemendagri.png";
import bg_worker from "../../../assets/images/worker_on_desk.png";
import logo from "../../../assets/LogoKemendagri.png";
export default function Layout({ children }) {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${kemendagri})` }}
    >
      <div className="relative z-10 w-full h-full flex justify-center items-center">
        <div  className="w-full max-w-4xl  bg-white shadow-lg rounded-2xl flex justify-between">
          <div className="left text-start mb-6 p-6 flex flex-col lg:w-2/3 w-full gap-y-5">
            {/* content */}
            {children}
            {/* content */}
          </div>
          <div
            className="right lg:w-[45%] bg-cover bg-no-repeat rounded-r-2xl bg-center"
            style={{ backgroundImage: `url(${bg_worker})` }}
          >
            <div className="w-full h-full bg-opacity-10 rounded-r-2xl bg-blue-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
