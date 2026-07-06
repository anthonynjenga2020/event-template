import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function ServicesPage({ config }) {
  const heroRef = useReveal()
  const servicesRef = useReveal()

  return (
    <>
      <Navbar config={config} />
      <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] min-h-screen pt-24">
        {/* Hero */}
        <section className="pt-24 pb-20 relative overflow-hidden bg-white dark:bg-[#111111]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
            <div ref={heroRef} className="section-reveal">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Treatments
                </span>
                <div className="h-px w-12 bg-primary" />
              </div>
              <h1 className="font-headline font-normal text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white leading-tight mb-6">
                Service Menu
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-light text-lg max-w-2xl mx-auto mb-8">
                Curated experiences designed to rejuvenate your body, elevate your style, and restore your inner peace.
              </p>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section id="services-list" className="py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div ref={servicesRef} className="section-reveal space-y-16">
              {config.services.map((service, i) => (
                <div key={i} className="bg-white dark:bg-[#111111] p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-[#222222] flex flex-col md:flex-row gap-10 items-start">
                  {/* Image */}
                  {service.image && (
                    <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden shrink-0">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover filter brightness-95" 
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4 border-b border-gray-100 dark:border-[#222222] pb-4">
                      <h3 className="font-headline font-normal text-gray-900 dark:text-white text-3xl">{service.name}</h3>
                      <span className="text-xl font-headline text-primary">from $120</span>
                    </div>
                    
                    <p className="text-gray-500 dark:text-gray-400 font-light text-base leading-relaxed mb-8">{service.desc}</p>
                    
                    {/* Add-ons */}
                    <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] p-6 mb-8">
                      <h4 className="text-xs font-medium uppercase tracking-widest text-gray-900 dark:text-white mb-4">Popular Add-ons</h4>
                      <ul className="space-y-3">
                        <li className="flex justify-between text-sm text-gray-600 font-light">
                          <span>Aromatherapy Enhancement</span>
                          <span className="text-gray-400">+$20</span>
                        </li>
                        <li className="flex justify-between text-sm text-gray-600 font-light">
                          <span>Hot Stone Therapy</span>
                          <span className="text-gray-400">+$35</span>
                        </li>
                        <li className="flex justify-between text-sm text-gray-600 font-light">
                          <span>Deep Conditioning Mask</span>
                          <span className="text-gray-400">+$45</span>
                        </li>
                      </ul>
                    </div>

                    <a href="/booking" className="btn-outline px-8 py-3 text-sm inline-block">
                      Book {service.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-white dark:bg-[#111111] border-t border-gray-100 dark:border-[#222222]">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="font-headline font-normal text-4xl text-gray-900 dark:text-white mb-6">
              Not sure what you need?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg mb-10">
              Book a complimentary consultation with one of our master stylists or estheticians. We'll curate a treatment plan specifically for you.
            </p>
            <a href="/booking" className="btn-primary px-10 py-4 text-base inline-block">
              Schedule Consultation
            </a>
          </div>
        </section>
      </div>
      <Footer config={config} />
    </>
  )
}



