import styles from "./WhoWeAre.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Who We Are</p>
      </div>

      <div className={styles.content}>
        <div className={styles.founder1}>
          <img src="./images/aryadeep.png" alt="" />
          {/* <img src="./images/founderbg.png" alt="" /> */}
          <h5>Aryadeep Gogoi</h5>
          <h6>Keep Connecting !</h6>
        </div>

        <div className={styles.founder2}>
          <img src="./images/aryadeep.png" alt="" />
          <h5>Aryadeep Gogoi</h5>
          <h6>Keep Connecting !</h6>
        </div>

        <div className={styles.founder3}>
          <img src="./images/aryadeep.png" alt="" />
          <h5>Aryadeep Gogoi</h5>
          <h6>Keep Connecting !</h6>
        </div>

        <div className={styles.founder4}>
          <img src="./images/aryadeep.png" alt="" />
          <h5>Aryadeep Gogoi</h5>
          <h6>Keep Connecting !</h6>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
