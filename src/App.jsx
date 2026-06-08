// Huvudkomponent – en route per sida
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import Apply from './pages/Apply'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tjanster" element={<Services />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/lediga-tjanster" element={<Jobs />} />
          <Route path="/lediga-tjanster/:id" element={<JobDetail />} />
          <Route path="/ansok" element={<Apply />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
