/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useSelector } from "react-redux";
import Login from "../Modal/Login";
import SignUp from "../Modal/SignUp";
import styles from "./Hero.module.scss";
const Hero = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setSignup] = useState(false);
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {openLogin && <Login setOpenLogin={setOpenLogin} setSignup={setSignup} />}
      {openSignup && <SignUp setOpenLogin={setOpenLogin} setSignup={setSignup} />}
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.head}>&ldquo;AgriShare&rdquo; - Agreed to Connect</p>
          <p className={styles.subhead}>Feel The Weather</p>
        </div>
        {user ? (
          <div className={styles.buttonContainer}>
            <div className={styles.org}>
              <img src="/images/vector.png" alt="" />
              <p>An Organization</p>
              <a to="#" onClick={() => setOpenLogin(true)}>
                Apply Here
              </a>
            </div>
            <div className={styles.farm}>
              <img src="/images/farmer.png" alt="" />
              <p>A Farmer</p>
              <a to="#" onClick={() => setOpenLogin(true)}>
                Apply Here
              </a>
            </div>
          </div>
        ) : (
          <div className={styles.buttonContainer}>Lend a ahnd</div>
        )}
      </div>
    </>
  );
};

export default Hero;
