import { useReveal } from '../hooks/useReveal.js'

export default function CTA({ config }) {
  const ref = useReveal()

  return (
    <section className="py-28 relative overflow-hidden bg-white dark:bg-[#111111]">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#8A9A86 1px, transparent 1px), linear-gradient(90deg, #8A9A86 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div ref={ref} className="section-reveal relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-10 bg-primary" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Your Moment Awaits
          </span>
          <div className="h-px w-10 bg-primary" />
        </div>

        <h2 className="font-headline font-normal text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white leading-tight mb-6">
          Ready for a<br />
          <span className="text-primary">Transformation?</span>
        </h2>

        <p className="text-gray-500 dark:text-gray-400 font-light text-lg max-w-2xl mx-auto mb-10">
          Book your appointment today and let our master artists craft your perfect look. 
          New clients receive a complimentary consultation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/booking"
            className="btn-primary px-10 py-5 text-base inline-block"
          >
            {config.bookingCTA || 'Book Appointment'}
          </a>
          <a
            href="/#contact"
            className="btn-outline px-10 py-5 text-base inline-block"
          >
            Get in Touch
          </a>
        </div>

        <p className="text-gray-400 text-xs mt-8 uppercase tracking-widest">
          Complimentary consultation · Premium products · Satisfaction guaranteed
        </p>
      </div>
    </section>
  )
}
