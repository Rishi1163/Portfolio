import { useState } from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Education from './sections/Education'
import FeatureCards from './sections/FeatureCards'

function App() {

  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <Education />
        <ShowcaseSection />
        <FeatureCards />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App
