import React from "react";
import thefest from "/thefest.png";
import thefesttext from "/thefesttext.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import TheFestCoundown from "../Components/TheFestCoundown";
// npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons

function TheFest() {
  const now = new Date().getTime(); // Current time in milliseconds
  const targetDate = new Date("2025-01-15T00:00:00").getTime(); // Target date in milliseconds

  const duration = targetDate - now;
  console.log(duration); // This will give you the duration in milliseconds

  return (
    <>
      <div className=" md:mt-10">
        <div className="grid place-content-center m-5 gap-20 md:gap-2 h-lvh">
          <div className="flex justify-center">
            <img src={thefest} alt="img" className="h-20 " />
          </div>
          <div className="flex flex-col items-center ">
            <img src={thefesttext} alt="img" className="md:h-96" />
            <div className="flex justify-center">
              <img
                className="h-6"
                src="https://ucarecdn.com/20a00067-b313-4a73-b536-c7dedf5bc78c/-/preview/"
                alt="Randomize"
              />
            </div>
          </div>
        </div>

        {/* ///////////////CountDown////////////// */}
        <div className="flex justify-center mb-36 md:h-lvh flex-col">
          <h1 className="text-xl md:text-5xl text-[#00C2FF] font-semibold text-center mb-20">
            Ticking Towards the Big Day !!
          </h1>
          <TheFestCoundown duration={duration} />
        </div>

        <div className="md:h-lvh ">
          <div className="flex items-center">
            <div className="h-1 rounded-lg bg-[#00C2FF] flex-1"></div>
            <div className="text-2xl md:text-4xl text-white px-4">
              Registrations Starting Soon
            </div>
            <div className="h-1 rounded-lg bg-[#00C2FF] flex-1"></div>
          </div>
          <div className="text-white flex flex-col items-center justify-center gap-7 text-base md:text-2xl mt-10 md:mt-28">
            <div className="text-center w-9/12 mt-2 md:mt-0">
              Join us for The Fest, a thrilling 36-hour hackathon where
              innovation meets urgency. Unleash your creativity to tackle
              real-world challenges and vie for cash prizes!
            </div>
            <div className="text-center w-9/12">
              Utilize cutting-edge technologies to develop solutions that make
              an impact in the domains provided. Don’t miss the chance to turn
              your ideas into reality under the pressure of the clock!
            </div>
          </div>
        </div>

        <div className="md:h-lvh py-36 md:py-0">
          <div className="flex flex-col items-center gap-2 md:gap-5 ">
            <h1 className="text-white text-xl md:text-4xl">
              DETAILS AND SCHEDULE
            </h1>
            <div className="h-1 rounded-lg bg-[#00C2FF] w-60"></div>
          </div>

          <div className="flex flex-col items-center gap-10 md:gap-0 md:flex-row justify-around mt-8">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#00C2FF]">DAY 1</h1>
                <div className="text-white flex gap-5">
                  <div className="">
                    01:00 PM
                    <br />
                    07:30 PM
                    <br />
                    09:00 PM
                  </div>
                  <div className="">
                    Opening Ceremony
                    <br />
                    Registration for Hackathon
                    <br />
                    Hackathon Starts
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="text-[#00C2FF]">DAY 2</h1>
                <div className="text-white flex gap-5">
                  <div className="">
                    10:00 AM
                    <br />
                    02:30 PM
                    <br />
                    03:00 PM
                    <br />
                    04:30 PM
                    <br />
                    05:00 PM
                    <br />
                    06:00 PM
                  </div>
                  <div className="">
                    Cryptex Starts
                    <br />
                    Registration for Ideathon
                    <br />
                    Ideathon Starts
                    <br />
                    Round 1 Ends
                    <br />
                    Presentation Starts
                    <br />
                    Result Announcement
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="text-[#00C2FF]">DAY 3</h1>
                <div className="text-white flex gap-5">
                  <div className="">
                    01:00 PM
                    <br />
                    06:00 PM
                  </div>
                  <div className="">
                    Hackathon Officially Ends
                    <br />
                    Cultural Night
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:flex-col items-center justify-around gap-7">
              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#00c2ff" }}
                  className="h-10 md:h-20"
                />
                <p className="text-white text-xs md:text-lg">1-4 per team</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  style={{ color: "#00c2ff" }}
                  className="h-10 md:h-20"
                />
                <p className="text-white text-xs md:text-lg">16-19 Jan 2025</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#00c2ff" }}
                  className="h-10 md:h-16"
                />
                <p className="text-white text-xs md:text-lg text-center">
                  Siddharth: 8960191885
                  <br />
                  Vranda: 7302365763
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 md:mb-0 md:h-lvh ">
          <h1 className="text-white text-xl md:text-4xl text-center pt-5">
            GENERAL INSTRUCTIONS
          </h1>
          <div className="flex justify-center py-10 md:text-xl p-5">
            <ul className="text-white list-disc pl-5 space-y-2">
              <li>All team members need a reliable internet connection.</li>
              <li>Participants must bring their own materials and software.</li>
              <li>Each room of teams will have an assigned mentor.</li>
              <li>Technical guidance will be provided.</li>
              <li>Create your product during the hackathon.</li>
              <li>
                Projects will be evaluated on Innovation, Impact, Feasibility,
                and Marketability.
              </li>
              <li>
                Solutions can integrate hardware and software, or focus solely
                on one.
              </li>
              <li>
                Existing libraries and components are permitted, but only work
                done within the 36-hour period will be judged.
              </li>
              <li>Organizers are available for assistance or questions.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheFest;
