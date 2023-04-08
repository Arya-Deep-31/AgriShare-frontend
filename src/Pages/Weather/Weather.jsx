import { useEffect, useState } from "react";
import styles from "./Weather.module.scss";
import { WeaInfo } from "../../Components";
const Weather = () => {
  const [city, setcity] = useState(null);
  const [search, setsearch] = useState("Patna");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d57ef43f9ebb9ad8cdf77a1a6c84ef4d`;
      const res = await fetch(url);
      const son = await res.json();
      setcity(son);
    };
    fetchapi();
  }, [search]);
  // console.log(city);
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
            <h3>{city?.name}</h3>
            <div className={styles.search}>
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
              />
              <i
                className="fa-sharp fa-light fa-magnifying-glass"
                onClick={() => {
                  setsearch("");
                }}
              />
            </div>
          </div>

          <div className={styles.mid_sec}>
            <div className={styles.mid_left}>
              <div className={styles.mid_left_first}>
                <img src="/images/cloud.svg" className="fa-solid fa-home" alt="avatar" />
                <h2>{Math.floor(city?.main?.temp)}</h2>
                <p>cloudy/sunny</p>
              </div>
              <div className={styles.mid_left_bottom}>
                <div className={styles.mid_left_sec}>
                  <p>Wind Speed</p>
                  <p>Cloudiness</p>
                  <p>Humidity</p>
                </div>
                <div className={styles.mid_left_third}>
                  <h3>{city?.wind?.speed} m/s</h3>
                  <h3>{city?.clouds?.all} %</h3>
                  <h3>{city?.main?.humidity} %</h3>
                </div>
              </div>
            </div>
            <div className={styles.mid_right}>
              <div className={styles.maxi}>
                <h2>MAX:{Math.floor(city?.main?.temp_max)}</h2>
                <h2>MIN:{Math.floor(city?.main?.temp_min)}</h2>
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
