import React from "react";
import LogoKemendagri from "../assets/LogoKemendagri.png"


export default function Navbar() {


  return (
    <>
    <div class="absolute inset-x-0 top-0 mt-10 w-3/4 rounded-full container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center bg-[#063A69]">   
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white font-semibold ">
      <a href="1" class="mr-10 hover:text-[#D49F1B]">Beranda</a>
      <a href="2" class="mr-10 hover:text-[#D49F1B]">Pengumuman</a>
      <a href="3" class="mr-10 hover:text-[#D49F1B]">Konsultasi</a>
      <a href="4" class="mr-10 hover:text-[#D49F1B]">Pengacara</a>
      <a href="5" class="mr-10 hover:text-[#D49F1B]">Pengadaan</a>
      <a href="6" class=" hover:text-[#D49F1B]">Kotak pesan</a>

    </nav>
  </div>
    </>
  );
}
