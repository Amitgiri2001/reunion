// AboutPage.js
import React, { useRef, useState, useEffect } from 'react';
import styles from "./AboutPage.module.css"
import { TypeAnimation } from 'react-type-animation';
import arrow from "../../Images/arrow-1455_256.gif"

const AboutPage = () => {

    const [isInViewport, setIsInViewport] = useState(false);
    const sectionRef = useRef(null);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            setIsInViewport(entry.isIntersecting);
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, // Adjust as needed, 0.5 means 50% of the target element must be visible
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.aboutContainer}>

            <div className={styles.backgroundContainer}></div>
            <div className={styles.section}>
                <h1 className={styles.heading}>𝕊𝔸𝔹𝕌𝕁 𝕊𝔸ℕ𝔾𝔸𝕄 𝟚.𝟘</h1>
                <h2 className={styles.welcome}><TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        ' ',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Welcome to our school reunion committee! ',
                        1000,

                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '170%', display: 'inline-block', textAlign: 'center' }}
                    repeat={Infinity}
                />
                </h2>
                <div>
                    <img className={styles.gif}
                        src={arrow}
                        alt="Description of the GIF"
                    />
                </div>
            </div>
            <div ref={sectionRef} className={`{${styles.section} ${styles.section1} ${!isInViewport ? styles.inViewport : ''}`}>
                <div className={styles.left}>
                    <h1 className={styles.heading}>𝕊𝔸𝔹𝕌𝕁 𝕊𝔸ℕ𝔾𝔸𝕄 𝟚.𝟘</h1>
                    <p className={styles.p_text}> We're alumni on a mission – bringing former classmates together to reminisce, reconnect, and celebrate enduring bonds. Join us in creating memorable experiences that honor our shared history and the spirit of our school community.

                    </p>

                </div>
                <div className={styles.right}>
                    <h1 className={styles.heading}>ℂ.𝕄.𝕊 ℍ𝕀𝔾ℍ 𝕊ℂℍ𝕆𝕆𝕃</h1>
                    <p className={styles.p_text}>

                        We are official government-registered school reunion committee! Our registration number -<span>IV-020100086/2022</span> </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
