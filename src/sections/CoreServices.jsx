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
              <div className="h-px w-10 bg-primary" style={{ backgroundColor: 'var(--primary)' }} />
              <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--primary)' }}>
                Services
              </span>
            </div>
            <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-tight">
              Signature<br />Services
            </h2>
          </div>
          <p className="text-gray-400 text-base font-light max-w-md lg:text-right">
            Curated event planning solutions designed to elevate your celebration and leave a lasting impression.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="section-reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.map((service, i) => (
            <div
              key={i}
              className={`relative card-hover rounded-sm border group cursor-pointer overflow-hidden min-h-[360px] flex flex-col justify-end bg-[#111111] shadow-sm ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              style={{ borderColor: 'var(--border)' }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 transform transition-transform duration-700 translate-y-16 group-hover:translate-y-0">
                {/* Title */}
                <h3 className="font-headline font-bold text-2xl text-white mb-3 drop-shadow-md flex items-center gap-3">
                  <span>{service.icon}</span>
                  <span>{service.name}</span>
                </h3>

                {/* Hover Content */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                  <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">{service.desc}</p>
                  
                  {/* CTA */}
                  <a href="#contact" className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.1em]" style={{ color: 'var(--primary)' }}>
                      Explore Service
                    </span>
                    <svg className="w-4 h-4" style={{ color: 'var(--primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/services"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm"
          >
            View All Services
          </Link>
          <a
            href="#contact"
            className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
