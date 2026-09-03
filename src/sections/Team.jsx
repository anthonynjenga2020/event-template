import { useReveal } from '../hooks/useReveal.js'

export default function Team({ config }) {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="team" className="py-28 lg:py-40 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="section-reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: 'var(--primary)' }} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--primary)' }}>
              Event Directors
            </span>
            <div className="h-px w-10" style={{ backgroundColor: 'var(--primary)' }} />
          </div>
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-tight">
            Meet the Team
          </h2>
          <p className="text-gray-400 font-light mt-4 max-w-xl mx-auto text-base">
            Our team of lead directors, creative producers, and vendor managers are dedicated to crafting your perfect event.
          </p>
        </div>

        {/* Team Cards */}
        <div ref={gridRef} className={`section-reveal grid gap-8 ${config.team?.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
          {config.team?.map((member, i) => (
            <a
              key={i}
              href={`/team/${member.id}`}
              className="group bg-[#141414] overflow-hidden border border-[#222222] rounded-sm hover:border-primary transition-all duration-500 card-hover flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1A1A1A]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="font-headline font-bold text-xl text-white">
                  {member.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest mt-1 mb-3" style={{ color: 'var(--primary)' }}>
                  {member.specialty}
                </p>
                <div className="flex items-center justify-center gap-3 mt-4 text-xs font-medium text-gray-400 border-t border-[#222222] pt-4">
                  <span>{member.experience} Experience</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="/team"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-white/20 hover:border-primary pb-1 transition-colors"
            style={{ color: 'var(--primary)' }}
          >
            Meet the Full Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
