import eventData from "../Data/Events.json";

export default function Events() {
  // Sample event data with images
  // const events = [
  //   { id: 1, title: "Event 1", link: "#", image: "src/assets/Gradient-2.png" },
  //   { id: 2, title: "Event 2", link: "#", image: "src/assets/Gradient-2.png" },
  //   { id: 3, title: "Event 3", link: "#", image: "src/assets/Gradient-2.png" },
  //   { id: 4, title: "Event 4", link: "#", image: "src/assets/Gradient-2.png" },
  //   // Add more events as needed
  // ];

  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-no-repeat w-full h-fit p-5"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${"/Gradient.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "75vh", 
        // width: "100%", 
        // padding: "0 25px", 
      }}
    >
      <header
        className="flex justify-between items-center w-full py-5 px-10"
        style={{ padding: "0 25px" }}
      >
        <h1
          className="text-white text-3xl font-bold"
          style={{ marginRight: "auto" }}
        >
          <a href="/" className="hover:underline">
            Events
          </a>
        </h1>
        <nav>
          <a
            href="/events"
            className="text-white hover:underline"
            style={{ marginLeft: "auto" }}
          >
            View all →
          </a>
        </nav>
      </header>

      <div className="container mx-auto mt-10 p-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 w-full">
          {eventData.slice(0, 4).map((eventData) => (
            <div
              key={eventData.id}
              className="  rounded shadow-md hover:shadow-lg transition duration-300 h-full"
              style={{
                backgroundImage: `url(${eventData.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative w-full">
              <a href={eventData.link}>
                <img
                  src={eventData.imageUrl}
                  alt=""
                  className=" w-full h-auto rounded-lg object-cover"
                />
                </a>
               
              </div>

              {/* {eventData.title} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
