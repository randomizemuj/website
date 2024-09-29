import Core2024 from "../Data/Core/Core2024.jsx";
import Exec2024 from "../Data/Exec/Exec2024.jsx";
import TeamCard from "../Components/TeamCard.jsx";
import Exec2023 from "../Data/Exec/Exec2023.jsx";
import Core2023 from "../Data/Core/Core2023.jsx";
import { useState } from "react";
import FacultyList from "../Data/Faculty/Faculty.jsx";

export default function Teams() {
  const [selectYear, setSelectYear] = useState("2024");
  return (
    <>
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
            <div className=" text-center inline-block gap-7 px-5" key="index">
              <div className="flex place-content-center mb-2">
                <img src={list.imageUrl} className=" rounded-full h-24 w-24" />
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
          <div className="bg-black  pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto  lg:mx-0 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Executive Team
                </h2>
              </div>
              <div className="flex flex-wrap justify-center py-5">
                {Exec2024.map((data) => (
                  <TeamCard
                    key={data.id}
                    name={data.name}
                    position={data.role}
                    linkdn={data.linkedinUrl}
                    imgSrc={data.imageUrl}
                    github={data.github}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////// CORE ////////////////////////////////////////////////////////////////////  */}

          <div className="bg-black py-24 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto  lg:mx-0 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Core Team
                </h2>
              </div>

              <div className="flex justify-center flex-wrap py-7">
                {Core2024.map((data) => (
                  <TeamCard
                    key={data.id}
                    name={data.name}
                    position={data.role}
                    linkdn={data.linkedinUrl}
                    imgSrc={data.imageUrl}
                    github={data.github}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* /////////////////////////////////2023//////////////////////////// */}

      {selectYear == "2023" && (
        <div className="">
          <div className="bg-black  pb-16 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto  lg:mx-0 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Executive Team
                </h2>
              </div>
              <div className="flex flex-wrap justify-center py-5">
                {Exec2023.map((data) => (
                  <TeamCard
                    key={data.id}
                    name={data.name}
                    position={data.role}
                    linkdn={data.linkedinUrl}
                    imgSrc={data.imageUrl}
                    github={data.github}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////// CORE ////////////////////////////////////////////////////////////////////  */}

          <div className="bg-black py-24 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto  lg:mx-0 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Core Team
                </h2>
              </div>

              <div className="flex justify-center flex-wrap py-7">
                {Core2023.map((data) => (
                  <TeamCard
                    key={data.id}
                    name={data.name}
                    position={data.role}
                    linkdn={data.linkedinUrl}
                    imgSrc={data.imageUrl}
                    github={data.github}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
