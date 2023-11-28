import React from "react";
import styles from "./Gallery.module.css";
import ModalComp from "./Model/Model";

// import images
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import img4 from "../../Images/img4.jpg";
import img5 from "../../Images/img5.jpg";
import img6 from "../../Images/img6.jpg";
import img7 from "../../Images/img7.jpg";
import img8 from "../../Images/img8.jpg";
import img9 from "../../Images/img12.jpg";
import img10 from "../../Images/img10.jpg";
import img11 from "../../Images/img11.jpg";
import img12 from "../../Images/img9.jpg";
import GalleryTemplate from "../Template/GalleryTemplate/GalleryTemplate";

const Gallery = () => {
  const images = [];
  //push all images into this array
  for (let i = 1; i < 13; i++) {
    images.push(`img${i}.jpg`);
  }

  return (
    <>
      <h1 className={styles.heading
      }>Our Gallery of 2k22</h1>

      <GalleryTemplate img1={img1} img2={img2} img3={img3} img4={img4} />
      <GalleryTemplate img1={img5} img2={img6} img3={img7} img4={img8} />
      <GalleryTemplate img1={img9} img2={img10} img3={img11} img4={img12} />
      {/* <GalleryTemplate img1={img1} img2={img2} img3={img3} img4={img4} /> */}

    </>
  );
};

export default Gallery;
