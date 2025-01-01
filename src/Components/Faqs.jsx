import React, { useState } from "react";

function Faqs() {
  const [openSection, setOpenSection] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "What is Randomize(); and who can join?",
      answer:
        "Randomize(); is a tech club dedicated to fostering learning, creativity, and community building among young minds interested in technology. We welcome all year students, as well as other passionate individuals who want to explore and showcase their skills. Whether you're a beginner or an experienced coder, there's a place for you here.",
    },
    {
      id: 2,
      question: "What kind of workshops do we offer?",
      answer:
        "We conduct monthly workshops on key topics like data structures, algorithms, programming languages, and other tech fundamentals. These sessions are designed to be interactive, where you'll not only learn but also engage in hands-on activities to reinforce the concepts.",
    },
    {
      id: 3,
      question: "How do you promote skill development in members?",
      answer:
        "At Randomize();, we believe in passion-based projects. This means each member can work on a project they are passionate about, showcasing their skills while learning new ones. We also offer mentorship where seniors guide juniors, helping you grow in a supportive environment.",
    },
    {
      id: 4,
      question: "What is the mentorship program like?",
      answer:
        "Our mentorship program pairs senior members with newcomers. Senior members provide guidance on projects, help new members learn core concepts, and share their experiences to help you navigate your tech journey. This mentorship is essential in creating a nurturing and inclusive space for everyone.",
    },
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="mt-28 md:my-28 flex justify-center items-center flex-col space-y-5 mx-8 md:mx-28 py-10 pb-32 text-[#F3F3F3]">
      {/* Faqs Header */}
      <div className="flex items-center justify-center gap-3 mb-20">
        <div className="w-36 h-2 bg-gradient-to-r from-sky-900 to-cyan-700 rounded-md"></div>
        <h1 className="font-semibold text-2xl md:text-5xl">FAQs</h1>
        <div className="w-36 h-2 bg-gradient-to-l from-sky-900 to-cyan-700 rounded-md"></div>
      </div>

      {/* FAQ List */}
      <div className="w-full rounded-3xl text-lg md:text-2xl overflow-hidden border border-[#c9c8c8]">
        {faqItems.map(({ id, question, answer }) => (
          <div key={id} className="bg-[#09090c]">
            {/* FAQ Question */}
            <button
              onClick={() => toggleSection(id)}
              className={`flex items-center hover:bg-cyan-600/15 duration-500 justify-between w-full md:py-8 p-5 font-medium text-left border-[#c9c8c8] border ${
                openSection === id ? " bg-cyan-600/15 " : "text-[#F3F3F3]"
              }`}
            >
              <span>{question}</span>
              <svg
                className={`w-3 h-3 transform transition-transform duration-500 ${
                  openSection === id ? "rotate-180" : "rotate-0"
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

            {/* FAQ Answer */}
            <div
              className={`overflow-hidden bg-cyan-600/5 transition-max-height duration-500 ease-in-out ${
                openSection === id ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="p-5 border border-b-0 border-[#c9c8c8]">
                <p className="mb-2">{answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
