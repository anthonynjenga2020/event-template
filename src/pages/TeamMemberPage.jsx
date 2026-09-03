import { useParams, Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function TeamMemberPage({ config }) {
  const { memberId } = useParams()
  const teamMember = config.team?.find(t => t.id === memberId)
  
  const heroRef = useReveal()
  const contentRef = useReveal()

  if (!teamMember) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A]">
        <p className="text-white font-headline font-bold text-3xl uppercase mb-6">Team member not found.</p>
        <Link to="/team" className="btn-outline px-6 py-3 text-xs uppercase tracking-widest font-bold">← Back to Team</Link>
      </div>
    )
  }

  return (
    <>
      <Navbar config={config} />
      <div className="bg-[#0A0A0A] min-h-screen pt-24">
        {/* Hero */}
        <section className="relative pt-20 pb-0 overflow-hidden bg-[#0A0A0A] border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-12">
              <Link to="/" className="text-gray-400 text-xs uppercase tracking-widest hover:text-white transition-colors">Home</Link>
              <span className="text-gray-600">/</span>
              <Link to="/team" className="text-gray-400 text-xs uppercase tracking-widest hover:text-white transition-colors">Team</Link>
              <span className="text-gray-600">/</span>
              <span className="text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--primary)' }}>{teamMember.name}</span>
            </div>

            <div ref={heroRef} className="section-reveal flex flex-col-reverse lg:flex-row items-center lg:items-end gap-12 pb-16">
              <div className="flex-1 text-center lg:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--primary)' }}>
                  {teamMember.specialty}
                </p>
                <h1 className="font-headline font-black text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-tight mb-6">
                  {teamMember.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <span className="text-gray-400 font-medium text-xs uppercase tracking-widest">{teamMember.experience} Experience</span>
                </div>
              </div>

              {/* Profile photo */}
              <div className="w-56 h-72 lg:w-72 lg:h-[400px] rounded-t-full overflow-hidden shrink-0 bg-[#1A1A1A] border-2 border-[#333333] shadow-2xl">
                <img src={teamMember.image} alt={teamMember.name}
                  className="w-full h-full object-cover filter brightness-95" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div ref={contentRef} className="section-reveal grid lg:grid-cols-[2fr_1fr] gap-16">
              {/* Left column */}
              <div className="space-y-16">
                {/* Quote */}
                {teamMember.quote && (
                  <div className="relative text-center p-8 bg-[#141414] border border-[#222222] rounded-sm">
                    <p className="relative z-10 text-white text-xl font-light leading-relaxed italic max-w-2xl mx-auto">
                      "{teamMember.quote}"
                    </p>
                  </div>
                )}

                {/* Bio */}
                <div>
                  <h2 className="font-headline font-bold text-3xl text-white uppercase mb-6 border-b border-[#222222] pb-4">Background & Experience</h2>
                  <p className="text-gray-300 text-base leading-relaxed font-light">{teamMember.bio}</p>
                </div>
              </div>

              {/* Right column (Sidebar) */}
              <div>
                <div className="bg-[#141414] p-8 border border-[#222222] rounded-sm sticky top-32 text-center">
                  <h3 className="font-headline font-bold text-xl text-white uppercase mb-4">Book with {teamMember.name.split(' ')[0]}</h3>
                  <p className="text-gray-400 font-light text-sm mb-8">
                    Ready to plan your event? Reserve a consultation with {teamMember.name.split(' ')[0]} today.
                  </p>
                  <a href="/#contact" className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-widest block rounded-sm">
                    Inquire Consultation →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer config={config} />
    </>
  )
}
