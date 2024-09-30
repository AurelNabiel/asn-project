import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoKemendagri from "../assets/LogoKemendagri.png";
import { FaBurger } from "react-icons/fa6";

import { CiMenuBurger } from "react-icons/ci";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import Avatar from "../pages/home/components/Avatar";
import MenuLink from "./MenuLink";

export default function Navbar({open, setOpen}) {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-[#D49F1B]" : "hover:text-[#D49F1B]";
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  

  return (
    <>
      <nav
        className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-[#134470] pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800   ${
          open ? "" : ""
        }`}
      >
        <div className="mx-[30px] mt-14 flex items-center space-x-3 ">
          <div className="font-poppins text-md font-bold uppercase text-navy-700 ">
            <Avatar />
          </div>
        </div>
        <div className="mt-[38px] mb-7 h-px ">
          <ul className="mb pt-1">
            <MenuLink/>
          </ul>
        </div>
      </nav>
    </>
  );
}

function DropdownLD({ setOpen, pathname, isActive }) {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button
                className={`inline-flex w-full justify-center mr-10       ${
                  pathname === "/auth/daftar" ||
                  pathname === "/auth/login" ||
                  open
                    ? "text-[#D49F1B]"
                    : "hover:text-[#D49F1B]"
                }`}
              >
                Login
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-2 w-20 origin-top-right divide-y divide-gray-100 rounded-sm bg-blue-900  bg-opacity-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    <button
                      className={`group flex justify-center w-full items-center rounded-md px-2 py-1 text-sm text-white  ${isActive(
                        "/login"
                      )} `}
                    >
                      ASN
                    </button>
                  </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    <button
                      className={`group flex justify-center w-full items-center rounded-md px-2 py-1 text-sm text-white  ${isActive(
                        "/login"
                      )} `}
                    >
                      Pengacara
                    </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
}
