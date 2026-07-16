import { useState, useRef } from 'react'

export default function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(position)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[16/10] overflow-hidden select-none cursor-ew-resize group"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Base) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
      />
      <div className="absolute top-4 right-4 bg-white dark:bg-[#111111]/80 backdrop-blur-md px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-gray-900 dark:text-white shadow-sm pointer-events-none">
        {afterLabel}
      </div>

      {/* Before Image (Overlay clipped by width) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute top-0 left-0 h-full object-cover max-w-none pointer-events-none" 
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100vw' }}
        />
        <div className="absolute top-4 left-4 bg-white dark:bg-[#111111]/80 backdrop-blur-md px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-gray-900 dark:text-white shadow-sm pointer-events-none">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white dark:bg-[#111111] pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)] flex items-center justify-center transition-transform duration-75"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-8 h-8 bg-white dark:bg-[#111111] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 dark:text-white">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 dark:text-white -ml-2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  )
}



