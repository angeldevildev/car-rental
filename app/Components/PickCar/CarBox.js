'use client'

import { useState } from "react";
import React from "react";
import Image from "next/image";
import { CAR_IMAGES } from "./CarData";
import './CarBox.css';
import { ScrollReveal } from "reveal-on-scroll-react"


function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);

  const handleImageLoad = () => {
    setCarLoad(false);
  };

  const car = data[carID][0]; 


  return (
    <ScrollReveal.div>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <Image
                src={car.img} 
                alt="car_img"
                onLoad={handleImageLoad}
                loading="lazy"
                className="img-center"
                />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${car.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Mark</span>
                <span>{car.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Year</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Doors</span>
                <span>{car.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>AC</span>
                <span>{car.air}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </ScrollReveal.div>
  );
}

export default CarBox;