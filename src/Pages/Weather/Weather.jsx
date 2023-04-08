import styles from "./Weather.module.scss";
import { WeaInfo } from "../../Components";
const Weather = () => {
  return (
    <div className={styles.weather}>
      <div className={styles.container}>
        <div className={styles.top}>
          <img src="/images/cld2.svg" alt="avatar" className="fa-solid fa-home" />
          <h1>Feel The Weather</h1>
        </div>

        <div className={styles.mid}>
          <div className={styles.mid_first}>
            <i className="fa-solid fa-home" />
            <h3>Delhi india</h3>
          </div>

          <div className={styles.mid_sec}>
            <div className={styles.mid_left}>
              <div className={styles.mid_left_first}>
                <img src="/images/cloud.svg" className="fa-solid fa-home" alt="avatar" />
                <h2>55</h2>
                <p>cloudy/sunny</p>
              </div>
              <div className={styles.mid_left_bottom}>
                <div className={styles.mid_left_sec}>
                  <p>Precipitation</p>
                  <p>Cloudiness</p>
                  <p>Humidity</p>
                </div>
                <div className={styles.mid_left_third}>
                  <h3>32.1</h3>
                  <h3>32.1</h3>
                  <h3>32.1</h3>
                </div>
              </div>
            </div>
            <div className={styles.mid_right}>
              <div className={styles.maxi}>
                <h2>MAX:48</h2>
                <h2>MIN:41</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.end}>
          <WeaInfo />
          <WeaInfo />
          <WeaInfo />
          <WeaInfo />
        </div>
      </div>
    </div>
  );
};

export default Weather;
