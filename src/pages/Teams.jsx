import Core2024 from "../Data/Core/Core2024.jsx";
import Exec2024 from "../Data/Exec/Exec2024.jsx";
import TeamCard from "../Components/TeamCard.jsx";
import Exec2023 from "../Data/Exec/Exec2023.jsx";
import Core2023 from "../Data/Core/Core2023.jsx";
import { useState, useEffect } from "react";
import FacultyList from "../Data/Faculty/Faculty.jsx";
import { Fade } from "react-awesome-reveal";

export default function Teams() {
  useEffect(() => {
    window.scrollTo(0, 0);//resets the scrolling to the top of the page
  }, []);
  const [selectYear, setSelectYear] = useState("2024");
  return (
    <>
      <div className="md:mt-10 relative">
        {/* gradient background */}
        <div className="fixed inset-0">
          <div
            className="absolute inset-0 left-[calc(20%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(21%-18rem)] lg:left-48 lg:top-[calc(60%-30rem)] xl:left-[calc(30%-24rem)]"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#3a349f] opacity-30"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
        </div>

        {/* data */}
        <div className="relative">
          <div className="flex md:justify-end pt-24 px-10 md:px-20 mb-5">
            <form className="max-w-2xl ">
              <select
                name="year"
                id="year"
                onChange={(e) => setSelectYear(e.target.value)}
                className="bg-black border hover:bg-gray-900 border-gray-300 text-white text-sm md:text-lg rounded-lg block p-2  md:px-14 cursor-pointer  focus:outline-none"
              >
                <option value="2024">2024-2025</option>
                <option value="2023">2023-2024</option>
              </select>
            </form>
          </div>

          <div className="grid place-content-center mb-5">
            <h1 className="text-3xl font-bold text-white sm:text-4xl text-center">
              Faculty
            </h1>
            <div className="my-7 flex-wrap ">
              {FacultyList.map((list) => (
                <div
                  className=" text-center inline-block gap-7 px-5"
                  key="index"
                >
                  <div className="flex place-content-center mb-2">
                    <img
                      src={list.imageUrl}
                      className=" rounded-full h-24 w-24"
                    />
                  </div>
                  <div className="text-white">
                    <h1 className="text-lg font-semibold my-1">{list.name}</h1>
                    <h3 className="text-sm text-gray-300">{list.Position}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* //////////////////////////////2024/////////////////////// */}

          {selectYear == "2024" && (
            <div className="">
              <div className="  pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto  lg:mx-0 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Executive Team
                    </h2>
                  </div>
                  <div className="flex flex-wrap  justify-center py-5">
                    {Exec2024.map((data) => (
                      <Fade delay={100}>
                        <TeamCard
                          key={data.id}
                          name={data.name}
                          position={data.role}
                          linkdn={data.linkedinUrl}
                          imgSrc={data.imageUrl}
                          github={data.github}
                        />
                      </Fade>
                    ))}
                  </div>
                </div>
              </div>

              {/* //////////////////////////////////////////////////////////// CORE ////////////////////////////////////////////////////////////////////  */}

              <div className=" py-24 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto  lg:mx-0 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Core Team
                    </h2>
                  </div>

                  <div className="flex justify-center flex-wrap py-7">
                    {Core2024.map((data) => (
                      <Fade delay={100}>
                        <TeamCard
                          key={data.id}
                          name={data.name}
                          position={data.role}
                          linkdn={data.linkedinUrl}
                          imgSrc={data.imageUrl}
                          github={data.github}
                        />
                      </Fade>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* /////////////////////////////////2023//////////////////////////// */}

          {/* /////////////////Execs 2023///////////////////// */}

          {selectYear == "2023" && (
            <div className="">
              <div className="  pb-16 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto  lg:mx-0 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Executive Team
                    </h2>
                  </div>
                  <div className="flex flex-wrap justify-center py-5">
                    {Exec2023.map((data) => (
                      <Fade delay={100}>
                        <TeamCard
                          key={data.id}
                          name={data.name}
                          position={data.role}
                          linkdn={data.linkedinUrl}
                          imgSrc={data.imageUrl}
                          github={data.github}
                        />
                      </Fade>
                    ))}
                  </div>
                </div>
              </div>

              {/* //////////////////////////////////////////////////////////// CORE 2023 ////////////////////////////////////////////////////////////////////  */}

              <div className=" py-24 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto  lg:mx-0 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Core Team
                    </h2>
                  </div>

                  <div className="flex justify-center flex-wrap py-7">
                    {Core2023.map((data) => (
                      <Fade delay={100}>
                        <TeamCard
                          key={data.id}
                          name={data.name}
                          position={data.role}
                          linkdn={data.linkedinUrl}
                          imgSrc={data.imageUrl}
                          github={data.github}
                        />
                      </Fade>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
