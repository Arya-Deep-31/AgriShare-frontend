// import { useSelector } from "react-redux";
import { Hero, Connection, AboutUs, FAQ, Gallery } from "../../Components/index";
import style from "./Home.module.scss";
const Home = () => {
  // const { user } = useSelector((state) => state.auth);
  return (
    <main className={style.home}>
      <Hero />
      <Gallery />
      <Connection />
      <AboutUs />
      <FAQ />
    </main>
  );
};

export default Home;
