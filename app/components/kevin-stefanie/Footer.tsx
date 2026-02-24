'use client'

export default function Footer() {
  return (
    <footer id="footer" className="footer relative flex flex-col items-center w-full h-[956] md:h-[945] bg-cover bg-no-repeat text-center">
      <div className="block absolute inset-0 bg-[linear-gradient(180deg,rgba(16,35,21,0)_0%,rgba(16,35,21,0.43)_50%,rgba(16,35,21,0.75)_70%,rgba(16,35,21,0.85)_80%,#102315_100%)] z-0" />
      <div className="flex flex-col items-center mt-[672] md:mt-[632] relative z-10">
        <h3 className="font-safira font-normal text-5xl md:text-[64px] text-white uppercase">
          Thank You
        </h3>
        <p className="font-eb-garamond text-lg md:text-[21px] md:mt-[10] font-normal text-white">
          With our sincere gratitude, thank you for your <br /> kindness and warm wishes.
        </p>
        <img src="/images/kevin-stefanie/provite.png" alt="" className="w-[138] h-[38] mt-[56] md:mt-[43]" />
      </div>
    </footer>
  )
}