import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import { Data } from "./faqdata";
import Accord from "./Accord";

const Faq = () => {
  const [data] = useState(Data);
  return (
    <div style={{ paddingBottom: "2rem" }}>
      <div className={styles.heading}>
        <p>FAQs</p>
      </div>
      <div className={styles.faq}>
        <div className={styles.mainFaqDiv}>
          {data.map((curElem) => {
            const { Id } = curElem;
            return <Accord key={Id} {...curElem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
