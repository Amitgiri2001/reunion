// Footer.js

import React from 'react';
import styles from './Footer.module.css';
import fb from "../../Images/facebook.svg";
import yt from "../../Images/youtube.svg";
import ln from "../../Images/linkedin.svg";
import ins from "../../Images/instagram.svg";
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.firstChild}>
                <div className={styles.leftCol}>
                    <h1>SABUJ SANGAM 2.0 20<span>23</span></h1>
                    <p>SABUJ SANGAM 2.0
                        , the Re-Union of C.M.S Hign School, brings all alumni students. It offers alumni a chance to relive their college memories.</p>
                </div>
                <div className={styles.rightCol}>
                    <div className={styles.leftList}>
                        <ul>
                            <li><a href="#About">About us</a></li>
                            <li><a href="#About">FAQs</a></li>
                            <li><a href="#About">SPP</a></li>
                            <li><a href="/terms">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className={styles.rightList}>
                        <ul>
                            <li><a href="/detailedEvents">Events</a></li>
                            <li><a href="#About">News</a></li>
                            <li><a href="/gallery">Galleries</a></li>
                            <li><a href="#About">Know more</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>





            <div class="contact-section">
                <p>Contact with us on:</p>
                <div class="social-icons">
                    <a href="https://facebook.com"><img src={fb} alt="Facebook" className={styles.img} /></a>
                    <a href="https://facebook.com"><img src={ins} alt="Facebook" className={styles.img} /></a>
                    <a href="https://facebook.com"><img src={yt} alt="Facebook" className={styles.img} /></a>
                    <a href="https://facebook.com"><img src={ln} alt="Facebook" className={styles.img} /></a>

                </div>
            </div>


            <br />



        </div>
    );
};

export default Footer;
