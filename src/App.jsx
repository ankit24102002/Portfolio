import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import ResumeAdmin from './components/ResumeAdmin'
import Hero from './components/Hero'
import About from './components/About'
import SectionBanner from './components/SectionBanner'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ background: '#06080f' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <SectionBanner title="What I do" highlight="do" />
          <Experience />
          <Skills />
          <SectionBanner title="What I did?" highlight="did?" />
          <Projects />
          <Education />
          <Contact />
        </main>
        <footer
          className="text-center py-8 text-gray-600 text-sm border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p>
            Designed &amp; Built by{' '}
            <span
              className="text-[#00d4ff]"
              id="resume-admin-trigger"
              style={{ cursor: 'default' }}
              onClick={() => {
                const el = document.getElementById('resume-admin-trigger')
                if (el) el.dispatchEvent(new MouseEvent('click-count', { bubbles: true }))
              }}
            >
              Ankit Singla
            </span>{' '}
            · 2025
          </p>
        </footer>
      </div>
      <ResumeAdmin />
    </BrowserRouter>
  )
}
