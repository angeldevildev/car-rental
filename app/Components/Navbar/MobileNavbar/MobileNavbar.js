'use client'

import React from 'react'
import './MobileNavbar.css'
import { useState } from 'react';

function MobileNavbar() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
      setNav(!nav);
    };
  return (
    <div>
      <ul className="mobile-navbar__links">
            <li>
              <a onClick={openNav} href="/">
                Home
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/">
                About
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/">
                Models
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/">
                Testimonials
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#download">
                Download
              </a>
            </li>
          </ul>
    </div>
  )
}

export default MobileNavbar
