'use client'

import { useEffect } from "react"
import Link from 'next/link'
import AOS from "aos"

export default function Location() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  }, [])

  return (
    <section id="location" className="location relative flex flex-col items-center w-full h-[1267] md:h-full bg-cover bg-no-repeat text-center">
      <div className="block absolute inset-0 bg-[#102315]/90 z-0" />
      <img src="/images/kevin-stefanie/bg-location-top-right.png" className="absolute pointer-events-none top-0 right-0 w-[120] md:w-[280]" alt="" data-aos="fade-left" />
      <img src="/images/kevin-stefanie/bg-location-bottom-left.png" className="absolute pointer-events-none bottom-0 left-0 w-[180] md:w-[380]" alt="" data-aos="fade-right" />
      <div className="relative max-w-2xl z-10 flex flex-col items-center md:gap-[30] mt-[94] md:mt-[116]">
        <h3 className="font-bona font-normal text-[34px] md:text-[42px] text-white uppercase" data-aos="zoom-in">Location</h3>
        <img src="/images/kevin-stefanie/line-location.png" className="w-[150] md:w-[204] mt-[13] md:mt-[14]" alt="" data-aos="zoom-in" />
        <img src="/images/kevin-stefanie/imah-seniman.png" className="w-[276] md:w-[557] mt-[48] md:mt-0" alt="" data-aos="zoom-in" />
        <h3 className="font-bona font-normal text-2xl md:text-[32px] text-[#D3D3D0] uppercase" data-aos="zoom-in">Imah Seniman</h3>
        <p className="font-eb-garamond text-[15px] md:text-lg text-[#D3D3D0] mt-[15] md:mt-0" data-aos="zoom-in">Jl. Raya Resort Dago Pakar Raya No.3, Ciburial, Kec. Cimenyan, <br /> Kota Bandung, Jawa Barat 40198</p>
        <hr className="border-t border-[#D3D3D0] mt-[19] md:mt-[35] w-full mx-auto" data-aos="zoom-in" />
        <div className="flex flex-col md:flex-row md:gap-[67] items-center">
          <div>
            <h3 className="font-bona font-normal text-xl md:text-2xl text-[#D3D3D0] uppercase mt-[54]" data-aos="zoom-in">Holy Matrimony</h3>
            <p className="font-eb-garamond text-lg md:text-[21px] text-[#D3D3D0] mt-[8]" data-aos="zoom-in">Saturday, 31 May 2026</p>
            <p className="font-eb-garamond text-lg md:text-[21px] text-[#D3D3D0]" data-aos="zoom-in">01.00 PM - End</p>
            <p className="font-eb-garamond text-lg md:text-[21px] text-[#D3D3D0]" data-aos="zoom-in">AT</p>
            <p className="font-eb-garamond text-lg md:text-[21px] text-[#D3D3D0]" data-aos="zoom-in">Segitiga Ballroom</p>
          </div>
          <img src="/images/kevin-stefanie/cartoon.png" className="w-[133] mt-[45]" alt="" data-aos="zoom-in" />
          <div>
            <h3 className="font-bona font-normal text-xl text-[#D3D3D0] uppercase mt-[49]" data-aos="zoom-in">Wedding Reception</h3>
            <p className="font-eb-garamond text-lg md:text-[21px] text-[#D3D3D0] mt-[8]" data-aos="zoom-in">Saturday, 31 May 2026</p>
            <p className="font-eb-garamond text-lg md:text-[21px] text-[#D3D3D0]" data-aos="zoom-in">06.00 PM - End</p>
            <p className="font-eb-garamond text-lg md:text-[21px] text-[#D3D3D0]" data-aos="zoom-in">AT</p>
            <p className="font-eb-garamond text-lg md:text-[21px] text-[#D3D3D0]" data-aos="zoom-in">Segitiga Ballroom</p>
          </div>
        </div>
        <Link href="https://maps.app.goo.gl/E3wkCPG2SCYNwdQn9" target="_blank" className="flex gap-1 items-center justify-center w-[206] h-[47] md:h-[52] bg-[#967C4D] hover:bg-[#92856c] rounded-sm mt-[54] md:mt-[54] md:mb-[100]" data-aos="zoom-in">
          <img src="/images/kevin-stefanie/icon-location.png" alt="" className="w-[17] h-[17]" />
          <span className="text-base text-white">Get Direction</span>
        </Link>
      </div>
    </section>
  )
}