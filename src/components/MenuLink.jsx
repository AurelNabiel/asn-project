import {
  Briefcase,
  Home2,
  Judge,
  NotificationStatus,
  ProfileCircle,
  Sms,
} from "iconsax-react";
import React, { act } from "react";
import { useLocation } from "react-router-dom";
import { changeState, setActiveHash } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function MenuLink({ open }) {
  return (
    <>
      <MenuList
        open={open}
        hash={"#"}
        iconSelected={<Home2 size={30} color="#000" />}
        icon={<Home2 size={30} color="#D19D1C" />}
        name="Beranda"
      />
      <MenuList
        open={open}
        hash={"#pengumuman"}
        iconSelected={<NotificationStatus size={30} color="#000" />}
        icon={<NotificationStatus size={30} color="#D19D1C" />}
        name="Pengumuman"
      />
      <MenuList
        open={open}
        hash={"#konsultasi"}
        iconSelected={<Briefcase size={30} color="#000" />}
        icon={<Briefcase size={30} color="#D19D1C" />}
        name="KONSULTASI"
      />
      <MenuList
        open={open}
        hash={"#pengacara"}
        iconSelected={<ProfileCircle size={30} color="#000" />}
        icon={<ProfileCircle size={30} color="#D19D1C" />}
        name="PENGACARA"
      />
      <MenuList
        open={open}
        hash={"#pengadaan"}
        iconSelected={<Judge size={30} color="#000" />}
        icon={<Judge size={30} color="#D19D1C" />}
        name="PENGADAAN"
      />
      <MenuList
        open={open}
        hash={"#pesan"}
        iconSelected={<Sms size={30} color="#000" />}
        icon={<Sms size={30} color="#D19D1C" />}
        name="KOTAK PESAN"
      />
    </>
  );
}

const MenuList = ({ iconSelected, icon, name, hash, open }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = React.useState(false);
  const location = useLocation();
  const state = useSelector((state) => state.data);
  const [isHovered, setIsHovered] = React.useState(false);
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`my-[3px]  duration-150 transform  flex cursor-pointer items-center  pl-1 py-2 rounded-lg hover:bg-[#D19D1C] hover:text-white dark:hover:bg-[#D19D1C] dark:hover:text-white ${
          isActive &&
          "bg-[#D19D1C] text-white dark:bg-[#D19D1C] dark:text-white"
        } ${open ? "min-w-[200px]" : "w-full"}`}
      >
        <span
          className={`font-bold !z-50 ${
            isActive || isHovered ? "text-blue-500" : "text-brand-500"
          } dark:text-white`}
         
        >
          {/* Menampilkan ikon berdasarkan kondisi */}
          {isActive || isHovered ? iconSelected : icon}
        </span>

        <p
          className={`leading-1 !z-40 flex font-bold text-navy-700 dark:text-white transition-all duration-500 ease-in-out ${
            open
              ? "opacity-100 ms-4 translate-x-0"
              : "opacity-0 pr-1 -translate-x-4"
          }`}
        >
          {open ? name : ""}
        </p>
      </a>
    </li>
  );
};
