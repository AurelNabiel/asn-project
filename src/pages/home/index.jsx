import React from "react";
import Card from "../../components/card";
import Navbar from "../../components/navbar";
import kemendagri from "../../assets/kemendagri.png";
import logokemendagri from "../../assets/LogoKemendagri.png";
import BackgroundKemendagri from "../../assets/Group 65.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AdvoCard from "./components/AdvoCard";
export default function Home() {
  const advokat = [
    {
      id: 1,
      name: "Taufan Adi Wijaya, S.H., M.H., C.L.A",
      rating: 4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio vitae molestias culpa sint impedit soluta ipsum, quae totam corporis! Ex, in voluptate. Quam id natus corporis dolorem libero in.",
      img: "",
      university: "Universitas Surabaya",
    },
    {
      id: 2,
      name: "Taufan Adi Wijaya, S.H., M.H., C.L.A",
      rating: 4,

      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio vitae molestias culpa sint impedit soluta ipsum, quae totam corporis! Ex, in voluptate. Quam id natus corporis dolorem libero in.",
      img: "",
      university: "Universitas Surabaya",
    },
    {
      id: 3,
      name: "Taufan Adi Wijaya, S.H., M.H., C.L.A",
      rating: 4,

      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio vitae molestias culpa sint impedit soluta ipsum, quae totam corporis! Ex, in voluptate. Quam id natus corporis dolorem libero in.",
      img: "",
      university: "Universitas Surabaya",
    },
    {
      id: 4,
      name: "Taufan Adi Wijaya, S.H., M.H., C.L.A",
      rating: 4,

      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio vitae molestias culpa sint impedit soluta ipsum, quae totam corporis! Ex, in voluptate. Quam id natus corporis dolorem libero in.",
      img: "",
      university: "Universitas Surabaya",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <div
          className="xl:pt-48 lg:pt-48 md:pt-32 pt-32 w-screen h-[90vh] bg-cover bg-center text-white xl:px-20 lg:px-20 md:px-16 sm:px-14 px-12 capitalize rounded-b-2xl"
          style={{ backgroundImage: `url(${kemendagri})` }}
        >
          <div class="container mx-auto flex px-5  md:flex-row flex-col items-center ">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-5xl text-3xl  font-medium text-white">
                MEMBANTU APARATUR <br /> SIPIL NEGARA DENGAN <br /> SEPENUH HATI
              </h1>
              <hr class="w-3/4 h-1  my-2 bg-gray-100 border-0 rounded md:my-5 dark:bg-[#D19D1C]"></hr>
            </div>
            <img class=" object-center" alt="hero" src={logokemendagri} />
          </div>
        </div>
      </div>
      {/* Content */}
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 text-center justify-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[#B89133]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="112"
                viewBox="0 0 24 24"
                fill="none"
                class="text-indigo-500 w-110 h-110 mb-3 inline-block"
              >
                <path
                  opacity=".4"
                  d="M17.42 1.381a.76.76 0 0 0-.7-.08c-1.43.57-3.01.57-4.44 0a.76.76 0 0 0-.7.08c-.21.14-.33.37-.33.62v6c0 .41.34.75.75.75s.75-.34.75-.75v-1.98c.58.14 1.16.22 1.75.22.94 0 1.88-.18 2.78-.54.28-.11.47-.39.47-.7v-3c0-.25-.12-.48-.33-.62Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M22 21.25h-1.25V11c0-2.42-1.33-3.75-3.75-3.75H7c-2.42 0-3.75 1.33-3.75 3.75v10.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-2.75-8.5v8.5h-2.51v-8.5h2.51Zm-8.01 8.5h-2.5v-8.5h2.5v8.5Zm1.5-8.5h2.5v8.5h-2.5v-8.5Zm-7.99 0h2.49v8.5H4.75v-8.5Z"
                  fill="#FFFFFF"
                ></path>
              </svg>

              <p class="leading-relaxed text-white text-2xl">
                Tata usaha Negara
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[#B89133]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="112"
                viewBox="0 0 24 24"
                fill="none"
                class="text-indigo-500 w-110 h-110 mb-3 inline-block"
              >
                <path
                  d="M22 19v3H2v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1Z"
                  fill="#FFFFFF"
                  stroke="#FFFFFF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path opacity=".6" d="M8 11H4v7h4v-7Z" fill="#FFFFFF"></path>
                <path opacity=".4" d="M12 11H8v7h4v-7Z" fill="#FFFFFF"></path>
                <path opacity=".6" d="M16 11h-4v7h4v-7Z" fill="#FFFFFF"></path>
                <path opacity=".4" d="M20 11h-4v7h4v-7Z" fill="#FFFFFF"></path>
                <path
                  d="M23 22.75H1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h22c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.37 5.75l-9-3.6c-.2-.08-.54-.08-.74 0l-9 3.6c-.35.14-.63.55-.63.93V10c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6.68c0-.38-.28-.79-.63-.93ZM12 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z"
                  fill="#FFFFFF"
                ></path>
              </svg>

              <p class="leading-relaxed text-white text-2xl">Pidana</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[#B89133]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="112"
                viewBox="0 0 24 24"
                fill="none"
                class="text-indigo-500 w-110 h-110 mb-3 inline-block"
              >
                <path
                  opacity=".4"
                  d="M18 3H6C3.79 3 2 4.78 2 6.97v10.06C2 19.22 3.79 21 6 21h12c2.21 0 4-1.78 4-3.97V6.97C22 4.78 20.21 3 18 3Z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M19 8.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75ZM19 12.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM19 16.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM8.5 11.792a2.31 2.31 0 1 0 0-4.62 2.31 2.31 0 0 0 0 4.62ZM9.3 13.112a8.66 8.66 0 0 0-1.61 0c-1.68.16-3.03 1.49-3.19 3.17-.01.14.03.28.13.38.1.1.23.17.37.17h7c.14 0 .28-.06.37-.16.09-.1.14-.24.13-.38a3.55 3.55 0 0 0-3.2-3.18Z"
                  fill="#ffffff"
                ></path>
              </svg>

              <p class="leading-relaxed text-white text-2xl">Perdata</p>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="min-h-screen flex items-center justify-center p-12  ">
        <div className="w-full bg-blue-700 p-12 rounded-xl shadow-lg">
          <div class="grid grid-cols-2 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div class="flex justify-center mt-6">
            <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200">
              Lihat Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
      {/* advokat */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto  ">
          <div className="title flex flex-col gap-y-3 mb-5">
            <h2 className="text-center font-bold text-2xl text-black ">
              60+ Mitra Pengacara Pilihan
            </h2>
            <p className="text-center font-medium">
              Mitra kami telah tergabung dan diawasi oleh organisasi advokat
              (PERADI, KAI, dsb.)
            </p>
          </div>
          {/* content */}
          <div className="relative mb-5">
            {/* Custom Navigation */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
              <button className="swiper-button-prev bg-gray-900 text-white p-2 rounded-full">
                <FaArrowLeft />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
              <button className="swiper-button-next bg-gray-900 text-white p-2 rounded-full">
                <FaArrowRight />
              </button>
            </div>
            {/* Custom Navigation */}

            {/* Swiper */}
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 1, 
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2, 
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3, 
                  spaceBetween: 30,
                },
              }}
              style={{
                padding: "20px 0",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {advokat.map((i, key) => (
                <SwiperSlide key={key}>
                  <AdvoCard i={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* content */}
          <div className="flex justify-center mt-5">
            <button
              className={` px-6 py-3 text-white rounded-lg transition duration-200 ease-in-out  `}
              style={{ backgroundColor: "#2C91FF" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2677CC")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#2C91FF")
              }
            >
              Lihat Semua Mitra Pengacara
            </button>
          </div>
        </div>
      </section>
      {/* advokat */}
    </>
  );
}
