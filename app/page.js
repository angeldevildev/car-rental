import React from "react";
import dynamic from 'next/dynamic';

const Navbar = dynamic(()=>import('./Components/Navbar/Navbar'))
const Hero = dynamic(()=>import('./Components/Hero/Hero'))
const BookCar = dynamic(()=>import('./Components/BookCar/BookCar'))
const PlanTrip = dynamic(()=>import('./Components/PlanTrip/PlanTrip'))
const PickCar = dynamic(()=>import('./Components/PickCar/PickCar'))

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
    </div>
  );
}

