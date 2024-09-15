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
import Pluto from './pages/proj/Pluto'
import Toohak from './pages/proj/Toohak'
import Drive from './pages/proj/Drive'
import Uni_food from './pages/proj/Uni_food'
import Cyclistic from './pages/proj/Cyclistic'
import Bcg_comp from './pages/proj/Bcg'
import Airbnb from './pages/proj/Airbnb'
import Toromart from './pages/proj/Toromart'

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
          <Route path="/projectpluto" exact Component={ Pluto } />
          <Route path="/toohak" exact Component={ Toohak } />
          <Route path="/drive" exact Component={ Drive } />
          <Route path="/unifood" exact Component={ Uni_food } />
          <Route path="/cyclistic" exact Component={ Cyclistic } />
          <Route path="/bcg" exact Component={ Bcg_comp } />
          <Route path="/airbnb" exact Component={ Airbnb } />
          <Route path="/toromart" exact Component={ Toromart } />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
