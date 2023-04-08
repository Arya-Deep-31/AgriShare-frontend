import { useNavigate, Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  const navigate = useNavigate();
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
      <div className={styles.profile} onClick={() => navigate("/profile")}>
        <i className="fa-solid fa-user" />
      </div>
    </div>
  );
};
export default Navbar;
