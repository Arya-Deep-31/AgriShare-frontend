/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Cards from "./Cards";
import styles from "./Connection.module.scss";
import images from "./images";
const Connection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Get Connected</p>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.swiperLeftArrow} id="leftArrow">
          <img src="/images/arrow.png" alt="arrow" />
        </div>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          centeredSlides
          slidesPerView={4}
          spaceBetween={-20}
          navigation={{
            nextEl: "#rightArrow",
            prevEl: "#leftArrow",
          }}
          speed={500}
          effect="coverflow"
          rewind
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            380: {
              slidesPerView: 1,
            },
            555: {
              slidesPerView: 2,
            },
            789: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
          className={styles.swcontainer}
        >
          {images &&
            images.map((e) => {
              return (
                <SwiperSlide key={e.id}>
                  <Cards
                    key={e.id}
                    src={e.src}
                    name={e.name}
                    designation={e.designation}
                  />
                  <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className={styles.swiperRightArrow} id="rightArrow">
          <img src="/images/arrow.png" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Connection;
