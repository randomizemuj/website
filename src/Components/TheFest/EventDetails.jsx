const features = [
  // {
  //   name: "Ideathon",
  //   description:
  //     "Ideathon was an offline pitch event held on 20th January 2024 from 3:00 PM to 8:00 PM. This event was designed to empower students to present groundbreaking ideas, fostering a culture of innovation and creativity within the technological landscape. Ideathon provided a platform for participants to showcase their skills, explore collaborative solutions, and engage in critical thinking.",
  //   imgUrl: "/Ideathon.jpeg",
  // },
  {
    name: "Hackathon (The Fest)",
    description:
      "The Hackathon (The Fest), held from 19th to 21st January 2024, was a 36-hour offline coding competition focused on web and app development. Running from 7:30 PM on the 19th to 1:00 PM on the 21st, the event saw 67 teams tackling problem statements in technologies like blockchain, web, and app development. With a ₹10,000 prize pool, the hackathon emphasized hands-on learning, mentorship, and collaboration, fostering innovation and enhancing participants' problem-solving and critical thinking skills",
    imgUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1737914588/Website/Events/fest_mbjr9x.jpg",
  },
  {
    name: "Cryptex",
    description:
      "Cryptex was an online cryptic hunt conducted over two days, from 20th to 21st January 2024, running continuously from 10:00 AM to 10:00 AM. This event was crafted to test and enhance participants' problem-solving abilities through a series of cryptic challenges and hidden clues. Cryptex focused on developing analytical and cognitive skills among participants.Cryptex successfully fostered technological and intellectual growth, encouraging participants to employ innovative thinking and collaborative problem-solving strategies.",
    imgUrl:
      "https://res.cloudinary.com/randomize/image/upload/v1738218211/Cryptex_xshkdm.jpg",
  },
];

export default function EventDetails() {
  return (
    <div
      className="bg-[#000000] py-14 sm:py-20 md:pb-44 grid place-content-center"
      id="planofaction"
    >
      <div className="mx-auto px-9">
        <div className="mx-auto lg:mx-0 flex justify-center">
          <p className="mt-2  text-4xl md:text-6xl font-bold tracking-tight text-white text-center">
            Events
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 text-base leading-7 text-[#dadada] sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-20">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-gradient-to-br from-[#537895] to-[#09203f] hover:bg-gradient-to-tl gap-6 hover:from-[#537895] hover:to-[#09203f] transition-all duration-500 ease-in-out p-5 rounded-3xl transform hover:-translate-y-2 hover:shadow-lg md:flex"
            >
              <div className="flex-1 self-center">
                <div className="flex mx-11 md:mx-0 justify-center md:h-full">
                  <img
                    src={feature.imgUrl}
                    alt={feature.name}
                    className="aspect-square  md:w-full md:h-max m-6"
                  />
                </div>
              </div>
              <div className="flex-1 self-center">
                {" "}
                <dt className="font-bold text-center text-lg md:text-xl text-white transition-all duration-500 ease-in-out">
                  {feature.name}
                </dt>
                <dd className="inline text-white/90 text-xs">
                  {feature.description}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
