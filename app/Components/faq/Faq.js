'use client'

import React, { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import "./Faq.css";
import { ScrollReveal } from "reveal-on-scroll-react"


function Faq() {
  const [activeQ, setActiveQ] = useState(null);

  const toggleQuestion = (id) => {
    if (activeQ === id) {
      setActiveQ(null);
    } else {
      setActiveQ(id);
    }
  };

  return (
    <ScrollReveal.div className="faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-content__title">
            <h5>FAQ</h5>
            <h2>Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process
              on Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>

          <div className="all-questions">
            <div className="faq-box">
              <div
                id="q1"
                onClick={() => toggleQuestion("q1")}
                className={`faq-box__question ${
                  activeQ === "q1" ? "active-question active-background" : ""
                }`}
              >
                <p id="q1__p">1. What is special about comparing rental car deals?</p>
                <IconChevronDown />
              </div>
              <div
                className={`faq-box__answer ${
                  activeQ === "q1" ? "active-answer" : ""
                }`}
              >
                Comparing rental car deals is important as it helps find the
                best deal that fits your budget and requirements, ensuring you
                get the most value for your money. By comparing various
                options, you can find deals that offer lower prices,
                additional services, or better car models. You can find car
                rental deals by researching online and comparing prices from
                different rental companies.
              </div>
            </div>

            {/* Ripeti questo blocco per le altre domande */}
            
            <div className="faq-box">
              <div
                id="q2"
                onClick={() => toggleQuestion("q2")}
                className={`faq-box__question ${
                  activeQ === "q2" ? "active-question active-background" : ""
                }`}
              >
                <p id="q2__p">2. How do I find the car rental deals?</p>
                <IconChevronDown />
              </div>
              <div
                className={`faq-box__answer ${
                  activeQ === "q2" ? "active-answer" : ""
                }`}
              >
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites
                such as Expedia, Kayak, and Travelocity allow you to compare
                prices and view available rental options. It is also
                recommended to sign up for email newsletters and follow rental
                car companies on social media to be informed of any special
                deals or promotions.
              </div>
            </div>

            <div className="faq-box">
              <div
                id="q3"
                onClick={() => toggleQuestion("q3")}
                className={`faq-box__question ${
                  activeQ === "q3" ? "active-question active-background" : ""
                }`}
              >
                <p id="q3__p">3. How do I find such low rental car prices?</p>
                <IconChevronDown />
              </div>
              <div
                className={`faq-box__answer ${
                  activeQ === "q3" ? "active-answer" : ""
                }`}
              >
                Book in advance: Booking your rental car ahead of time can
                often result in lower prices. Compare prices from multiple
                companies: Use websites like Kayak, Expedia, or Travelocity to
                compare prices from multiple rental car companies. Look for
                discount codes and coupons: Search for discount codes and
                coupons that you can use to lower the rental price. Renting
                from an off-airport location can sometimes result in lower
                prices.
              </div>
            </div>

          </div>
        </div>
      </div>
    </ScrollReveal.div>
  );
}

export default Faq;
