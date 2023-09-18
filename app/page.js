import React from "react"
// import Navbar from "./Components/Navbar/Navbar"
// import Hero from "./Components/Hero/Hero"
// import BookCar from "./Components/BookCar/BookCar"
// import PlanTrip from './Components/PlanTrip/PlanTrip'
import dynamic from 'next/dynamic';

const Navbar = dynamic(()=>import('./Components/Navbar/Navbar'))
const Hero = dynamic(()=>import('./Components/Hero/Hero'))
const BookCar = dynamic(()=>import('./Components/BookCar/BookCar'))
const PlanTrip = dynamic(()=>import('./Components/PlanTrip/PlanTrip'))

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <BookCar />
        <PlanTrip />
    </div>
  )
}
