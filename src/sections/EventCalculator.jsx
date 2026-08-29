import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal.js'

export default function EventCalculator({ config }) {
  const ref = useReveal()

  // State
  const [eventType, setEventType] = useState('Weddings')
  const [guestCount, setGuestCount] = useState(150)
  const [planningScope, setPlanningScope] = useState('full') // 'full', 'partial', 'dayof'
  const [selectedAddons, setSelectedAddons] = useState(['floral', 'av'])

  // Base pricing tiers per event type
  const eventTypeRates = {
    Weddings: { base: 12000, perGuest: 80 },
    'Corporate Events': { base: 15000, perGuest: 65 },
    'Private Galas': { base: 10000, perGuest: 75 },
    'Brand Activations': { base: 14000, perGuest: 50 },
  }

  // Scope Multiplier
  const scopeMultipliers = {
    full: 1.35,
    partial: 1.0,
    dayof: 0.65,
  }

  // Addon Costs
  const addonOptions = [
    { id: 'floral', name: 'Bespoke Floral & Scenography', cost: 4500 },
    { id: 'av', name: 'Custom Stage, Lighting & A/V', cost: 6000 },
    { id: 'catering', name: 'Gourmet Catering Coordination', cost: 3500 },
    { id: 'logistics', name: 'VIP Concierge & Guest Transportation', cost: 2500 },
  ]

  // Toggle addon
  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id))
    } else {
      setSelectedAddons([...selectedAddons, id])
    }
  }

  // Calculate estimated price range
  const calculation = useMemo(() => {
    const rate = eventTypeRates[eventType] || eventTypeRates['Weddings']
    const baseCost = rate.base + guestCount * rate.perGuest
    const scopeCost = baseCost * (scopeMultipliers[planningScope] || 1.0)
    
    const addonsTotal = selectedAddons.reduce((sum, addonId) => {
      const addon = addonOptions.find((a) => a.id === addonId)
      return sum + (addon ? addon.cost : 0)
    }, 0)

    const totalEstimate = scopeCost + addonsTotal
    const minEstimate = Math.round((totalEstimate * 0.9) / 500) * 500
    const maxEstimate = Math.round((totalEstimate * 1.15) / 500) * 500

    return {
      min: minEstimate.toLocaleString(),
      max: maxEstimate.toLocaleString(),
    }
  }, [eventType, guestCount, planningScope, selectedAddons])

  return (
    <section id="calculator" className="py-28 lg:py-40 relative overflow-hidden" style={{ backgroundColor: 'var(--surface)' }}>
      {/* Background Accent Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] opacity-10 pointer-events-none"
        style={{ backgroundColor: 'var(--primary)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div ref={ref} className="section-reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: 'var(--primary)' }} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--primary)' }}>
              Interactive Estimator
            </span>
            <div className="h-px w-10" style={{ backgroundColor: 'var(--primary)' }} />
          </div>
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-tight mb-4">
            Estimate Your Event Budget
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select your vision parameters below to calculate an instant budget estimation range tailored for your bespoke event.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 rounded-sm border p-6 sm:p-8 space-y-8" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}>
            {/* Step 1: Event Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {Object.keys(eventTypeRates).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEventType(type)}
                    className={`py-3 px-3 rounded-sm text-xs font-bold transition-all text-center border ${
                      eventType === type ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                    style={{
                      borderColor: eventType === type ? 'var(--primary)' : 'var(--border)',
                      backgroundColor: eventType === type ? 'var(--surface)' : 'transparent',
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  2. Estimated Guest Count
                </label>
                <span className="font-headline font-bold text-xl text-white" style={{ color: 'var(--primary)' }}>
                  {guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="500"
                step="25"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                style={{ accentColor: 'var(--primary)' }}
              />
              <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-widest mt-2">
                <span>25 Intimate</span>
                <span>250 Medium</span>
                <span>500+ Large Gala</span>
              </div>
            </div>

            {/* Step 3: Planning Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                3. Scope of Planning
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { id: 'full', title: 'Full Bespoke Design', desc: 'End-to-end planning & execution' },
                  { id: 'partial', title: 'Partial Planning', desc: 'Vendor sourcing & logistics' },
                  { id: 'dayof', title: 'Month-Of Coordination', desc: 'On-site day-of management' },
                ].map((scope) => (
                  <button
                    key={scope.id}
                    type="button"
                    onClick={() => setPlanningScope(scope.id)}
                    className={`p-4 rounded-sm text-left border transition-all ${
                      planningScope === scope.id ? 'border-primary' : ''
                    }`}
                    style={{
                      borderColor: planningScope === scope.id ? 'var(--primary)' : 'var(--border)',
                      backgroundColor: planningScope === scope.id ? 'var(--surface)' : 'transparent',
                    }}
                  >
                    <div className="text-xs font-bold text-white mb-1">{scope.title}</div>
                    <div className="text-[11px] text-gray-400 leading-tight">{scope.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Optional Production Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                4. Select Production Add-ons
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id)
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-sm border cursor-pointer flex items-center justify-between transition-all ${
                        isChecked ? 'text-white' : 'text-gray-400'
                      }`}
                      style={{
                        borderColor: isChecked ? 'var(--primary)' : 'var(--border)',
                        backgroundColor: isChecked ? 'var(--surface)' : 'transparent',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-sm border flex items-center justify-center text-xs transition-colors`}
                          style={{
                            borderColor: isChecked ? 'var(--primary)' : 'var(--border)',
                            backgroundColor: isChecked ? 'var(--primary)' : 'transparent',
                          }}
                        >
                          {isChecked && <span className="text-white font-bold text-[10px]">✓</span>}
                        </div>
                        <span className="text-xs font-medium">{addon.name}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 rounded-sm border p-6 sm:p-8 flex flex-col justify-between" style={{ borderColor: 'var(--primary)', backgroundColor: 'var(--bg)' }}>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">
                Estimated Investment Range
              </span>
              <h3 className="font-headline font-black text-3xl sm:text-4xl text-white mb-2" style={{ color: 'var(--primary)' }}>
                ${calculation.min} – ${calculation.max}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Estimated total for a full-service experience based on {guestCount} guests for a {eventType} event.
              </p>

              {/* Breakdown list */}
              <div className="border-t border-b py-4 my-4 space-y-2.5 text-xs" style={{ borderColor: 'var(--border)' }}>
                <div className="flex justify-between text-gray-300">
                  <span>Selected Event:</span>
                  <span className="font-bold text-white">{eventType}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Guest Count:</span>
                  <span className="font-bold text-white">{guestCount} Guests</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Planning Scope:</span>
                  <span className="font-bold text-white capitalize">{planningScope} Planning</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Add-ons Included:</span>
                  <span className="font-bold text-white">{selectedAddons.length} Selected</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <a
                href="#contact"
                className="btn-primary w-full py-4 text-xs font-black uppercase tracking-widest text-center block rounded-sm shadow-lg"
              >
                Lock In Your Date & Inquire Now →
              </a>
              <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest">
                No commitment required · Free initial consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
