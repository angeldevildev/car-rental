import React from "react";
import dynamic from 'next/dynamic';

const Navbar = dynamic(()=>import('./Components/Navbar/Navbar'))
const Hero = dynamic(()=>import('./Components/Hero/Hero'))
const BookCar = dynamic(()=>import('./Components/BookCar/BookCar'))
const PlanTrip = dynamic(()=>import('./Components/PlanTrip/PlanTrip'))
const PickCar = dynamic(()=>import('./Components/PickCar/PickCar'))
const ChooseUs = dynamic(()=>import('./Components/ChooseUs/ChooseUs'))
const Testimonials = dynamic(()=>import('./Components/Testimonials/Testimonials'))
const Faq = dynamic(()=>import('./Components/faq/Faq'))
const Download = dynamic(()=>import('./Components/Download/Download'))
const Footer = dynamic(()=>import('./Components/Footer/Footer'))

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </div>
  );
}

