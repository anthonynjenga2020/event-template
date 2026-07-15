import { useReveal } from '../hooks/useReveal.js'

export default function Team({ config }) {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="team" className="py-28 lg:py-40 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="section-reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Master Artists
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-headline font-normal text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight">
            Meet the Team
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light mt-4 max-w-xl mx-auto">
            Our curated team of master stylists and estheticians are passionate about enhancing your natural beauty.
          </p>
        </div>

        {/* Team Cards */}
        <div ref={gridRef} className={`section-reveal grid gap-8 ${config.team?.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
          {config.team?.map((member, i) => (
            <a
              key={i}
              href={`/team/${member.id}`}
              className="group bg-white dark:bg-[#111111] overflow-hidden border border-gray-100 dark:border-[#222222] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 dark:bg-[#1A1A1A]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="font-headline font-normal text-xl text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-light text-primary mb-3 uppercase tracking-widest mt-1">
                  {member.specialty}
                </p>
                <div className="flex items-center justify-center gap-3 mt-4 text-xs font-medium text-gray-400">
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
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark uppercase tracking-widest border-b border-primary/30 hover:border-primary pb-1 transition-colors"
          >
            Meet the Full Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
