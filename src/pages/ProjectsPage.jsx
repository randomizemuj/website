import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollOut from "scroll-out";
import LiveProjects from "../Data/LiveProjectsData";
import PassionProjects from "../Data/PassionProjectsData";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0); //resets the scrolling to the top of the page
    ScrollOut({
      onShown: function (element, ctx, scrollingElement) {
        if (element.classList.contains(".projectsPageHeading")) {
          // setTimeout(() => {
          element.style.opacity = 0;
          // }, 2000)

          // console.log(ctx.offsetY);
        } else {
          element.style.opacity = 1;
          element.style.transform = "translateX(0)"; // Slide to the original position
        }
      },
      onHidden: function (element, ctx, scrollingElement) {
        if (element.classList.contains(".projectsPageHeading")) {
          element.style.opacity = 1;
          // console.log(ctx.offsetY);
        } else {
          element.style.opacity = 0;
          element.style.transform = "translateX(-100%)"; // Slide back to the left
        }
      },
    });
  }, []);

  return (
    <div className="min-h-screen w-screen text-white py-12 relative overflow-hidden flex flex-wrap justify-center projectsPage">
      {/* Start of bg pattern */}
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
      {/* End of bg pattern */}

      <div className="container z-2  px-4 mt-10">
        <div className="centered pt-[] pb-[10%] ">
          <h1
            className="text-8xl font-bold text-center mb-12 font-zain opacity-0 transition-opacity duration-[2000ms] projectsPageHeading"
            data-scroll
          >
            Projects
          </h1>
          <p className="text-2xl flex justify-center font-zain projectsPageDesc">
            Browse through Randomize's rich inventory of projects. Click on any
            one to know more
          </p>
        </div>

        <section
          className="mb-16 flex flex-wrap justify-center transform -translate-x-full transition-all duration-[3000ms] ease-in-out"
          data-scroll
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 w-full pl-[30%] lg:pl-[40%] mb-[10vh] ">
            Live Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90vw] gap-8">
            {LiveProjects.map((project) => (
              <Link to={project.href} key={project.id}>
                <div
                  className="bg-gradient-to-br from-gray-900 to-gray-500 md:flex rounded-lg overflow-hidden shadow-lg transform transition duration-[3000ms] ease-in-out hover:scale-105"
                  data-scroll
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="md:w-[25vw] md:h-[30vh] lg:w-[50vw] lg:h-[55vh] object-cover"
                  />
                  <div className="p-4 lg:w-[70%] w-full  flex flex-wrap gap-10">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-l  font-bold">{project.description} </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section
          className="mb-16 flex flex-wrap justify-center transform -translate-x-full transition-all duration-[3000ms] ease-in-out"
          data-scroll
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 w-full pl-[30%] lg:pl-[40%] mb-[10vh] ">
            Passion Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90vw] gap-8">
            {PassionProjects.map((project) => (
              <Link to={project.href} key={project.id}>
                <div
                  className="bg-gradient-to-br from-gray-900 to-gray-500 md:flex rounded-lg overflow-hidden shadow-lg transform transition duration-[3000ms] ease-in-out hover:scale-105"
                  data-scroll
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="md:w-[25vw] md:h-[30vh] lg:w-[50vw] lg:h-[55vh] object-cover"
                  />
                  <div className="p-4 lg:w-[70%] w-full  flex flex-wrap gap-10">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-l  font-bold">{project.description} </p>
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
