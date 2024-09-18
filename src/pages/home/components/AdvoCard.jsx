import React from 'react'
import { FaGraduationCap, FaStar } from 'react-icons/fa6';
import { MdOutlineWork } from 'react-icons/md';

export default function AdvoCard({i}) {
  return (
    <>
    <div className="p-5 advocard rounded-lg flex flex-col items-start">
      {/* top */}
      <div className="relative flex items-center justify-between w-full mb-4">
        {/* left image */}
        <img
          className="w-20 h-20 align-top inline-block rounded-[6px] "
          src="https://dummyimage.com/200x200"
          alt=""
        />
        {/* left image */}
        {/* right */}
        <div className="flex flex-col items-start justify-center">
          <p className="text-lg font-bold text-gray-900 mb-3">{i.name}</p>
          <div className="flex gap-x-4 items-center">
            <StarRating rating={i.rating} />
            <p className="text-sm font-semibold">{i.rating} dari 5</p>
          </div>
        </div>
      </div>
      {/* top */}
      {/* bottom */}
      <h5 className="font-semibold text-sm">
        Bidang Keahlian dan Spealisasi
      </h5>
      <p className="line-clamp-3 text-gray-900 mb-3">{i.desc}</p>
      <div className="flex flex-col gap-y-3">
        {/* pengalaman */}
        <div className="flex gap-x-3 items-center">
          <MdOutlineWork className="w-5 h-5" />
          <p className="text-sm">Lebih dari 8 tahun</p>
        </div>
        {/* pengalaman */}
        {/* pendidikan */}
        <div className="flex gap-x-3 items-center">
          <FaGraduationCap className="w-5 h-5" />
          <p className="text-sm">Sarjana Hukum di {i.university}</p>
        </div>
        {/* pendidikan */}
      </div>
      {/* bottom */}
    </div>
  </>
  )
}


const StarRating = ({ rating }) => {
    return (
      <>
        <div className="flex flex-row space-x-1">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={`${
                index < rating ? "text-yellow-400" : "text-gray-300"
              } w-3 h-3`}
            />
          ))}
        </div>
      </>
    );
  };