import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks/useReveal.js'

export default function RecentProjects({ config }) {
  if (!config.recentProjects?.length) return null
  const headerRef = useReveal()
  const contentRef = useReveal()
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="portfolio" className="py-28 lg:py-40" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="section-reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: 'var(--primary)' }} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--primary)' }}>
              Case Studies
            </span>
            <div className="h-px w-10" style={{ backgroundColor: 'var(--primary)' }} />
          </div>
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-tight mb-4">
            Featured Case Studies.<br />
            <span style={{ color: 'var(--primary)' }}>Our Work in Action.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore some of our recent corporate galas, bespoke weddings, and brand activations. Meticulously planned from concept to execution.
          </p>
        </div>

        {/* Project cards */}
        <div ref={contentRef} className="section-reveal grid lg:grid-cols-3 gap-6">
          {config.recentProjects.map((project, i) => {
            const isFeatured = i === 0

            return (
              <div key={i}
                className={`relative rounded-sm border flex flex-col card-hover overflow-hidden transition-all duration-300 ${isFeatured ? 'lg:-mt-4 lg:mb-4' : ''}`}
                style={{
                  backgroundColor: 'var(--bg)',
                  borderColor: isFeatured ? 'var(--primary)' : 'var(--border)',
                }}
              >
                {isFeatured && (
                  <div className="py-2 text-center text-xs font-black uppercase tracking-widest text-white"
                    style={{ backgroundColor: 'var(--primary)' }}>
                    Featured Event Case Study
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon + Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{project.icon}</span>
                    {project.category && (
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm border border-white/10 text-gray-400">
                        {project.category}
                      </span>
                    )}
                  </div>

                  <h3 className="font-headline font-black text-2xl text-white uppercase mb-1">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Badges */}
                  <div className="flex items-center gap-4 mb-6 text-xs text-gray-300 font-medium">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                      <span>{project.duration}</span>
                    </div>
                    {project.guestCount && (
                      <div className="flex items-center gap-1.5 border-l border-white/10 pl-3">
                        <span className="text-gray-500">👥</span>
                        <span>{project.guestCount}</span>
                      </div>
                    )}
                  </div>

                  {/* Includes */}
                  <div className="space-y-3 mb-8 flex-1">
                    {project.includes.map((item, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: 'var(--primary)' }}>
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="border-t pt-6 mt-auto" style={{ borderColor: 'var(--border)' }}>
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Investment</p>
                        <p className="font-headline font-black text-2xl text-white">
                          {project.budget}
                        </p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`w-full py-3.5 rounded-sm text-xs font-black uppercase tracking-widest text-center transition-all flex items-center justify-center gap-2 ${
                        isFeatured ? 'btn-primary' : 'border hover:border-primary text-white'
                      }`}
                      style={!isFeatured ? { borderColor: 'var(--border)' } : {}}
                    >
                      <span>View Case Study</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-3xl rounded-sm border p-6 sm:p-8 my-8 shadow-2xl overflow-hidden"
                style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--primary)' }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                >
                  ✕
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{selectedProject.icon}</span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--primary)' }}>
                      {selectedProject.category || 'Event Case Study'}
                    </span>
                    <h3 className="font-headline font-black text-2xl sm:text-3xl text-white uppercase">
                      {selectedProject.name}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {selectedProject.tagline}
                </p>

                {/* Event Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-sm border mb-6" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
                  <div>
                    <span className="text-gray-500 text-[10px] uppercase tracking-widest block">Venue</span>
                    <span className="text-white text-xs font-bold">{selectedProject.venue || 'Private Location'}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-[10px] uppercase tracking-widest block">Guest Count</span>
                    <span className="text-white text-xs font-bold">{selectedProject.guestCount || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-[10px] uppercase tracking-widest block">Planning Time</span>
                    <span className="text-white text-xs font-bold">{selectedProject.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-[10px] uppercase tracking-widest block">Budget Scope</span>
                    <span className="text-white text-xs font-bold">{selectedProject.budget}</span>
                  </div>
                </div>

                {/* Highlights */}
                {selectedProject.highlights && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">Key Highlights & Production</h4>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {selectedProject.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <span style={{ color: 'var(--primary)' }}>✦</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Client Quote */}
                {selectedProject.clientQuote && (
                  <div className="p-4 rounded-sm border-l-2 mb-6 italic text-sm text-gray-300" style={{ borderColor: 'var(--primary)', backgroundColor: 'var(--surface)' }}>
                    "{selectedProject.clientQuote}"
                  </div>
                )}

                {/* Modal Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="btn-primary flex-1 py-3 text-xs uppercase font-bold text-center rounded-sm"
                  >
                    Inquire About a Similar Event →
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-outline px-6 py-3 text-xs uppercase font-bold text-center rounded-sm"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <p className="text-center text-gray-500 text-xs mt-10 uppercase tracking-widest">
          All events managed with full liability insurance & dedicated on-site execution team.
        </p>
      </div>
    </section>
  )
}
