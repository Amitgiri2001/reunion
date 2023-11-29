import React from 'react';
import styles from "./Venue.module.css";
import venue from "../../Images/vanue.jpg";

import { TypeAnimation } from 'react-type-animation';

const Venue = () => {
  return (
    <div className={styles.venue}>
      <h2 className={styles.heading}>Venue</h2>
      <div className={styles.container}>

        <div className={styles.left}>
          {/* <img className={styles.venue_img} src={venue} alt="venue" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d466439.0771355187!2d87.3727469069903!3d23.25500501003185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f84911b4b1a55d%3A0xf33d6bc9627be90a!2sBurdwan%20C.M.S.%20High%20School(Church%20Missionary%20Society%20High%20School)!5e1!3m2!1sen!2sus!4v1701164498081!5m2!1sen!2sus"
            className={styles.venue_img}
            style={{ border: '0' }}
            allowFullScreen="true"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.right}>
          <h2> Burdwan C.M.S High School</h2>
          <h2>SCHOOL GROUND
          </h2>
          <h4>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Date:',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Date: SUN Dec 10, 2023',
                1000,

              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />

          </h4>
        </div>
      </div>

    </div>
  )
}

export default Venue