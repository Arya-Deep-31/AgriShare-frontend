import React from "react";
import styles from "./WeaInfo.module.scss";
const WeaInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h3>Monday</h3> <h4>24 April</h4>
      </div>
      <div className={styles.second}>
        <h2>32</h2>
        <h2>18</h2>
      </div>
    </div>
  );
};

export default WeaInfo;
