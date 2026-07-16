import { useParams, Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function TeamMemberPage({ config }) {
  const { memberId } = useParams()
  const teamMember = config.team?.find(t => t.id === memberId) || config.team?.find(t => t.id === useParams().trainerId)
  
  const heroRef = useReveal()
  const contentRef = useReveal()

  if (!teamMember) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] dark:bg-[#0A0A0A]">
        <p className="text-gray-900 dark:text-white font-headline font-normal text-4xl mb-6">Stylist not found.</p>
        <Link to="/team" className="btn-outline px-6 py-3 text-sm">← Back to Team</Link>
      </div>
    )
  }

  return (
    <>
      <Navbar config={config} />
      <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] min-h-screen pt-24">
        {/* Hero */}
        <section className="relative pt-20 pb-0 overflow-hidden bg-white dark:bg-[#111111] border-b border-gray-100 dark:border-[#222222]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-12">
              <Link to="/" className="text-gray-400 text-xs uppercase tracking-widest hover:text-gray-600 transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link to="/team" className="text-gray-400 text-xs uppercase tracking-widest hover:text-gray-600 transition-colors">Team</Link>
              <span className="text-gray-300">/</span>
              <span className="text-xs uppercase tracking-widest text-primary">{teamMember.name}</span>
            </div>

            <div ref={heroRef} className="section-reveal flex flex-col-reverse lg:flex-row items-center lg:items-end gap-12 pb-16">
              <div className="flex-1 text-center lg:text-left">
                <p className="text-xs font-medium uppercase tracking-[0.2em] mb-4 text-primary">
                  {teamMember.specialty}
                </p>
                <h1 className="font-headline font-normal text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white leading-tight mb-6">
                  {teamMember.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <span className="text-gray-500 dark:text-gray-400 font-light text-sm uppercase tracking-widest">{teamMember.experience} Experience</span>
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                  <a href={`${teamMember.instagram || '#'}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">@{teamMember.name.split(' ').join('').toLowerCase()}</span>
                  </a>
                </div>
              </div>

              {/* Profile photo */}
              <div className="w-56 h-72 lg:w-72 lg:h-[400px] rounded-t-full overflow-hidden shrink-0 bg-gray-50 dark:bg-[#1A1A1A] border-4 border-white shadow-xl">
                <img src={teamMember.image} alt={teamMember.name}
                  className="w-full h-full object-cover mix-blend-multiply filter brightness-95" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div ref={contentRef} className="section-reveal grid lg:grid-cols-[2fr_1fr] gap-16">
              {/* Left column */}
              <div className="space-y-16">
                {/* Quote */}
                <div className="relative text-center">
                  <div className="font-headline font-normal text-8xl leading-none absolute -top-8 left-1/2 -translate-x-1/2 text-gray-100 z-0">
                    "
                  </div>
                  <p className="relative z-10 text-gray-900 dark:text-white text-2xl font-light leading-relaxed italic max-w-2xl mx-auto">
                    {teamMember.quote}
                  </p>
                </div>

                {/* Bio */}
                <div>
                  <h2 className="font-headline font-normal text-3xl text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-[#222222] pb-4">The Artist</h2>
                  <p className="text-gray-600 text-base leading-relaxed font-light">{teamMember.bio}</p>
                </div>
              </div>

              {/* Right column (Sidebar) */}
              <div>
                <div className="bg-white dark:bg-[#111111] p-8 border border-gray-100 dark:border-[#222222] shadow-sm sticky top-32 text-center">
                  <h3 className="font-headline font-normal text-2xl text-gray-900 dark:text-white mb-4">Book with {teamMember.name.split(' ')[0]}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-light text-sm mb-8">
                    Ready for a transformation? Reserve your time with {teamMember.name.split(' ')[0]} today.
                  </p>
                  <a href={`/booking?stylist=${teamMember.id}`} className="btn-primary w-full py-4 block">
                    Check Availability
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



