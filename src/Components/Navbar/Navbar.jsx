import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo/logo.svg" className="fa-solid fa-user" alt="avatar" />
      </div>

      <div className={styles.container}>
        <p>
          <a href="#home">Home</a>
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
          <Link to="/aboutus">About Us</Link>
        </p>
      </div>
      <div className={styles.profile}>
        <i className="fa-solid fa-user" />
      </div>
    </div>
  );
};
export default Navbar;
