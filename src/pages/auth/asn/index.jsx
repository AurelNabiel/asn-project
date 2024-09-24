import React from "react";
import kemendagri from "../../../assets/kemendagri.png";
import bg_worker from "../../../assets/images/worker_on_desk.png";
import logo from "../../../assets/LogoKemendagri.png";
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
    <div
      className="w-screen h-screen flex justify-center items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${kemendagri})` }}
    >
      <div className="relative z-10 w-full h-full flex justify-center items-center">
        <div className="w-full max-w-4xl  bg-white shadow-lg rounded-2xl flex justify-between">
          <div className="left text-start mb-6 p-6 flex flex-col w-2/3 gap-y-5">
            {/* You can replace this with your logo */}
            <div className="top mb-10">
              <img src={logo} alt="Kemendagri" className="self-start h-20" />
              <h2 className="mt-6 text-2xl font-extrabold text-[#1C406D]">
                <span className="text-4xl">Selamat Datang</span> <br /> Di
                Bimbingan Konsultasi Hukum Bagi ASN
              </h2>
            </div>
            <form action="" className="space-y-6">
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
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="h-4 w-4 appearance-none border border-[#D49F1B] rounded bg-white focus:ring-[#1C406D] checked:bg-[#1C406D] checked:border-transparent relative"
                  style={{
                    backgroundColor: rememberMe ? "#1C406D" : "white", // Checkbox background
                  }}
                />
                <style jsx>{`
                  input[type="checkbox"] {
                    position: relative;
                  }

                  input[type="checkbox"]::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: white;
                    border-radius: 4px;
                  }

                  input[type="checkbox"]:checked::before {
                    background-color: #1c406d; /* Background when checked */
                  }

                  input[type="checkbox"]:checked::after {
                    content: "✓"; /* Unicode checkmark */
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 12px;
                    color: #d49f1b; /* Checkmark color */
                  }
                `}</style>

                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm font-semibold text-gray-900"
                >
                  Ingatkan saya pada perangkat ini
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1C406D] hover:bg-[#2A5080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
          <div
            className="right w-[45%] bg-cover bg-no-repeat rounded-r-2xl bg-center"
            style={{ backgroundImage: `url(${bg_worker})` }}
          >
            <div className="w-full h-full bg-opacity-10 rounded-r-2xl bg-blue-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
