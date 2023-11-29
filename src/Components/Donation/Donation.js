// src/DonationPage.js
import React, { useState } from 'react';
import styles from './Donation.module.css';
import image from "../../Images/donation.jpg";
import QRCodeImage from "../../Images/QRCode.jpg"

const Donation = () => {
    const [QRCode, setQRCode] = useState(false);

    function handleClick(event) {
        if (QRCode == true) {
            setQRCode(false);
        } else {
            setQRCode(true);
        }
    }
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
                    <button onClick={() => handleClick()} className={styles.btn}>{QRCode ? "Bank Details" : "QR Payment"}</button>
                    {!QRCode && (<>
                        <h2>Bank Account Details</h2>
                        <p>Account Name - SABUJ SANGAM</p>
                        <p>Account Number - 00000042369434197</p>
                        <p>IFSC Code - SBIN0000048</p>
                        <p>Branch - BURDWAN</p>

                        <h2>UPI ID</h2>
                        <p>sabujsangam@sbi</p>
                    </>)}
                    {QRCode && (<img src={QRCodeImage} alt="QR COde" />)}
                </div>
            </div>

            <div className={styles.footer}>
                <p>Your generous donations make a difference! Thank you for supporting our school.</p>
            </div>
        </div>
    );
};

export default Donation;
