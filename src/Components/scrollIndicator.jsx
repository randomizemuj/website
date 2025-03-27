import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = ({ totalDays, dayHeight }) => {
  const { scrollYProgress } = useScroll(); // Hook to track scroll progress

  return (
    <div className="fixed top-0 left-8">
      {Array.from({ length: totalDays }).map((_, dayIndex) => {
        const start = dayIndex / totalDays;
        const end = (dayIndex + 1) / totalDays;

        // Calculate the height and opacity transform
        const heightTransform = useTransform(
          scrollYProgress,
          [start, end],
          [0, dayHeight]
        );
        const opacityTransform = useTransform(
          scrollYProgress,
          [start, start + 0.05],
          [0, 1]
        );

        return (
          <div
            key={dayIndex}
            style={{
              height: `${dayHeight}px`,
            }}
            className="relative overflow-hidden w-[2px] bg-gray-300"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-0 bg-gradient-to-t from-purple-500 via-blue-500 to-transparent"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ScrollIndicator;
