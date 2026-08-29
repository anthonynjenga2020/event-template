import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks/useReveal.js'

export default function Gallery({ config }) {
  const [lightbox, setLightbox] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const headerRef = useReveal()

  // Parse gallery items (supporting both string URLs and object format)
  const rawImages = config.galleryImages || []
  const galleryItems = rawImages.map((img, i) => {
    if (typeof img === 'string') {
      return {
        url: img,
        category: i % 2 === 0 ? 'Weddings' : 'Corporate Galas',
        title: `Portfolio Event ${i + 1}`,
        location: config.location || 'Nairobi'
      }
    }
    return img
  })

  // Available categories
  const categories = ['All', ...new Set(galleryItems.map(item => item.category).filter(Boolean))]

  // Filtered images
  const filteredImages = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section
      id="gallery"
      className="py-28 lg:py-40"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="section-reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10" style={{ backgroundColor: 'var(--primary)' }} />
              <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--primary)' }}>
                Our Portfolio
              </span>
            </div>
            <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-tight">
              Event Showcase
            </h2>
          </div>
          <p className="text-gray-400 max-w-md lg:text-right text-sm sm:text-base leading-relaxed">
            Meticulous attention to detail. Unforgettable experiences. Curated portfolio of our finest galas, weddings, and activations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b pb-6" style={{ borderColor: 'var(--border)' }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 relative ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                style={{
                  backgroundColor: isActive ? 'var(--surface)' : 'transparent',
                  border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                }}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--primary)' }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[450px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((imgItem, i) => (
              <motion.div
                key={imgItem.url + i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-sm cursor-pointer group relative aspect-[4/3] border"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
                onClick={() => setLightbox(imgItem)}
              >
                <img
                  src={imgItem.url}
                  alt={imgItem.title || 'Event Showcase'}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                />

                {/* Dark Gradient Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--primary)' }}>
                    {imgItem.category}
                  </span>
                  <h4 className="text-white font-headline font-bold text-lg leading-tight mb-1">
                    {imgItem.title}
                  </h4>
                  {imgItem.location && (
                    <p className="text-gray-400 text-xs flex items-center gap-1">
                      <span>📍</span>
                      <span>{imgItem.location}</span>
                    </p>
                  )}
                </div>

                {/* Search Icon Badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <img
              src={lightbox.url}
              alt={lightbox.title}
              className="w-full max-h-[75vh] object-contain rounded-sm border"
              style={{ borderColor: 'var(--border)' }}
            />
            {lightbox.title && (
              <div className="mt-4 text-center">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--primary)' }}>
                  {lightbox.category}
                </span>
                <h3 className="text-white font-headline font-black text-xl mt-1">
                  {lightbox.title}
                </h3>
              </div>
            )}
            <button
              className="absolute -top-12 right-0 text-white w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
