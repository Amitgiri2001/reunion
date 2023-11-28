// Detail.js
import React from 'react';
import styles from './Detail.module.css';
import Template from '../Template/SwipeTemplate/Template';
import reunion from "../../Images/C.M.S SCHOOL REUNION (2).png"

const Details = () => {
    return (
        <>
            <Template img={reunion} topHeading="𝕊𝔸𝔹𝕌𝕁 𝕊𝔸ℕ𝔾𝔸𝕄 𝟚.𝟘" heading="Presents RE-UNION 2023" text="(A Unit of Burdwan C.M.S High School Alumni).


We are happy to inform that a grand Re-union festival has been organized
with the combined effort of all the former students of Burdwan C.M.S High
School. Whether you graduated last year or decades ago, we invite you to
join us for an evening of nostalgia, reconnections, and new memories." />
            {/* <div className={styles.container}>
                <div className={styles.header}>
                    <h1>SABUJ SANGAM 2.0</h1>
                    <p>
                    </p>
                </div>


                <div className={styles.presentation}>
                    <h2>Presents</h2>
                    <h3>RE-UNION 2023</h3>
                    <p>(Reg. No IV-020100086/2022)</p>
                </div>

                <div className={styles.info}>
                    <p>

                    </p>
                </div>

                <div className={styles.details}>
                    <h2>SCHOOL GROUND</h2>
                    <h3>SUN Dec 10, 2023</h3>
                </div>

                <div className={styles.quote}>
                    <p>DON'T COUNT YEARS, COUNT MEMORIES</p>
                </div>
            </div> */}
        </>
    );
};

export default Details;
