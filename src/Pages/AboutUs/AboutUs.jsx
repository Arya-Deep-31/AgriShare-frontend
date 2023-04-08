import { WhatWeAre, WhoWeAre } from "../../Components/index";
import style from "./AboutUs.module.scss";
const AboutUs = () => {
  return (
    <main className={style.aboutus}>
      <WhatWeAre />
      <WhoWeAre />
    </main>
  );
};

export default AboutUs;
