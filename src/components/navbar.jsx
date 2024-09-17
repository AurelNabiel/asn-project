import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoKemendagri from "../assets/LogoKemendagri.png";

export default function Navbar() {
  const location = useLocation(); 


  const isActive = (path) => location.pathname === path ? "text-[#D49F1B]" : "hover:text-[#D49F1B]";

  return (
    <>
      <div className="absolute inset-x-0 top-0 mt-10 w-3/4 rounded-full container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center bg-[#063A69]">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white font-semibold">
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
      </div>
    </>
  );
}
