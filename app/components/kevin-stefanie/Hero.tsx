'use client'

import { useEffect } from "react"
import AOS from "aos"
import Link from 'next/link'
import { useScrollSmooth } from './../../hooks/useScrollSmooth.ts'

export default function Hero() {
  const { handleScrollDown } = useScrollSmooth()

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  }, [])

  return (
    <section id="home" className="hero relative flex flex-col items-center md:justify-normal px-8 md:px-0 w-full h-[1150] md:h-screen bg-cover bg-no-repeat text-center">
      <div className="hidden md:block absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 flex flex-col items-center max-w-2xl">
        <img src="/images/kevin-stefanie/inisial-name.png" alt="Inisial Name" className="hidden md:block w-[70px] md:w-[90px] h-auto relative md:top-[133]" data-aos="zoom-in" />
        <div className="relative top-[614] md:top-[454]">
          <p className="font-cormorant font-normal text-xl md:text-2xl text-white" data-aos="zoom-in">
            The Wedding of
          </p>
          <h3 className="font-safira font-normal text-[36px] sm:text-[52px] md:text-[66px] leading-tight tracking-[4px] text-white uppercase mt-[15] md:mt-[25]" data-aos="zoom-in">
            Kevin & Stefanie
          </h3>
          <p className="font-cormorant font-normal text-sm md:text-base text-white mt-6 md:mt-[21]" data-aos="zoom-in">
            “and over all these virtues put in love, which binds them all in perfect unity”
          </p>
          <p className="hidden md:block font-cormorant font-normal text-sm md:text-base text-white" data-aos="zoom-in">
            Collosians 3:14 (NIV)
          </p>
          <p className="font-bona font-normal text-base md:text-lg text-white mt-[54] md:mt-[64]" data-aos="zoom-in">
            24 . 01 . 2025
          </p>
          <Link href="#wedding" className="mt-8 cursor-pointer md:mt-[33] inline-block" aria-label="Scroll Down" onClick={handleScrollDown}>
            <img src="/images/kevin-stefanie/arrow-down.png" alt="Arrow Down" className="w-6 md:w-7" />
          </Link>
        </div>
      </div>
      <div className="hero-action">
        <Link href="#rsvp" className="hero-circle inline-block" onClick={handleScrollDown}>
          <img src="/images/kevin-stefanie/icn-rsvp.png" alt="RSVP" />
        </Link>
      </div>
    </section>
  )
}