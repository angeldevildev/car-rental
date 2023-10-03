'use client'

import SelectCar from "./icon1.svg";
import Contact from "./icon2.svg";
import Drive from "./icon3.svg";
import Image from "next/image";
import "./PlanTrip.css";
import { ScrollReveal } from "reveal-on-scroll-react"


function PlanTrip() {
  return (
    <>
      <section className="plan-section" id="about">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <ScrollReveal.h3>Plan your trip now</ScrollReveal.h3>
              <ScrollReveal.h2>Quick &amp; easy car rental</ScrollReveal.h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <Image src={SelectCar} alt="icon_img" loading="lazy" />
                <ScrollReveal.h3>Select Car</ScrollReveal.h3>
                <ScrollReveal.p>
                  We offer a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </ScrollReveal.p>
              </div>

              <div className="plan-container__boxes__box">
                <Image src={Contact} alt="icon_img" loading="lazy" />
                <ScrollReveal.h3>Contact Operator</ScrollReveal.h3>
                <ScrollReveal.p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </ScrollReveal.p>
              </div>

              <div className="plan-container__boxes__box">
                <Image src={Drive} alt="icon_img" loading="lazy" />
                <ScrollReveal.h3>{`Let's Drive`}</ScrollReveal.h3>
                <ScrollReveal.p>
                  {`
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                `}
                </ScrollReveal.p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
