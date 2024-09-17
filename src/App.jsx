import React from "react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
