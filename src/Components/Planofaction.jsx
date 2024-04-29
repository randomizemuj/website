// import {
//     ArrowPathIcon,
//     CloudArrowUpIcon,
//     Cog6ToothIcon,
//     FingerPrintIcon,
//     LockClosedIcon,
//     ServerIcon,
//   } from "@heroicons/react/20/solid";
  
//   const features = [
//     {
//       name: "Push to deploy.",
//       description:
//         "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
//       icon: CloudArrowUpIcon,
//     },
//     {
//       name: "SSL certificates.",
//       description:
//         "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
//       icon: LockClosedIcon,
//     },
//     {
//       name: "Simple queues.",
//       description:
//         "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.",
//       icon: ArrowPathIcon,
//     },
//     {
//       name: "Advanced security.",
//       description:
//         "Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.",
//       icon: FingerPrintIcon,
//     },
//     {
//       name: "Powerful API.",
//       description:
//         "Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.",
//       icon: Cog6ToothIcon,
//     },
//     {
//       name: "Database backups.",
//       description:
//         "Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.",
//       icon: ServerIcon,
//     },
//   ];
  
//   export default function Planofaction() {
//     return (
//       <div className="bg-[#000000] py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl lg:mx-0">
//             <h2 className="text-base font-semibold leading-7 text-indigo-400">
//               Randomize();
//             </h2>
//             <p className="mt-2 text-3xl font-bold tracking-tight text-[#dadada] sm:text-4xl">
//               Plan Of Action
//             </p>
//             <p className="mt-6 text-lg leading-8 text-[#dadada]">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
//               impedit perferendis suscipit eaque, iste dolor cupiditate
//               blanditiis.
//             </p>
//           </div>
//           <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-[#dadada] sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
//             {features.map((feature) => (
//               <div key={feature.name} className="relative pl-9">
//                 <dt className="inline font-semibold text-[#dadada]">
//                   <feature.icon
//                     className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
//                     aria-hidden="true"
//                   />
//                   {feature.name}
//                 </dt>{" "}
//                 <dd className="inline">{feature.description}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     );
//   }
  


import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Weekend Hacking Nights:.",
    description:
      "We plan to organize periodic group evening/night sessions focused on programming and learning together.",
    icon: ArrowPathIcon,
  },

  {
    name: "Mentorship Sessions:",
    description:
      "Expect to get mentored/advised by the people who once fought in the same trenches as you and are now where you want to be.",
    icon: FingerPrintIcon,
  },
  {
    name: "Building the \"Coding Culture\":",
    description:
      "Alongside Hacking Nights, we plan to organize competitive programming sessions to learn and immediately implement the newly acquired knowledge. The cool metric of measurement here will be the University Rank Jump. We started off at 994 in June and are expecting to hit a modest 500 by the end of tenure with you on our team.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Introducing Live Projects:",
    description:
      "We plan to develop and deploy 3-4 projects that have utility for students across the 2 semesters with the technologies learnt during our Hacking Nights. Contributions to these projects will be publicly verifiable and published.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Publishing Learning Resources:",
    description:
      "Learning resources curated perfectly with elaborate content, courses and learning techniques are accessible through our website. These live documents are constantly updated to include the best content.",

    icon: LockClosedIcon,
  },
  
];

export default function Planofaction() {
  return (
    <div className="bg-[#000000] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Randomize();
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#dadada] sm:text-4xl">
            Plan Of Action
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-[#dadada] sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-[#dadada]">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
