import './App.css'
import Planofaction from './Components/Planofaction.jsx'
import Footer from './Components/Footer.jsx'
import Events from './Components/Events.jsx'
import Navbar from './Components/Navbar.jsx'
import Objective from './Components/Objective.jsx'
import Projects from './pages/Projects';

function App() {
  return (
    <>
    <Navbar/>
    <Planofaction/>
    <Objective/>
    <Events/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App