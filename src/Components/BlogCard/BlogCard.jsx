import { Link } from "react-router-dom";
import styles from "./BlogCard.module.scss";

const BlogCard = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.img} alt="Blog" />
      <div className={styles.writing}>
        <h2>{props.title}</h2>
        <div className={styles.desc}>
          <p>{props.description}</p>
        </div>
        <div className={styles.button}>
          <button>
            <Link to="/">View More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
