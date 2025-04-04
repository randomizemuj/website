// import eventData from '../Data/Events.json';

// export default function Events() {
//   return (
//     <div className="bg-black text-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Our Events
//           </h2>
//         </div>
//         <div className="mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {eventData.map((post) => (
//             <article
//               key={post.id}
//               className="flex flex-col items-center justify-between bg-gray-900 rounded-lg overflow-hidden w-full max-w-md mx-auto"
//             >
//               <div className="relative w-full">
//                 <img
//                   src={post.imageUrl}
//                   alt=""
//                   className="aspect-[16/9] w-full h-56 rounded-t-lg object-cover"
//                 />
//                 <div className="absolute inset-0 rounded-t-lg bg-gray-900/40" />
//               </div>
//               <div className="w-full p-4">
//                 <div className="mt-2 flex items-center gap-x-2 text-xs">
//                   <time dateTime={post.datetime} className="text-gray-500">
//                     {post.date}
//                   </time>
//                 </div>
//                 <div className="group relative">
//                   <h3 className="mt-2 text-lg font-semibold leading-6">
//                     <a href={post.href} className="text-white">
//                       {post.title}
//                     </a>
//                   </h3>
//                   <p className="mt-2 text-sm leading-6">
//                     {post.description}
//                   </p>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import events from "../Data/Eventsdata.jsx";
import ScrollOut from "scroll-out";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import { useState, useEffect, useRef } from "react";

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// function EventCard({ event, id }: { event: any; id: number }) {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref })
//   const y = useParallax(scrollYProgress, 300)
function EventCard({ event, id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);


  const handleClick = (toko) => {
      console.log(`Clicked event with ID: ${event.id}`)
      const currentCard = toko.currentTarget.id;
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
      <section className="img-container snap-start">
          <div ref={ref}>
              <div
                  className="mb-8 flex justify-between flex-column flex-wrap gap-0 w-full mb-[30%] bg-white/5 backdrop-blur-md border border-white/20 rounded-[10%] shadow-lg p-4 event"
                  
              >
                  <div className="order-1 w-full flex justify-center mb-[20%]">
                      <h1 className="text-gray-400 text-5xl font-bold max-md:text-3xl text-center">
                          
                          {event.title}
                      </h1>
                  </div>
                  <div
                      className="order-2 w-full text-left bg-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] flex items-center max-sm:flex-col transform opacity-0 EventsCard overflow-hidden"
                      id={event.id}
                      onClick={handleClick}
                  >
                      <div
                          className={`order-1 m-0  max-sm:order-1 eventsImage${event.id}`}
                      >
                          <img className="object-fill" src={event.image} />
                      </div>
                      <div
                          className={`eventsDescp${event.id} p-[10%] max-lg:p-8`}
                      >
                          <p className="text-xl max-lg:text-s leading-snug text-gray-800 text-opacity-100">
                              {event.description}
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <motion.h2
          className="max-md:text-5xl max-sm:text-2xl 5xl special-elite-regular"
              // Hide until scroll progress is measured
              initial={{ visibility: "hidden" }}
              animate={{ visibility: "visible" }}
              style={{ y }}
          >{`${event.date}`}</motion.h2>
      </section>
  )
}

