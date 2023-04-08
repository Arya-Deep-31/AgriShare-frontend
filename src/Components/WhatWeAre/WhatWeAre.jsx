import styles from "./WhatWeAre.module.scss";

const AboutUs = () => {
  return (
    <>
      <img className={styles.aboutus} src="/aboutus/aboutus.png" alt="" />

      <div className={styles.container}>
        <div>
          <div className={styles.co}>
            <img className={styles.logow} src="logowithbg/logowithbg.png" alt="" />
          </div>
          <div className={styles.heading}>
            <p>What We Are</p>
          </div>
        </div>

        <div className={styles.content}>
          <p>
            Agriculture, with its allied sectors, is unquestionably the largest livelihood
            provider in India, more so in the vast rural areas. It also contributes a
            significant figure to the Gross Domestic Product (GDP). Sustainable
            agriculture, in terms of food security, rural employment, and environmentally
            sustainable technologies such as soil conservation, sustainable natural
            resource management and biodiversity protection, are essential for holistic
            rural development.
            <br />
            Agriculture, in terms of food security, rural employment, and environmentally
            sustainable technologies such as soil conservation, sustainable natural
            resource management
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
