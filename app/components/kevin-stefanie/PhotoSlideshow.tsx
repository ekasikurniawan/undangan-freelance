'use client'

import { useEffect, useState } from 'react'

const images = [
  '/images/kevin-stefanie/img-slideshow-1.png'
];

export default function PhotoSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="gallery" className="relative w-full h-[499px] md:h-[861px] overflow-hidden">

      {images.map((src, i) => (
        <img key={src} src={src} alt="" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${i === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"}
            `}
          />
        ))}
      </div>

    </section>
  )
}