const Events = () => {
  const isSmallDevice = window.innerWidth < 768;
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

  useEffect(() => {
    window.scrollTo(0, 0); //resets the scrolling to the top of the page
    ScrollOut({
      targets: ".EventsCard",
      onShown: function (element, ctx, scrollingElement) {
        element.style.opacity = 1;
        element.style.transform = "translateX(0)"; // Slide to the original position
      },
      onHidden: function (element, ctx, scrollingElement) {
        element.style.opacity = 0;
        if (element.id % 2 == 0) {
          element.style.transform = "translateX(400%)";
        } else {
          element.style.transform = "translateX(-400%)"; // Slide back to the left
        }
      },
    });
  }, []);

  function animationFunction() {
    // $(target)
    //   .css({
    //     opacity: 0,
    //   })
    //   .animate(
    //     {
    //       opacity: 1,
    //     },
    //     3000
    //   );
    alert("hi");
    console.log("demn");
  }

  const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

  return (
    
    <section>
      <div className="text-white max-md:py-8">
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
            <p className="ml-2 uppercase tracking-loose shiny-text ">
              Godspeed Randomize
            </p>
            <p className=" text-3xl md:text-6xl leading-normal md:leading-relaxed mb-2 font-zain shiny-text Events">
              Events-di-Timeline
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4 text-center">
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
          
          <div className="ml-0 lg:w-full">{/* changed lg:w-3/3 */}
            <div className="container w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full rounded-[40px]">
                {!isSmallDevice ?(
                  <div>
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
                </div>): null }

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
                {/*Gradient pattern ends */}{/*7*/}
                
                {events.map ((event, index) => (
                  <div>
                    {!isSmallDevice ? (
                      (index<7 ? (
                      (index%2==0 ? (
                      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full ">
                      <div className="order-1 w-[45%] h-full flex justify-start max-md:ml-5">
                        <h1 className="text-gray-400 text-5xl font-bold max-md:text-xl ">
                          {event.title}
                        </h1>
                      </div>

                      <div
                        className="order-1 w-[45%] text-left shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] flex items-center max-sm:flex-col transform opacity-0 EventsCard"
                        id={event.id}
                        onClick={handleClick}
                      >
                        <div className={`order-1 m-0 h-[100%] w-1/2 max-sm:order-1 max-sm:mt-8 eventsImage${event.id}`}>
                          <img className="object-fill" src={event.image} />
                        </div>
                        <div className={`w-1/2 max-sm:pl-1 max-sm:order-2 flex justify-center flex-col items-center eventsDate${event.id}`}>
                          <p className="mb-3 max-lg:mb-5 text-3xl max-lg:text-base text-black font-zain eventsHeading">
                            {event.date}
                          </p>
                          
                        </div>
                        <div className={`eventsDescp${event.id} p-[10%] max-lg:p-8`} >
                          <p className="text-xl max-lg:text-xs leading-snug text-gray-800 text-opacity-100">
                            {event.description}
                          </p>
                        </div>
                      </div>
                  </div>
                    ): (
                      <div className="mb-8 flex justify-between items-center w-full">
                    <div className="order-1 w-[45%] h-full flex justify-end pl-60 pr-0 mr-10 max-lg:pl-0">
                      <h1 className="text-gray-400 text-5xl font-bold max-md:text-xl">
                        {event.title}
                      </h1>
                    </div>
                    <div
                      className="order-1 w-[45%] gap-10 text-left bg-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] flex items-center max-sm:flex-col EventsCard"
                      id={event.id}
                      onClick={handleClick}
                    >
                      <div className={`m-0 h-[100%] w-1/2 max-sm:order-1 max-sm:mt-8 eventsImage${event.id}`}>
                        <img
                          className="object-fill"
                          src={event.image}
                        />
                      </div>
                      <div className={`w-1/2 max-sm:pl-1 max-sm:order-2 flex justify-center flex-col items-center eventsDate${event.id}`}>
                        <p className="mb-3 max-lg:mb-5 text-3xl max-lg:text-base text-black font-zain eventsHeading">
                          {event.date}
                        </p>
                        
                      </div>
                      <div className={`eventsDescp${event.id} p-[10%] max-lg:p-8`}>
                        <p className="text-xl max-lg:text-xs leading-snug text-gray-800 text-opacity-100">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                    ))
                    ): null)
                    ):  
                    <div id="example">
                      
                <EventCard key={event.id} event={event} id={event.id} />
            
            
            <motion.div className="progress" style={{ scaleX }} />
            <StyleSheet />
        </div>
                  }                            
                  </div>

                ))}
                
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

                {events.map ((event, index) => (
                  <div>
                    {
                    !isSmallDevice ? (
                    (index>=7 ? (
                      (index%2==0 ? (
                      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
                      <div className="order-1 w-[45%] h-full flex justify-start max-md:ml-5">
                        <h1 className="text-gray-400 text-5xl font-bold max-md:text-xl ">
                          {event.title}
                        </h1>
                      </div>

                      <div
                        className="order-1 w-[45%] text-left bg-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] flex items-center max-sm:flex-col transform opacity-0 EventsCard"
                        id={event.id}
                        onClick={handleClick}
                      >
                        <div className={`order-1 m-0 h-[100%] w-1/2 max-sm:order-1 max-sm:mt-8 eventsImage${event.id}`}>
                          <img className="object-fill" src={event.image} />
                        </div>
                        <div className={`w-1/2 max-sm:pl-1 max-sm:order-2 flex justify-center flex-col items-center eventsDate${event.id}`}>
                          <p className="mb-3 max-lg:mb-5 text-3xl max-lg:text-base text-black font-zain eventsHeading">
                            {event.date}
                          </p>
                          
                        </div>
                        <div className={`eventsDescp${event.id} p-[10%] max-lg:p-8`} >
                          <p className="text-xl max-lg:text-xs leading-snug text-gray-800 text-opacity-100">
                            {event.description}
                          </p>
                        </div>
                      </div>
                  </div>
                    ): (
                      <div className="mb-8 flex justify-between items-center w-full">
                    <div className="order-1 w-[45%] h-full flex justify-end pl-60 pr-0 mr-10 max-lg:pl-0">
                      <h1 className="text-gray-400 text-5xl font-bold max-md:text-xl">
                        {event.title}
                      </h1>
                    </div>
                    <div
                      className="order-1 w-[45%] gap-10 text-left bg-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] flex items-center max-sm:flex-col EventsCard"
                      id={event.id}
                      onClick={handleClick}
                    >
                      <div className={`m-0 h-[100%] w-1/2 max-sm:order-1 max-sm:mt-8 eventsImage${event.id}`}>
                        <img
                          className="object-fill"
                          src={event.image}
                        />
                      </div>
                      <div className={`w-1/2 max-sm:pl-1 max-sm:order-2 flex justify-center flex-col items-center eventsDate${event.id}`}>
                        <p className="mb-3 max-lg:mb-5 text-3xl max-lg:text-base text-black font-zain eventsHeading">
                          {event.date}
                        </p>
                        
                      </div>
                      <div className={`eventsDescp${event.id} p-[10%] max-lg:p-8`}>
                        <p className="text-xl max-lg:text-xs leading-snug text-gray-800 text-opacity-100">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                    ))
                    ): null)
                  ): null }                                  
                  </div>

                ))}

                {}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>


  );
};

export default Events;

function StyleSheet() {
  return (
      <style>{`
       html {
          scroll-snap-type: y mandatory;
      }

      .img-container {
          height: auto;
          scroll-snap-align: start;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
      }
          .img-container h2 {
          color:rgb(85, 195, 238);
          margin: 0;
          // font-family: JetBrains Mono, monospace;
          
          font-weight: 700;
          letter-spacing: -3px;
          line-height: 1.2;
          position: absolute;
          display: inline-block;
          top: calc(50% - 25px);
          left: calc(50% + 50px);
      }

      @media (max-width: 500px) {
          .img-container > div {
              width: vw;
              height: auto;
          }

          .img-container img {
              width: 150px;
              height: 200px;
          }

          .img-container h2 {
              
      }

      .progress {
          position: fixed;
          left: 0;
          right: 0;
          height: 5px;
          background:rgb(85, 195, 238);
          bottom: 50px;
          transform: scaleX(0);
      }
  `}</style>
  )
}
