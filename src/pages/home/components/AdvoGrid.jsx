import { useState } from 'react';
import AdvoCard from './AdvoCard';
import DropdownFilter from '../../../components/Dropdown';
import { ArrowLeft, ArrowLeft2, ArrowRight, ArrowRight2, SearchNormal } from 'iconsax-react';

const AdvokatGrid = ({ advokat }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Jumlah item per halaman

  const totalPages = Math.ceil(advokat.length / itemsPerPage);

  const currentItems = advokat.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const options1 = [{ name: "Pengalaman Kerja", value: "" }];
  const options2 = [{ name: "Daerah", value: "" }, { name: "Cibitung", value: "cibitung" }];
  const [selectedOption1, setSelectedOption1] = useState(options1[0]);
  const [selectedOption2, setSelectedOption2] = useState(options2[0]);

  return (
    <div className="w-full max-w-6xl bg-[#D9D9D9] rounded-2xl flex flex-col px-7 py-5">
      <div className="flex lg:flex-row flex-col lg:gap-y-0 lg:items-center items-start gap-y-5 w-full justify-between">
        <div className="left lg:w-[40%]">
          <div className="flex w-full items-center bg-[#134470] rounded-lg shadow-sm">
            <SearchNormal className="ml-3 text-white" size="20" />
            <input
              type="text"
              name="nip"
              id="nip"
              placeholder="Cari Pengacara..."
              className="w-full bg-[#134470] rounded-lg px-3 py-2 border-none outline-none sm:text-sm text-white"
            />
          </div>
        </div>
        <div className="right w-1/2">
          <div className="flex lg:flex-row flex-col gap-x-3 lg:items-center items-start lg:gap-y-0 gap-y-3 justify-end">
            <DropdownFilter
              options={options1}
              selectedOption={selectedOption1}
              setSelectedOption={setSelectedOption1}
            />
            <DropdownFilter
              options={options2}
              selectedOption={selectedOption2}
              setSelectedOption={setSelectedOption2}
            />
          </div>
        </div>
      </div>
      <div className="pt-4 grid lg:grid-cols-2 grid-cols-1 gap-5 w-full h-full">
        {currentItems.map((i, key) => (
          <AdvoCard key={key} i={i} />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex w-full justify-between items-center mt-5">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="w-6 h-6 mx-1 text-[#1C406D] hover:text-blue-700"
          disabled={currentPage === 1}
        >
          <ArrowLeft2 size={20} />
        </button>
        <div className="flex">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentPage === index + 1 ? 'bg-[#1C406D]' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="w-6 h-6 mx-1 text-[#1C406D] hover:text-blue-700"
          disabled={currentPage === totalPages}
        >
          <ArrowRight2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default AdvokatGrid;
