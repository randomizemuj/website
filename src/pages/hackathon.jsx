import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "tailwindcss/tailwind.css";
import "@fontsource/press-start-2p";
import { FaClock, FaLightbulb, FaCodeBranch, FaRocket, FaClipboardList } from "react-icons/fa";



const timeline = [
  {
    title: "Registration & Check-in",
    time: "07:30 PM – 09:30 PM",
    description: "Teams arrive and register at Randomize Desk.",
    icon: <FaClipboardList />
  },
  {
    title: "Problem Statement Release",
    time: "09:30 PM - 10:00 PM",
    description: "Problem statements are released. Teams fill initial form.",
    icon: <FaLightbulb />
  },
  {
    title: "Finalize Problem Statement",
    time: "10:00 PM - 12:00 AM",
    description: "Teams finalize their chosen problem.",
    icon: <FaCodeBranch />
  },
  {
    title: "PPT Submission & Tech Stack Selection",
    time: "12:00 AM - 10:00 AM",
    description: "Submit PPT, choose tech stack, create GitHub repo, fill Google Form (live at 8:00 AM).",
    icon: <FaClipboardList />
  },
  {
    title: "Break & Round 1 Result",
    time: "10:00 AM - 12:00 PM",
    description: "Rest period and Round 1 results announced.",
    icon: <FaClock />
  },
  {
    title: "Report to College",
    time: "12:00 PM - 01:00 PM",
    description: "Participants report back to the venue.",
    icon: <FaRocket />
  },
  {
    title: "Coding Begins",
    time: "01:00 PM - 08:00 PM",
    description: "Teams develop their prototypes with mentor support.",
    icon: <FaCodeBranch />
  },
  {
    title: "Break & Round 2 Result",
    time: "08:00 PM - 10:00 PM",
    description: "Rest period and Round 2 results announced.",
    icon: <FaClock />
  },
  {
    title: "Project Completion (Online)",
    time: "10:00 PM - 11:00 AM",
    description: "Complete and polish the project online.",
    icon: <FaCodeBranch />
  },
  {
    title: "Break & Round 3 Result",
    time: "11:00 AM - 12:00 PM",
    description: "Rest and Round 3 results announced.",
    icon: <FaClock />
  },
  {
    title: "Final Pitching to Judges",
    time: "12:00 PM - 02:00 PM",
    description: "Top teams pitch with a live demo (7-10 min each).",
    icon: <FaRocket />
  },
  {
    title: "Judges’ Deliberation",
    time: "02:00 PM - 03:00 PM",
    description: "Judges decide the final winners.",
    icon: <FaClock />
  },
  {
    title: "Closing Ceremony",
    time: "03:00 PM - 03:30 PM",
    description: "Winners announced and hackathon closes.",
    icon: <FaRocket />
  }
];


const rules = [
  "Open to all college students, with teams of 1-4 members.",
  "All participants must register before the deadline.",
  "Only shortlisted teams will qualify for the coding round.",
  "Participants must maintain professional behavior and respect fellow competitors, mentors, and judges.",
  "Plagiarism, cheating, or misconduct will result in immediate disqualification.",
  "Teams retain ownership of their projects but must build them from scratch during the hackathon.",
  "Use of paid APIs or software is prohibited (Open Source allowed).",
  "Judges’ decisions are final and binding."
];

const criteria = [
  "Presentation & Communication",
  "Impact & Potential",
  "User Experience & Design",
  "Technical Execution",
  "Originality & Creativity"
];


