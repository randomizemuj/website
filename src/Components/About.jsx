import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

// packages installed
// 1. npm install react-intersection-observer
// 2. npm i react-spring

const stats = [
  { name: "Current Members", value: 300 },
  { name: "Events conducted", value: 30 },
  { name: "Participants", value: 1000 },
];

function Number({ n, isVisible }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: isVisible ? n : 0,
    delay: 600,
    config: { duration: 6000 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      className="relative grid place-content-center isolate md:h-lvh overflow-hidden bg-black py-24 sm:py-32"
      id="about"
    >
      {/* <img
        src="/Gradient-1.png"
        alt="gradient background"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-10"
      /> */}
      {/* <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-10 lg:px-8 flex justify-center flex-col">
        <div className="mx-auto max-w-4xl lg:mx-0 text-center flex justify-center flex-col self-center gap-6">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About us
          </h2>
          <p className="mt-6 text-sm md:text-xl leading-8 text-gray-300 ">
            Welcome to Randomize();, the coding powerhouse of MUJ! We're a
            dynamic space to dive into coding, explore new tech, and sharpen
            your Computer Science skills. What sets us apart? Unique hackathons,
            industry mentorships, and innovative projects that turn ideas into
            real-world solutions. Our community of passionate coders, hackers,
            designers, and builders is dedicated to pushing the boundaries of
            technology. <br />
            <br />
            Experience the difference with Randomize();.
          </p>
        </div>
        <div className="mx-auto ">
          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div> */}
          <dl className="mt-16 grid grid-cols-1 gap-8 md:gap-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-sm md:text-lg leading-7 text-gray-300 text-center">
                  {stat.name}
                </dt>
                <dd className="text-[25px] md:text-[35px] font-semibold leading-9 tracking-tight text-white flex justify-center">
                  <Number n={stat.value} isVisible={inView} />+
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
