import './App.css'
// components
import Navbar from './components/Navbar'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'


// library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/certifications' element={<Certifications/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
