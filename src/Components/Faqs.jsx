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
            <span>How accurate is the EcoScore?</span>
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
                The accuracy of the EcoScore depends on the accuracy of the
                information you provide. Terra strives to use up-to-date
                emissions factors and methodologies, but estimates may vary
                based on individual circumstances.
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
            <span>What types of products can I find on the Marketplace?</span>
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
                Terra offers a curated selection of eco-friendly products across
                various categories. This might include sustainable clothing,
                home goods, beauty products, and more, with options from
                different countries.
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
            <span>How does the Recycle Item Search Bar work?</span>
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
                The Recycle Item Search Bar provides detailed information on
                material composition, recyclability, local recycling guidelines
                for various items, etc. Simply enter the item name to get
                started.
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
            <span>What is the EcoSwap?</span>
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
                EcoSwap allows users to buy, sell, or trade materials and items
                to encourage reuse and reduce waste. It's a community-driven
                platform promoting sustainability.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
