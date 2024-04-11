import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Teams from './pages/Teams.jsx'
import Pathaan from './pages/PathaanProject.jsx'
import Quill from "./pages/QuillProject.jsx"
import Odysseus from "./pages/OdysseusProject.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="events" element={<Events/>} />
            <Route path="teams" element={<Teams/>} />
            <Route path="pathaan" element={<Pathaan/>} />
            <Route path="quill" element={<Quill/>} />
            <Route path="odysseus" element={<Odysseus/>} />



            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App