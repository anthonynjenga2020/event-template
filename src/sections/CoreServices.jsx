import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'

export default function CoreServices({ config }) {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="services" className="py-28 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="section-reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Treatments
              </span>
            </div>
            <h2 className="font-headline font-normal text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight">
              Signature<br />Services
            </h2>
          </div>
          <p className="text-gray-600 text-base font-light max-w-md lg:text-right">
            Curated experiences designed to rejuvenate your body, elevate your style, and restore your inner peace.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="section-reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.map((service, i) => (
            <div
              key={i}
              className={`relative card-hover rounded-none border border-gray-100 dark:border-[#222222] group cursor-default overflow-hidden min-h-[360px] flex flex-col justify-end bg-white dark:bg-[#111111] shadow-sm \${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Background Image */}
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 transform transition-transform duration-700 translate-y-16 group-hover:translate-y-0">
                {/* Title */}
                <h3 className="font-headline font-normal text-2xl text-white mb-3 drop-shadow-md">
                  {service.name}
                </h3>

                {/* Hover Content */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                  <p className="text-white/90 font-light text-sm leading-relaxed mb-6">{service.desc}</p>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium uppercase tracking-[0.1em] text-accent">
                      Explore Treatment
                    </span>
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/services"
            className="btn-primary inline-flex items-center gap-2"
          >
            View Full Menu
          </Link>
          <a
            href="/booking"
            className="btn-outline inline-flex items-center gap-2"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  )
}



