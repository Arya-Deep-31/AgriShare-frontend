import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout, reset } from "../../Global/Auth/authSlice";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [dispatch, isError, message]);
  return (
    <div className={styles.navbar}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src="/logo/logo.svg" className="fa-solid fa-user" alt="avatar" />
      </div>

      <div className={styles.container}>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/blog">Blogs</Link>
        </p>
        <p>
          <Link to="/connect">Connect</Link>
        </p>
        <p>
          <Link to="/aboutus">About Us</Link>
        </p>
      </div>
      {user && (
        <div className={styles.contain}>
          <div className={styles.profile} onClick={() => navigate("/profile")}>
            <i className="fa-solid fa-user" />
          </div>
          <button className={styles.button} onClick={() => dispatch(logout())}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
export default Navbar;
