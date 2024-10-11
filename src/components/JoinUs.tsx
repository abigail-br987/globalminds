import Dropdown from "./small_components/Dropdown";
import { joinOptions } from "../assets/script/content.tsx";
import { useState } from "react";

type DropdownState = { [key: number]: boolean };
const getBackgroundColor = (index: number) => {
  const colors = ["bg-gbRed", "bg-gbYellow", "bg-gbBlue", "bg-gbGreen"];
  return colors[index % colors.length];
};

function JoinUs() {
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({});

  const toggleDropdown = (index: number) => {
    setDropdownOpen((prev: DropdownState) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <h2 className="text-center text-gbWhite">Únete</h2>
      <div className="mt-6 mb-10 space-y-4 rounded text-gbWhite hyphens-auto">
        <div className="sm:grid max-sm:space-y-8 max-sm:block grid-cols-2 gap-10">
          {joinOptions.map((option, index) => (
            <div
              key={index}
              className={`sm:flex ${getBackgroundColor(index)} p-4 rounded-lg`}
            >
              <div className={"flex-1"}>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <Dropdown
                  name={
                    <button
                      className="bg-white text-gbBlack font-semibold min-w-60"
                      onClick={() => toggleDropdown(index)}
                    >
                      ¿Qué ofrecemos?
                    </button>
                  }
                  options={
                    <ul>
                      {option.offerings.map((offering, i) => (
                        <li key={i}>- {offering}</li>
                      ))}
                    </ul>
                  }
                />
                <Dropdown
                  name={
                    <button
                      className="bg-white text-gbBlack font-semibold min-w-60"
                      onClick={() => toggleDropdown(index)}
                    >
                      Responsabilidades
                    </button>
                  }
                  options={
                    <ul>
                      {option.responsibilities.map((responsibility, i) => (
                        <li key={i}>- {responsibility}</li>
                      ))}
                    </ul>
                  }
                />
              </div>
              {!dropdownOpen[index] && (
                <div className="flex-shrink max-lg:hidden pl-6">
                  <img
                    src={option.image}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
