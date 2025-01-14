import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Timeline = () => {
  const containerRef = useRef(null);
  const dayRefs = useRef([]);
  const [dayHeights, setDayHeights] = useState([]);

  const eventData = [
    {
      day: "DAY 1",
      events: [
        {
          time: "01:00 PM",
          title: "Opening Ceremony",
          content:
            "Join us for the grand opening of our tech fest! Exciting speakers and performances await.",
        },
        {
          time: "07:30 PM",
          title: "Registration for Hackathon",
          content:
            "Get ready to code! Register for our 48-hour hackathon challenge.",
        },
        {
          time: "09:00 PM",
          title: "Hackathon Starts",
          content: "The hackathon begins! May the best coders win.",
        },
      ],
    },
    {
      day: "DAY 2",
      events: [
        {
          time: "10:00 AM",
          title: "Cryptex Starts",
          content:
            "Put your problem-solving skills to the test in our cryptography challenge.",
        },
        {
          time: "02:30 PM",
          title: "Registration for Ideathon",
          content:
            "Got a brilliant idea? Register for our ideathon and bring it to life!",
        },
        {
          time: "03:00 PM",
          title: "Ideathon Starts",
          content:
            "Let the brainstorming begin! Present your innovative ideas to our panel of judges.",
        },
        {
          time: "04:30 PM",
          title: "Round 1 Ends",
          content:
            "First round of the hackathon concludes. Good luck to all participants!",
        },
        {
          time: "05:00 PM",
          title: "Presentation Starts",
          content: "Teams present their projects to our esteemed judges.",
        },
        {
          time: "06:00 PM",
          title: "Result Announcement",
          content:
            "The moment of truth! Winners of various events will be announced.",
        },
      ],
    },
    {
      day: "DAY 3",
      events: [
        {
          time: "01:00 PM",
          title: "Hackathon Officially Ends",
          content:
            "The coding marathon comes to an end. Congratulations to all participants!",
        },
        {
          time: "06:00 PM",
          title: "Cultural Night",
          content:
            "Wrap up the fest with an evening of music, dance, and celebration.",
        },
      ],
    },
  ];

  useEffect(() => {
    if (dayRefs.current.length > 0) {
      const heights = dayRefs.current.map(
        (ref) => ref.getBoundingClientRect().height
      );
      setDayHeights(heights);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Tech Fest Timeline
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Experience three days of innovation, creativity, and technology at our
          annual tech fest.
        </p>
      </div>
      <div className="relative max-w-7xl mx-auto pb-20">
        {eventData.map((day, dayIndex) => (
          <div key={dayIndex} className="mb-16 relative">
            <div className="relative mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white py-2 px-4 inline-block relative z-10">
                {day.day}
              </h3>
            </div>
            <div
              ref={(el) => (dayRefs.current[dayIndex] = el)}
              className="relative"
            >
              {day.events.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className="flex justify-start pt-10 md:pt-20 md:gap-10"
                >
                  <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                    <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                    </div>
                    <h4 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500">
                      {event.time}
                    </h4>
                  </div>

                  <div className="relative pl-20 pr-4 md:pl-4 w-full">
                    <h4 className="md:hidden block text-lg mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                      {event.time}
                    </h4>
                    <h5 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-2">
                      {event.title}
                    </h5>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      {event.content}
                    </p>
                  </div>
                </div>
              ))}
              <DayBeam
                scrollYProgress={scrollYProgress}
                dayIndex={dayIndex}
                dayHeight={dayHeights[dayIndex]}
                totalDays={eventData.length}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DayBeam = ({ scrollYProgress, dayIndex, dayHeight, totalDays }) => {
  const start = dayIndex / totalDays;
  const end = (dayIndex + 1) / totalDays;

  const heightTransform = useTransform(
    scrollYProgress,
    [start, end],
    [0, dayHeight || 0]
  );
  const opacityTransform = useTransform(
    scrollYProgress,
    [start, start + 0.05],
    [0, 1]
  );

  return (
    <div
      style={{
        height: dayHeight + "px",
      }}
      className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
    >
      <motion.div
        style={{
          height: heightTransform,
          opacity: opacityTransform,
        }}
        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
      />
    </div>
  );
};

export default Timeline;
