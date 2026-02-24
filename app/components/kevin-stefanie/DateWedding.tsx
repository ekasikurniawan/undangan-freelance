'use client'

export default function DateWedding() {
  return (
    <section id="date-wedding" className="date-wedding relative flex flex-col items-center w-full h-[196] md:h-[316] bg-cover bg-no-repeat text-center">
      <div className="block absolute inset-0 bg-black/40 z-0" />
      <div className="relative py-[22] px-4 flex flex-col items-center max-w-2xl">
        <h3 className="font-safira font-normal text-2xl md:text-[34px] text-white uppercase" data-aos="zoom-in">
          Sunday, 08 FEbruary 2026
        </h3>
        <div className="flex items-center gap-[16] md:gap-[30] mt-[12] md:mt-[32]">
          <div className="flex flex-col items-center justify-center w-[80] h-[80] md:w-[145] md:h-[145] rounded-[10] bg-[#FFFFFF8D]" data-aos="zoom-in">
            <h3 className="font-safira text-4xl md:text-[40] text-[#172D1D]">0</h3>
            <p className="font-eb-garamond text-[11px] md:text-16 text-[#172D1D]">Days</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[80] h-[80] md:w-[145] md:h-[145] rounded-[10] bg-[#FFFFFF8D]" data-aos="zoom-in">
            <h3 className="font-safira text-4xl md:text-[40] text-[#172D1D]">0</h3>
            <p className="font-eb-garamond text-[11px] md:text-16 text-[#172D1D]">Hours</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[80] h-[80] md:w-[145] md:h-[145] rounded-[10] bg-[#FFFFFF8D]" data-aos="zoom-in">
            <h3 className="font-safira text-4xl md:text-[40] text-[#172D1D]">0</h3>
            <p className="font-eb-garamond text-[11px] md:text-16 text-[#172D1D]">Second</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[80] h-[80] md:w-[145] md:h-[145] rounded-[10] bg-[#FFFFFF8D]" data-aos="zoom-in">
            <h3 className="font-safira text-4xl md:text-[40] text-[#172D1D]">0</h3>
            <p className="font-eb-garamond text-[11px] md:text-16 text-[#172D1D]">Minutes</p>
          </div>
        </div>
      </div>
    </section>
  )
}