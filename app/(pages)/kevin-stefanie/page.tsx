import Header from '../../components/kevin-stefanie/Header'
import Hero from '../../components/kevin-stefanie/Hero'
import TheWedding from '../../components/kevin-stefanie/TheWedding'
import DateWedding from '../../components/kevin-stefanie/DateWedding'
import Location from '../../components/kevin-stefanie/Location'
import PhotoSlideshow from '../../components/kevin-stefanie/PhotoSlideshow'
import Rsvp from '../../components/kevin-stefanie/Rsvp'
import Dresscode from '../../components/kevin-stefanie/Dresscode'
import PersonalMessage from '../../components/kevin-stefanie/PersonalMessage'
import Footer from '../../components/kevin-stefanie/Footer'

export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <TheWedding />
      <DateWedding />
      <Location />
      <PhotoSlideshow />
      <Rsvp />
      <Dresscode />
      <PersonalMessage />
      <Footer />
    </>
  )
}