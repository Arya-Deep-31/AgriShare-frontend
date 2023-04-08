import ConnectCard from "../../Components/ConnectCard/ConnectCard";
import styles from "./ConnectFarmer.module.scss";
import data from "../../Components/ConnectCard/demo.json";

const ConnectFarmer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {data.map((item) => (
          <ConnectCard
            img={item.img}
            title={item.title}
            loc={item.loc}
            contact={item.contact}
            email={item.email}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default ConnectFarmer;
