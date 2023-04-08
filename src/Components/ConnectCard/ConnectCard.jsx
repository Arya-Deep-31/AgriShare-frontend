import styles from "./ConnectCard.module.scss";

const ConnectCard = (props) => {
  return (
    <div className={styles.innerWrapper}>
      <img src={props.img} alt="Farmer" />
      <div className={styles.writting}>
        <div className={styles.titleDiv}>
          <h3>{props.title}</h3>
          <img src="/images/facebook.png" alt="facebook"></img>
          {/* <i className="fa fa-facebook"></i> */}
        </div>
        <div className={styles.para}>
          <p>Location : {props.loc}</p>
          <p>Contact : {props.contact}</p>
          <p>Email : {props.email}</p>
        </div>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ConnectCard;
