import { useState, useEffect } from "react";

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
<<<<<<< HEAD
    "fixed top-0 left-0 right-0 z-10 bg-black text-white font-sans px-4 py-4 md:px-6 md:py-6 opacity-100 backdrop-blur bg-transparent shadow-md border-b border-gray-900 ml-6";

  const nav =
    " fixed top-0 left-0 right-0 z-10 text-white font-sans px-4 py-4 md:px-6 md:py-6 bg-black backdrop-blur bg-transparent shadow-md border-b border-gray-900 ml-6";
=======
    "fixed top-0 left-0 right-0 z-10 bg-black text-white font-sans px-4 py-4 md:px-6 md:py-6 opacity-100 backdrop-blur bg-transparent shadow-md border-b border-gray-900";

  const nav =
    " fixed top-0 left-0 right-0 z-10 text-white font-sans px-4 py-4 md:px-6 md:py-6 bg-black backdrop-blur bg-transparent shadow-md border-b border-gray-900";
>>>>>>> 42c8913ccf3c972388464f0a6856d038d75c11de

  // fixed top-0 left-0 right-0 z-10 bg-black text-white font-sans px-4 py-4 md:px-6 md:py-6 backdrop-filter backdrop-blur-3xl opacity-80

  return (
    <>
      <nav className={top ? nav : navactive}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ul>
              <li>
                <a href="/" className="flex items-center space-x-1">
                  <img
                    className="h-10 mr-3"
                    src="https://ucarecdn.com/20a00067-b313-4a73-b536-c7dedf5bc78c/-/preview/"
                    alt="Randomize"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <a
              href="/"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
            >
              Home
            </a>
            <span className="px-1.5"></span>
            <a
              href="/team"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
            >
<<<<<<< HEAD
              Projects
            </a>
            <a
              href="/"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
            >
              Events 
            </a>
            <a
              href="/"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
            >
              Teams
=======
              Team
>>>>>>> 42c8913ccf3c972388464f0a6856d038d75c11de
            </a>

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
        <div className={`md:hidden ${showMobileMenu ? "" : "hidden"}`}>
          <div className="bg-opacity-75 pt-2 pb-3 space-y-1">
            <span className="px-1.5"></span>
            <a
              href="/"
              className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Home
            </a>
<<<<<<< HEAD
           
=======
            <span className="px-1.5"></span>
>>>>>>> 42c8913ccf3c972388464f0a6856d038d75c11de
            <a
              href="/team"
              className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
<<<<<<< HEAD
              Projects
            </a>
            <a
              href="/"
              className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Events
            </a>
            <a
              href="/"
              className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Teams
=======
              Team
>>>>>>> 42c8913ccf3c972388464f0a6856d038d75c11de
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
