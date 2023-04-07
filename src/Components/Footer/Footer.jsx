/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <div className={styles.grid}>
        <div className={styles.col1}>
          <div className={styles.sec}>
            <a href="#">Vision</a>
          </div>

          <div className={styles.sec}>
            <a href="#">Mission</a>
          </div>

          <div className={styles.sec}>
            <a href="#">Connection</a>
          </div>
        </div>

        <div className={styles.col2}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>

        <div className={styles.col3}>
          <div className={styles.sec}>
            <a href="#">Join us</a>
          </div>

          <div className={styles.sec}>
            <a href="#">Mission</a>
          </div>

          <div className={styles.sec}>
            <a href="#">About Us</a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p style={{ color: "white" }}>© Copyright 2023 All rights reserved</p>
        <p style={{ color: "white" }}>AgriShare.com</p>
      </div>
    </div>
  );
};

export default Footer;
