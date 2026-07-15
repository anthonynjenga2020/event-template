import { useReveal } from '../hooks/useReveal.js'

export default function Gallery({ config }) {
  const headerRef = useReveal()
  const gridRef = useReveal()

  const layouts = [
    'col-span-2 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-2 row-span-1',
  ]

  return (
    <section
      id="gallery"
      className="py-28 lg:py-40 bg-[#FAFAFA] dark:bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="section-reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Our Work
              </span>
            </div>
            <h2 className="font-headline font-normal text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight">
              Transformations
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-light max-w-sm lg:text-right">
            Every visit is a carefully crafted experience. Browse our portfolio of looks and treatments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          ref={gridRef}
          className="section-reveal grid grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-3 h-[600px] lg:h-[700px]"
        >
          {config.galleryImages.map((img, i) => (
            <div
              key={i}
              className={`${layouts[i] || 'col-span-1 row-span-1'} overflow-hidden cursor-pointer group relative`}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
