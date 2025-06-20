import React, { useState } from "react";

interface optionProps {
  options: string[];
  title: string;
  func: (value: string) => void;
  shadow: string;
  color: string;
  borderColor: string;
}

const Dropdown = ({
  title,
  options,
  func,
  shadow,
  color,
  borderColor,
}: optionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(title);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex justify-between w-48 px-4 py-2 text-sm font-medium bg-transparent ${color} border ${borderColor} rounded-lg ${shadow}`}
      >
        {selected}
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          className={`absolute z-10 w-48 mt-2 bg-transparent border border-${color}  divide-y divide-${color} rounded-lg shadow-lg`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                func(option); // notify parent
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-sm text-green-100 hover:text-${color} font-semibold cursor-pointer`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
