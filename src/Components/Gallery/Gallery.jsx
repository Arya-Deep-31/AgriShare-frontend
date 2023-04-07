/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
import images from "./images";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./Gallery.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import styles from "./Gallery.module.scss";
const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <div className={styles.swiperLeftArrow} id="leftArrow">
          <img src="/images/arrow.png" alt="arrow" />
        </div>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          centeredSlides
          slidesPerView={4}
          initialSlide={Math.floor(images.length / 2)}
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
                  <GalleryCard key={e.id} src={e.src} />
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

export default Gallery;
