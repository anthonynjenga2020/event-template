import Hero from '../sections/Hero.jsx'
import Stats from '../sections/Stats.jsx'
import About from '../sections/About.jsx'
import CoreServices from '../sections/CoreServices.jsx'
import Team from '../sections/Team.jsx'
import Gallery from '../sections/Gallery.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import Process from '../sections/Process.jsx'
import CTA from '../sections/CTA.jsx'
import FAQ from '../sections/FAQ.jsx'
import Contact from '../sections/Contact.jsx'
import Loader from '../components/Loader.jsx'
import Marquee from '../components/Marquee.jsx'
import BeforeAfterSlider from '../components/BeforeAfterSlider.jsx'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

export default function HomePage({ config }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Show loader for a brief period on initial mount
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader config={config} />}
      </AnimatePresence>

      <main className={loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100 transition-opacity duration-1000"}>
        <Hero config={config} />
        <Marquee />
        <Stats config={config} />
        
        {/* Before & After Section */}
        <section className="py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="font-headline font-normal text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Transformations</h2>
              <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto">Experience the difference of master craftsmanship. Drag the slider to see the results.</p>
            </div>
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-100 dark:border-[#222222]">
              <BeforeAfterSlider 
                beforeImage="/salon.jpg"
                afterImage="/salon1.jpg"
                beforeLabel="Before Treatment"
                afterLabel="After Styling"
              />
            </div>
          </div>
        </section>

        <About config={config} />
        <CoreServices config={config} />
        <Team config={config} />
        <Gallery config={config} />
        <Testimonials config={config} />
        <Process config={config} />
        <CTA config={config} />
        <FAQ config={config} />
        <Contact config={config} />
      </main>
    </>
  )
}



