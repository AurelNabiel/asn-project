import React from "react";
import kemendagri from "../../../assets/kemendagri.png";
import bg_worker from "../../../assets/images/worker_on_desk.png";
import logo from "../../../assets/LogoKemendagri.png";
import Layout from "../components/Layout";
import Checkbox from "../components/Checkbox";
export default function Asn() {
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rememberMe) {
      console.log("Remember Me is checked, save login session.");
    } else {
      console.log("Remember Me is not checked, do not save session.");
    }
  };
  return (
    <>
      <Layout>
        <div className="top mb-10">
          <img src={logo} alt="Kemendagri" className="self-start h-20" />
          <h2 className="mt-6 text-2xl font-extrabold text-[#1C406D]">
            <span className="text-4xl">Selamat Datang</span> <br /> Di Bimbingan
            Konsultasi Hukum Bagi ASN
          </h2>
        </div>
        <form action="" className="space-y-6 mb-5">
          <div>
            <label
              htmlFor="nip"
              className="block text-sm font-medium text-gray-700"
            >
              Nomor Induk Pekerja
            </label>
            <input
              type="text"
              name="nip"
              id="nip"
              required
              className="mt-1 w-full px-3 py-2 border border-[#D49F1B] focus:outline-[#D49F1B] rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <Checkbox
            values={rememberMe}
            onChange={handleRememberMeChange}
            name={"remember_me"}
          />
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1C406D] hover:bg-[#2A5080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Masuk
            </button>
          </div>
        </form>
        <div className="flex justify-between items-center mb-5">
          <div className="border-b-[1px] w-[30%] border-black"></div>
          <p>Belum punya akun?</p>
          <div className="border-b-[1px] w-[30%] border-black"></div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center w-full gap-x-10 gap-y-5">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1C406D] hover:bg-[#2A5080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Daftar <span className="ml-2 text-[#D49F1B]">Pengacara</span>
          </button>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1C406D] hover:bg-[#2A5080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Daftar <span className="ml-2 text-[#D49F1B]">ASN</span>
          </button>
        </div>
      </Layout>
    </>
  );
}
