import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import logo from "../../Images/logo.jpg"

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggle = () => {
        setIsNavOpen((prev) => { return !prev });
    };

    const handleNavbarClose = () => {
        setIsNavOpen(false);
    };

    return (
        <nav className={`navbar ${styles.navbar_dark} sticky-top bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary`} data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#" >
                    <img src={logo} alt="logo" className={styles.logo} />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded={isNavOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`nav justify-content-around collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
                    id="navbarTogglerDemo02"
                >
                    <ul class="nav justify-content-center navbar-nav   mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="about">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="gallery">Gallery</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="contact">Contact Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="donation">Donation</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="merchandise">Merchandise</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
