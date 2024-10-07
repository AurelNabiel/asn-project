import React from "react";
import pengumuman from "../../../../assets/images/bg_pengumuman.png";
import { FaStar } from "react-icons/fa6";

export default function DetailPengacara() {
  return (
    <div
      className=" py-10 flex flex-col  bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${pengumuman})` }}
    >
      <div className="ml-[153px] px-20 flex flex-col items-center h-screen">
        {/* top */}
        <div class="bg-white w-full rounded-lg shadow-lg p-6 flex">
          <img
            alt="Profile"
            class="rounded-full w-24 h-24 mr-6"
            height="100"
            src="https://storage.googleapis.com/a1aa/image/mb9vHDtQkDZLCJSSovBObEPmJlYrTq0z9xcOsW9KzciCAF5E.jpg"
            width="100"
          />
          <div>
            <h1 class="text-2xl font-bold">Anonymous, S.H., M.H., CHCM</h1>
            <div class="flex items-center mt-2">
              <i class="fas fa-briefcase mr-2"></i>
              <span>Lebih dari 8 tahun</span>
            </div>
            <div class="flex items-center mt-2">
              <i class="fas fa-graduation-cap mr-2"></i>
              <span>Sarjana Hukum Di Universitas Surabaya</span>
            </div>
            <div class="flex items-center mt-2">
              <i class="fas fa-map-marker-alt mr-2"></i>
              <span>Jakarta Utara</span>
            </div>
            <button class="mt-4 bg-yellow-500 text-white py-2 px-4 rounded">
              Konsultasi sekarang
            </button>
          </div>
        </div>
        {/* top */}
        {/* bottom */}
        <div className="mt-6 flex w-full space-x-6">
          <div className="flex flex-col  w-1/3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex gap-x-4 items-center">
              <StarRating rating={4} />
              <div class="ml-4 text-3xl font-bold">5 dari 200 </div>
            </div>
          </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
            <div className="flex space-x-4">
              <button className="bg-blue-900 text-white py-2 px-4 rounded">
                Tentang
              </button>{" "}
              <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded">
                Ulasan
              </button>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold">Tentang Konsultasi Hukum</h2>
              <hr className="my-2" />
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                in libero sed tortor venenatis gravida ut quis justo. Praesent
                sodales turpis enim, sit amet lacinia felis vehicula eget. Duis
                ornare magna in est accumsan, nec laoreet felis vulputate.
                Vivamus porttitor commodo velit a dictum. Quisque tempus aliquam
                risus in varius. Fusce ullamcorper magna quis quam varius
                porttitor. Quisque ante risus, pellentesque quis vulputate quis,
                venenatis sit amet quam. Aliquam dignissim at massa ut iaculis.
              </p>
            </div>
          </div>
        </div>
        {/* bottom */}
      </div>
    </div>
  );
}
const StarRating = ({ rating }) => {
  return (
    <>
      <div className="flex flex-row space-x-1">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            className={`${
              index < rating ? "text-yellow-400" : "text-gray-300"
            } w-8 h-8`}
          />
        ))}
      </div>
    </>
  );
};
