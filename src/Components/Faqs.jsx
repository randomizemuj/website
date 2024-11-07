import React, { useState } from "react";

function Faqs() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <div className="my-20 flex justify-center items-center flex-col space-y-7 mx-4  py-10 text-[#F3F3F3]">
      {/* Faqs */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-20 h-1 bg-[rgb(153,77,240)] rounded-md"></div>
        <h1 className="font-semibold text-2xl md:text-3xl">FAQs</h1>
        <div className="w-20 h-1 bg-[rgb(153,77,240)] rounded-md"></div>
      </div>
      <div className="w-full max-w-3xl rounded-3xl overflow-hidden border border-[#c9c8c8] ">
        {/* 1st */}
        <div className="bg-[#09090c]">
          <button
            onClick={() => toggleSection(4)}
            className="flex items-center justify-between w-full p-5 font-medium text-left border-[#c9c8c8] border"
          >
            <span>What is Randomize(); and who can join?</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === 4 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="#F3F3F3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
          {openSection === 4 && (
            <div className="p-5 border border-b-0 border-[#c9c8c8]">
              <p className="mb-2">
                Randomize(); is a tech club dedicated to fostering learning,
                creativity, and community building among young minds interested
                in technology. We welcome all year students, as well as other
                passionate individuals who want to explore and showcase their
                skills. Whether you're a beginner or an experienced coder,
                there's a place for you here.
              </p>
            </div>
          )}
        </div>

        {/* 2nd */}
        <div className="bg-[#09090c]">
          <button
            onClick={() => toggleSection(5)}
            className="flex items-center justify-between w-full p-5 font-medium text-left border-[#c9c8c8] border"
          >
            <span>What kind of workshops do we offer?</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === 5 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="#F3F3F3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
          {openSection === 5 && (
            <div className="p-5 border border-b-0 border-[#c9c8c8]">
              <p className="mb-2">
                We conduct monthly workshops on key topics like data structures,
                algorithms, programming languages, and other tech fundamentals.
                These sessions are designed to be interactive, where you'll not
                only learn but also engage in hands-on activities to reinforce
                the concepts.
              </p>
            </div>
          )}
        </div>

        {/* 3rd */}
        <div className="bg-[#09090c]">
          <button
            onClick={() => toggleSection(6)}
            className="flex items-center justify-between w-full p-5 font-medium text-left border-[#c9c8c8] border"
          >
            <span>How do you promote skill development in members?</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === 6 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="#F3F3F3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
          {openSection === 6 && (
            <div className="p-5 border border-b-0 border-[#c9c8c8]">
              <p className="mb-2">
                At Randomize();, we believe in passion-based projects. This
                means each member can work on a project they are passionate
                about, showcasing their skills while learning new ones. We also
                offer mentorship where seniors guide juniors, helping you grow
                in a supportive environment.
              </p>
            </div>
          )}
        </div>

        {/* 4th */}
        <div className="bg-[#09090c]">
          <button
            onClick={() => toggleSection(7)}
            className="flex items-center justify-between w-full p-5 font-medium text-left border-[#c9c8c8] border"
          >
            <span>What is the mentorship program like?</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === 7 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="#F3F3F3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
          {openSection === 7 && (
            <div className="p-5 border border-b-0 border-[#c9c8c8]">
              <p className="mb-2">
                Our mentorship program pairs senior members with newcomers.
                Senior members provide guidance on projects, help new members
                learn core concepts, and share their experiences to help you
                navigate your tech journey. This mentorship is essential in
                creating a nurturing and inclusive space for everyone.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
