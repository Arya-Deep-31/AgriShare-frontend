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
          <a href="#wgpt3">Blogs</a>
        </p>
        <p>
          <a href="#possibility">Connect</a>
        </p>
        <p>
          <a href="#features">Helping Hand</a>
        </p>
        <p>
          <a href="#blog">About Us</a>
        </p>
      </div>
      <div className={styles.profile} onClick={() => navigate("/profile")}>
        <i className="fa-solid fa-user" />
      </div>
    </div>
  );
};
export default Navbar;
