import { useReveal } from '../hooks/useReveal.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function ServicesPage({ config }) {
  const heroRef = useReveal()
  const servicesRef = useReveal()

  const defaultAddons = [
    { name: 'Custom Intelligent Lighting Package', price: '+$350' },
    { name: 'Bespoke Floral & Archway Installation', price: '+$500' },
    { name: 'VIP Guest Concierge & Transportation', price: '+$250' },
  ]

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
                  Offerings
                </span>
                <div className="h-px w-12" style={{ backgroundColor: 'var(--primary)' }} />
              </div>
              <h1 className="font-headline font-black text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-tight mb-6">
                Signature Event Services
              </h1>
              <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto mb-8">
                Curated event planning and production solutions designed to elevate your celebration and deliver an extraordinary experience.
              </p>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section id="services-list" className="py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div ref={servicesRef} className="section-reveal space-y-16">
              {config.services.map((service, i) => (
                <div key={i} className="bg-[#141414] p-8 lg:p-12 border border-[#222222] rounded-sm flex flex-col md:flex-row gap-10 items-start">
                  {/* Image */}
                  {service.image && (
                    <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden shrink-0 rounded-sm">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover filter brightness-95" 
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4 border-b border-[#222222] pb-4">
                      <h3 className="font-headline font-bold text-white text-3xl flex items-center gap-3">
                        <span>{service.icon}</span>
                        <span>{service.name}</span>
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 font-light text-base leading-relaxed mb-8">{service.desc}</p>
                    
                    {/* Add-ons */}
                    <div className="bg-[#1A1A1A] p-6 mb-8 rounded-sm border border-[#222222]">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-4">Production Add-ons Available</h4>
                      <ul className="space-y-3">
                        {defaultAddons.map((addon, aIdx) => (
                          <li key={aIdx} className="flex justify-between text-xs text-gray-400 font-light">
                            <span>{addon.name}</span>
                            <span style={{ color: 'var(--primary)' }} className="font-mono font-bold">{addon.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a href="/#contact" className="btn-primary px-8 py-3 text-xs font-bold uppercase tracking-widest inline-block rounded-sm">
                      Inquire About {service.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-[#141414] border-t border-[#222222]">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="font-headline font-black uppercase text-4xl text-white mb-6">
              Need a Customized Scope?
            </h2>
            <p className="text-gray-400 font-light text-lg mb-10">
              Book a complimentary consultation with one of our lead event directors. We'll curate a custom proposal specifically for your event vision.
            </p>
            <a href="/#contact" className="btn-primary px-10 py-4 text-xs font-bold uppercase tracking-widest inline-block rounded-sm">
              Schedule Consultation →
            </a>
          </div>
        </section>
      </div>
      <Footer config={config} />
    </>
  )
}
