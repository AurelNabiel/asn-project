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

      <Routes>
        
        <Route path="/" element={<Home />} />
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;
