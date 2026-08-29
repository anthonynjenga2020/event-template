import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

export default function EventCalculatorPage({ config }) {
  const [eventType, setEventType] = useState('Wedding Celebration')
  const [guests, setGuests] = useState(150)
  const [venueTier, setVenueTier] = useState('Grand Hotel Ballroom')
  const [selectedAddons, setSelectedAddons] = useState(['360 Video Booth', 'Floral Installations'])
  const [submitted, setSubmitted] = useState(false)

  const eventTypes = [
    { name: 'Wedding Celebration', icon: '💍', baseCost: 250000, perGuest: 1200 },
    { name: 'Corporate Gala', icon: '👔', baseCost: 300000, perGuest: 1500 },
    { name: 'VIP Birthday Party', icon: '🎂', baseCost: 150000, perGuest: 1000 },
    { name: 'Concert & Festival', icon: '🎤', baseCost: 400000, perGuest: 800 },
  ]

  const venueTiers = [
    { name: 'Boutique Hall', multiplier: 1.0, desc: 'Chic indoor space up to 200 guests' },
    { name: 'Luxury Estate Garden', multiplier: 1.25, desc: 'Scenic outdoor lush grounds & marquees' },
    { name: 'Grand Hotel Ballroom', multiplier: 1.4, desc: 'Opulent high-ceiling ballroom with chandeliers' },
    { name: 'Rooftop Lounge', multiplier: 1.3, desc: 'Skyline views with ambient lighting' },
  ]

  const addonsList = [
    { name: '360 Video Booth', cost: 45000, icon: '🎥', desc: 'Slow-mo 360 spinner booth with instant sharing' },
    { name: 'Live Jazz / DJ Band', cost: 85000, icon: '🎷', desc: '5-piece live band or premium DJ setup' },
    { name: 'Drone Videography', cost: 35000, icon: '🛸', desc: '4K aerial drone highlight coverage' },
    { name: 'Custom Cocktail Bar', cost: 65000, icon: '🍸', desc: 'Mixologist signature drinks & open bar setup' },
    { name: 'Floral Installations', cost: 50000, icon: '💐', desc: 'Bespoke entryway & stage flower arches' },
  ]

  const toggleAddon = (name) => {
    if (selectedAddons.includes(name)) {
      setSelectedAddons(selectedAddons.filter(a => a !== name))
    } else {
      setSelectedAddons([...selectedAddons, name])
    }
  }

  // Calculate live estimate
  const totalEstimate = useMemo(() => {
    const typeObj = eventTypes.find(t => t.name === eventType) || eventTypes[0]
    const venueObj = venueTiers.find(v => v.name === venueTier) || venueTiers[0]

    const base = (typeObj.baseCost + (guests * typeObj.perGuest)) * venueObj.multiplier
    const addonsTotal = selectedAddons.reduce((sum, name) => {
      const item = addonsList.find(a => a.name === name)
      return sum + (item ? item.cost : 0)
    }, 0)

    const total = base + addonsTotal
    return Math.round(total / 5000) * 5000
  }, [eventType, guests, venueTier, selectedAddons])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      window.location.href = `/#contact?calc=${encodeURIComponent(`${eventType} for ${guests} guests at ${venueTier}`)}`
    }, 1500)
  }

  return (
    <div className="pt-28 pb-20 min-h-screen relative" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[180px] opacity-15 pointer-events-none"
        style={{ backgroundColor: 'var(--primary)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--primary)' }} />
            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: 'var(--primary)' }}>
              Interactive Estimator
            </span>
            <div className="h-px w-8" style={{ backgroundColor: 'var(--primary)' }} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black text-white uppercase tracking-tight mb-4">
            Event Cost & <span style={{ color: 'var(--primary)' }}>Budget Calculator</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Configure your event type, guest count, venue tier, and add-on experiences for an instant transparent cost breakdown.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* 1. Event Type */}
            <div className="p-6 rounded-sm border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {eventTypes.map(t => (
                  <button
                    key={t.name}
                    onClick={() => setEventType(t.name)}
                    className={`p-4 rounded-sm border text-left transition-all ${
                      eventType === t.name ? 'border-purple-500 bg-purple-500/10' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{t.icon}</span>
                    <div className="text-xs font-bold text-white">{t.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Guest Count Slider */}
            <div className="p-6 rounded-sm border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className="flex justify-between items-center mb-4">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  2. Estimated Guest Count
                </label>
                <span className="text-purple-400 font-headline font-bold text-xl">{guests} Guests</span>
              </div>
              <input
                type="range"
                min="30"
                max="1000"
                step="10"
                value={guests}
                onChange={e => setGuests(parseInt(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer h-2 bg-gray-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>30 (Intimate)</span>
                <span>250 (Classic)</span>
                <span>1,000+ (Grand Gala)</span>
              </div>
            </div>

            {/* 3. Venue Style / Tier */}
            <div className="p-6 rounded-sm border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">
                3. Select Venue Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {venueTiers.map(v => (
                  <button
                    key={v.name}
                    onClick={() => setVenueTier(v.name)}
                    className={`p-4 rounded-sm border text-left transition-all ${
                      venueTier === v.name ? 'border-purple-500 bg-purple-500/10' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="text-sm font-bold text-white mb-1">{v.name}</div>
                    <div className="text-xs text-gray-400">{v.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Add-On Experiences */}
            <div className="p-6 rounded-sm border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">
                4. Select Experience Add-Ons
              </label>
              <div className="space-y-3">
                {addonsList.map(a => {
                  const active = selectedAddons.includes(a.name)
                  return (
                    <div
                      key={a.name}
                      onClick={() => toggleAddon(a.name)}
                      className={`p-4 rounded-sm border cursor-pointer flex items-center justify-between transition-all ${
                        active ? 'border-purple-500 bg-purple-500/10' : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{a.icon}</span>
                        <div>
                          <div className="text-xs font-bold text-white">{a.name}</div>
                          <div className="text-[11px] text-gray-400">{a.desc}</div>
                        </div>
                      </div>
                      <div className="text-xs font-mono font-bold text-purple-300 shrink-0">
                        +Ksh {a.cost.toLocaleString()}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Estimate Summary Box (Right Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              layout
              className="p-8 rounded-sm border relative overflow-hidden"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <h3 className="text-xl font-headline font-bold text-white uppercase tracking-wider mb-6">
                Estimated Summary
              </h3>

              <div className="space-y-3 border-t border-white/10 pt-6 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Event Category</span>
                  <span className="text-white font-medium">{eventType}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Total Guests</span>
                  <span className="text-white font-medium">{guests} People</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Venue Choice</span>
                  <span className="text-white font-medium">{venueTier}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Active Add-ons</span>
                  <span className="text-white font-medium">{selectedAddons.length} Selected</span>
                </div>
              </div>

              {/* Price Display */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">Estimated Total Package</span>
                <span className="text-4xl font-headline font-black text-white block mb-6">
                  Ksh {totalEstimate.toLocaleString()}
                </span>

                <button
                  onClick={handleSubmit}
                  className="btn-primary w-full py-4 rounded-sm text-sm font-bold uppercase tracking-widest text-center"
                >
                  {submitted ? 'Generating Proposal...' : 'Lock In Date & Get Proposal →'}
                </button>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  )
}
