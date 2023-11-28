// CardSlider.js

import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './CardSlider.module.css';
import Card from './Card';

import banner from "../../Images/banner.jpg"

export default function CardSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    var settings = {
        centerMode: true,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        // pauseOnHover: true,
        centerPadding: '0', // Set to 0 to remove side padding
        afterChange: (current) => setCurrentSlide(current),
        initialSlide: 0,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        ]
    };

    const quotes = [
        "Recall it as often as you wish, a happy memory never wears out. - Libbie Fudim",
        "We do not remember days; we remember moments. - Cesare Pavese",
        "A new friend is valuable, and old friend is priceless.",
        "We all take different paths in life, but no matter where we go, we take a little of each other everywhere.",
        "Reunion after long separation is even better than one's wedding night. - Chinese Proverb",
        "School's out, Memories past, Don't ever doubt, Our friendship will l",
    ]

    return (
        <div className={styles.container}>
            <h2 className={styles.head}>Our Quote's</h2>
            <Slider {...settings} className={styles.slider}>
                {quotes.map((item, index) => (
                    <div
                        key={item}
                        className={`${styles.slide} `}
                    >
                        <div className={`${styles.one} ${index === currentSlide ? styles.centeredSlide : ''}`}>
                            <Card data={item} classes={index === currentSlide ? 'centeredSlide' : ''} image={banner} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
