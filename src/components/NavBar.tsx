import React, { useState } from "react";
import Menu from "./Menu";

type Props = {};

function NavBar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-primary rounded-md ">
        <div className="pt-1 px-2 rounded-md">
          <button className="text-white " onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6H22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12H22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 18H22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div>{isOpen && <Menu />}</div>
    </>
  );
}

export default NavBar;
