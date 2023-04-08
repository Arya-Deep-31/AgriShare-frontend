/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Profile.module.scss";
import { More, ConnectCard } from "../../Components";
import { getTrash } from "../../Global/Trash/trashSlice";
const Profile = () => {
  const dispatch = useDispatch();
  const [mo, setMore] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { request } = useSelector((state) => state.trash);
  useEffect(() => {
    dispatch(getTrash());
  }, [request, dispatch]);
  return (
    <>
      {mo && <More setMore={setMore} />}
      <div className={styles.container}>
        <div className={styles.header}>
          <p>User Dashboard</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.wrapper1}>
            <div className={styles.rowContainer}>
              <h4>Name :</h4>
              <p>{user.result.name}</p>
            </div>
            <div className={styles.rowContainer}>
              <h4>Email :</h4>
              <p>{user.result.email}</p>
            </div>
          </div>
          <div className={styles.wrapperImg}>
            <img src={user.result.pic} alt="Your Avatar" />
          </div>
        </div>
        <div className={styles.wrapper2}>
          <p className={styles.addedItems}>Uploaded Items</p>
          <button className={styles.button1} onClick={() => setMore(true)}>
            Upload More
          </button>
          <div className={styles.wrapper2_box}>
            {request &&
              request.map((item) => (
                <div className={styles.wrapper2_inside}>
                  <ConnectCard
                    src={item.pic}
                    id={item._id}
                    name={item.name}
                    number={item.number}
                    location={item.location}
                    company={item.company}
                    details={item.details}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
