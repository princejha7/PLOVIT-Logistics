import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/FooterTemp'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Career from './pages/Career'
import GetAQuote from './pages/GetAQuote'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/getaquote" element={<GetAQuote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
