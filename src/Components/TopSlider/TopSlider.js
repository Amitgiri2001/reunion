import React, { useState } from 'react'
import Slider from "react-slick";
import styles from './TopSlider.module.css';


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from './Buttons/Buttons';


import slider1 from "../../Images/slider1.jpg";
import slider2 from "../../Images/slider2.jpg";
import slider3 from "../../Images/slider3.jpg";
import slider4 from "../../Images/slider4.jpg";


const TopSlider = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // pauseOnHover: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };


    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };
    return (
        <div className={styles.container}>

            <Slider {...settings} className={styles.slider} afterChange={handleSlideChange}>
                <div className={`${styles.img} ${currentSlide === 0 && styles.zoomed}`}>
                    <img className={styles.img} src={slider1} alt='Slider 1' />
                </div>
                <div className={`${styles.img} ${currentSlide === 1 && styles.zoomed}`}>
                    <img className={styles.img} src={slider2} alt='Slider 1' />
                </div>
                <div className={`${styles.img} ${currentSlide === 2 && styles.zoomed}`}>
                    <img className={styles.img} src={slider3} alt='Slider 1' />
                </div>
                <div className={`${styles.img} ${currentSlide === 3 && styles.zoomed}`}>
                    <img className={styles.img} src={slider4} alt='Slider 1' />
                </div>

            </Slider>
        </div>
    );
}

export default TopSlider