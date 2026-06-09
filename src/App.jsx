// Huvudkomponent – en route per sida
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Jobs from './pages/Jobs'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/lediga-tjanster" element={<Jobs />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
