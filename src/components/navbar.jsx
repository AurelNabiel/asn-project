import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoKemendagri from "../assets/LogoKemendagri.png";
import { FaBurger } from "react-icons/fa6";

import { CiMenuBurger } from "react-icons/ci";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-[#D49F1B]" : "hover:text-[#D49F1B]";
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="absolute inset-x-0 top-0 mt-10 w-3/4 rounded-full container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center bg-[#063A69]">
        <nav className="md:ml-auto md:mr-auto lg:flex hidden flex-wrap items-center text-base justify-center text-white font-semibold">
          <Link to={"/"}>
            <p className={`mr-10 ${isActive("/")}`}>Beranda</p>
          </Link>
          <Link to={"/pengumuman"}>
            <p className={`mr-10 ${isActive("/pengumuman")}`}>Pengumuman</p>
          </Link>
          <Link to={"/konsultasi"}>
            <p className={`mr-10 ${isActive("/konsultasi")}`}>Konsultasi</p>
          </Link>

          <Link to={"/pengadaan"}>
            <p className={`mr-10 ${isActive("/pengadaan")}`}>Pengadaan</p>
          </Link>
          <Link to={"/pesan"}>
            <p className={`${isActive("/pesan")}`}>Kotak pesan</p>
          </Link>
          <DropdownLD setOpen={setOpen} isActive={isActive} />
        </nav>
        {/* mobile */}
        <div className="flex lg:hidden items-center justify-center gap-x-5">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="xl:hidden lg:hidden h-8 w-8"
          >
            {/* {navbarOpen ? (
                <CloseCircle
                  className="h-8 w-8 xl:hidden lg:hidden transition-all"
                  color="#ffffff"
                />
              ) : (
                <HambergerMenu
                  className="h-8 w-8 xl:hidden lg:hidden transition-all"
                  color="#ffffff"
                />
              )} */}
            <CiMenuBurger isClosed={navbarOpen} />
          </button>
        </div>
        {/* mobile */}
      </div>
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
                Akun
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
                    <Link to={"/auth/asn"}>
                      <button
                        className={`group flex justify-center w-full items-center rounded-md px-2 py-1 text-sm text-white  ${isActive(
                          "/auth/asn"
                        )} `}
                      >
                        ASN
                      </button>
                    </Link>
                  </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                  <Link to={"/auth/pengacara"}>
                      <button
                        className={`group flex justify-center w-full items-center rounded-md px-2 py-1 text-sm text-white  ${isActive(
                          "/auth/pengacara"
                        )} `}
                      >
                        Pengacara
                      </button>
                    </Link>
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
