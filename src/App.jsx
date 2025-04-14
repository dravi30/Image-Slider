import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "./assets/images/img_1.jpg";
import img2 from "./assets/images/img_2.jpg";
import img3 from "./assets/images/img_3.jpg";
import img4 from "./assets/images/img_4.jpg";
import img5 from "./assets/images/img_5.jpg";
import img6 from "./assets/images/img_6.jpg";
import img7 from "./assets/images/img_7.jpg";

const styles = {
  container: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "2rem 1rem",
    textAlign: "center",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  swiperContainer: {
    paddingBottom: "4rem",
  },
  slideImage: {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    objectFit: "cover",
  },
  slideStyle: {
    width: "300px",
    height: "400px",
  },
  navigationContainer: {
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    transform: "translateY(-50%)",
    zIndex: 10,
  },
  arrowBtn: {
    backgroundColor: "transparent",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "30px",
    color: "white",
  },
  pagination: {
    position: "absolute",
    bottom: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: 10,
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    margin: "0 5px",
    backgroundColor: "white",
    opacity: 0.7,
    transition: "opacity 0.3s",
  },
  activeDot: {
    opacity: 1,
  }
};

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Flowers Image Slider</h1>

      <div style={{ position: "relative" }}>
        <Swiper
          style={styles.swiperContainer}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
            <SwiperSlide key={index} style={styles.slideStyle}>
              <img src={img} alt={`Slide ${index + 1}`} style={styles.slideImage} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div style={styles.navigationContainer}>
          <div className="swiper-button-prev" style={styles.arrowBtn}></div>
          <div className="swiper-button-next" style={styles.arrowBtn}></div>
        </div>

        <div className="swiper-pagination" style={styles.pagination}></div>
      </div>
    </div>
  );
}

export default App;
