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
      <div className="bg-[#0A0A0A] min-h-screen pt-24">
        {/* Hero */}
        <section className="pt-24 pb-20 relative overflow-hidden bg-[#0A0A0A] border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
            <div ref={heroRef} className="section-reveal">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12" style={{ backgroundColor: 'var(--primary)' }} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--primary)' }}>
                  Event Directors
                </span>
                <div className="h-px w-12" style={{ backgroundColor: 'var(--primary)' }} />
              </div>
              <h1 className="font-headline font-black text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-tight mb-6">
                Meet The Team
              </h1>
              <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto mb-8">
                Our team of lead directors, creative producers, and vendor managers are dedicated to crafting your perfect event.
              </p>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-24 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div ref={gridRef} className={`section-reveal grid gap-8 ${config.team?.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
              {config.team?.map((member, i) => (
                <Link
                  key={i}
                  to={`/team/${member.id}`}
                  className="group bg-[#141414] overflow-hidden border border-[#222222] rounded-sm hover:border-primary transition-all duration-500 card-hover flex flex-col justify-between"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#1A1A1A]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-headline font-bold text-xl text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest mt-1 mb-3" style={{ color: 'var(--primary)' }}>
                      {member.specialty}
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-4 text-xs font-bold uppercase tracking-widest text-primary border-t border-[#222222] pt-4">
                      <span>View Profile</span>
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
        <section className="py-24 bg-[#141414] border-t border-[#222222]">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="font-headline font-black uppercase text-4xl text-white mb-6">
              Ready to plan your next event?
            </h2>
            <p className="text-gray-400 font-light text-lg mb-10">
              Book a consultation with one of our lead event directors today.
            </p>
            <a href="/#contact" className="btn-primary px-10 py-4 text-xs font-bold uppercase tracking-widest inline-block rounded-sm">
              Book Consultation →
            </a>
          </div>
        </section>
      </div>
      <Footer config={config} />
    </>
  )
}
