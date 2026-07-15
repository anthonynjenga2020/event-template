import { motion } from 'framer-motion'

const SPA_PROCESS = [
  { icon: '💬', name: 'Consultation', description: 'Book a complimentary consultation. We assess your hair, skin, or wellness needs and design a personalized treatment plan just for you.' },
  { icon: '✨', name: 'Treatment', description: 'Relax and enjoy your bespoke treatment performed by our master artists using only premium, professional-grade products.' },
  { icon: '🌿', name: 'Aftercare', description: 'We provide personalized aftercare guidance and recommend the right products so your results last as long as possible.' },
]

export default function Process({ config }) {
  const steps = config.process?.length ? config.process : SPA_PROCESS

  return (
    <section id="process" className="py-24 bg-white dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              How It Works
            </span>
            <div className="h-px w-8 bg-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-headline font-normal text-gray-900 dark:text-white leading-tight"
          >
            Your Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 dark:text-gray-400 font-light text-lg"
          >
            From your first visit to your regular ritual — here's what to expect.
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
              className="relative p-8 border border-gray-100 dark:border-[#222] bg-[#FAFAFA] dark:bg-[#0A0A0A] hover:border-primary/30 transition-colors duration-300"
            >
              {/* Step Number Background */}
              <div className="absolute top-4 right-6 text-8xl font-headline font-normal opacity-5 text-primary pointer-events-none">
                {idx + 1}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center mb-6 bg-white dark:bg-[#111111] border border-gray-100 dark:border-[#222]">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                
                <h3 className="text-xl font-headline font-normal text-gray-900 dark:text-white mb-3">
                  {step.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm">
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
            href="/booking"
            className="btn-primary px-8 py-4 text-base inline-block"
          >
            {config.bookingCTA || 'Book Appointment'}
          </a>
        </motion.div>
        
      </div>
    </section>
  )
}
