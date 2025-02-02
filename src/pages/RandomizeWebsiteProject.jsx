const team = [
  {
    name: "Siddharth Singhal",
    role: "Project Lead",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163574/Website/Projects%20team/Randomize%20website/siddharth_mlfhw3.jpg",
  },
  {
    name: "Krish Goel",
    role: "Technical Advisor",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163580/Website/Projects%20team/Randomize%20website/Krish-Goel_b5djvn.jpg",
  },
  {
    name: "Aditya Punmiya",
    role: "Technical Advisor",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163585/Website/Projects%20team/Randomize%20website/Aditya_d8afmr.webp",
  },
  {
    name: "Kashika Bhardwaj",
    role: "Frontend Developer/Content Team",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163593/Website/Projects%20team/Randomize%20website/Kashika_t63xmz.jpg",
  },
  {
    name: "Kanishk Valechha",
    role: "Frontend Developer",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163603/Website/Projects%20team/Randomize%20website/Kanishk_spglww.jpg",
  },
  {
    name: "Harshada Chandel ",
    role: "Frontend Developer",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163609/Website/Projects%20team/Randomize%20website/Harshada_owguyz.jpg",
  },
  {
    name: "ROHIT GANGULY",
    role: "Frontend Developer",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163614/Website/Projects%20team/Randomize%20website/ROHIT_h0uymf.jpg",
  },
  {
    name: "Shubh Shrivastava",
    role: "Frontend Developer",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163625/Website/Projects%20team/Randomize%20website/Shubh_oeplvw.jpg",
  },
  {
    name: "Mohammed Iqbal Khan",
    role: "Frontend Developer",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163647/Website/Projects%20team/Randomize%20website/Mohd-Iqbal_gkbkiq.jpg",
  },
  {
    name: "Gayathri Ravindran",
    role: "Frontend Developer",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163637/Website/Projects%20team/Randomize%20website/Gayathri_krs6ug.jpg",
  },

  {
    name: "Sia asrani",
    role: "Content/Frontend Developer",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163667/Website/Projects%20team/Randomize%20website/Sia_bqjqce.jpg",
  },
  {
    name: "Garv Kundnani",
    role: "Frontend Developer",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163656/Website/Projects%20team/Randomize%20website/Garv_u8hayx.jpg",
  },
  {
    name: "Meenakshi Kumar ",
    role: "Frontend Developer",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163685/Website/Projects%20team/Randomize%20website/meenakshi_yd7cyh.jpg",
  },
  {
    name: "Vishesh Khadaria",
    role: "Content Team",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163678/Website/Projects%20team/Randomize%20website/vishesh_syr7bt.jpg",
  },
  {
    name: "Vedica saini",
    role: "Content Team",
    imageUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738163694/Website/Projects%20team/Randomize%20website/Vedica_d5al7j.jpg",
  },
];

export default function RandomizeWebsite() {
  return (
    <div className="bg-black">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-black lg:block"
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
                  Randomize Website
                </h1>
                <p className="mt-6 text-lg leading-8 text-[#BCD3E8]">
                  Randomize();, the computing club of Manipal University,
                  Jaipur, has strong backing from the Department of Computer
                  Science and Engineering.{" "}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/website.jpg"
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
                    What is Randomize Website?
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-[#BCD3E8] sm:max-w-md lg:max-w-none">
                    Randomize();, the computing club of Manipal University,
                    Jaipur, has strong backing from the Department of Computer
                    Science and Engineering. We've been a vibrant part of campus
                    life for quite some time now!{" "}
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/website.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/website.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/website.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/website.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/website.jpg"
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
                  At Randomize();, our mission is to foster a dynamic and
                  inclusive environment where students can explore and excel in
                  the ever-evolving field of computer science and engineering.
                  We strive to provide a platform for hands-on learning,
                  collaboration, and innovation, allowing our members to apply
                  theoretical knowledge to real-world problems. By organizing
                  workshops, hackathons, coding competitions, and guest
                  lectures, we aim to equip students with the skills and
                  experiences necessary to thrive in the tech industry and
                  academia alike.
                </p>
                <div className="mt-10  mx-auto max-w-xl text-base leading-7 text-[#BCD3E8]">
                  <p>
                    We are committed to nurturing a community where creativity
                    and curiosity are celebrated. Our club encourages students
                    to push the boundaries of their technical capabilities and
                    think outside the box. Through peer-to-peer learning and
                    mentorship programs, we help students develop not only their
                    technical skills but also their problem-solving abilities,
                    teamwork, and leadership qualities. We believe that by
                    fostering a collaborative and supportive environment, we can
                    inspire our members to achieve excellence and contribute
                    meaningfully to the technological advancements of the
                    future.
                  </p>
                  <p className="mt-10">
                    Moreover, Randomize(); is dedicated to bridging the gap
                    between academia and industry. By maintaining strong
                    connections with the Department of Computer Science and
                    Engineering at Manipal University, Jaipur, and partnering
                    with industry leaders, we provide our members with valuable
                    insights into the latest trends and technologies. This
                    symbiotic relationship ensures that our activities are
                    aligned with both academic objectives and industry demands,
                    preparing our members to become well-rounded professionals
                    who are ready to tackle the challenges of a rapidly changing
                    technological landscape.
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
