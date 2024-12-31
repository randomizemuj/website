import Planofaction from "../Components/Planofaction.jsx";
import Events from "../Components/EventsComponent/Events.jsx";
import About from "../Components/About.jsx";
import Landing from "../Components/Landing.jsx";
import Projects from "../Components/Projects.jsx";
import Faqs from "../Components/Faqs.jsx";
import { useEffect } from "react";

function App() {
  useEffect( () => {
    window.scrollTo(0, 0);//resets the scrolling to the top of the page
  }, []);
  return (
    <>
      <Landing />
      <About />
      <Planofaction />
      <Projects />
      <Events />
      <Faqs />
    </>
  );
}

export default App;
