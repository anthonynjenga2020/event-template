import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Loader from '../components/Loader.jsx'

export default function MembershipsPage({ config }) {
  const [loading, setLoading] = useState(true)

  const memberships = [
    {
      name: "The Signature Glow",
      price: "$149",
      period: "per month",
      description: "Our most popular membership for consistent, radiant skin.",
      features: [
        "One Signature Facial per month",
        "10% off all retail products",
        "Priority booking access",
        "Complimentary birthday upgrade"
      ],
      popular: true
    },
    {
      name: "The Ultimate Retreat",
      price: "$299",
      period: "per month",
      description: "For those who believe self-care is a non-negotiable luxury.",
      features: [
        "Two Signature Treatments (Massage or Facial)",
        "15% off all retail products",
        "Unlimited infrared sauna sessions",
        "VIP event invitations",
        "Complimentary valet parking"
      ],
      popular: false
    },
    {
      name: "Bridal Preparation",
      price: "$1,200",
      period: "3-month package",
      description: "A curated 90-day countdown to perfection for your special day.",
      features: [
        "3 Custom Peels & Facials",
        "Hair & Makeup Trial",
        "Day-of Bridal Hair & Makeup",
        "Bridal Party discounts (up to 4)",
        "Complimentary Champagne"
      ],
      popular: false
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      window.scrollTo(0, 0)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar config={config} />
      
      <AnimatePresence>
        {loading && <Loader config={config} />}
      </AnimatePresence>

      <main className={`min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] pt-32 pb-24 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100 transition-opacity duration-1000'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  VIP Access
                </span>
                <div className="h-px w-12 bg-primary" />
              </div>
              <h1 className="font-headline font-normal text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
                Memberships & Packages
              </h1>
              <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Elevate your routine. Our curated memberships offer exclusive perks, priority access, and consistent self-care at a preferential rate.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {memberships.map((membership, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative bg-white dark:bg-[#111111] flex flex-col p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-2 ${
                  membership.popular 
                    ? 'border-2 border-primary shadow-xl z-10 scale-105' 
                    : 'border border-gray-100 dark:border-[#222222] shadow-md'
                }`}
              >
                {membership.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 text-xs font-medium uppercase tracking-widest shadow-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="font-headline text-2xl text-gray-900 dark:text-white mb-3">{membership.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-light text-sm">{membership.description}</p>
                </div>

                <div className="mb-8 pb-8 border-b border-gray-100 dark:border-[#222222]">
                  <span className="font-headline text-5xl text-gray-900 dark:text-white">{membership.price}</span>
                  <span className="text-gray-400 text-sm ml-2 font-light">{membership.period}</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {membership.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 font-light text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 uppercase tracking-widest text-sm font-medium transition-colors ${
                  membership.popular
                    ? 'bg-primary text-white hover:bg-[#B38458]'
                    : 'bg-gray-50 dark:bg-[#1A1A1A] text-gray-900 dark:text-white hover:bg-gray-100 dark:bg-[#222222]'
                }`}>
                  Join Now
                </button>
              </motion.div>
            ))}
          </div>

          {/* FAQ or Fine Print */}
          <div className="mt-32 max-w-3xl mx-auto text-center border-t border-gray-200 dark:border-[#333333] pt-16">
            <h3 className="font-headline text-2xl text-gray-900 dark:text-white mb-4">Membership Policies</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light text-sm leading-relaxed mb-6">
              Memberships are billed on the 1st of every month. Unused services do not roll over to the next month to encourage consistent self-care. Cancel anytime with a 30-day written notice.
            </p>
            <a href="/#contact" className="text-primary hover:text-gray-900 dark:text-white text-sm font-medium transition-colors">
              Have questions? Contact our concierge.
            </a>
          </div>

        </div>
      </main>

      <Footer config={config} />
    </>
  )
}



