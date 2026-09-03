import { motion } from 'framer-motion'

const EVENT_PROCESS = [
  { icon: '📞', name: 'Discovery Consultation', description: 'We start with an in-depth consultation to understand your event vision, guest count, aesthetic preferences, and budget parameters.' },
  { icon: '🎨', name: 'Concept & Scenography', description: 'Our creative directors design a comprehensive proposal, complete with mood boards, 3D floor plans, stage renders, and vendor recommendations.' },
  { icon: '🥂', name: 'Flawless Execution', description: 'Our production team manages all on-site logistics, vendor timing, and guest concierge so you can relax and enjoy an extraordinary event.' },
]

export default function Process({ config }) {
  const steps = config.process?.length ? config.process : EVENT_PROCESS

  return (
    <section id="process" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8" style={{ backgroundColor: 'var(--primary)' }} />
            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: 'var(--primary)' }}>
              How It Works
            </span>
            <div className="h-px w-8" style={{ backgroundColor: 'var(--primary)' }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-headline font-black text-white uppercase leading-tight"
          >
            Our Seamless Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 font-light text-lg"
          >
            From initial concept design to final day-of coordination — stress-free planning at every stage.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative p-8 border border-[#222222] bg-[#141414] rounded-sm hover:border-primary/50 transition-colors duration-300 flex flex-col justify-between"
            >
              {/* Step Number Background */}
              <div className="absolute top-4 right-6 text-8xl font-headline font-black opacity-5 text-white pointer-events-none">
                {idx + 1}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center mb-6 bg-[#1A1A1A] border border-[#333333] rounded-sm">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                
                <h3 className="text-xl font-headline font-bold text-white mb-3 uppercase">
                  {step.name}
                </h3>
                <p className="text-gray-300 font-light leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="btn-primary px-8 py-4 text-xs font-bold uppercase tracking-widest inline-block rounded-sm"
          >
            {config.trialCTA || 'Book Consultation'}
          </a>
        </motion.div>
        
      </div>
    </section>
  )
}
