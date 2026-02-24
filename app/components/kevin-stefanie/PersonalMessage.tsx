'use client'

import { useEffect, useState, useRef } from "react"
import AOS from "aos"

type Wish = {
  name: string
  message: string
}

const DEFAULT_WISHES: Wish[] = [
  {
    name: "Bpk/Ibu. Kho Bie Ho",
    message:
      "SELAMAT MENEMPUH HIDUP BARU KENSON & JESSICA, SEMOGA LANGGENG DAN SUKSES SELALU 🙏",
  },
  {
    name: "Mr/Mrs. Andi Putra",
    message:
      "semoga langgeng. semoga bisa menahan ego. semoga lancar acara",
  },
  {
    name: "Mitra Intertrans Forwarding",
    message:
      "Congrats Kenson and Jessica\nWishing you always happy together",
  },
  {
    name: "Suwandy",
    message:
      "Happy Wedding Kenson Dan Jesiscca. Semoga berbahagia senanti segera punya momongan ❤️❤️❤️😍😍",
  }
]

export default function PersonalMessage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  }, [])

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const [wishes, setWishes] = useState<Wish[]>([])
  const [showAll, setShowAll] = useState(false)
  const visibleWishes = showAll ? wishes : wishes.slice(0, 7)

  useEffect(() => {
    const saved = localStorage.getItem('wishes')

    if (saved) {
      setWishes(JSON.parse(saved))
    } else {
      setWishes(DEFAULT_WISHES)
    }
  }, [])

  useEffect(() => {
    if (wishes.length) {
      localStorage.setItem('wishes', JSON.stringify(wishes))
    }
  }, [wishes])

  const openFile = () => inputRef.current?.click()

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)

    const files = e.dataTransfer.files
    if (files?.length) {
      console.log(files)
    }
  }

  const handleAddWish = () => {
    if (!name.trim() || !message.trim()) return

    const newWish = { name, message }

    setWishes(prev => [newWish, ...prev])

    setName('')
    setMessage('')
  }

  return (
    <section id="message" className="location relative flex flex-col items-center w-full h-full md:h-full bg-cover bg-no-repeat text-center">
      <div className="block absolute inset-0 bg-[#102315]/90 z-0" />
      <img src="/images/kevin-stefanie/bg-pm-top-right.png" className="absolute pointer-events-none top-0 right-0 w-[180] md:w-[380]" alt="" data-aos="fade-left" />
      <img src="/images/kevin-stefanie/bg-pm-top-left.png" className="absolute pointer-events-none top-0 left-0 w-[180] md:w-[380]" alt="" data-aos="fade-right" />
      <div className="relative z-10 flex flex-col items-center mt-[110] md:mt-[116]">
        <h3 className="font-bona font-normal text-[34px] md:text-[42px] text-white uppercase" data-aos="zoom-in">Personal <br /> Message</h3>
        <img src="/images/kevin-stefanie/line-location.png" className="w-[150] md:w-[204] mt-[13] md:mt-[20]" alt="" data-aos="zoom-in" />
        <p className="font-eb-garamond text-base font-bold md:text-lg text-white mt-[43] md:mt-[50]" data-aos="zoom-in">Leave a message or wishes for us!</p>
        <div className="mt-[19]">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-[381] md:w-[578] h-[39] py-1.5 pr-3 pl-3 rounded-sm grow bg-white border border-white text-base text-[#495057] placeholder:text-[#white] focus:outline-none sm:text-sm/6" placeholder="Dessy" data-aos="zoom-in" />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-[381] md:w-[578] h-[228] py-1.5 pr-3 pl-3 rounded-sm grow bg-white border border-white text-base text-[#495057] placeholder:text-[#white] focus:outline-none sm:text-sm/6 mt-[26]" placeholder="Write your wish here.." data-aos="zoom-in"></textarea>

          <p className="hidden md:block font-eb-garamond text-base font-bold md:text-lg text-white mt-[17]" data-aos="zoom-in">Add photo or video?</p>

          <div className="hidden md:block mt-[4]" data-aos="zoom-in">
            <div onClick={openFile} onDragOver={(e) => {
                e.preventDefault()
                setDragging(true)
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              className={`w-full h-[56] rounded-sm flex items-center gap-4 bg-[#D9D9D9] cursor-pointer transition
                ${dragging ? 'ring-2 ring-[#967C4D]' : ''}
              `}
            >

              <div className="w-[38] h-[38] flex items-center justify-center bg-[#967C4D] rounded-md ml-[13]">
                <img src="/images/kevin-stefanie/icon-plus.png" alt="" className="w-[25] h-[25]" />
              </div>


              <p className="text-[#C3C3C3] font-cormorant select-none italic">
                Drop files here to upload
              </p>

              <input ref={inputRef} type="file" className="hidden" onChange={(e) => console.log(e.target.files)} />
            </div>
          </div>

          <hr className="hidden md:block border-t border-[#967C4D] md:mt-[24] w-[464] mx-auto" data-aos="zoom-in" />

          <button type="button" onClick={handleAddWish} className="w-[381] md:w-[578] h-[54] rounded-sm flex gap-[10] justify-center items-center bg-[#967C4D] border border-[#967C4D] font-eb-garamond text-base text-white mt-[51] md:mt-[24] cursor-pointer" data-aos="zoom-in" >
            <img src="/images/kevin-stefanie/icon-send.png" alt="" className="w-[18] h-[18]" />
            <span>Send</span>
          </button>
        </div>
        <hr className="border-t border-[#967C4D] mt-[27] md:mt-[24] w-full mx-auto" data-aos="zoom-in" />
        <div className="w-[381] md:w-[578] mx-auto text-left mt-[40] md:mt-[24]">
          {wishes.map((wish, i) => (
            <div key={i} className="mb-4 pb-4 border-b border-dashed border-[#4D4D4D]" data-aos="fade-up">
              <p className="text-white font-cormorant font-semibold text-lg mb-[8]">
                {wish.name}
              </p>
              <div className="">
                <p className="text-white/90 text-sm whitespace-pre-line leading-relaxed font-cormorant">
                  {wish.message}
                </p>
              </div>
            </div>
          ))}
          <button type="button" className="w-[381] md:w-[578] h-[54] rounded-sm flex gap-[10] justify-center items-center bg-[#967C4D] border border-[#967C4D] font-eb-garamond text-base text-white mt-[16] mb-[110]" data-aos="zoom-in" >
            <img src="/images/kevin-stefanie/icon-message.png" alt="" className="w-[18] h-[18]" />
            <span>See all message</span>
          </button>
        </div>
      </div>
    </section>
  )
}