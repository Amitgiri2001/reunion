// Footer.js

import React from 'react';
import styles from './Footer.module.css';
import fb from "../../Images/facebook.svg";
import yt from "../../Images/youtube.svg";
import ln from "../../Images/linkedin.svg";
import ins from "../../Images/instagram.svg";
import { Link } from 'react-router-dom';
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
                            <li><Link to="about">About us</Link></li>
                            <li><Link to="">FAQs</Link></li>
                            <li><Link to="">SPP</Link></li>
                            <li><Link to="">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div className={styles.rightList}>
                        <ul>
                            <li><Link to="">Events</Link></li>
                            <li><Link to="">News</Link></li>
                            <li><Link to="gallery">Galleries</Link></li>
                            <li><Link to="">Know more</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>





            <div className={styles.contact_section}>
                <p>Contact with us on:</p>
                <div className={styles.social_icons}>
                    <Link to="https://facebook.com"><img src={fb} alt="Facebook" className={styles.img} /></Link>
                    <Link to="https://instagram.com"><img src={ins} alt="instagram" className={styles.img} /></Link>
                    <Link to="https://youtube.com"><img src={yt} alt="youtube" className={styles.img} /></Link>
                    <Link to="https://linkedin.com"><img src={ln} alt="linkedin" className={styles.img} /></Link>

                </div>
            </div>


            <br />



        </div>
    );
};

export default Footer;