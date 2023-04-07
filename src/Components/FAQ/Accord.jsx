/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { useState } from "react";
import styles from "./FAQ.module.scss";
const Accord = ({ Question, Answer }) => {
  const [show, setshow] = useState(false);
  return (
    <div className={styles.QAset}>
      <div className={styles.Qset} onClick={() => setshow(!show)}>
        <h3 className={styles.faqClick} onClick={() => setshow(!show)}>
          {Question}
        </h3>
        {show ? "➖" : "➕"}
      </div>
      {show && (
        <p className={styles.answer}>
          {Answer}
          <br></br>
        </p>
      )}
    </div>
  );
};
export default Accord;
