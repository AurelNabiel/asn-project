import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoKemendagri from "../assets/LogoKemendagri.png";
import { FaBurger } from "react-icons/fa6";
import { Menu } from "iconsax-react";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  const location = useLocation(); 


  const isActive = (path) => location.pathname === path ? "text-[#D49F1B]" : "hover:text-[#D49F1B]";
  const [navbarOpen, setNavbarOpen] = React.useState(false);

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
          <Link to={"/pengacara"}>
            <p className={`mr-10 ${isActive("/pengacara")}`}>Pengacara</p>
          </Link>
          <Link to={"/pengadaan"}>
            <p className={`mr-10 ${isActive("/pengadaan")}`}>Pengadaan</p>
          </Link>
          <Link to={"/pesan"}>
            <p className={`${isActive("/pesan")}`}>Kotak pesan</p>
          </Link>
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
