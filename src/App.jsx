import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0a0f1e] min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <footer className="text-center py-8 text-gray-500 text-sm border-t border-white/5">
          <p>
            Designed & Built by{' '}
            <span className="text-[#00d4ff]">Ankit Singla</span> · 2025
          </p>
        </footer>
      </div>
    </BrowserRouter>
  )
}
