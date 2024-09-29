import {
  QrCodeIcon,
  LightBulbIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  PresentationChartLineIcon,
  MoonIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: 'Fostering a "Coding Culture":',
    description:
      "In addition to our Hacking Nights, we're launching competitive programming sessions to learn and apply new skills immediately. Our goal? Boost our university rank, aiming to drop from 994 in June to a more impressive 500 while you're with us.",
    icon: QrCodeIcon,
  },
  {
    name: "Introducing Live Projects: ",
    description:
      "We're launching 3-4 practical projects over two semesters, using technologies covered in our Hacking Nights. Students can actively contribute to these projects, and all contributions will be publicly verifiable and published.",
    icon: PresentationChartLineIcon,
  },

  {
    name: "Sharing Learning Resources:",
    description:
      "We publish meticulously curated learning materials on our website, featuring detailed content, courses, and effective learning techniques. These dynamic documents are continuously updated with top-notch content.",
    icon: ClipboardDocumentCheckIcon,
  },

  {
    name: "Weekend Hack Nights:",
    description:
      "We're organizing regular group evenings/night sessions dedicated to programming and learning together.",
    icon: MoonIcon,
  },
  {
    name: "Mentorship Sessions:",
    description:
      "Get guidance from those who've been in your shoes and are now where you aspire to be.",
    icon: UsersIcon,
  },
];

export default function Planofaction() {
  return (
    <div
      className="bg-[#000000] py-24 sm:py-32 grid place-content-center"
      id="planofaction "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 flex justify-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#dadada] sm:text-4xl text-center">
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
