'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useScrollSmooth } from './../../hooks/useScrollSmooth.ts'

export default function Header() {
  const [show, setShow] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)
  const [open, setOpen] = useState(false)
  const { handleScrollDown } = useScrollSmooth()

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      if (current <= 10) {
        setShow(true)
      } else if (current > lastScroll) {
        setShow(false)
      } else {
        setShow(true)
      }

      setLastScroll(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScroll])

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
      `}
    >
      <div className={`w-[92vw] max-w-6xl px-10 py-6 ${lastScroll > 10 ? 'md:backdrop-blur-md md:bg-black/40 md:border md:border-white/20 md:rounded-xl md:shadow-lg' : ''}`}>
        <nav className="hidden md:flex gap-8 text-white font-bona tracking-widest text-sm">
          <Link href="#home" className="text-base font-cormorant uppercase hover:text-gray-500" onClick={handleScrollDown}>HOME</Link>
          <Link href="#wedding" className="text-base font-cormorant uppercase hover:text-gray-500" onClick={handleScrollDown}>THE WEDDING</Link>
          <Link href="#location" className="text-base font-cormorant uppercase hover:text-gray-500" onClick={handleScrollDown}>LOCATION</Link>
          <Link href="#gallery" className="text-base font-cormorant uppercase hover:text-gray-500" onClick={handleScrollDown}>GALLERY</Link>
          <Link href="#rsvp" className="text-base font-cormorant uppercase hover:text-gray-500" onClick={handleScrollDown}>RSVP</Link>
          <Link href="#dress" className="text-base font-cormorant uppercase hover:text-gray-500" onClick={handleScrollDown}>DRESS CODE</Link>
          <Link href="#gift" className="text-base font-cormorant uppercase hover:text-gray-500" onClick={handleScrollDown}>GIFT</Link>
          <Link href="#message" className="text-base font-cormorant uppercase hover:text-gray-500" onClick={handleScrollDown}>PERSONAL MESSAGE</Link>
          <Link href="#logout" className="text-base font-cormorant uppercase hover:text-gray-500" onClick={handleScrollDown}>LOGOUT</Link>
        </nav>

        <div className="flex md:hidden items-center justify-end text-white">
          <button onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        {open && (
          <div className="backdrop-blur-md bg-black/40 border border-white/20 rounded-xl shadow-lg px-6 py-4 md:hidden mt-4 flex flex-col gap-4 text-white font-bona tracking-widest text-sm">
            <Link href="#home" className="text-base font-cormorant uppercase" onClick={handleScrollDown}>HOME</Link>
            <Link href="#wedding" className="text-base font-cormorant uppercase" onClick={handleScrollDown}>THE WEDDING</Link>
            <Link href="#location" className="text-base font-cormorant uppercase" onClick={handleScrollDown}>LOCATION</Link>
            <Link href="#gallery" className="text-base font-cormorant uppercase" onClick={handleScrollDown}>GALLERY</Link>
            <Link href="#rsvp" className="text-base font-cormorant uppercase" onClick={handleScrollDown}>RSVP</Link>
            <Link href="#dress" className="text-base font-cormorant uppercase" onClick={handleScrollDown}>DRESS CODE</Link>
            <Link href="#gift" className="text-base font-cormorant uppercase" onClick={handleScrollDown}>GIFT</Link>
            <Link href="#message" className="text-base font-cormorant uppercase" onClick={handleScrollDown}>PERSONAL MESSAGE</Link>
            <Link href="#logout" className="text-base font-cormorant uppercase" onClick={handleScrollDown}>LOGOUT</Link>
          </div>
        )}

      </div>
    </header>
  )
}