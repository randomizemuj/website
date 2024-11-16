import LiveProjectsData from "../Data/LiveProjectsData.jsx";
import PassionProjectsData from "../Data/PassionProjectsData.jsx";
import { useEffect, useRef } from "react";

function Projects() {
  const sectionRef1 = useRef("");
  const sectionRef2 = useRef("");
  useEffect(() => {
    //Previous logic
    // $(document).scroll(function() {
    //   var scrollTop = $(this).scrollTop();
    //   console.log("Scroll position inside div: " + scrollTop)

    //     if(scrollTop>1900){
    //       $('.projects-card').css({
    //         'display': 'grid',
    //         'opacity': 0,
    //         'right': '-200px'
    //       }).animate({
    //         right: '0px',
    //         opacity: 1
    //       }, 1000);
    //     }

    //     if(scrollTop>2500){
    //       $('.liveProjects-card').css({
    //         'display': 'grid',
    //         'opacity': 0,
    //         'right': '-200px'
    //       }).animate({
    //         right: '0px',
    //         opacity: 1
    //       }, 1000);
    //     }
    //   });

    //New logic using Intersection observer whatever api. Belive it or not chatgpt was barely involved
    const isSmallDevice = window.innerWidth <= 640;

    const sections = [sectionRef1.current, sectionRef2.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef1.current) {
              liveProjectAnimation();
            } else if (entry.target === sectionRef2.current) {
              passionProjectAnimation();
            }
          }
        });
      },
      {
        threshold: isSmallDevice ? 0.3 : 0.6,
        rootMargin: isSmallDevice ? "0px 0px -20% 0px" : "0px",
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });
  }, []);

  function liveProjectAnimation() {
    $(".liveProjects-card")
      .css({
        display: "grid",
        opacity: 0,
        right: "-200px",
      })
      .animate(
        {
          right: "0px",
          opacity: 1,
        },
        1000
      );
  }
  function passionProjectAnimation() {
    $(".passionProjects-card")
      .css({
        display: "grid",
        opacity: 0,
        right: "-200px",
      })
      .animate(
        {
          right: "0px",
          opacity: 1,
        },
        1000
      );
  }

  return (
    <div
      className="bg-black py-10 sm:py-14 max-sm:mb-[15%] h-auto"
      id="our-projects"
    >
      {/* Live Projects */}
      <div
        ref={sectionRef1}
        className=" max-md:h-[60vh] max-sm:h-auto max-sm:mb-40 max-lg:mb-[45%] h-screen w-screen px-6 lg:px-10 max-lg:h-[40vh] projects-container"
      >
        <div className="h-[80%] lg:h-[65%] max-sm:h-auto bg-gray-600 flex sm:justify-center items-center max-sm:flex-col shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] backdrop-blur-[10px] overflow-hidden max-sm:pt-1 max-sm:flex-wrap live-card">
          <div className="max-w-2xl w-[30%] max-sm:w-full text-center mb-6 max-sm:order-1 max-sm:mt-8 max-sm:mb-10 projectsHeading-container">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl max-sm:text-4xl font-bold tracking-tight text-gray-800  max-sm:mt-6 hover:animate-pulse hover:cursor-default font-zain projectsHeading">
              Live
              <br /> Projects
            </h2>
          </div>

          <div className="mt-16 pr-6 pb-14 grid max-w-2xl auto-rows-fr grid-cols-[20vw,20vw,20vw] grid-rows-1 gap-10 max-sm:gap-5 max-sm:pl-6 lg:mx-0 lg:max-w-none px-2 max-sm:grid-cols-1 max-sm:grid-rows-[auto] max-sm:w-full max-sm:mt-0 max-sm:order-2 liveProjects-card">
            {LiveProjectsData.map((post) => (
              <article
                key={post.id}
                className="relative flex flex-col justify-end overflow-hidden rounded-2xl  px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-transform duration-300 sm:hover:scale-125 hover:opacity-75 row-span-1 max-sm:w-full max-sm:h-[1%] "
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 z-0 h-full w-full object-cover max-sm:h-full"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <h3 className="mt-3 text-lg z-10 font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
      {/* Passion Projects real */}
      <div
        ref={sectionRef2}
        className="max-lg:h-[100vh] max-md:h-[80vh] max-sm:h-auto h-screen w-screen px-6 lg:px-10 projects-container"
      >
        <div className="h-[80%] lg:h-[65%] max-sm:h-auto bg-gray-600 flex sm:justify-center items-center max-sm:flex-col shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] backdrop-blur-[10px] overflow-hidden max-sm:pt-1 max-sm:flex-wrap passion-card">
          <div className="max-w-2xl w-[30%] max-sm:w-full text-center mb-6 max-sm:mb-4 max-sm:order-1 max-sm:mt-8 projectsHeading-container">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl max-sm:text-4xl font-bold tracking-tight text-gray-800 max-sm:mt-6 hover:animate-pulse hover:cursor-default font-zain projectsHeading">
              Passion
              <br /> Projects
            </h2>
          </div>

          <div className="mt-16 pr-6 pb-14 grid max-w-2xl auto-rows-fr grid-cols-[20vw,20vw,20vw] grid-rows-1 gap-10 max-sm:gap-5 max-sm:pl-6 lg:mx-0 lg:max-w-none px-2 max-sm:grid-cols-1 max-sm:grid-rows-[auto] max-sm:w-full max-sm:mt-0 max-sm:order-2 passionProjects-card">
            {PassionProjectsData.map((post) => (
              <article
                key={post.id}
                className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-transform duration-300 hover:scale-125 hover:opacity-75 row-span-1 max-sm:w-full max-sm:h-[1%]"
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 z-0 h-full w-full object-cover max-sm:h-full"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <h3 className="mt-3 text-lg z-10 font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Passion Projects */}
      {/* <div ref={sectionRef2} className="h-screen w-screen px-6 lg:px-10 flex justify-center items-center max-sm:flex-col max-lg:h-[1000px] max-lg:mt-10 projects-container">
          <div className="h-[80vh] max-sm:h-auto bg-gray-100 flex justify-center items-center max-sm:flex-col shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-[40px] backdrop-blur-[10px] overflow-hidden max-sm:pt-1 max-sm:flex-wrap max-lg:h-[700px] passion-card">
  
    
            <div className="max-w-2xl w-[50%] max-sm:w-full text-center mb-6 max-sm:mb-4 max-sm:order-1 projectsHeading-container">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-8xl max-sm:text-4xl hover:animate-pulse hover:cursor-default projectsHeading">
                Passion Projects
              </h2> 
            </div>
  
            
            <div className="mt-16 pr-6 pb-14 grid max-w-2xl auto-rows-fr sm:grid-cols-[250px,250px,250px] sm:grid-rows-1 gap-10 lg:mx-0 lg:max-w-none px-2 max-sm:grid-cols-1 max-sm:grid-rows-[auto] max-sm:w-full max-sm:order-2 passionProjects-card">
              {PassionProjectsData.map((post) => (
                <article
                  key={post.id}
                  className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-transform duration-300 hover:scale-125 hover:opacity-75 max-sm:w-full max-sm:pt-[50vh]"
                >
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 z-0 h-full w-full object-cover max-sm:h-[50vh]"
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                  <h3 className="mt-3 text-lg z-10 font-semibold leading-6 text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div> */}
    </div>
  );
}

export default Projects;
