// src/DonationPage.js
import React from 'react';
import styles from './Donation.module.css';
import image from "../../Images/donation.jpg"

const Donation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Support Our School</h1>
                <p>Enhance the reunion experience and maintain connections within our alumni community.</p>
            </div>
            <div className={styles.section}>
                <div className={styles.left}>
                    <img src={image} alt="Donation" />
                </div>
                <div className={`${styles.donationDetails} ${styles.right}`}>
                    <h2>Bank Account Details</h2>
                    <p>Account Name - SABUJ SANGAM</p>
                    <p>Account Number - 00000042369434197</p>
                    <p>IFSC Code - SBIN0000048</p>
                    <p>Branch - BURDWAN</p>

                    <h2>UPI ID</h2>
                    <p>sabujsangam@sbi</p>
                </div>
            </div>

            <div className={styles.footer}>
                <p>Your generous donations make a difference! Thank you for supporting our school.</p>
            </div>
        </div>
    );
};

export default Donation;
