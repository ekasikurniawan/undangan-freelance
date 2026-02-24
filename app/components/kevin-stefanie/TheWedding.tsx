'use client'

import { useEffect } from 'react'
import AOS from "aos"

export default function TheWedding() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  }, [])

  return (
    <section id="wedding" className="wedding relative flex flex-col items-center w-full h-[956] md:h-screen bg-cover bg-no-repeat text-center overflow-hidden">
      <img src="/images/kevin-stefanie/bg-the-wedding-top-left.png" className="absolute pointer-events-none top-0 left-0 w-[230] md:w-[560]" alt="" data-aos="fade-right" />
      <img src="/images/kevin-stefanie/bg-the-wedding-top-right.png" className="absolute pointer-events-none top-0 right-0 w-[230] md:w-[560]" alt="" data-aos="fade-left" />
      <img src="/images/kevin-stefanie/bg-the-wedding-bottom-left.png" className="absolute pointer-events-none bottom-0 left-0 w-[230] md:w-[560]" alt="" data-aos="fade-right" />
      <img src="/images/kevin-stefanie/bg-the-wedding-bottom-right.png" className="absolute pointer-events-none bottom-0 right-0 w-[230] md:w-[560]" alt="" data-aos="fade-left" />

      <div className="relative px-[54] flex flex-col items-center mt-[125] md:mt-[100] max-w-2xl">
        <img src="/images/kevin-stefanie/cartoon.png" className="md:hidden w-[140] md:w-[140]" alt="" data-aos="zoom-in" />
        <p className="font-eb-garamond text-base font-normal color-[#523601]" data-aos="zoom-in">
          By the love and grace of God, we cordially request <br /> the honour of your presence at the marriage  <br /> of our beloved son and daughter
        </p>
        <h3 className="font-safira font-normal text-[38px] sm:text-[52px] md:text-[66px] leading-tight tracking-[4px] color-[#523601] uppercase mt-[36] md:mt-[100]" data-aos="zoom-in">
          Kevin
        </h3>
        <p className="font-eb-garamond md:font-cormorant text-base font-normal color-[#523601] mt-[15] md:mt-[8]" data-aos="zoom-in">
          the first child and eldest son of
        </p>
        <p className="font-eb-garamond text-base font-normal color-[#523601]" data-aos="zoom-in">
          Mr. Felli Tharmin & Mrs. Tio Tjen Ing
        </p>
        <h3 className="font-safira font-normal text-[38px] sm:text-[52px] md:text-[66px] leading-tight tracking-[4px] color-[#523601] uppercase mt-[38] md:mt-[55]" data-aos="zoom-in">
          &
        </h3>
        <h3 className="font-safira font-normal text-[38px] sm:text-[52px] md:text-[66px] leading-tight tracking-[4px] color-[#523601] uppercase mt-[38] md:mt-[55]" data-aos="zoom-in">
          Stefanie
        </h3>
        <p className="font-eb-garamond text-base font-normal color-[#523601] mt-[15] md:mt-[8]" data-aos="zoom-in">
          the first child and eldest daughter of
        </p>
        <p className="font-eb-garamond text-base font-normal color-[#523601]" data-aos="zoom-in">
          Mr. I Nyoman Sudiana & Mrs. Kadek Ratna
        </p>
      </div>
    </section>
  )
}