import BlogCard from "../../Components/BlogCard/BlogCard";
import styles from "./Blog.module.scss";

const Blog = () => {
  const data = [
    {
      img: "/images/blog2.png",
      title: "Seeds Quest",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem aliquid unde velit et expedita magnam labore fugiat! Consequuntur, natus? Debitis eos dolorem eligendi sed itaque dignissimos numquam delectus, tenetur inventore eum aliquam harum omnisdm fjebafkekabf vkbhew;fko'bWJSK;jfdibefobefqjbvefmqafnkeqbfyivqdigedwifqvvieqyafigdcqiaudvbciae.",
    },
    {
      img: "/images/blog2.png",
      title: "Seeds Quest",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem aliquid unde velit et expedita magnam labore fugiat! Consequuntur, natus? Debitis eos dolorem eligendi sed itaque dignissimos numquam delectus, tenetur inventore eum aliquam harum omnisdm fjebafkekabf vkbhew;fko'bWJSK;jfdibefobefqjbvefmqafnkeqbfyivqdigedwifqvvieqyafigdcqiaudvbciae.",
    },
    {
      img: "/images/blog2.png",
      title: "Seeds Quest",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem aliquid unde velit et expedita magnam labore fugiat! Consequuntur, natus? Debitis eos dolorem eligendi sed itaque dignissimos numquam delectus, tenetur inventore eum aliquam harum omnisdm fjebafkekabf vkbhew;fko'bWJSK;jfdibefobefqjbvefmqafnkeqbfyivqdigedwifqvvieqyafigdcqiaudvbciae.",
    },
    {
      img: "/images/blog2.png",
      title: "Seeds Quest",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem aliquid unde velit et expedita magnam labore fugiat! Consequuntur, natus? Debitis eos dolorem eligendi sed itaque dignissimos numquam delectus, tenetur inventore eum aliquam harum omnisdm fjebafkekabf vkbhew;fko'bWJSK;jfdibefobefqjbvefmqafnkeqbfyivqdigedwifqvvieqyafigdcqiaudvbciae.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.wrapper1}>
          <img src="/images/blog1.png" alt="Illustration" />
          <div className={styles.We}>
            <p>We Read</p>
          </div>
        </div>
        <div className={styles.wrapper2}>
          <div className={styles.searchDiv}>
            <input type="text" placeholder="search keywords..." />
            <i className="fa fa-search" />
          </div>
          <div className={styles.languageDiv}>
            <div className={styles.language}>
              <p>English</p>
              <i className="fa fa-arrow-down" />
            </div>
          </div>
        </div>
        <div className={styles.wrapper3}>
          {data.map((item) => (
            // eslint-disable-next-line react/no-array-index-key
            <BlogCard
              img={item.img}
              src={item.src}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
