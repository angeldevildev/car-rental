'use client'

import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import './ChooseUs.css'
import MainImg from "./main.png";
import Box1 from "./icon1-1.svg";
import Box2 from "./icon2-1.svg";
import Box3 from "./icon3-1.svg";
import Image from "next/image";


function ChooseUs() {
  return (
    <>
      <div className="choose-section">
        <div className="container">
          <div className="choose-container">
            <Image
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>
                    {
                      `
                      Discover the best deals you'll ever find with our unbeatable
                      offers. We're dedicated to providing you with the best value
                      for your money, so you can enjoy top-quality services and
                      products without breaking the bank. Our deals are designed to
                      give you the ultimate renting experience, so don't miss out on
                      your chance to save big.
                      `
                    }
                </p>
                <a href="#home">
                  Find Details &nbsp;
                  <IconChevronRight />
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <Image src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Cross Country Drive</h4>
                    <p>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <Image src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>All Inclusive Pricing</h4>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <Image src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;