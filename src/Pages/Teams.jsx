import '../App.css'
import ReactDOM from 'react-dom/client'
import Coreteam from '../Components/Coreteam.jsx'
import Execteam from '../Components/Execteam.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Execteam />
    <Coreteam />
  </React.StrictMode>,
)
