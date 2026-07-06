import { motion } from 'framer-motion'

export default function Hero({ config }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#111111]"
    >
      {/* Background Image with slow zoom */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/salon10.mp4" type="video/mp4" />
        </video>
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full flex flex-col items-center text-center">
        <div className="max-w-4xl mt-20">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-white dark:bg-[#111111]/60" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/90">
              {config.location}
            </span>
            <div className="h-px w-12 bg-white dark:bg-[#111111]/60" />
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <h1 className="font-headline font-normal text-white text-6xl sm:text-7xl lg:text-8xl leading-tight mb-8 drop-shadow-lg">
              {config.businessName}
            </h1>

            {/* Tagline */}
            <p className="text-white/90 text-xl sm:text-2xl font-light mb-4 tracking-wide">
              {config.tagline}
            </p>
            <p className="text-white/80 text-base sm:text-lg font-light mb-12 max-w-2xl mx-auto">
              {config.subTagline}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="/booking"
              className="btn-primary shadow-2xl"
            >
              {config.bookingCTA || 'Book Appointment'}
            </a>
            <a
              href="/#services"
              className="px-8 py-4 border border-white text-white font-medium hover:bg-white dark:bg-[#111111] hover:text-black transition-colors duration-300 shadow-xl"
            >
              View Our Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-[10px] uppercase tracking-[0.3em]">Discover</span>
        <div className="w-px h-16 bg-white dark:bg-[#111111]/20 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white dark:bg-[#111111] h-1/2"
            style={{ animation: 'scrollLine 2s ease-in-out infinite' }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes scrollLine {
          0% { top: -50%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 150%; opacity: 0; }
        }
      `}</style>
    </section>
  )
}



