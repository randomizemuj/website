// import event2Image from "src/assets/Gradient-2.png"; // Import event 2 image
// import event3Image from "src/assets/Gradient-2.png"; // Import event 3 image
// import event1Image from "src/assets/Gradient-2.png"; // Import event 1 image
// import event4Image from "src/assets/Gradient-2.png"; // Import event 4 image

export default function Events() {
  // Sample event data with images
  const events = [
    { id: 1, title: "Event 1", link: "#", image: "src/assets/Gradient-2.png" },
    { id: 2, title: "Event 2", link: "#", image: "src/assets/Gradient-2.png" },
    { id: 3, title: "Event 3", link: "#", image: "src/assets/Gradient-2.png" },
    { id: 4, title: "Event 4", link: "#", image: "src/assets/Gradient-2.png" },
    // Add more events as needed
  ];

  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-no-repeat"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${"src/assets/Gradient.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "75vh", // Limiting the section to 75% of the viewport height
        width: "100%", // Ensuring full width
        padding: "0 25px", // Adding left and right padding
      }}
    >
      <header className="flex justify-between items-center w-full py-5 px-10" style={{ padding: "0 25px" }}>
        <h1 className="text-white text-3xl font-bold" style={{ marginRight: "auto" }}>
          <a href="/" className="hover:underline">
            Events
          </a>
        </h1>
        <nav>
          <a href="#" className="text-white hover:underline" style={{ marginLeft: "auto" }}>
            All events
          </a>
        </nav>
      </header>

      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-4 gap-4 w-full">
          {events.slice(0, 4).map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 rounded shadow-md hover:shadow-lg transition duration-300 h-full"
              style={{ backgroundImage: `url(${event.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <a href={event.link} className="text-xl font-bold hover:underline text-white">
                {event.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


