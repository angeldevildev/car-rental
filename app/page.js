import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import BookCar from "./Components/BookCar/BookCar"

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <BookCar />
      </div>
    </div>
  )
}
