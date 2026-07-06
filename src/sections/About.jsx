import { useReveal } from '../hooks/useReveal.js'

export default function About({ config }) {
  const textRef = useReveal()
  const imgRef = useReveal()

  const paragraphs = config.aboutDescription.split('\n\n').filter(Boolean)

  return (
    <section id="about" className="py-28 lg:py-40 bg-white dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div ref={textRef} className="section-reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Our Story
              </span>
            </div>

            <h2 className="font-headline font-normal text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight mb-8">
              {config.aboutTitle}
            </h2>

            <div className="space-y-6">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 text-lg leading-relaxed font-light">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-gray-100 dark:border-[#222222] pt-8">
              {[
                { text: 'Master Stylists' },
                { text: 'Premium Products' },
                { text: 'Relaxing Atmosphere' },
                { text: 'Tailored Care' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-gray-700 text-sm font-medium tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="/booking"
              className="btn-primary inline-block mt-10"
            >
              Book an Appointment
            </a>
          </div>

          {/* Image */}
          <div ref={imgRef} className="section-reveal stagger-2 relative">
            {/* Decorative frame */}
            <div
              className="absolute -top-6 -right-6 w-full h-full border border-primary/20 z-0"
            />
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img
                src={config.aboutImageUrl}
                alt="About Us"
                className="w-full aspect-[4/5] object-cover object-center transition-transform duration-1000 hover:scale-105"
              />
              {/* Overlay bar */}
              <div
                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent"
              >
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-4 h-4 text-white fill-current drop-shadow-md" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white text-sm font-medium tracking-wide">{config.stats?.find(s => s.label.includes('Rating'))?.value || '4.9★'} Google Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



