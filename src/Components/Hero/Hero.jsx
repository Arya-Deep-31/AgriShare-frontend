import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.head}>AgriShare- Agreed to Connect</p>
        <p className={styles.subhead}>Feel The Weather</p>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.org}>
          <img src="/images/vector.png" alt="" />
          <p>An Organization</p>
          <Link to="/login">Apply Here</Link>
        </div>
        <div className={styles.farm}>
          <img src="/images/farmer.png" alt="" />
          <p>A Farmer</p>
          <Link to="/login">Apply Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
