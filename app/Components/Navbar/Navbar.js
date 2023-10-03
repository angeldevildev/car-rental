"use client";

import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import "./Navbar.css";
import logo from './logo.png'
import Image from 'next/image';
import dynamic from "next/dynamic";
// import MobileNavbar from './MobileNavbar/MobileNavbar'

const MobileNavbar = dynamic(()=>import('./MobileNavbar/MobileNavbar'))

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <MobileNavbar />
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
          <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <Image 
                src={logo}
                alt='logo-img'
                loading='lazy'
                className='logo-navbar'
              />
            </a>
          </div>
          <ul className="navbar__links">
            <li>
              <a className="home-link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="about-link" href="#about">
                About 
              </a>
            </li>
            <li>
              <a className="models-link" href="#pick__section">
                Vehicle Models
              </a>
            </li>
            <li>
              <a className="testi-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="team-link" href="#download">
                Download
              </a>
            </li>
          </ul>
          <div className="navbar__buttons">
            <a className="navbar__buttons__sign-in" href="/">
              Sign In
            </a>
            <a className="navbar__buttons__register" href="/">
              Register
            </a>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
