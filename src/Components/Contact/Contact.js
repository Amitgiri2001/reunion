// ContactUs.js
import React, { useState, useRef, useEffect } from 'react';
import styles from './ContactUs.module.css';
import contactUs from "../../Images/contactUs.jpg";
import Template from '../Template/SwipeTemplate/Template';

const ContactUs = () => {

    const [isInViewport, setIsInViewport] = useState(false);
    const sectionRef1 = useRef(null);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            setIsInViewport(entry.isIntersecting);
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.3, // Adjust as needed, 0.5 means 50% of the target element must be visible
        });

        if (sectionRef1.current) {
            observer.observe(sectionRef1.current);
        }

        return () => {
            if (sectionRef1.current) {
                observer.unobserve(sectionRef1.current);
            }
        };
    }, []);
    return (

        <Template img={contactUs} topHeading="Contact Us" heading="ℂ.𝕄.𝕊 ℍ𝕀𝔾ℍ 𝕊ℂℍ𝕆𝕆𝕃" text="Reach out to us with your questions, suggestions, or just to say hello! Your feedback is valuable, and we look forward to hearing from you as we work together to make this reunion a success.

Email - sabujsangam@gmail.com


Mobile no - 7407309941/9932413494" />

    );
};

export default ContactUs;
