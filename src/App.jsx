import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Projects from "./pages/ProjectsPage.jsx";
import Teams from "./pages/Teams.jsx";
import Quill from "./pages/QuillProject.jsx";
import Odysseus from "./pages/OdysseusProject.jsx";
import RandomizeWebsite from "./pages/RandomizeWebsiteProject.jsx";
import TheFest from "./pages/TheFest.jsx";
import Pathaan from "./pages/Pathaan.jsx";
import LaxmiChitFund from "./pages/LaxmiChitFund.jsx";
import Gallery from "./pages/Gallery.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="projects" element={<Projects />} />
            <Route path="teams" element={<Teams />} />
            <Route path="thefest" element={<TheFest />} />
            <Route path="quill" element={<Quill />} />
            <Route path="laxmiChitFund" element={<LaxmiChitFund />} />
            <Route path="Pathaan" element={<Pathaan />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="odysseus" element={<Odysseus />} />
            <Route path="randomize-website" element={<RandomizeWebsite />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
