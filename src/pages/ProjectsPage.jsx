// import { useEffect, useState, useRef } from "react";
// import LiveProjectsData from '../Data/LiveProjectsData.jsx';
// import PassionProjectsData from '../Data/PassionProjectsData.jsx';

// export default function Projects(){
//     useEffect(() =>{
//         setTimeout(function(){
//             opening()
//         }, 1000);
//         setTimeout(function(){
//             leave()
//         }, 4000);
//     }, []);

//     function leave(){
//         $('.projects').animate({
//             left: '-4000px',
//             opacity: 0.5
//         }, 2000);
//     }
//     function opening(){
//         $('.projects').css({
//             'display': 'grid',
//             'opacity': 0,
//             'top': '-200px',
//             'position': 'relative'
//         }).animate({
//             top: '0px',
//             opacity: 1
//         }, 1000);

//     }

//     return(
//        <div className="w-screen h-screen py-32 sm:py-16 flex justify-center items-center bg-black">
//         <img className="absolute opacity-50 z-0 h-screen w-screen" src="https://cdn.pixabay.com/photo/2020/04/12/20/37/abstract-5035778_1280.jpg" />

//         <div className="bg-black py-10 sm:py-14" id="our-projects">

//     </div>

//         <h1 className="absolute text-white py-16 text-3xl sm:text-6xl font-bold hover:animate-pulse z-50 projects">Projects</h1>

//     </div>
//     );

// };

import React from "react";
import { Link } from "react-router-dom";

const projects = {
  passion: [
    { id: 1, title: "QuillBot", image: "/quill.jpg", href: "/quill" }, //the coder is very VERYYYY hot  -coder's gf
    { id: 2, title: "Odysseus", image: "/odysseus.jpg", href: "/odysseus" },
    { id: 2, title: "Pathaan", image: "/pathaan.jpg", href: "/Pathaan" },
    // Add more passion projects here
  ],
  live: [
    {
      id: 1,
      title: "Randomize Website",
      image: "/website.jpg",
      href: "/randomize-website",
    },
    {
      id: 2,
      title: "Laxmi Chit Fund",
      image: "/laxmi.png",
      href: "/laxmiChitFund",
    },
    // Add more live projects here
  ],
};

const Projects = () => {
  return (
    <div className="min-h-screen text-white py-12">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>

        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>

        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>

      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl 
             sm:left-[calc(50%-14rem)] sm:w-[40rem] 
             md:left-[calc(50%-18rem)] md:w-[50rem] 
             lg:left-48 lg:top-[calc(50%-30rem)] lg:w-[60rem] 
             xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[60rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>

      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>

        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>

        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>

      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl 
             sm:left-[calc(50%-14rem)] sm:w-[40rem] 
             md:left-[calc(50%-18rem)] md:w-[50rem] 
             lg:left-48 lg:top-[calc(50%-30rem)] lg:w-[60rem] 
             xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[60rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 mt-10">
        <h1 className="text-8xl font-bold text-center mb-12 font-zain projectsPageHeading">
          Projects
        </h1>
        <p className="text-lg flex justify-center font-zain projectsPageDesc">
          Browse through Randomize's rich inventory of projects. Click on any
          one to know more
        </p>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Live Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.passion.map((project) => (
              <Link to={project.href}>
                <div
                  key={project.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>

          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>

          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          />
        </svg>

        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl 
                    sm:left-[calc(50%-14rem)] sm:w-[40rem] 
                    md:left-[calc(50%-18rem)] md:w-[50rem] 
                    lg:left-48 lg:top-[calc(50%-30rem)] lg:w-[60rem] 
                    xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[60rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>

        <section>
          <h2 className="text-3xl font-semibold mb-8">Passion Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.live.map((project) => (
              <Link to={project.href}>
                <div
                  key={project.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
