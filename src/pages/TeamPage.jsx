import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function TeamPage({ config }) {
  const heroRef = useReveal()
  const gridRef = useReveal()

  return (
    <>
      <Navbar config={config} />
      <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] min-h-screen pt-24">
        {/* Hero */}
        <section className="pt-24 pb-20 relative overflow-hidden bg-white dark:bg-[#111111]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
            <div ref={heroRef} className="section-reveal">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Master Artists
                </span>
                <div className="h-px w-12 bg-primary" />
              </div>
              <h1 className="font-headline font-normal text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white leading-tight mb-6">
                Meet The Team
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-light text-lg max-w-2xl mx-auto mb-8">
                Our curated team of master stylists and estheticians are passionate about enhancing your natural beauty.
              </p>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div ref={gridRef} className={`section-reveal grid gap-8 ${config.team?.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
              {config.team?.map((member, i) => (
                <Link
                  key={i}
                  to={`/team/${member.id}`}
                  className="group bg-white dark:bg-[#111111] rounded-none overflow-hidden border border-gray-100 dark:border-[#222222] shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 dark:bg-[#1A1A1A]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-headline font-normal text-xl text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-widest mt-1">
                      {member.specialty}
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-4 text-xs font-medium text-primary">
                      <span>View Portfolio</span>
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Bottom CTA */}
        <section className="py-24 bg-white dark:bg-[#111111] border-t border-gray-100 dark:border-[#222222]">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="font-headline font-normal text-4xl text-gray-900 dark:text-white mb-6">
              Ready for a transformation?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg mb-10">
              Book a consultation with one of our master artists today.
            </p>
            <a href="/booking" className="btn-primary px-10 py-4 text-base inline-block">
              Book Appointment
            </a>
          </div>
        </section>
      </div>
      <Footer config={config} />
    </>
  )
}



