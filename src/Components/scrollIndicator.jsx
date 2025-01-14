import React, { useEffect, useState } from "react";

const ScrollPipe = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollHeight(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-pipe-container">
      <div
        className="scroll-pipe"
        style={{
          height: `${scrollHeight}%`,
        }}
      ></div>
    </div>
  );
};

export default ScrollPipe;
