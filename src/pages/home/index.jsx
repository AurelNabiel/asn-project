import React, { act } from "react";
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
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../redux/actions";

export default function Home() {
  const activeHash = useSelector((state) => state.data);
  const dispatch = useDispatch();

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
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const currentId = section.id;

          if (window.location.hash !== `#${currentId}`) {
            window.history.replaceState(null, "", `#${currentId}`);
            dispatch(changeState({ activeHash: `#${currentId}` }));
          }
        }
      });
    };

    // Throttle function
    const throttle = (func, limit) => {
      let lastFunc;
      let lastRan;

      return function () {
        const context = this;
        const args = arguments;

        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(() => {
            if (Date.now() - lastRan >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    };

    const throttledScrollHandler = throttle(handleScroll, 100); // 100ms throttle

    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [location]);

  return (
    <>
      <section id="">
        <div className="overflow-x-hidden h-screen">
          <div
            className="xl:pt-48 lg:pt-48 md:pt-32 pt-32 w-screen h-[80vh] bg-cover bg-center text-white xl:px-20 lg:px-20 md:px-16 sm:px-14 px-12 capitalize rounded-b-2xl"
            style={{ backgroundImage: `url(${kemendagri})` }}
          >
            <div class="container mx-auto flex px-5  md:flex-row flex-col items-center ">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-5xl text-3xl  font-medium text-white">
                  MEMBANTU APARATUR <br /> SIPIL NEGARA DENGAN <br /> SEPENUH
                  HATI
                </h1>
                <hr class="w-3/4 h-1  my-2 bg-gray-100 border-0 rounded md:my-5 dark:bg-[#D19D1C]"></hr>
              </div>
              <img class=" object-center" alt="hero" src={logokemendagri} />
            </div>
          </div>
        </div>
        {/* pengumuman */}
        <div className="min-h-screen flex items-center justify-center lg:p-12 p-6 ">
          <div className="w-full bg-blue-700 lg:p-12 p-6 rounded-xl shadow-lg">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
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
        {/* pengumuman */}
      </section>

      {/* advokat */}
      <section id="pengumuman" class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto  h-screen">
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
      {/* FAQ */}
      <section
        id="faq"
        className="h-screen mt-32 mb-20 flex justify-center bg-[#EDEDED] bg-opacity-[80%]"
      >
        <div className="container lg:px-0 px-5 py-10 flex flex-col justify-center relative  xl:bottom-44  lg:bottom-44 md:bottom-36 sm:bottom-28 bottom-28">
          <div
            className="w-full  bg-cover bg-center rounded-xl lg:p-24 p-14 mb-10"
            style={{ backgroundImage: `url(${kemendagri})` }}
          >
            <h2 className="lg:text-5xl text-4xl font-bold text-white lg:w-1/2">
              Pertanyaan yang sering di ajukan (F.A.Q)
            </h2>
          </div>
          <div className="flex flex-col w-full space-y-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, key) => (
              <Question key={key} text={`Pertanyaan ${i}`} />
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
    </>
  );
}

function Question({ text }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="mx-auto w-full rounded-md bg-[#EDEDED] py-3 border-2 border-white">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium transition-all duration-300 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="w-11/12 font-semibold text-base">{text}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180" : ""
                  } h-5 w-5 text-blue-900 transition-transform duration-300 ease-in-out`}
                />
              </Disclosure.Button>
              {open ? <div className="border-b border-white"></div> : null}
              <div
                style={{
                  height: isOpen ? "auto" : "0px",
                  overflow: "hidden",
                  transition: "height 0.5s ease",
                }}
              >
                <Disclosure.Panel
                  className={`px-4 pt-4 pb-2 lg:text-sm text-xs text-gray-500 transition-opacity duration-500 ease-in-out ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  illo velit maxime repellendus, ipsam reiciendis eius
                  praesentium eligendi dolorem delectus quas consequatur fugit
                  necessitatibus eum dicta laborum. In, perferendis veritatis.
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