export default function Hackathon() {
  const [scrollY, setScrollY] = useState(0);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen text-neon-green mx-5">
      {/* Landing Page */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-10 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-4xl md:text-6xl font-bold glitch-text hacker-color"
          >
            <Typewriter words={["HACKATHON 2.0"]} cursor cursorStyle="_" loop={1} />
          </motion.h1>
          <div className="mt-6 text-xs max-sm:text-[0.6rem] md:text-sm max-w-md glitch-effect hacker-color">
            <Typewriter
              words={["WELCOME TO THE SECOND EDITION OF HACKATHON RANDOMIZE. WHERE CODE BENDS, ALGORITHMS EVOLVE, AND INNOVATION BREAKS ALL LIMITS. THIS ISN’T JUST A CHALLENGE—IT’S A BATTLEFIELD FOR FULL STACK ARCHITECTS AND MACHINE LEARNING TACTICIANS. ENCRYPTION MEETS DISRUPTION, LOGIC COLLIDES WITH CREATIVITY. GUIDED BY MENTORS, POWERED BY COLLABORATION, FUELED BY PURE PROBLEM-SOLVING. NO RULES, JUST POSSIBILITIES. THE SYSTEM IS WAITING. EXECUTE."]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={0}
            />
          </div>
        </div>

        <motion.img
          src="/HACKATHON.png"
          alt="Hackathon Poster"
          className="w-full md:w-[40%] max-h-[60vh] object-contain mt-10 md:mt-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        />
      </section>

      {/* Scrolling Triggered Event Details */}

      {/*
      
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center p-10 bg-gradient-to-b from-black to-gray-900"
        initial={{ opacity: 0, y: 100 }}
        animate={scrollY > 200 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold font-hacker hacker-color">EVENT DETAILS</h2>
        <p className="mt-4 text-sm md:text-lg max-w-2xl text-center hacker-color">Join the ultimate coding battle in a 24-hour challenge. Solve real-world problems and claim glory!</p>
        <div className="flex flex-row">
            <motion.a
                href="/problem-statement.pdf"
                download
                className="mt-6 px-6 py-3 text-lg font-bold bg-[#D2F589] text-black rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-neon-green"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                Download Problem Statement
            </motion.a>
            <motion.a
                href="/forms.com"
                download
                className="mt-6 mx-10 px-6 py-3 text-lg font-bold bg-[#D2F589] text-black rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-neon-green"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                Sign Up
            </motion.a>
        </div>
        

        
      <button
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        className="mt-6 px-6 py-3 text-lg font-bold bg-gray-800 hacker-color rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        {isAccordionOpen ? "Hide More Details" : "View More Details"}
      </button>

      {isAccordionOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
          className="mt-4 p-6 w-full max-w-3xl bg-gray-900 text-sm md:text-base rounded-lg overflow-y-auto max-h-[50vh] hacker-color"
        >
          <p>The Hackathon Randomize will take place on 7th February with the following schedule:</p>
          <p>🔹 2:30 PM – 4:00 PM: Registrations & team assignments</p>
          <p>🔹 4:00 PM – 5:30 PM: Hackathon begins</p>
          <p>🔹 5:30 PM – 6:00 AM: Round 1 (PPT + MVP submission)</p>
          <p>🔹 8:00 AM – 2:30 PM: Round 2 (Final product submission)</p>
          <br />
          <p>Domains & Structure
            Participants can choose from Full Stack Development or Machine Learning.</p>
          <p>🔹 Mentors from JWT available every 2 hours</p>
          <p>🔹 Teams of 1-4 members</p>
          <p>🔹 Entry fee: Rs. 75 (Free for Randomize members)</p>
          <br />
          <p>Logistics & Prizes</p>
          <p>🔹 Mentors from JWT available every 2 hours</p>
          <p>🔹 Teams of 1-4 members</p>
          <p>🔹 Entry fee: Rs. 75 (Free for Randomize members)</p>
          <br />
          <p>Guidelines</p>
          <p>🔹 Register on time (2:30 PM – 4:00 PM)</p>
          <p>🔹 Choose a problem statement from the given domains</p>
          <p>🔹 Submit the required deliverables for each round</p>
          <p>🔹 Use mentorship wisely and respect event rules</p>
          <p>🔹 Maintain professionalism throughout the event</p>
        </motion.div>
      )}
    </motion.section>
    */}

      <div className="min-h-screen bg-black hacker-color p-6 font-mono">
        <h1 className="sticky top-0 z-10 bg-black/90 backdrop-blur-md text-4xl text-center mb-4 border-b-2 border-green-500 pb-4">
          Randomize Hackathon 2.0 Timeline
        </h1>

        <div className="flex justify-center mb-10">
          <button className="relative px-6 py-2 bg-gradient-to-br from-green-700 to-green-500 text-black font-bold border border-green-400 rounded-xl shadow hover:from-green-600 hover:to-green-400 transition">
            <span className="animate-pulse">📥 Problem Statements - Available Soon..</span>
          </button>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="bg-green-950/30 backdrop-blur-md rounded-xl p-4 shadow-lg hover:shadow-green-700 transition border-l-4 border-green-500 pl-6 relative"
            >
              <div className="absolute left-[-30px] top-4 hacker-color-400 text-lg">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold hacker-color">{item.title}</h2>
              <p className="text-sm hacker-color">{item.time}</p>
              <p className="text-base hacker-color mt-1">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <h2 className="text-3xl font-bold hacker-color mb-4 border-b border-green-500 pb-2">
            Hackathon Rules & Guidelines
          </h2>
          <ul className="list-disc pl-6 space-y-2 hacker-color">
            {rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold hacker-color mt-12 mb-4 border-b border-green-500 pb-2">
            Judging Criteria
          </h2>
          <ul className="list-disc pl-6 space-y-2 hacker-color">
            {criteria.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <footer className="text-center mt-20 text-sm hacker-color border-t border-green-600 pt-4">
          Made with 💻 by Randomize Team | © 2025
        </footer>
      </div>

    </div >
  );
}
