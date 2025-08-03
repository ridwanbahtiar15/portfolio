import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getImageUrl from "./utils/imageGetter";

export default function App() {
  const [isDropdownShow, setIsDropdownShow] = useState(true);

  return (
    // Hero
    <>
      <div className="font-rubik w-full py-6 px-6 lg:py-12 lg:px-28 bg-[#f9f5f2] h-screen">
        {/* Navbar */}
        <div className="flex justify-between text-[#282825]">
          <div className="max-sm:text-lg text-2xl font-medium">
            Ridwan.Bahtiar
          </div>
          <div
            className="lg:hidden"
            onClick={() => {
              setIsDropdownShow(!isDropdownShow);
            }}
          >
            <img
              src={
                isDropdownShow
                  ? getImageUrl("close", "svg")
                  : getImageUrl("u_align-right", "svg")
              }
              alt="burger"
            />
          </div>
          <div className="max-lg:hidden text-lg flex gap-16">
            <p className="transition-all duration-100 hover:scale-110">About</p>
            <p className="transition-all duration-100 hover:scale-110">
              Projects
            </p>
            <p className="transition-all duration-100 hover:scale-110">
              Contact
            </p>
          </div>
        </div>
        {/* End Navbar */}
        {/* Hero */}
        <div className="xl:flex font-rubik mt-20 xl:mt-40 xl:justify-between xl:items-center">
          <div className="xl:hidden xl:w-1/2 lg:relative flex w-full justify-center">
            <img
              src={getImageUrl("hero", "png")}
              alt="hero"
              className="w-64 h-6w-64 rounded-full border-4 border-[#282825]"
            />
          </div>

          <div className="w-full xl:w-1/2 max-lg:mt-10">
            <p className="text-lg md:text-xl text-[#52514e] mb-4">Hello,</p>
            <p className="text-4xl md:text-6xl font-medium text-[#282825] mb-4">
              I'm Ridwan Bahtiar.
            </p>
            <p className="text-md md:text-xl text-[#52514e] tracking-wide mb-12">
              I'm passionate about programming and electronics, and I enjoy
              building projects that combine both fields.
            </p>
            <div className="relative">
              <div className="w-[8.9rem] h-[2.7rem] lg:w-[10.8rem] lg:h-[3.7rem] bg-[#282825] absolute top-[-0.8rem] left-2 rounded-xl"></div>
              <Link
                to="#contact"
                className="text-sm lg:text-base font-medium text-[#282825] py-2.5 px-6 lg:py-4 lg:px-8 bg-[#f7cb45] border-2 border-[#282825] rounded-xl absolute top-[-1.2rem] left-0 transition-all duration-300 lg:hover:top-[-1rem] lg:hover:left-[0.2rem] max-sm:active:top-[-1rem] max-sm:active:left-[0.1rem]"
              >
                Start Growing
              </Link>
            </div>
          </div>
          <div className="max-xl:hidden lg:w-1/2 lg:relative">
            <div className="w-96 h-96 bg-[#282825] rounded-full absolute bottom-[-12rem] left-[11rem]"></div>
            <div className="absolute bottom-[-12rem] left-40">
              <img
                src={getImageUrl("hero", "png")}
                alt="hero"
                className="w-96 h-96 rounded-full border-4 border-[#282825]"
              />
            </div>
          </div>
        </div>
        {/* End Hero */}
      </div>
      {/* Navbar Mobile */}
      {isDropdownShow && (
        <>
          <div className="max-sm:w-[89%] w-[94%] h-40 p-6 bg-[#282825] max-lg:absolute max-lg:top-[5.8rem] max-lg:left-8 rounded-lg"></div>
          <div className="font-rubik w-full p-6 lg:hidden max-lg:absolute max-lg:top-12">
            <div className="lg:hidden text-lg p-4 text-[#282825] w-full grid grid-cols-1 gap-6 bg-[#f9f5f2] border-2 border-[#282825] rounded-lg">
              <p className="hover:font-medium col-start-1">About</p>
              <p className="hover:font-medium col-start-1">Projects</p>
              <p className="hover:font-medium col-start-1">Contact</p>
            </div>
          </div>
        </>
      )}
      {/* End Navbar Mobile */}
    </>
  );
}
