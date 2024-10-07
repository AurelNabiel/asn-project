import React, { act } from "react";
import Card from "../../components/card";
import Navbar from "../../components/navbar";
import kemendagri from "../../assets/kemendagri.png";
import logokemendagri from "../../assets/LogoKemendagri.png";
import pengumuman from "../../assets/images/bg_pengumuman.png";
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
import Title from "./components/Title";
import { SearchNormal, SearchNormal1 } from "iconsax-react";
import DropdownFilter from "../../components/Dropdown";
import AdvokatGrid from "./components/AdvoGrid";

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
    {
      id: 5,
      name: "Taufan Adi Wijaya, S.H., M.H., C.L.A",
      rating: 4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio vitae molestias culpa sint impedit soluta ipsum, quae totam corporis! Ex, in voluptate. Quam id natus corporis dolorem libero in.",
      img: "",
      university: "Universitas Surabaya",
    },
    {
      id: 6,
      name: "Taufan Adi Wijaya, S.H., M.H., C.L.A",
      rating: 4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio vitae molestias culpa sint impedit soluta ipsum, quae totam corporis! Ex, in voluptate. Quam id natus corporis dolorem libero in.",
      img: "",
      university: "Universitas Surabaya",
    },
    {
      id: 7,
      name: "Taufan Adi Wijaya, S.H., M.H., C.L.A",
      rating: 4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio vitae molestias culpa sint impedit soluta ipsum, quae totam corporis! Ex, in voluptate. Quam id natus corporis dolorem libero in.",
      img: "",
      university: "Universitas Surabaya",
    },
    {
      id: 8,
      name: "Taufan Adi Wijaya, S.H., M.H., C.L.A",
      rating: 4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio vitae molestias culpa sint impedit soluta ipsum, quae totam corporis! Ex, in voluptate. Quam id natus corporis dolorem libero in.",
      img: "",
      university: "Universitas Surabaya",
    },
    {
      id: 9,
      name: "Taufan Adi Wijaya, S.H., M.H., C.L.A",
      rating: 4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio vitae molestias culpa sint impedit soluta ipsum, quae totam corporis! Ex, in voluptate. Quam id natus corporis dolorem libero in.",
      img: "",
      university: "Universitas Surabaya",
    },
  ];

  const dataPengumuman = [
    {
      id: 1,
      title: "Pengumuman 1",
      status: "Diterima",
      date: "2021-12-12",
      doneAt: "2021-12-12",
    },
    {
      id: 2,
      title: "Pengumuman 2",
      status: "Diproses",
      date: "2021-12-13",
      doneAt: "2021-12-13",
    },
    {
      id: 3,
      title: "Pengumuman 3",
      status: "Diterima",
      date: "2021-12-14",
      doneAt: "2021-12-14",
    },
    {
      id: 4,
      title: "Pengumuman 4",
      status: "Diproses",
      date: "2021-12-15",
      doneAt: "2021-12-15",
    },
    {
      id: 5,
      title: "Pengumuman 5",
      status: "Diterima",
      date: "2021-12-16",
      doneAt: "2021-12-16",
    },
    {
      id: 6,
      title: "Pengumuman 6",
      status: "Diproses",
      date: "2021-12-17",
      doneAt: "2021-12-17",
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

  const options1 = [{ name: "Pengalaman Kerja", value: "" }];
  const options2 = [
    { name: "Daerah", value: "" },
    { name: "Cibitung", value: "cibitung" },
  ];
  const [selectedOption1, setSelectedOption1] = React.useState(options1[0]);
  const [selectedOption2, setSelectedOption2] = React.useState(options2[0]);
  return (
    <>
      <section id="">
        <div className="overflow-hidden h-screen mt-10 ml-[153px]">
          <div
            className=" py-20 bg-cover bg-center text-white xl:px-20 lg:px-20 md:px-16 sm:px-14 px-12 capitalize rounded-2xl"
            style={{ backgroundImage: `url(${kemendagri})` }}
          >
            <div class=" mx-auto flex px-20 py-16  md:flex-row flex-col items-center justify-end ">
              <img class=" object-center" alt="hero" src={logokemendagri} />
            </div>
          </div>
          <div class=" flex flex-col md:items-start mt-10 md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="flex flex-col items-start">
              <h1 class="title-font lg:w-3/4 sm:text-5xl text-3xl  font-medium text-[#D19D1C]">
                MEMBANTU APARATUR SIPIL NEGARA DENGAN SEPENUH HATI
              </h1>
              <hr class="w-3/4 h-1  my-2 bg-gray-100 border-0 rounded md:my-5 dark:bg-[#D19D1C]"></hr>
            </div>
            <div className="flex gap-x-10 justify-start items-center lg:w-1/4 md:w-1/3 w-full">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#1C406D] hover:bg-[#2A5080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Konsultasi via <span className="ml-2 text-[#D49F1B]">Chat</span>
              </button>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#1C406D] hover:bg-[#2A5080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Tentang <span className="ml-2 text-[#D49F1B]">Kami</span>
              </button>
            </div>
          </div>
        </div>
        {/* faq */}
        <div className="px-5 py-10 flex flex-col justify-center relative  ml-[153px]">
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
        {/* faq */}
      </section>
      {/* pengumuman */}
      <section
        id="pengumuman"
        className="h-full py-10 flex flex-col  bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${pengumuman})` }}
      >
        <div className="flex flex-col gap-y-10 h-screen ml-[153px]">
          <Title
            text="Pengumuman"
            desc="Lihat perkembangan bimbingan hukum anda di sini"
          />
          <div className="flex items-center justify-center lg:p-12 p-6 h-full">
            <div className="w-full">
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
                {dataPengumuman.map((i, key) => (
                  <Card key={key} i={i} />
                ))}
              </div>

              <div class="flex justify-center mt-6">
                <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200">
                  Lihat Lebih Lanjut
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pengumuman */}
      {/* konsultasi */}
      <section id="konsultasi" className="h-screen w-full"></section>
      {/* konsultasi */}

      {/* pengacara */}
      <section
        id="pengacara"
        className="h-full py-10 flex flex-col  bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${pengumuman})` }}
      >
        <div className="flex flex-col items-center ml-[153px] h-screen">
          <Title
            text="Mitra Pengacara Pilihan"
            desc="Mitra kami telah tergabung dan diawasi oleh organisasi advokat (PERADI, KAI, dsb.)"
          />
          {/* content */}
          <div className="flex justify-center items-center h-full w-full">
            {/* card content */}
            <AdvokatGrid advokat={advokat} />
            {/* card content */}
          </div>
          {/* content */}
        </div>
      </section>
      {/* pengacara */}

      {/* pengadaan */}
      <section id="pengadaan" className="h-screen w-full"></section>
      {/* pengadaan */}

      {/* pesan */}
      <section id="pesan" className="h-screen w-full"></section>
      {/* pesan */}
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
