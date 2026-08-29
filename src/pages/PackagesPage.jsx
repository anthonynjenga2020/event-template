import { motion } from 'framer-motion'

export default function PackagesPage({ config }) {
  const packages = [
    {
      name: 'Silver Package',
      price: 'Ksh 250,000',
      tagline: 'Ideal for intimate celebrations & boutique gatherings.',
      features: [
        'Up to 100 Guests',
        'Standard Ambient Lighting & Sound',
        'Event Director & 2 Coordinators',
        '6 Hours Event Execution',
        'Basic Stage & Backdrop Decor',
        'Vendor Coordination',
      ],
      popular: false,
    },
    {
      name: 'Gold Package',
      price: 'Ksh 550,000',
      tagline: 'Our most popular comprehensive luxury experience.',
      features: [
        'Up to 300 Guests',
        'Concert-Grade Intelligent Lighting & Sound',
        'Senior Lead Planner & 5 Coordinators',
        '10 Hours Full Day Execution',
        'Premium Floral & Structural Stage Design',
        '360 Video Booth Included',
        'Dedicated VIP Lounge Area',
        'Full AV Technical Crew',
      ],
      popular: true,
    },
    {
      name: 'Platinum Package',
      price: 'Ksh 1,200,000',
      tagline: 'Bespeak grand galas, celebrity weddings & VIP summits.',
      features: [
        'Up to 1,000+ Guests',
        'Custom LED Wall & Intelligent Laser Rigging',
        'Executive Event Producer & 10+ Staff',
        'Unlimited Multi-Day Execution',
        'Ultra-Luxury Floral Archways & Scenery',
        '360 Video Booth & 4K Drone Coverage',
        'Mixologist Open Bar & VIP Hospitality Suite',
        'Artist & Celebrity Green Room Setup',
      ],
      popular: false,
    },
  ]

  return (
    <div className="pt-28 pb-20 min-h-screen relative" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--primary)' }} />
            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: 'var(--primary)' }}>
              Curated Offerings
            </span>
            <div className="h-px w-8" style={{ backgroundColor: 'var(--primary)' }} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black text-white uppercase tracking-tight mb-4">
            Event Management <span style={{ color: 'var(--primary)' }}>Packages</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Choose a tailored event production tier designed for flawless execution, unforgettable ambiance, and effortless hosting.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-sm border relative flex flex-col justify-between ${
                pkg.popular ? 'border-purple-500 bg-purple-500/10 shadow-2xl shadow-purple-500/20' : 'border-white/10 bg-surface'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full border border-purple-300">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-headline font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-xs text-gray-400 mb-6">{pkg.tagline}</p>
                <div className="text-3xl font-headline font-black text-white mb-8">
                  {pkg.price}
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-xs text-gray-300">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`/#contact?package=${encodeURIComponent(pkg.name)}`}
                className={`w-full py-4 text-center rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
                  pkg.popular ? 'btn-primary' : 'btn-outline'
                }`}
              >
                Inquire Package
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
