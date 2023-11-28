import React, { useRef, useState, useEffect } from 'react';
import styles from "./Template.module.css";


const Template = (props) => {

    const [isInViewport, setIsInViewport] = useState(false);
    const sectionRef1 = useRef(null);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            setIsInViewport(entry.isIntersecting);
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, // Adjust as needed, 0.3 means 30% of the target element must be visible
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

    const formattedText = props.text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index < props.text.split('\n').length - 1 && <br />}
        </React.Fragment>
    ));
    return (
        <div className={styles.section}>
            <div ref={sectionRef1} className={`{ ${!isInViewport ? styles.inViewport : ''}`}>
                <h1 className={styles.topHeading}>{props.topHeading}</h1>
                <div className={styles.main}>
                    <div className={styles.left}>
                        <img className={styles.img} src={props.img} alt='some' />

                    </div>
                    <div className={styles.right}>
                        <h4 className={styles.heading}>{props.heading}</h4>
                        <p className={styles.p_text}>



                            {formattedText}

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default Template