import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import { insertLead } from '../lib/supabase.js'

export default function RequestQuoteForm({ config }) {
  const ref = useReveal()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', eventType: '', eventDate: '', guestCount: '', budget: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const budgets = ['Under $15k', '$15k - $30k', '$30k - $50k', '$50k+']
  const guestCounts = ['Under 50', '50 - 100', '100 - 300', '300+']

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await insertLead({
        businessName:  config.businessName,
        name:          form.name,
        email:         form.email,
        phone:         form.phone,
        goal:          `Date: ${form.eventDate} | Guests: ${form.guestCount} | Budget: ${form.budget}`,
        classInterest: form.eventType,
        preferredTime: 'N/A',
        source:        'website_consultation_request',
      })
    } catch (err) {
      console.error('Lead submit error:', err)
    }
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-28 lg:py-40 relative overflow-hidden"
      style={{ backgroundColor: 'var(--surface)' }}
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ backgroundColor: 'var(--primary)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={ref} className="section-reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: 'var(--primary)' }} />
              <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--primary)' }}>
                Inquire Now
              </span>
            </div>
            <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-tight mb-6">
              Let's Plan.<br />
              Your Dream.<br />
              <span style={{ color: 'var(--primary)' }}>Event.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Ready to create an unforgettable experience? Book a consultation today. We'll discuss your vision and see how we can bring it to life.
            </p>
            <div className="space-y-4">
              {[
                'Complimentary initial consultation',
                'Customized event proposals',
                'Exclusive venue network access',
                'Stress-free planning process',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-sm flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--primary)' }}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-sm border p-8" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-headline font-black text-2xl text-white uppercase mb-3">Consultation Requested!</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We'll contact you within 24 hours to schedule your consultation.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-headline font-bold text-xl text-white uppercase mb-6">
                  Book a Consultation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Full Name *</label>
                      <input type="text" required value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-sm text-white text-sm placeholder-gray-600 border focus:outline-none transition-colors"
                        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Phone *</label>
                      <input type="tel" required value={form.phone}
                        onChange={e => setForm({...form, phone: e.target.value})}
                        placeholder="+254 700 000 000"
                        className="w-full px-4 py-3 rounded-sm text-white text-sm placeholder-gray-600 border focus:outline-none transition-colors"
                        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Email</label>
                    <input type="email" value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      placeholder="jane@email.com"
                      className="w-full px-4 py-3 rounded-sm text-white text-sm placeholder-gray-600 border focus:outline-none transition-colors"
                      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Event Date</label>
                      <input type="date" value={form.eventDate}
                        onChange={e => setForm({...form, eventDate: e.target.value})}
                        className="w-full px-4 py-3 rounded-sm text-white text-sm border focus:outline-none transition-colors"
                        style={Object.assign({backgroundColor: 'var(--surface)', borderColor: 'var(--border)'}, form.eventDate ? {} : {color: '#4b5563'})}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Event Type *</label>
                      <select required value={form.eventType}
                        onChange={e => setForm({...form, eventType: e.target.value})}
                        className="w-full px-4 py-3 rounded-sm text-sm border focus:outline-none transition-colors appearance-none"
                        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: form.eventType ? 'white' : '#4b5563' }}
                      >
                        <option value="" disabled>Select event type...</option>
                        {config.services?.map(s => <option key={s.name} value={s.name} className="text-white bg-gray-900">{s.name}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Guest Count</label>
                      <select value={form.guestCount}
                        onChange={e => setForm({...form, guestCount: e.target.value})}
                        className="w-full px-4 py-3 rounded-sm text-sm border focus:outline-none transition-colors appearance-none"
                        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: form.guestCount ? 'white' : '#4b5563' }}
                      >
                        <option value="">Select guest count...</option>
                        {guestCounts.map(g => <option key={g} value={g} className="text-white bg-gray-900">{g}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Est. Budget</label>
                      <select value={form.budget}
                        onChange={e => setForm({...form, budget: e.target.value})}
                        className="w-full px-4 py-3 rounded-sm text-sm border focus:outline-none transition-colors appearance-none"
                        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: form.budget ? 'white' : '#4b5563' }}
                      >
                        <option value="">Select budget...</option>
                        {budgets.map(b => <option key={b} value={b} className="text-white bg-gray-900">{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <button type="submit" disabled={loading}
                    className="btn-primary w-full py-4 rounded-sm text-sm flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? 'Submitting...' : 'Inquire Now →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
