import React from "react";
import LogoKemendagri from "../assets/LogoKemendagri.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div class="absolute inset-x-0 top-0 mt-10 w-3/4 rounded-full container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center bg-[#063A69]">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white font-semibold ">
          <Link to={"/"}>
            <p class="mr-10 hover:text-[#D49F1B]">Beranda</p>
          </Link>
          <Link to={"/pengumuman"}>
            <p class="mr-10 hover:text-[#D49F1B]">Pengumuman</p>
          </Link>
          <Link to={"/konsultasi"}>
            <p class="mr-10 hover:text-[#D49F1B]">Konsultasi</p>
          </Link>
          <Link to={"/pengacara"}>
            <p class="mr-10 hover:text-[#D49F1B]">Pengacara</p>
          </Link>
          <Link to={"/pengadaan"}>
            <p class="mr-10 hover:text-[#D49F1B]">Pengadaan</p>
          </Link>
          <Link to={"/pesan"}>
            <p class=" hover:text-[#D49F1B]">Kotak pesan</p>
          </Link>
        </nav>
      </div>
    </>
  );
}
