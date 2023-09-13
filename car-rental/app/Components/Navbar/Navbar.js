"use client";

import { Link } from 'react-router-dom';
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import "./Navbar.css";

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
          <ul className="mobile-navbar__links">
            <li>
              <a onClick={openNav} to="/">
                Home
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/">
                About
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/">
                Models
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/">
                Testimonials
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/">
                Our Team
              </a>
            </li>
            <li>
              <a onClick={openNav} to="/">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img"></div>
          <ul className="navbar__links">
            <li>
              <a className="home-link" to="/">
                Home
              </a>
            </li>
            <li>
              <a className="about-link" to="/">
                About us
              </a>
            </li>
            <li>
              <a className="models-link" to="/">
                Vehicle Models
              </a>
            </li>
            <li>
              <a className="testi-link" to="/">
                Testimonials
              </a>
            </li>
            <li>
              <a className="team-link" to="/">
                Our Team
              </a>
            </li>
            <li>
              <a className="contact-link" to="/">
                Contact
              </a>
            </li>
          </ul>
          <div className="navbar__buttons">
            <a className="navbar__buttons__sign-in" to="/">
              Sign In
            </a>
            <a className="navbar__buttons__register" to="/">
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
