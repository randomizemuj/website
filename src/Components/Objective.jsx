//   import {
//     LifebuoyIcon,
//     NewspaperIcon,
//     PhoneIcon,
//   } from "@heroicons/react/20/solid";

// const cards = [
//   {
//     name: "Sales",
//     description:
//       "Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.",
//     icon: PhoneIcon,
//   },
//   {
//     name: "Technical Support",
//     description:
//       "Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
//     icon: LifebuoyIcon,
//   },
//   {
//     name: "Media Inquiries",
//     description:
//       "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
//     icon: NewspaperIcon,
//   },
// ];

export default function Objective() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our Objectives
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
           <div key="Sales" className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              {/* <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              /> */}
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">"Sales"</h3>
                <p className="mt-2 text-gray-300">"Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur."</p>
              </div>
            </div>

            <div key="Sales" className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              {/* <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              /> */}
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">"Sales"</h3>
                <p className="mt-2 text-gray-300">"Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur."</p>
              </div>
            </div>

            <div key="Sales" className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              {/* <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              /> */}
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">"Sales"</h3>
                <p className="mt-2 text-gray-300">"Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur."</p>
              </div>
            </div>

            <div key="Sales" className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              {/* <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              /> */}
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">"Sales"</h3>
                <p className="mt-2 text-gray-300">"Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur."</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}