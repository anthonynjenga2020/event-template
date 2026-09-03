import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import { insertContact } from '../lib/supabase.js'

export default function Contact({ config }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const headerRef = useReveal()
  const contentRef = useReveal()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await insertContact({
        name:    form.name,
        phone:   form.phone,
        email:   form.email,
        message: form.message,
        source:  'website_contact',
      })
    } catch (err) {
      console.error('Contact submit error:', err)
    }
    setLoading(false)
    setSent(true)
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <section id="contact-info" className="py-28 lg:py-40 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="section-reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: 'var(--primary)' }} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--primary)' }}>
              Get In Touch
            </span>
          </div>
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-tight">
            Contact Our Concierge
          </h2>
        </div>

        <div ref={contentRef} className="section-reveal grid lg:grid-cols-2 gap-12">
          {/* Left: Info + Form */}
          <div className="space-y-10">
            {/* Contact details */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Location',
                  value: config.location,
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Phone',
                  value: config.phone,
                  href: `tel:${config.phone}`,
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Email',
                  value: config.email,
                  href: `mailto:${config.email}`,
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: 'Hours',
                  value: 'Mon–Fri 9am–6pm',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 border border-[#222222] bg-[#141414] rounded-sm"
                >
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-sm bg-[#1A1A1A] border border-[#333333]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="p-8 border border-[#222222] bg-[#141414] rounded-sm">
              <h3 className="font-headline font-bold text-2xl text-white uppercase mb-6">
                Send Us a Message
              </h3>
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--primary)' }}>
                    <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-headline font-bold text-white uppercase text-xl mb-2">Message Sent!</p>
                  <p className="text-gray-400 font-light text-sm">We'll get back to you within a few hours.</p>
                  <button onClick={() => setSent(false)} className="mt-4 text-xs font-bold uppercase tracking-widest text-primary hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 text-white text-sm bg-[#1A1A1A] placeholder-gray-600 border border-[#333333] focus:border-primary focus:outline-none rounded-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => setForm({...form, phone: e.target.value})}
                        placeholder="+254 700 000 000"
                        className="w-full px-4 py-3 text-white text-sm bg-[#1A1A1A] placeholder-gray-600 border border-[#333333] focus:border-primary focus:outline-none rounded-sm transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      placeholder="jane@email.com"
                      className="w-full px-4 py-3 text-white text-sm bg-[#1A1A1A] placeholder-gray-600 border border-[#333333] focus:border-primary focus:outline-none rounded-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Message *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                      placeholder="Tell us about your upcoming event, vision, and timeline..."
                      rows={4}
                      className="w-full px-4 py-3 text-white text-sm bg-[#1A1A1A] placeholder-gray-600 border border-[#333333] focus:border-primary focus:outline-none rounded-sm transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="overflow-hidden border border-[#222222] rounded-sm h-full min-h-[400px] lg:min-h-0 bg-[#141414]">
            {config.googleMapsEmbed ? (
              <iframe
                src={config.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Business Location"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-gray-400 bg-[#141414] p-8">
                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-center">
                  <p className="font-headline font-bold text-white text-lg uppercase">{config.businessName}</p>
                  <p className="text-xs text-gray-400 mt-1">{config.location}</p>
                </div>
                <a
                  href={`https://maps.google.com?q=${encodeURIComponent(config.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-widest text-primary hover:underline transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
