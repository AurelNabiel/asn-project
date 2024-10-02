import React from "react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Pengumuman from "./pages/pengumuman";
import Pesan from "./pages/pesan";
import Pengadaan from "./pages/pengadaan";

import Konsultasi from "./pages/konsultasi";
import Asn from "./pages/auth/asn";
import Pengacara from "./pages/auth/pengacara";
import Layout from "./components/Layout";

function App() {
  const location = useLocation();

  const hideNavbarAndFooter = location.pathname.startsWith("/auth");
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />} />

        <Route path="/auth/asn" element={<Asn />} />
        <Route path="/auth/pengacara" element={<Pengacara />} />
      </Routes>
      {/* {!hideNavbarAndFooter && <Footer />} */}
    </>
  );
}

export default App;
