import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ConnectFarmer.module.scss";
import { ConnectCard } from "../../Components";
import { getTrash } from "../../Global/Trash/trashSlice";
const ConnectFarmer = () => {
  const dispatch = useDispatch();
  const { request } = useSelector((state) => state.trash);
  useEffect(() => {
    dispatch(getTrash());
  }, [request, dispatch]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {request &&
          request.map((item) => (
            <ConnectCard
              src={item.pic}
              company={item.company}
              location={item.location}
              number={item.number}
              details={item.details}
            />
          ))}
      </div>
    </div>
  );
};

export default ConnectFarmer;
