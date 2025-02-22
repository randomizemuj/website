const team = [
  {
    name: "Krish Goel",
    role: "Project Lead/Founder",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738162708/Website/Projects%20team/Odysseus/Krish-Goel_xehjuv.jpg",
  },
  {
    name: "Aditya Punmiya",
    role: "Project Co-Lead",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738162713/Website/Projects%20team/Odysseus/Aditya_yo78ag.webp",
  },
  {
    name: "Dhruv Bansal",
    role: "Team Head",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738162765/Website/Projects%20team/Odysseus/Dhruv_pprqj2.jpg",
  },
  {
    name: "Aviral Gupta",
    role: "Team Leader",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738162773/Website/Projects%20team/Odysseus/Aviral_jnrpai.jpg",
  },
  {
    name: "GARVIT ARORA",
    role: "Hardware and robotics",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738162796/Website/Projects%20team/Odysseus/Garvit_obqmwr.png",
  },
  {
    name: "Shresth Shroff ",
    role: "Electrical and Mechanical Head",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738162800/Website/Projects%20team/Odysseus/Shresth_zrrcor.jpg",
  },
  {
    name: "Siddharth Singhal",
    role: "Circuitry and Robotics ",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738162823/Website/Projects%20team/Odysseus/Siddharth_kq4y4i.jpg",
  },
  {
    name: "Savir Sharma ",
    role: "Software Team Lead",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738162829/Website/Projects%20team/Odysseus/Savir_u20tzk.jpg",
  },
  {
    name: "Mahadevan K S",
    role: "Circuitry, Robotics, Maze Building",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738162836/Website/Projects%20team/Odysseus/Mahadevan_rtyy2j.jpg",
  },
  {
    name: "Garv Kundnani",
    role: "Algorithms & AI, Documentation & Logistics",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738162849/Website/Projects%20team/Odysseus/Garv_p1brx2.jpg",
  },
  {
    name: "Sudiksha Mathpal",
    role: "Algorithms team, Logistics team",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738162857/Website/Projects%20team/Odysseus/Sudiksha_nzqlxh.jpg",
  },
];

export default function Odysseus() {
  return (
    <div className="bg-black">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-black lg:block "
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex"></div>
                <h1 className="text-4xl font-bold tracking-tight text-[#F4EFE8] sm:text-6xl">
                  Odysseus
                </h1>
                <p className="mt-6 text-lg leading-8 text-[#BCD3E8]">
                  Introducing our first live project: Odysseus. An autonomous
                  maze solving robot.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/odysseus.jpg"
            alt=""
          />
        </div>
      </div>
      <main className="isolate">
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-white [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <svg x="50%" y={-1} className="overflow-visible fill-black">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-[#F4EFE8] sm:text-6xl">
                    What is Odysseus?
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-[#BCD3E8] sm:max-w-md lg:max-w-none">
                    Introducing our first live project: Odysseus. An autonomous
                    maze solving robot. This project combines cyber physical
                    systems with artificial intelligence, and we could not be
                    more stoked to build it.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/odysseus.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/odysseus.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/odysseus.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/odysseus.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/odysseus.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-[#F4EFE8] sm:text-4xl">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-[#BCD3E8]">
                  Our mission with Project Odysseus is to pioneer the
                  integration of cyber physical systems and artificial
                  intelligence in creating an autonomous maze-solving robot. By
                  pushing the boundaries of current technology, we aim to
                  develop a sophisticated robot that can navigate complex
                  environments independently. This project will not only
                  demonstrate the potential of AI-driven robotics but also serve
                  as a testament to our commitment to innovation and excellence
                  in the field of robotics and artificial intelligence.
                </p>
                <div className="mt-10  mx-auto max-w-xl text-base leading-7 text-[#BCD3E8]">
                  <p>
                    We strive to leverage the latest advancements in machine
                    learning, sensor technology, and algorithm design to build a
                    robot capable of real-time decision-making and adaptability.
                    Project Odysseus is designed to simulate real-world
                    applications where autonomous navigation is crucial, such as
                    search and rescue missions, exploration of hazardous
                    environments, and automated logistics. Through this project,
                    we aim to showcase how intelligent systems can be applied to
                    solve practical problems, enhancing efficiency and safety in
                    various industries.
                  </p>
                  <p className="mt-10">
                    Ultimately, our goal is to inspire and educate the next
                    generation of engineers and technologists. By sharing our
                    journey and the knowledge we gain from Project Odysseus, we
                    hope to foster a deeper understanding and appreciation of
                    the potential of AI and robotics. We are committed to
                    contributing to the broader technological community,
                    encouraging innovation, and promoting the development of
                    smart, autonomous systems that can make a positive impact on
                    society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8 pb-10">
          <div className="mx-auto ">
            <h2 className="text-3xl font-bold tracking-tight text-[#F4EFE8] sm:text-4xl">
              Our team
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img
                  className="mx-auto h-24 w-24 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-[#BCD3E8]">
                  {person.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
