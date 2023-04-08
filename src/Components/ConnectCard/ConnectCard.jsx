import styles from "./ConnectCard.module.scss";

const ConnectCard = (props) => {
  return (
    <div className={styles.innerWrapper}>
      <img src={props.src} alt="Farmer" />
      <div className={styles.writting}>
        <div className={styles.titleDiv}>
          <h3>{props.company}</h3>
          <img src="/images/facebook.png" alt="facebook"></img>
          {/* <i className="fa fa-facebook"></i> */}
        </div>
        <div className={styles.para}>
          <p>Location : {props.location}</p>
          <p>Contact : {props.number}</p>
        </div>
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default ConnectCard;
