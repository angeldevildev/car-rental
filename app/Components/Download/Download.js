'use client'

import Img1 from "./appstore.svg";
import Img2 from "./googleapp.svg";
import './Download.css'
import Image from 'next/image'
import { ScrollReveal } from "reveal-on-scroll-react"

function Download() {
  return (
    <>
      <section className="download-section" id="download">
        <ScrollReveal.div className="container">
          <div className="download-text">
            <ScrollReveal.h2>Download our app to get most out of it</ScrollReveal.h2>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="download-text__btns">
              <Image alt="download_img" src={Img2} />
              <Image alt="download_img" src={Img1} />
            </div>
          </div>
        </ScrollReveal.div>
      </section>
    </>
  );
}

export default Download;