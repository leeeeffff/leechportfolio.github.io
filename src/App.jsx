import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio';
import About from './pages/About'
import Footer from './components/Footer';
import Certv from './pages/Certv'
import Comp from './pages/Competitions'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Cert from './pages/Cert'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={ Home } />
          <Route path="/portfolio" exact Component={ Portfolio } />
          <Route path="/certv" exact Component={ Certv } />
          <Route path="/competitions" exact Component={ Comp } />
          <Route path="/projects" exact Component={ Projects } />
          <Route path="/about" exact Component={ About } />
          <Route path="/contacts" exact Component= { Contacts } />
          <Route path="/cert" exact Component={ Cert } />

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
