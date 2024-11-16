import eventData from "../Data/Eventsdata.jsx";

import { useState, useEffect } from "react";

function Events(props) {
  const [count, setCount] = useState(0);
  function handleClick(event) {
    const currentCard = event.currentTarget.id;
    if ($(".eventsDescp" + currentCard).css("display") == "none") {
      $(".eventsImage" + currentCard).slideToggle();
      $(".eventsDate" + currentCard).slideToggle();
      setTimeout(function () {
        $(".eventsDescp" + currentCard).slideToggle();
      }, 500);
      console.log("Yes");
    } else {
      $(".eventsDescp" + currentCard).slideToggle();
      setTimeout(function () {
        $(".eventsImage" + currentCard).slideToggle();
        $(".eventsDate" + currentCard).slideToggle();
      }, 500);
      console.log("No");
    }
  }

  return (
    <section>
      <div className="text-white py-8">
        {/*Background gradient */}
        <div
          className="absolute inset-0 -z-10 w-full h-full"
          style={{
            background: `
            radial-gradient(100% 100% at top right, white, transparent),
            linear-gradient(to right, #80caff, #4f46e5)
          `,
            maskImage:
              "radial-gradient(100% 100% at top right, white, transparent)",
            WebkitMaskImage:
              "radial-gradient(100% 100% at top right, white, transparent)",
          }}
        >
          <svg
            className="absolute inset-0 h-full w-full stroke-white/10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="pattern-lines"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" strokeWidth={0.5} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern-lines)" />
          </svg>
        </div>

        <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
          <div
            className=" w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        {/*Gradient ends */}

        <div className="container mx-auto flex flex-col items-center justify-center my-12 md:my-24">
          <div className="flex flex-col justify-center items-center w-full md:top-36 mt-2 md:mt-12 px-8 mb-[10vh] max-sm:mb-2">
            <p className="ml-2 text-sky-500 uppercase tracking-loose">
              Godspeed Randomize
            </p>
            <p className=" text-3xl md:text-6xl leading-normal md:leading-relaxed mb-2 font-zain Events">
              Events-di-Timeline
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Here's the breakdown of Randomize's events for the 2024-25 tenure.
              Click on an event to know about it.
            </p>
            {/* <a
              href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-sky-500 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-sky-500 hover:border-transparent"
            >
              Explore Now
            </a> */}
          </div>
          <div className="ml-0 lg:w-3/3">
            <div className="container w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full rounded-[40px]">
                <div
                  className="border-2 absolute h-full"
                  style={{
                    right: "50%",
                    border: "2px solid #9ca3af",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2 absolute h-full"
                  style={{
                    left: "50%",
                    // border: "2px solid #0ea5e9",
                    border: "2px solid #9ca3af",
                    borderRadius: "1%",
                  }}
                ></div>

                {/*Gradient Pattern*/}
                <svg
                  className="absolute inset-0 -z-10 w-full h-full stroke-white/10"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                  />
                </svg>
                <div
                  className="absolute inset-0 -z-10 transform-gpu blur-3xl h-full"
                  aria-hidden="true"
                >
                  <div
                    className="w-full h-full bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                    style={{
                      clipPath:
                        "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                    }}
                  />
                </div>
                {/*Gradient pattern ends */}

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
                  <div className="order-1 w-[45%] h-full flex justify-start max-md:ml-5">
                    <h1 className="text-gray-400 text-5xl font-bold max-md:text-xl ">
                      Competitive Programming
                    </h1>
                  </div>
                  <div
                    className="order-1 w-[45%] text-left shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] flex items-center max-sm:flex-col EventsCard"
                    id="1"
                    onClick={handleClick}
                  >
                    <div className="order-1 m-0 h-[100%] w-1/2 max-sm:order-1 max-sm:mt-8 eventsImage1">
                      <img className="object-fill" src="/cp-workshop.jpg" />
                    </div>
                    <div className="w-1/2 max-sm:pl-1 max-sm:order-2 flex justify-center flex-col items-center eventsDate1">
                      <p className="mb-3 max-lg:mb-5 text-3xl max-lg:text-base text-black font-zain eventsHeading">
                        9 Sept, 2023
                      </p>
                      {/* <h4 className="mb-3 font-bold text-lg max-sm:text-base md:text-2xl text-black">
                        Competitive Programming
                      </h4> */}
                    </div>
                    <div className="eventsDescp1 p-[10%] max-lg:p-8 ">
                      <p className="text-xl max-lg:text-xs leading-snug text-gray-500 text-opacity-100">
                        A 2-hour session where we'll tackle a programming
                        problem, break it down, discuss approaches, solve with
                        flowcharts and logic, then code it. No prior programming
                        knowledge required..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full">
                  <div className="order-1 w-[45%] h-full flex justify-end pl-60 pr-0 mr-10 max-lg:pl-0">
                    <h1 className="text-gray-400 text-5xl font-bold max-md:text-xl">
                      Hello World
                    </h1>
                  </div>
                  <div
                    className="order-1 w-[45%] text-left bg-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] flex items-center max-sm:flex-col EventsCard"
                    id="2"
                    onClick={handleClick}
                  >
                    <div className="m-0 h-[100%] w-1/2 max-sm:order-1 max-sm:mt-8 eventsImage2">
                      <img className="object-fill" src="/hello-world.jpg" />
                    </div>
                    <div className="w-1/2 max-sm:pl-1 max-sm:order-2 flex justify-center flex-col items-center eventsDate2">
                      <p className="mb-3 max-lg:mb-5 text-3xl max-lg:text-base text-black font-zain eventsHeading">
                        13 Sept, 2023
                      </p>
                      {/* <h4 className="mb-3 font-bold text-lg max-sm:text-base md:text-2xl text-black">
                        Competitive Programming
                      </h4> */}
                    </div>
                    <div className="eventsDescp2 p-[10%] max-lg:p-8 ">
                      <p className="text-xl max-lg:text-xs leading-snug text-gray-500 text-opacity-100">
                        Learn about various topics at the upcoming two-day event
                        on 13th and 14th September 2023. Graphic
                        Design+UI/UX,Generative AI+Fundamentals of AI,
                        DSA+Competitive Programming,Full Stack Development + App
                        Development,Introduction to Decentralized Technologies
                        (blockchain, Web3, NFTs, Crypto).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
                  <div className="order-1 w-[45%] h-full flex justify-start max-md:ml-5">
                    <h1 className="text-gray-400 text-5xl font-bold max-md:text-xl ">
                      The Fest
                    </h1>
                  </div>
                  <div
                    className="order-1 w-[45%] text-left bg-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] flex items-center max-sm:flex-col EventsCard"
                    id="3"
                    onClick={handleClick}
                  >
                    <div className="order-1 m-0 h-[100%] w-1/2 max-sm:order-1 max-sm:mt-8 eventsImage3">
                      <img className="object-fill" src="/fest.webp" />
                    </div>
                    <div className="w-1/2 max-sm:pl-1 max-sm:order-2 flex justify-center flex-col items-center eventsDate3">
                      <p className="mb-3 max-lg:mb-5 text-3xl max-lg:text-base text-black font-zain eventsHeading">
                        19 Jan, 2024
                      </p>
                      {/* <h4 className="mb-3 font-bold text-lg max-sm:text-base md:text-2xl text-black">
                        Competitive Programming
                      </h4> */}
                    </div>
                    <div className="eventsDescp3 p-[10%] max-lg:p-8 ">
                      <p className="text-xl max-lg:text-xs leading-snug text-gray-500 text-opacity-100">
                        Randomize(); is organizing a 3-Day Technological
                        Festival called 'The Fest' from 19th to 21st
                        January.Events:1)The Hackathon (19th Jan 9PM - 21st Jan
                        Morning),36-hour duration. 2)The Cryptic Hunt (20th Jan
                        10AM onwards. 3)The Ideathon (20th Jan 2PM)Pitch ideas
                        (tech or otherwise) for funding, mentorship, and
                        incubation,4)The Bollywood DJ Night (21st Jan 5PM).
                      </p>
                    </div>
                  </div>
                </div>
                {/*Gradient pattern once again*/}
                <svg
                  className="absolute inset-0 -z-10 w-full h-full stroke-white/10"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                  />
                </svg>
                <div
                  className="absolute inset-0 -z-10 transform-gpu blur-3xl h-full"
                  aria-hidden="true"
                >
                  <div
                    className="w-full h-full bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                    style={{
                      clipPath:
                        "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                    }}
                  />
                </div>
                {/*Gradient pattern ends */}

                <div className="mb-8 flex justify-between items-center w-full">
                  <div className="order-1 w-[45%] h-full flex justify-end">
                    <h1 className="text-gray-400 text-5xl font-bold max-md:text-xl ">
                      Git Workshop
                    </h1>
                  </div>

                  <div
                    className="order-1 w-[45%] text-left bg-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] flex items-center max-sm:flex-col EventsCard"
                    id="4"
                    onClick={handleClick}
                  >
                    <div className=" m-0 h-[100%] w-1/2 max-sm:order-1 max-sm:mt-8 eventsImage4">
                      <img className="object-fill" src="/github.jpg" />
                    </div>
                    <div className="w-1/2 max-sm:pl-1 max-sm:order-2 flex justify-center flex-col items-center eventsDate4">
                      <p className="mb-3 max-lg:mb-5 text-3xl max-lg:text-base text-black font-zain eventsHeading">
                        3 Feb, 2024
                      </p>
                      {/* <h4 className="mb-3 font-bold text-lg max-sm:text-base md:text-2xl text-black">
                        Competitive Programming
                      </h4> */}
                    </div>
                    <div className="eventsDescp4 p-[10%] max-lg:p-8 ">
                      <p className="text-xl max-lg:text-xs leading-snug text-gray-500 text-opacity-100">
                        Randomize is conducting a session to teach Git and
                        GitHub from scratch, which are essential skills for:
                        Writing code in large teams,Creating scalable
                        projects,Software engineering roles,The emphasis is on
                        the importance of learning Git and GitHub for
                        collaborative coding, scalable projects, and software
                        engineering roles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
                  <div className="order-1 w-[45%] h-full flex justify-start max-md:ml-5">
                    <h1 className="text-gray-400 text-5xl font-bold max-md:text-xl ">
                      Panel Talk
                      <br />
                      with a Googler
                    </h1>
                  </div>

                  <div
                    className="order-1 w-[45%] text-left bg-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] flex items-center max-sm:flex-col EventsCard"
                    id="5"
                    onClick={handleClick}
                  >
                    <div className="order-1 m-0 h-[100%] w-1/2 max-sm:order-1 max-sm:mt-8 eventsImage5">
                      <img className="object-fill" src="/googler.webp" />
                    </div>
                    <div className="w-1/2 max-sm:pl-1 max-sm:order-2 flex justify-center flex-col items-center eventsDate5">
                      <p className="mb-3 max-lg:mb-5 text-3xl max-lg:text-base text-black font-zain eventsHeading">
                        14 April, 2024
                      </p>
                      {/* <h4 className="mb-3 font-bold text-lg max-sm:text-base md:text-2xl text-black">
                        Competitive Programming
                      </h4> */}
                    </div>
                    <div className="eventsDescp5 p-[10%] max-lg:p-8 ">
                      <p className="text-xl max-lg:text-xs leading-snug text-gray-500 text-opacity-100">
                        Randomize(); is hosting an exclusive panel talk event
                        this weekend with a distinguished industry
                        expert.Details-Speaker: Kalyan Kumar Dubey, an employee
                        at Google and a 5-star Coder on CodeChef,Topic: Gain
                        insights and strategies to enhance coding skills, and
                        understand the work environment at Google.This is an
                        opportunity to learn from an experienced professional at
                        Google, get your questions answered, and improve your
                        coding abilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
