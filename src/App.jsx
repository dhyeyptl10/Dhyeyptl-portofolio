import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import BeyondCode from './components/BeyondCode'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Education from './components/Education'
import GitHistory from './components/GitHistory'
import FigmaDesigns from './components/FigmaDesigns'
import Contact from './components/Contact'
import ContactPage from './components/ContactPage'
import ChatBot from './components/ChatBot'
import Works from './components/Works'
import Hackathons from './components/Hackathons'

function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <BeyondCode />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Certificates />
        <div className="divider" />
        <GitHistory />
        <div className="divider" />
        <FigmaDesigns />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Contact />
      </main>
      <ChatBot />
    </>
  )
}

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Cursor />
      <Preloader onComplete={() => setLoaded(true)} />
      {loaded && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      )}
    </>
  )
}

export default App
