import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoKemendagri from "../assets/LogoKemendagri.png";
import { FaBurger } from "react-icons/fa6";

import { CiMenuBurger } from "react-icons/ci";
import { Transition, Dialog } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import Avatar from "../pages/home/components/Avatar";
import MenuLink from "./MenuLink";
import { HambergerMenu, Menu } from "iconsax-react";
export default function Navbar({ open, setOpen }) {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-[#D49F1B]" : "hover:text-[#D49F1B]";


  return (
    <>
      <nav
        className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-[#134470] pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 
          ${open ? "w-[273px]" : "w-[103px]"}
          `}
      >
        <div className="mx-[30px] mt-14 flex items-center space-x-3 ">
          <div className="font-poppins text-md font-bold uppercase text-navy-700 ">
            <Avatar />
          </div>
        </div>
        <div className="mt-[38px] mb-7 h-px ">
          <ul className="mb pt-1">
            <button onClick={() => {
              setOpen(!open)
              console.log(open);
              
            }} className={`relative mb-3 flex px-8 cursor-pointer ${open ?? ""}`}>
              <HambergerMenu color="#D19D1C" size={30} />
            </button>
            <MenuLink open={open} />
          </ul>
        </div>
      </nav>
    </>
  );
}
