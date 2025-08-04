import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion, scale } from "motion/react";
import { HashLink } from "react-router-hash-link";
import getImageUrl from "./utils/imageGetter";

export default function App() {
  const [isDropdownShow, setIsDropdownShow] = useState(false);
  const [isInputNameHover, setIsInputNameHover] = useState(false);
  const [isInputEmailHover, setIsInputEmailHover] = useState(false);
  const [isInputDescHover, setIsInputDescHover] = useState(false);
  const [isLoveClicked, setIsLoveClicked] = useState(false);

  return (
    <>
      {/* About */}
      <div
        className="font-rubik w-full py-6 px-6 lg:py-12 lg:px-28 bg-[#f9f5f2] h-screen"
        id="about"
        onClick={() => isDropdownShow && setIsDropdownShow(false)}
      >
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
            <AnimatePresence initial={true}>
              {isDropdownShow ? (
                <motion.img
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 180,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  src={getImageUrl("close", "svg")}
                />
              ) : (
                <motion.img src={getImageUrl("u_align-right", "svg")} />
              )}
            </AnimatePresence>
          </div>
          <div className="max-lg:hidden text-lg flex gap-16">
            <HashLink to="/#about">
              <motion.p
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                About
              </motion.p>
            </HashLink>
            <HashLink to="/#projects">
              <motion.p
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                Projects
              </motion.p>
            </HashLink>
            <HashLink to="/#contact">
              <motion.p
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                Contact
              </motion.p>
            </HashLink>
          </div>
        </div>
        {/* End Navbar */}
        {/* Hero */}
        <div className="xl:flex font-rubik mt-20 xl:mt-40 xl:justify-between xl:items-center">
          <div className="xl:hidden xl:w-1/2 relative flex w-full justify-center">
            <motion.img
              src={getImageUrl("lcd", "png")}
              alt="icon"
              className="w-20 absolute top-0 left-6 md:left-44"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            />
            <motion.img
              src={getImageUrl("code", "png")}
              alt="icon"
              className="w-20 absolute bottom-0 left-6 md:left-44"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            />
            <motion.img
              src={getImageUrl("avo", "png")}
              alt="icon"
              className="w-20 absolute top-0 right-6 md:right-44"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            />
            <motion.img
              src={getImageUrl("hero", "png")}
              alt="hero"
              className="w-64 h-6w-64 rounded-full border-4 border-[#282825] relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            />
          </div>

          <div className="w-full xl:w-1/2 max-lg:mt-10">
            <p className="text-lg md:text-xl text-[#52514e] tracking-wide mb-4">
              Hello,
            </p>
            <p className="text-3xl md:text-6xl font-medium text-[#282825] mb-4">
              I'm <span className="font-bold">Ridwan</span>{" "}
              <span className="text-[#f7cb45]">Bahtiar</span>
            </p>
            <p className="text-md md:text-xl text-[#52514e] tracking-wide mb-12">
              I'm passionate about programming and electronics, and I enjoy
              building projects that combine both fields.
            </p>
            <div className="relative">
              <div className="w-[10.3rem] h-[2.7rem] lg:w-[12.3rem] lg:h-[3.7rem] bg-[#282825] absolute top-[-0.8rem] left-2 rounded-xl"></div>
              <HashLink
                to="#contact"
                className="text-sm lg:text-base font-medium text-[#282825] py-2.5 px-6 lg:py-4 lg:px-8 bg-[#f7cb45] border-2 border-[#282825] rounded-xl absolute top-[-1.2rem] left-0 transition-all duration-300 lg:active:top-[-1rem] lg:active:left-[0.2rem] max-sm:active:top-[-1rem] max-sm:active:left-[0.1rem]"
              >
                🚀 Start Growing
              </HashLink>
            </div>
          </div>
          <div className="max-xl:hidden lg:w-1/2 lg:relative">
            <motion.img
              src={getImageUrl("code", "png")}
              alt="icon"
              className="w-28 absolute top-2 left-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            />
            <motion.img
              src={getImageUrl("lcd", "png")}
              alt="icon"
              className="w-28 absolute bottom-28 left-24"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            />
            <motion.img
              src={getImageUrl("avo", "png")}
              alt="icon"
              className="w-28 absolute bottom-28 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            />
            <div className="w-96 h-96 bg-[#282825] rounded-full absolute bottom-[-12rem] left-[11rem]"></div>
            <div className="absolute bottom-[-11rem] left-40">
              <motion.img
                src={getImageUrl("hero", "png")}
                alt="hero"
                className="w-96 h-96 rounded-full border-4 border-[#282825]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              />
            </div>
          </div>
        </div>
        {/* End Hero */}
      </div>
      {/* End About */}

      {/* Projects */}
      <div
        className="font-rubik w-full py-6 px-6 lg:py-12 lg:px-28 bg-white"
        id="projects"
      >
        <div className="text-center text-[#282825] mt-16">
          <p className="text-2xl lg:text-5xl font-bold mb-6">
            Featured Projects
          </p>
          <p className="text-sm lg:text-base tracking-wide">
            Projects that blend clean code, modern tools, and practical
            solutions to real-world problems.
          </p>
        </div>
        <div className="w-full mt-20 flex flex-wrap gap-1 gap-y-8 lg:gap-y-0">
          <div className="w-full flex max-md:flex-col-reverse">
            <div className="w-full lg:w-1/2 lg:h-[32rem] py-6 lg:py-20 text-[#282825] flex items-center">
              <div className="flex flex-wrap gap-y-4 md:w-[80%]">
                <p className="lg:text-lg font-medium">
                  Industrial Automation Project – “FIDDING” (Feeder + Sorting
                  Automation System)
                </p>
                <p>
                  A simulation system for automated feeding and sorting,
                  controlled using a Mitsubishi Programmable Logic Controller
                  (PLC) and pneumatic actuators.
                </p>
                <div className="flex items-center gap-x-2 lg:mt-4">
                  <p className="font-medium cursor-pointer">See full detail </p>
                  <img src={getImageUrl("arrow-right", "svg")} alt="icon" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:h-[32rem] flex items-center">
              <img
                src={getImageUrl("1.1", "jpeg")}
                alt="image"
                className="bg-center"
              />
            </div>
          </div>

          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2 lg:h-[32rem] flex items-center">
              <img
                src={getImageUrl("2.1", "jpeg")}
                alt="image"
                className="bg-center"
              />
            </div>

            <div className="w-full md:w-1/2 lg:h-[32rem] md:pl-6 py-6 lg:py-20 lg:pl-20 text-[#282825] flex items-center">
              <div className="flex flex-wrap gap-y-4">
                <p className="lg:text-lg font-medium">
                  Portable Plant Watering System Using ESP8266 Based on IoT
                </p>
                <p>
                  An IoT-based portable system for automatic and manual plant
                  watering, controllable via a website or physical buttons.
                  Designed for household use and urban farming environments.
                </p>
                <div className="flex items-center gap-x-2 lg:mt-4">
                  <p className="font-medium cursor-pointer">See full detail </p>
                  <img src={getImageUrl("arrow-right", "svg")} alt="icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex max-md:flex-col-reverse">
            <div className="w-full lg:w-1/2 lg:h-[32rem] py-6 lg:py-20 text-[#282825] flex items-center">
              <div className="flex flex-wrap gap-y-4 md:w-[80%]">
                <p className="lg:text-lg font-medium">Tickitz Movie</p>
                <p>
                  A web application for online movie ticket booking and
                  transaction management.
                </p>
                <p>
                  Tech Stack: Go · PostgreSQL · React.js · JSON Web Token (JWT)
                  · Redux · Tailwind CSS
                </p>
                <div className="flex items-center gap-x-2 lg:mt-4">
                  <p className="font-medium cursor-pointer">See full detail </p>
                  <img src={getImageUrl("arrow-right", "svg")} alt="icon" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:h-[32rem] flex items-center">
              <img
                src={getImageUrl("3.1", "jpg")}
                alt="image"
                className="bg-center"
              />
            </div>
          </div>

          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2 lg:h-[32rem] flex items-center">
              <div className="">
                <img
                  src={getImageUrl("4.1", "jpg")}
                  alt="image"
                  className="bg-center"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:h-[32rem] md:pl-6 py-6 lg:py-20 lg:pl-20 text-[#282825] flex items-center">
              <div className="flex flex-wrap gap-y-4">
                <p className="lg:text-lg font-medium">E-Wallet</p>
                <p>
                  A web application for sending and receiving money through
                  digital wallets.
                </p>
                <p>
                  Tech Stack: PostgreSQL · Express.js · React.js · JSON Web
                  Token (JWT) · Redux · Tailwind CSS
                </p>
                <div className="flex items-center gap-x-2 lg:mt-4">
                  <p className="font-medium cursor-pointer">See full detail </p>
                  <img src={getImageUrl("arrow-right", "svg")} alt="icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex max-md:flex-col-reverse">
            <div className="w-full lg:w-1/2 lg:h-[32rem] py-6 lg:py-20 text-[#282825] flex items-center">
              <div className="flex flex-wrap gap-y-4 md:w-[80%]">
                <p className="lg:text-lg font-medium">Coffee Shop</p>
                <p>
                  A web application for ordering coffee and managing online
                  transactions.
                </p>
                <p>
                  Tech Stack: Go · PostgreSQL · Express.js · React.js · JSON Web
                  Token (JWT) · Redux · Tailwind CSS
                </p>
                <div className="flex items-center gap-x-2 lg:mt-4">
                  <p className="font-medium cursor-pointer">See full detail </p>
                  <img src={getImageUrl("arrow-right", "svg")} alt="icon" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:h-[32rem] flex items-center">
              <img
                src={getImageUrl("5.1", "jpg")}
                alt="image"
                className="bg-center"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Projects */}

      {/* Contact */}
      <div
        className="font-rubik w-full py-10 px-6 lg:py-12 lg:px-28 bg-[#f9f5f2] min-h-screen mt-16"
        id="contact"
      >
        <div className="flex">
          <div className="text-[#282825] lg:w-1/2">
            <p className="text-2xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
              Tell me about your project
            </p>
            <p className="text-sm lg:text-base tracking-wide mb-20 text-center lg:text-left">
              These are the products of exploration, learning, and building real
              world projects using modern tools to bring ideas into action.
            </p>

            <div className="text-[#282825] flex lg:hidden">
              <div className="w-full">
                <div className="relative">
                  <div
                    className={`w-full h-14 bg-[#282825] absolute rounded-xl transition-all ${isInputNameHover ? "top-2.5 left-2.5" : "top-1.5 left-1.5"}`}
                  ></div>
                  <input
                    type="text"
                    placeholder="Your name "
                    className="p-4 rounded-xl focus:outline-none w-full ring-2 ring-[#282825] absolute"
                    onMouseOver={() => setIsInputNameHover(true)}
                    onMouseLeave={() => setIsInputNameHover(false)}
                  />
                </div>
                <div className="relative mt-20">
                  <div
                    className={`w-full h-14 bg-[#282825] absolute rounded-xl transition-all ${isInputEmailHover ? "top-2.5 left-2.5" : "top-1.5 left-1.5"}`}
                  ></div>
                  <input
                    type="email"
                    placeholder="Your email "
                    className="p-4 rounded-xl focus:outline-none w-full ring-2 ring-[#282825] absolute"
                    onMouseOver={() => setIsInputEmailHover(true)}
                    onMouseLeave={() => setIsInputEmailHover(false)}
                  />
                </div>
                <div className="relative mt-40">
                  <div
                    className={`w-full h-28 bg-[#282825] absolute rounded-xl transition-all ${isInputDescHover ? "top-2.5 left-2.5" : "top-1.5 left-1.5"}`}
                  ></div>
                  <textarea
                    placeholder="Project detail"
                    className="p-4 rounded-xl focus:outline-none w-full ring-2 ring-[#282825] absolute h-28"
                    onMouseOver={() => setIsInputDescHover(true)}
                    onMouseLeave={() => setIsInputDescHover(false)}
                  />
                </div>
                <div className="relative mt-[19.8rem]">
                  <div className="w-full max-md:left-1 md:w-[8.5rem] h-[2.7rem] bg-[#282825] absolute top-[-0.8rem] md:right-[-0.25rem] rounded-xl"></div>
                  <Link
                    to="#"
                    className="text-sm font-medium text-[#282825] py-2.5 px-6 bg-[#f7cb45] border-2 border-[#282825] rounded-xl absolute top-[-1.2rem] right-0 transition-all duration-300 active:top-[-1rem] active:right-[-0.1rem] max-sm:w-full text-center"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm lg:text-base text-[#a4a4a4] mt-20 mb-3">
                Get connect
              </p>
              <div className="flex gap-x-2 mb-2">
                <img src={getImageUrl("mail", "svg")} alt="icon" />
                <p className="lg:text-lg text-[#282825] font-medium">
                  ridwanbahtiar15@gmail.com
                </p>
              </div>
              <div className="flex gap-x-2 mb-2">
                <img src={getImageUrl("u_linkedin", "svg")} alt="icon" />
                <div className="flex items-center">
                  <img src={getImageUrl("link", "svg")} alt="icon" />
                  <Link
                    to="https://www.linkedin.com/in/ridwan-bahtiar"
                    target="_blank"
                    className="lg:text-lg text-[#282825] font-medium hover:underline hover:underline-offset-4"
                  >
                    linkedin.com/in/ridwan-bahtiar
                  </Link>
                </div>
              </div>
              <div className="flex gap-x-2">
                <img src={getImageUrl("github", "svg")} alt="icon" />
                <div className="flex items-center">
                  <img src={getImageUrl("link", "svg")} alt="icon" />
                  <Link
                    to="https://github.com/ridwanbahtiar15"
                    target="_blank"
                    className="lg:text-lg text-[#282825] font-medium hover:underline hover:underline-offset-4"
                  >
                    github.com/ridwanbahtiar15
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[#282825] w-1/2 flex pl-20 max-lg:hidden">
            <div className="w-full">
              <div className="relative">
                <div
                  className={`w-full h-14 bg-[#282825] absolute rounded-xl transition-all ${isInputNameHover ? "top-2.5 left-2.5" : "top-1.5 left-1.5"}`}
                ></div>
                <input
                  type="text"
                  placeholder="Your name "
                  className="p-4 rounded-xl focus:outline-none w-full ring-2 ring-[#282825] absolute"
                  onMouseOver={() => setIsInputNameHover(true)}
                  onMouseLeave={() => setIsInputNameHover(false)}
                />
              </div>
              <div className="relative mt-24">
                <div
                  className={`w-full h-14 bg-[#282825] absolute rounded-xl transition-all ${isInputEmailHover ? "top-2.5 left-2.5" : "top-1.5 left-1.5"}`}
                ></div>
                <input
                  type="email"
                  placeholder="Your email "
                  className="p-4 rounded-xl focus:outline-none w-full ring-2 ring-[#282825] absolute"
                  onMouseOver={() => setIsInputEmailHover(true)}
                  onMouseLeave={() => setIsInputEmailHover(false)}
                />
              </div>
              <div className="relative mt-48">
                <div
                  className={`w-full h-28 bg-[#282825] absolute rounded-xl transition-all ${isInputDescHover ? "top-2.5 left-2.5" : "top-1.5 left-1.5"}`}
                ></div>
                <textarea
                  placeholder="Project detail"
                  className="p-4 rounded-xl focus:outline-none w-full ring-2 ring-[#282825] absolute h-28"
                  onMouseOver={() => setIsInputDescHover(true)}
                  onMouseLeave={() => setIsInputDescHover(false)}
                />
              </div>
              <div className="relative mt-[23rem]">
                <div className="w-[10.3rem] h-[2.7rem] lg:w-40 lg:h-[3.7rem] bg-[#282825] absolute top-[-0.8rem] right-[-0.25rem] rounded-xl"></div>
                <Link
                  to="#"
                  className="text-sm lg:text-base font-medium text-[#282825] py-2.5 px-6 lg:py-4 lg:px-8 bg-[#f7cb45] border-2 border-[#282825] rounded-xl absolute top-[-1.2rem] right-0 transition-all duration-300 lg:active:top-[-1rem] lg:active:right-[-0.25rem] max-sm:active:top-[-1rem] max-sm:active:left-[0.1rem]"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact */}

      {/* Footer */}
      <div className="font-rubik w-full py-4 lg:py-6 lg:px-28 bg-[#f9f5f2] border-t-2 border-[#282825]">
        <AnimatePresence initial={false}>
          <motion.p
            className="text-center text-[#282825] lg:text-lg font-medium flex gap-x-1 cursor-pointer justify-center"
            onClick={() => setIsLoveClicked(!isLoveClicked)}
          >
            &copy; 2025 Ridwan Bahtiar. Made with{" "}
            {isLoveClicked ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 360,
                }}
                exit={{ opacity: 0, scale: 0 }}
              >
                ❤️
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                ❤️
              </motion.div>
            )}
          </motion.p>
        </AnimatePresence>
      </div>
      {/* End Footer */}

      {/* Navbar Mobile */}
      <div className="max-lg:absolute max-lg:top-24 max-lg:left-0 max-lg:w-full px-6">
        <AnimatePresence initial={false}>
          {isDropdownShow && (
            <motion.div
              initial={{ opacity: 1, scale: 1, y: -2 }}
              animate={{ y: 4 }}
              exit={{ y: -2 }}
            >
              {/* <div className="w-10 h-10 bg-slate-500"></div> */}
              <div className="max-lg:w-full h-40 bg-[#282825] rounded-lg ml-2"></div>
              <div className="font-rubik max-lg:w-full h-40 bg-[#282825] rounded-lg absolute top-[-1rem]">
                <div className="lg:hidden text-lg p-4 text-[#282825] w-full grid grid-cols-1 gap-6 bg-[#f9f5f2] border-2 border-[#282825] rounded-lg">
                  <HashLink
                    to="/#about"
                    className="hover:font-medium col-start-1"
                    onClick={() => setIsDropdownShow(false)}
                  >
                    About
                  </HashLink>
                  <HashLink
                    to="/#projects"
                    className="hover:font-medium col-start-1"
                    onClick={() => setIsDropdownShow(false)}
                  >
                    Projects
                  </HashLink>
                  <HashLink
                    to="/#contact"
                    className="hover:font-medium col-start-1"
                    onClick={() => setIsDropdownShow(false)}
                  >
                    Contact
                  </HashLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* End Navbar Mobile */}
    </>
  );
}
