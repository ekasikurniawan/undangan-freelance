'use client'

import { useState, useEffect } from 'react'
import AOS from "aos"

export default function Rsvp() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  }, [])

  const [guest, setGuest] = useState('-')
  const [attendance, setAttendance] = useState('attend')

  const handleSubmit = () => {
    if (!attendance) return

    const payload = {
      guest,
      attendance,
    }

    console.log('RSVP Submitted:', payload)

    // reset state
    setGuest('-')
    setAttendance('attend')
  }

  return (
    <section id="rsvp" className="relative w-full h-full">
      <div className="w-full grid md:grid-cols-2">
        <div>
          <img src="/images/kevin-stefanie/bg-rsvp.png" className="w-full h-[454] md:h-full" alt=""/>
        </div>
        <div className="w-full h-[956] md:h-full bg-[#102315]">
          <div className="mt-[79] flex flex-col items-center text-center">
            <h3 className="font-bona font-normal text-[34px] md:text-[42px] text-white uppercase" data-aos="zoom-in">Rsvp</h3>
            <img src="/images/kevin-stefanie/line-location.png" className="w-[150] md:w-[204] mt-[13] md:mt-[14]" alt="" data-aos="zoom-in" />
            <p className="font-eb-garamond font-bold text-base md:text-[21px] text-[#D3D3D0] mt-[43]" data-aos="zoom-in">Desy</p>
            <p className="font-eb-garamond font-normal text-base md:text-[21px] text-[#D3D3D0] mt-[8]" data-aos="zoom-in">
              Konfirmasikan kehadiran Anda <br />
              sampai Sabtu, 14 September 2024
            </p>
            <div className="flex gap-[14] mt-[40] mb-[40]" data-aos="zoom-in">
              <button type="button"  onClick={() => setAttendance('attend')} className={`w-[128px] h-[50px] cursor-pointer rounded-sm flex justify-center items-center border font-eb-garamond text-base
              ${attendance === 'attend'
                ? 'bg-[#967C4D] border-[#967C4D] text-white'
                : 'bg-white border-[#967C4D] text-[#967C4D]'}`}
              >
                Attend
              </button>
              <button type="button" onClick={() => setAttendance('not')}className={`w-[128px] h-[50px] cursor-pointer rounded-sm flex justify-center items-center border font-eb-garamond text-base
              ${attendance === 'not'
                ? 'bg-[#967C4D] border-[#967C4D] text-white'
                : 'bg-white border-[#967C4D] text-[#967C4D]'}`}
              >
                Not Attend
              </button>
            </div>
            <button type="button" className="w-[270] h-[50] rounded-sm flex justify-center items-center bg-[#967C4D] border border-[#967C4D] font-eb-garamond text-base text-white" data-aos="zoom-in">
              Wedding Reception
            </button>
            <p className="font-eb-garamond font-normal text-base md:text-[21px] text-[#D3D3D0] mt-[54]" data-aos="zoom-in">Guest</p>
            <input type="text" value={guest} onChange={(e) => setGuest(e.target.value)} className="block w-[52] h-[32] py-1.5 pr-3 pl-3 rounded-sm grow bg-[#D3D3D0] text-base text-[#967C4D] placeholder:text-[#967C4D] focus:outline-none sm:text-sm/6 mt-[23]" data-aos="zoom-in" />
            <p className="font-eb-garamond font-normal text-base md:text-[21px] text-[#D3D3D0] mt-[54] mb-[13]" data-aos="zoom-in">Are You Sure?</p>
            <button type="button" onClick={handleSubmit} disabled={attendance == 'not'} className={`w-[128px] h-[50px] cursor-pointer rounded-sm flex justify-center items-center border font-eb-garamond text-base
            ${attendance == 'attend'
              ? 'bg-[#D3D3D0] text-[#967C4D] border-[#D3D3D0]'
              : 'bg-gray-400 text-white border-gray-400 cursor-not-allowed'}`}
            data-aos="zoom-in" >
              Yes
            </button>
            <p className="font-eb-garamond font-normal text-base md:text-[21px] text-[#D3D3D0] mt-[54] mb-[13]" data-aos="zoom-in">Need Help?</p>
            <button type="button" className="w-[270] h-[50] rounded-sm flex gap-[25] justify-center items-center bg-[#967C4D] border border-[#967C4D] font-eb-garamond text-base text-white" data-aos="zoom-in">
              <img src="/images/kevin-stefanie/icon-help-desk.png" alt="" className="w-[17] h-[17]" />
              <span>Chat Help Desk</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}