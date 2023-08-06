import { useNavigate } from "react-router-dom";
import styles from "./Cards.module.scss";
const Cards = (data) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container1}>
      <div className={styles.card1}>
        <div className={styles.content}>
          <img
            src={data.src}
            alt="placeholder"
            className={styles.profPic}
            loading="lazy"
          />
          <div className={styles.bottomContainer1}>
            <h3>{data.name}</h3>
            <p>{data.designation}</p>
            <div className={styles.linksR}>
              <a href={data.insta} target="_blank" rel="noreferrer">
                <img
                  src="/images/facebook.png"
                  alt="insta"
                  className={styles.socIcon}
                  loading="lazy"
                />
              </a>
              <a href={data.linkedin} target="_blank" rel="noreferrer">
                <img
                  src="/images/linkedin.png"
                  alt="twitter"
                  className={styles.socIcon}
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <button className={styles.button} onClick={() => navigate("/connect")}>
                connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
