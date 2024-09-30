import { Briefcase, Home2, Judge, NotificationStatus, ProfileCircle, Sms } from "iconsax-react";
import React, { act } from "react";
import { useLocation } from "react-router-dom";
import { changeState, setActiveHash } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function MenuLink() {
  return (
    <>
      <MenuList
        hash={"#"}
        iconSelected={<Home2 size={30} color="#000" />}
        icon={<Home2 size={30} color="#D19D1C" />}
        name="Beranda"
      />
      <MenuList
        hash={"#pengumuman"}
        iconSelected={
          <NotificationStatus size={30} color="#000" />
        }
        icon={<NotificationStatus size={30} color="#D19D1C" />}
        name="Pengumuman"
      />
       <MenuList
        hash={"#konsultasi"}
        iconSelected={
          <Briefcase size={30} color="#000" />
        }
        icon={<Briefcase size={30} color="#D19D1C" />}
        name="KONSULTASI"
      />
       <MenuList
        hash={"#pengacara"}
        iconSelected={
          <ProfileCircle size={30} color="#000" />
        }
        icon={<ProfileCircle size={30} color="#D19D1C" />}
        name="PENGACARA"
      />
       <MenuList
        hash={"#pengadaan"}
        iconSelected={
          <Judge size={30} color="#000" />
        }
        icon={<Judge size={30} color="#D19D1C" />}
        name="PENGADAAN"
      />
       <MenuList
        hash={"#pesan"}
        iconSelected={
          <Sms size={30} color="#000" />
        }
        icon={<Sms size={30} color="#D19D1C" />}
        name="KOTAK PESAN"
      />
    </>
  );
}

const IconRing = ({ icon }) => {
  return (
    <div className="relative">
      {/* Cincin di sekitar ikon */}
      <div className="flex justify-center items-center h-10 w-10 rounded-full bg-[#D19D1C]">
        {icon}
        {/* Ganti dengan ikon yang Anda inginkan */}
      </div>
    </div>
  );
};

const MenuList = ({ iconSelected, icon, name, hash }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = React.useState(false);
  const location = useLocation();
  const state = useSelector((state) => state.data);

  React.useEffect(() => {
    // Update active hash saat location berubah
    console.log(state);

    if (state.activeHash === hash) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    // Panggil pertama kali saat komponen di-mount
  }, [state]);

  return (
    <li className="relative mb-3 flex hover:cursor-pointer px-8">
      <a
        href={hash}
        className={`my-[3px] transform ease-in-out flex cursor-pointer items-center min-w-[200px] pl-1 py-2 rounded-lg hover:bg-[#D19D1C] hover:text-white dark:hover:bg-[#D19D1C] dark:hover:text-white ${isActive && "bg-[#D19D1C] text-white dark:bg-[#D19D1C] dark:text-white"}`}
      >
        <span
          className={`font-bold ${
            isActive ? "text-blue-500" : "text-brand-500"
          } dark:text-white`}
        >
          {isActive ?iconSelected : icon}
        </span>
        <p
          className={`leading-1 flex ms-4 font-bold text-navy-700 dark:text-white`}
        >
          {name}
        </p>
      </a>
    </li>
  );
};
