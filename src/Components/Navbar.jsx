import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 20);

      if (window.scrollY >= 20) {
        setTop(true);
      } else {
        setTop(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    scrollHandler();
  }, []);

  const navactive =
    "fixed top-0 left-0 right-0 z-50 bg-black text-white font-sans sm:px-4 sm:py-3 md:px-4 md:py-6 p-5 opacity-100 backdrop-blur bg-transparent shadow-md border-b border-gray-900 ";

  const nav =
    " fixed top-0 left-0 right-0 z-50 text-white font-sans sm:px-4 sm:py-3 md:px-4 md:py-6 p-5  bg-black backdrop-blur bg-transparent shadow-md border-b border-gray-900 ";

  // fixed top-0 left-0 right-0 z-10 bg-black text-white font-sans px-4 py-4 md:px-6 md:py-6 backdrop-filter backdrop-blur-3xl opacity-80

  return (
    <>
      <nav className={top ? nav : navactive}>
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <ul>
              <li>
                <a href="/" className="flex items-center space-x-1">
                  <img
                    className="h-8 mr-3"
                    src="https://ucarecdn.com/20a00067-b313-4a73-b536-c7dedf5bc78c/-/preview/"
                    alt="Randomize"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <Link
              to="/"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
            >
              Home
            </Link>
            <span className="px-1.5"></span>
            {/* <a
              href="#our-projects"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
            >
              Projects
            </a> */}

            <Link
              to="/projects"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
            >
              Projects
            </Link>
            <Link
              to="/events"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
            >
              Events
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
            >
              Gallery
            </Link>
            <Link
              to="/thefest"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
            >
              The Fest
            </Link>

            <Link
              to="/teams"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
            >
              Team
            </Link>

            {/* <a href="/resources" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">
                Resources
              </a> */}
          </div>
          <button
            type="button"
            className="md:hidden text-white hover:text-gray-300"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`md:hidden opacity-100 backdrop-blur-none bg-black	 ${showMobileMenu ? "" : "hidden"}`}
        >
          <div className=" pt-2 pb-3 space-y-1">
            <span className="px-1.5"></span>
            <a
              href="/"
              className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Home
            </a>

            <a
              href="/projects"
              className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Projects
            </a>
            <a
              href="/events"
              className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Events
            </a>
            <a
              href="/gallery"
              className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Gallery
            </a>
            <a
              href="/thefest"
              className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              The Fest
            </a>

            <a
              href="/teams"
              className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Teams
            </a>

            {/*<a href="/resources" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md">*/}
            {/*  Resources*/}
            {/*</a>*/}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
