import {
  ClipboardDocumentCheckIcon,
  UsersIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  FolderArrowDownIcon,
  AcademicCapIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "BUILDING FOUNDATIONS",
    subFeatures: [
      {
        name: "Focused Learning:",
        description:
          "We’ll conduct regular workshops and learning opportunities on concepts to ensure everyone has a strong foundation.",
        icon: MagnifyingGlassIcon,
      },
      {
        name: "Workshops:",
        description:
          "Monthly sessions on key topics like data structures and programming will make learning both interactive and enjoyable.",
        icon: UsersIcon,
      },
    ],
  },
  {
    name: "COMMUNITY BUILDING",
    subFeatures: [
      {
        name: "Learning Together:",
        description:
          "Together, we will mingle social gatherings with shared learning to create a fertile ground for growth for young minds.",
        icon: UsersIcon,
      },
      {
        name: "Current Projects:",
        description:
          "The projects currently under way will be continued, and new projects will be initiated with the contributions of each one made clear.",
        icon: ClipboardDocumentCheckIcon,
      },
      {
        name: "Balanced Events:",
        description:
          "We will make sure that the events are balanced with regard to entertainment versus education, so it will be a vibrant, yet reliable community",
        icon: CalendarDaysIcon,
      },
    ],
  },
  {
    name: "WELCOMING TALENT",
    subFeatures: [
      {
        name: "Inclusive membership:",
        description:
          "It opens up our membership to 2nd- and 3rd-year students, allows fresh ideas to flow in, and nurtures the talent which might have otherwise gone unnoticed.",
        icon: FolderArrowDownIcon,
      },
      {
        name: "Mentorship:",
        description:
          "The seniors guide the new members into the program and offer a conducive environment where they can grow.",
        icon: AcademicCapIcon,
      },
    ],
  },
  {
    name: "SKILL DEMONSTRATION",
    subFeatures: [
      {
        name: "Passion Projects:",
        description:
          "Projects should be interest-based; each participant will get a chance to showcase their skill.",
        icon: ClipboardDocumentListIcon,
      },
      {
        name: "Publishing:",
        description:
          "The works will be published and promoted, with due credit to its contributors.",
        icon: CheckCircleIcon,
      },
    ],
  },
];

export default function Planofaction() {
  return (
    <div
      className="bg-[#000000] py-14 sm:py-20 md:pb-44 grid place-content-center"
      id="planofaction"
    >
      <div className="mx-auto px-9">
        <div className="mx-auto lg:mx-0 flex justify-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#dadada] sm:text-6xl text-center">
            Plan Of Action
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-[#dadada] sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-gradient-to-br from-[#537895] to-[#09203f] hover:bg-gradient-to-tl hover:from-[#537895] hover:to-[#09203f] transition-all duration-500 ease-in-out p-5 rounded-3xl transform hover:-translate-y-2 hover:shadow-lg"
            >
              <dt className="font-bold text-center text-base md:text-2xl text-white transition-all duration-500 ease-in-out">
                {feature.name}
              </dt>
              <div className="mt-4 space-y-4">
                {feature.subFeatures.map((subFeature) => (
                  <div
                    key={subFeature.name}
                    className="relative pl-9 text-sm md:text-lg transition-all duration-500 ease-in-out"
                  >
                    <dt className=" font-semibold text-white/90 flex items-center">
                      <subFeature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-white transition-transform duration-500 ease-in-out"
                        aria-hidden="true"
                      />
                      {subFeature.name}
                    </dt>
                    <dd className="inline text-white/90">
                      {subFeature.description}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
