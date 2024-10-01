import React from "react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Pengumuman from "./pages/pengumuman";
import Pesan from "./pages/pesan";
import Pengadaan from "./pages/pengadaan";
import Pengacara from "./pages/pengacara";
import Konsultasi from "./pages/konsultasi";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pengumuman" element={<Pengumuman />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/pengacara" element={<Pengacara />} />
        <Route path="/pengadaan" element={<Pengadaan />} />
        <Route path="/pesan" element={<Pesan />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
