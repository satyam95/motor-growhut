import { useState } from "react";
import MagnifyingGlass from "../assets/MagnifyingGlass.svg";
import DownloadSimple from "../assets/DownloadSimple.svg";
import CaretDownGray from "../assets/CaretDownGray.svg";

interface FilterOptions {
  dealership: string;
  serviceType: string;
  modeOfOrder: string;
  status: string;
}

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (key: keyof FilterOptions, value: string) => void;
  onSearch: (value: string) => void;
}

const FilterBar = ({ filters, onFilterChange, onSearch }: FilterBarProps) => {
  const [openDropdown, setOpenDropdown] = useState<keyof FilterOptions | null>(
    null
  );

  const dropdownData = {
    dealership: [
      { value: "All", label: "All" },
      { value: "AK Motors", label: "AK motors" },
      { value: "SR Motors", label: "SR motors" },
    ],
    serviceType: [
      { value: "All", label: "All" },
      { value: "General Service", label: "General Service" },
      { value: "Express Service", label: "Express Service" },
      { value: "Quick Fix", label: "Quick Fix" },
      { value: "Bike Inspection", label: "Bike Inspection" },
      { value: "Bike Care", label: "Bike Care" },
    ],
    modeOfOrder: [
      { value: "All", label: "All" },
      { value: "Online", label: "Online" },
      { value: "Offline", label: "Offline" },
    ],
    status: [
      { value: "All", label: "All" },
      { value: "In progress", label: "In progress" },
      { value: "Completed", label: "Completed" },
    ],
  };

  const handleDropdownClick = (key: keyof FilterOptions) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const handleOptionSelect = (key: keyof FilterOptions, value: string) => {
    onFilterChange(key, value);
    setOpenDropdown(null);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-base font-medium text-black">Filter by :</span>

        {Object.entries(dropdownData).map(([key, options]) => (
          <div key={key} className="relative">
            <button
              onClick={() => handleDropdownClick(key as keyof FilterOptions)}
              className="flex items-center justify-between gap-1 w-full bg-white border border-[#F5F5F5] rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 min-w-[160px]"
            >
              <span className="text-[#414651] text-sm -leading-[1%]">
                {key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")}
                : {filters[key as keyof FilterOptions]}
              </span>
              <img src={CaretDownGray} alt="arrow icon"
                className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === key ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === key && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      handleOptionSelect(
                        key as keyof FilterOptions,
                        option.value
                      )
                    }
                    className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <img src={DownloadSimple} alt="download icon" className="w-6 h-6" />
        <div className="border border-[#D9D9D9] rounded-lg max-w-[292px] px-2.5 py-2 flex items-center gap-2">
          <img src={MagnifyingGlass} alt="search icon" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="text-[#A4A7AE] text-sm w-full font-normal leading-5 focus:outline-none focus:ring-none"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
