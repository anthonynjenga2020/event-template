import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'

const DEFAULT_FAQS = [
  { q: 'Do I need to book in advance?', a: 'We highly recommend booking at least 48 hours in advance, especially for color services and special occasion styling. Walk-ins are welcome based on availability.' },
  { q: 'How long does a color service take?', a: 'Color services typically range from 1.5 to 3 hours depending on the complexity, your hair length, and desired result. We\'ll give you a time estimate during your consultation.' },
  { q: 'What products do you use?', a: 'We exclusively use premium, professional-grade products from leading brands. Our retail boutique carries these same products so you can maintain your results at home.' },
  { q: 'Do you offer bridal packages?', a: 'Yes! We offer comprehensive bridal packages that include a trial run, day-of hair and makeup, and options for the bridal party. Contact us early to reserve your date.' },
  { q: 'What is your cancellation policy?', a: 'We kindly ask for 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee of 50% of the service price.' },
]

export default function FAQ({ config }) {
  const faqs = config.faqs?.length ? config.faqs : DEFAULT_FAQS
  const [openIndex, setOpenIndex] = useState(null)
  const headerRef = useReveal()
  const contentRef = useReveal()

  return (
    <section className="py-28 lg:py-40 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: header */}
          <div ref={headerRef} className="section-reveal lg:sticky lg:top-28">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                FAQ
              </span>
            </div>
            <h2 className="font-headline font-normal text-4xl sm:text-5xl text-gray-900 dark:text-white leading-tight mb-6">
              Questions?<br />
              <span className="text-primary">We've got<br />answers.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light text-base leading-relaxed mb-8">
              Can't find what you're looking for? Drop us a message and we'll get back to you shortly.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark uppercase tracking-widest border-b border-primary/30 hover:border-primary pb-1 transition-colors"
            >
              Ask a Question
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: accordion */}
          <div ref={contentRef} className="section-reveal space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border overflow-hidden transition-all duration-200 ${openIndex === i ? 'border-primary/40' : 'border-gray-100 dark:border-[#222]'} bg-white dark:bg-[#111111]`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-headline font-normal text-base text-gray-900 dark:text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? 'rotate-45 bg-primary' : 'bg-gray-100 dark:bg-[#222]'}`}
                  >
                    <svg className={`w-3 h-3 ${openIndex === i ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" />
                    </svg>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
