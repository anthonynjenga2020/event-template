import { useReveal } from '../hooks/useReveal.js'

export default function Stats({ config }) {
  if (!config.stats?.length) return null
  const ref = useReveal()

  return (
    <section className="py-6 border-y border-gray-100 dark:border-[#222] bg-white dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="section-reveal grid grid-cols-2 lg:grid-cols-4">
          {config.stats.map((stat, i) => (
            <div
              key={i}
              className={`px-6 lg:px-12 py-8 text-center ${i > 0 ? 'border-l border-gray-100 dark:border-[#222]' : ''}`}
            >
              <div className="font-headline font-normal text-4xl lg:text-5xl mb-1 text-primary">
                {stat.value}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
