import React from 'react'
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { ArrowDown, ArrowDown2 } from 'iconsax-react';

const DropdownFilter = ({ options, selectedOption, setSelectedOption }) => {
    return (
      <div className="w-fit">
        <Listbox value={selectedOption} onChange={setSelectedOption}>
          <div className="relative">
            <Listbox.Button className="flex w-full justify-between items-center bg-[#134470] rounded-lg shadow-sm px-3 py-2 text-white">
              <span className="block truncate">{selectedOption.name}</span>
              <ArrowDown2 className="ml-3 text-white" size="20" />
            </Listbox.Button>
  
            <Listbox.Options className="absolute w-full mt-1 bg-[#134470] rounded-lg shadow-lg">
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  value={option}
                  className={({ active }) =>
                    `cursor-pointer select-none rounded-lg relative py-2 px-3 ${
                      active ? 'bg-[#0d334f]' : ''
                    } text-white`
                  }
                >
                  {option.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>
    );
  };
  
  export default DropdownFilter;