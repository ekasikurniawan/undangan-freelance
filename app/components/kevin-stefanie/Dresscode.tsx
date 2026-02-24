'use client'

import { useEffect } from 'react'
import AOS from "aos"

export default function Dresscode() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  }, [])

  return (
    <section id="dress" className="wedding relative flex flex-col items-center w-full h-[956] md:h-screen bg-cover bg-no-repeat text-center overflow-hidden">
      <img src="/images/kevin-stefanie/bg-the-wedding-top-left.png" className="absolute pointer-events-none top-0 left-0 w-[180] md:w-[380]" alt="" data-aos="fade-right" />
      <img src="/images/kevin-stefanie/bg-the-wedding-top-right.png" className="absolute pointer-events-none top-0 right-0 w-[180] md:w-[380]" alt="" data-aos="fade-left" />
      <img src="/images/kevin-stefanie/bg-the-wedding-bottom-left.png" className="absolute pointer-events-none bottom-0 left-0 w-[180] md:w-[380]" alt="" data-aos="fade-right" />
      <img src="/images/kevin-stefanie/bg-gift-bottom-right.png" className="absolute pointer-events-none bottom-0 right-0 w-[180] md:w-[380]" alt="" data-aos="fade-left" />

      <div className="relative px-[54] mt-[145] md:mt-[100]">
        <div className="flex flex-col items-center ">
          <h3 className="font-bona font-normal text-[34px] md:text-[42px] text-[#523601] uppercase" data-aos="zoom-in">
            Dresscode
          </h3>
          <img src="/images/kevin-stefanie/line-gift.png" className="w-[150] md:w-[204] mt-[13] md:mt-[7]" alt="" data-aos="zoom-in" />
          <p className="font-eb-garamond md:hidden font-bold text-base md:text-[21px] text-[#523601] mt-[39] uppercase" data-aos="zoom-in">Dress to Impress</p>
          <p className="font-eb-garamond md:hidden font-normal text-base md:text-[21px] text-[#523601]" data-aos="zoom-in">Ladies, avoid black, white, and beige colours</p>
          <p className="font-cormorant hidden md:block font-normal text-base md:text-[21px] text-[#523601] mt-[56]" data-aos="zoom-in">
            To support our wedding theme, we kindly encourageour <br /> guests to wear colors below
          </p>
          <div className="hidden md:flex gap-[25] mt-[50]" data-aos="zoom-in">
            <div className="w-[57] h-[57] rounded-full bg-[#570F0F] shadow-[0px_4px_4px_0px_#00000040] "></div>
            <div className="w-[57] h-[57] rounded-full bg-[#172D1D] shadow-[0px_4px_4px_0px_#00000040] "></div>
            <div className="w-[57] h-[57] rounded-full bg-[#523601] shadow-[0px_4px_4px_0px_#00000040] "></div>
            <div className="w-[57] h-[57] rounded-full bg-[#575757] shadow-[0px_4px_4px_0px_#00000040] "></div>
          </div>
        </div>
        <div id="gift" className="mt-[90] flex flex-col items-center">
          <h3 className="font-bona font-normal text-[34px] md:text-[42px] text-[#523601] uppercase" data-aos="zoom-in">
            Gift
          </h3>
          <img src="/images/kevin-stefanie/line-gift.png" className="w-[150] md:w-[204] mt-[13] md:mt-[14]" alt="" data-aos="zoom-in" />
          <p className="font-eb-garamond font-bold md:font-semibold text-base text-[#523601] mt-[39] uppercase" data-aos="zoom-in">
            Your Prayers and Presence Will Be <br className="md:hidden" /> The Greatest Blessing for Us
          </p>
          <p className="font-eb-garamond font-normal text-base text-[#523601]" data-aos="zoom-in">
            Should you wish to express your love with a gift,  kindly find <br className="md:hidden" /> the details <br className="hidden md:block" /> below for your convenience
          </p>
          <img src="/images/kevin-stefanie/logo-bca.png" className="w-[99] md:w-[144] mt-[35] md:mt-[46]" alt="" data-aos="zoom-in" />
          <p className="font-eb-garamond font-normal text-base text-[#523601] mt-[14] md:mt-[28]" data-aos="zoom-in">
            Giovanni Reinaldo VarianThamrin
          </p>
          <button type="button" className="w-[85] h-[37] cursor-pointer rounded-sm flex justify-center items-center mt-[39] md:mt-[27] bg-[#967C4D] border border-[#967C4D] font-eb-garamond text-base text-white" data-aos="zoom-in">
            Copy
          </button>
        </div>
      </div>
    </section>
  )
}