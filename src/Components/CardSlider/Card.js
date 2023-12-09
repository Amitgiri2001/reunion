import React from 'react';
import styles from "./Card.module.css";

const Card = (props) => {

    const gradientStyle = {

        // Set the height of the container as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    // console.log(prop)
    return (
        <div className={`${styles.card} ${props.classes}`} style={gradientStyle} >
            <div>
                <p className={styles.text}>{props.data}</p>
            </div>
        </div>
    )
}

export default Card