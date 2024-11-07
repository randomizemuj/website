import React from "react";

function TeamCard({
  name = "Member name",
  position = "position",
  linkdn,
  github,
  imgSrc,
}) {
  const socials = [
    {
      name: "Github",
      link: github,
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.46.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.02-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.62 9.62 0 012.5-.34c.85 0 1.71.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.63.7 1.02 1.6 1.02 2.69 0 3.84-2.34 4.68-4.57 4.92.36.31.68.91.68 1.83 0 1.32-.01 2.38-.01 2.71 0 .26.18.57.69.48A9.997 9.997 0 0022 12c0-5.52-4.48-10-10-10z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      link: linkdn,
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11.5h3v11.5zm-1.5-13.1c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.25 13.1h-3v-5.5c0-1.32-.03-3.01-1.83-3.01-1.83 0-2.11 1.43-2.11 2.91v5.6h-3v-11.5h2.88v1.56h.04c.4-.76 1.37-1.56 2.83-1.56 3.03 0 3.59 2 3.59 4.58v6.92z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-800 max-w-max p-6 text-white inline-block m-6 rounded-lg text-center hover:scale-105">
      <div className="aspect-square overflow-hidden rounded-tl-3xl object-cover rounded-br-3xl flex justify-center mb-5">
        <img
          className="w-36 h-36 md:w-44 md:h-44 object-cover"
          src={imgSrc}
          alt=""
        />
      </div>
      <h2 className="text-lg md:text-xl mb-3 mt-2">{name}</h2>
      <h5 className=" text-gray-300 text-xs md:text-sm">{position}</h5>
      <div className="flex justify-center mt-3">
        {socials.map(
          (social) =>
            social.link && (
              <a
                href={social.link}
                key={social.name}
                target="_blank"
                className="text-[#dadde2] hover:text-gray-500"
              >
                <social.icon className="h-7 w-7 mx-1 my-2" aria-hidden="true" />
              </a>
            )
        )}
      </div>
    </div>
  );
}

export default TeamCard;
