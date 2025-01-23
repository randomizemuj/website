import React, { useEffect } from "react";
import { BackgroundBeams } from "../Components/TheFest/background-beams";
import TimelineFest from "../Components/TheFest/timeline-fest";
import TheFestCountdown from "../Components/TheFest/TheFestCoundown";
import EventDetails from "../Components/TheFest/EventDetails";

////done
const TheFest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const now = new Date().getTime();
  const targetDate = new Date("2025-02-07T00:00:00").getTime();

  const duration = targetDate - now;
  console.log(duration);

  return (
    <div className="bg-[#070707] dark w-full h-max py-2 pb-11">
      <div className="relative">
        <div className="md:w-[75%] sm:w-[85%] xs:w-[85%] xss:w-[95%] flex flex-col justify-center items-center mx-auto relative z-20">
          <div className="mt-40 leading-[1.1] flex flex-col">
            <h1
              className="text-8xl md:text-10xl text-[#00a7f1] text-center"
              style={{ fontFamily: "'Kelsi', sans-serif" }}
            >
              THE FEST
            </h1>
            <h3 className="text-[#f0f0f0] text-sm md:text-2xl mt-8 leading-6 font-inter w-[75%] mx-auto text-center">
              Join us for The Fest, a 36-hour hackathon where you'll tackle
              real-world challenges, use innovative tech, and compete for cash
              prizes. Turn your ideas into reality under pressure – don't miss
              out!
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 my-8">
              <button className="text-sm md:text-xl p-2 md:p-5 hover:scale-[1.025] items-center text-[#00a7f1] bg-[#00a9f146] border border-[#00a7f1] transition-all ease-in-out rounded-3xl md:rounded-full w-32 md:w-max">
                Registration Starting soon
              </button>
              {/* <button className="text-sm p-2 hover:scale-[1.025]  items-center text-[#e5e5e5] font-inter bg-transparent border border-white border-opacity-50 transition-all ease-in-out rounded-full">
                More Details
              </button> */}
            </div>
            <h5 className="text-sm md:text-2xl mx-8 text-white leading-5 opacity-50 italic text-center">
              Don't miss your chance, spots are filling fast!
            </h5>
          </div>
        </div>

        {/* //////////////the fest countdown///////////////// */}
        <div className="relative z-20">
          <TheFestCountdown duration={duration} />
        </div>

        {/* ///////////////////background beams/////////////////// */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070707] z-20 pointer-events-none"></div>
          <BackgroundBeams />
        </div>
      </div>

      {/* ///////////////Timeline/////////////////////////////// */}

      <div className="md:w-[75%] sm:w-[85%] xs:w-[85%] xss:w-[95%] mx-auto mt-16">
        <TimelineFest />
      </div>

      {/* ///////////////General instruction//////////////// */}
      <div className="mx-8 md:mx-16  md:mt-20 mb-24">
        <h2 className="text-3xl font-bold text-[#00a7f1] mb-8 text-center">
          General Instructions
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {[
            "All team members need a reliable internet connection.",
            "Participants must bring their own materials and software.",
            "Each room of teams will have an assigned mentor.",
            "Technical guidance will be provided.",
            "Create your product during the hackathon.",
            "Projects will be evaluated on Innovation, Impact, Feasibility, and Marketability.",
            "Solutions can integrate hardware and software, or focus solely on one.",
            "Existing libraries and components are permitted, but only work done within the 36-hour period will be judged.",
            "Organizers are available for assistance or questions.",
            "Embrace collaboration and diverse skills within your team for the best results.",
          ].map((instruction, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg p-2 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-[#e5e5e5] text-lg leading-relaxed">
                <span className="text-[#00a7f1] font-semibold mr-2">
                  {index + 1}.
                </span>
                {instruction}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* //////////////////////Event Deatils///////////////////// */}
      <EventDetails />
    </div>
  );
};

export default TheFest;
