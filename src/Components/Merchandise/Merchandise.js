// src/MerchandisePage.js
import React from 'react';
import styles from './MerchandisePage.module.css';

const MerchandisePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Merchandise</h1>
                <p>Show your school spirit with exclusive reunion merchandise!</p>
                <p>Limited editions available, so don't miss out!</p>
            </div>

            <div className={styles.merchandise}>
                <div className={styles.left}>

                </div>

                <div className={styles.right}>
                    <h2>Reunion T-Shirt</h2>
                    <p>Exclusive limited edition</p>
                    <p>Available sizes: S, M, L, XL</p>
                    <p>Price: ₹200/</p>
                    <button className={styles.buyButton}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default MerchandisePage;
