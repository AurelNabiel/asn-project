import React from "react";
import Title from "../../components/Title";

export default function DetailPengumuman() {
  return (
    <>
      <div className=" flex flex-col gap-y-10 h-screen justify-center">
        <Title text="Proses Pengaduan Hukum" />
        <div className="flex-1  p-8">
          <div className="bg-white rounded-lg shadow-lg px-8 py-52 flex justify-center items-center">
            <div className="flex items-center ">
              <div className="flex items-center">
                <div className="w-28 h-28 bg-blue-600 rounded-full"></div>
                <div className="w-16 h-1 bg-yellow-500"></div>
              </div>
              <div className="flex items-center">
                <div className="w-28 h-28 bg-blue-600 rounded-full"></div>
                <div className="w-16 h-1 bg-yellow-500"></div>
              </div>
              <div className="flex items-center">
                <div className="w-28 h-28 bg-blue-600 rounded-full"></div>
                <div className="w-16 h-1 bg-yellow-500"></div>
              </div>
              <div className="flex items-center">
                <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
