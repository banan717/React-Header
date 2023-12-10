import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import video1 from "../../videos/Elvis.mp4";
import video2 from "../../videos/Back In The Saddle.mp4";
import video3 from "../../videos/Born to be wild.mp4";
import video4 from "../../videos/Dude.mp4";
import video5 from "../../videos/Kickstart My Heart.mp4";
import video6 from "../../videos/Last Ride.mp4";
import video7 from "../../videos/Ride Em On Down.mp4";
import video8 from "../../videos/Roadhouse Blues.mp4";
import styles from "./VideoSlider.module.css";
const videos = [video1, video2, video3, video4, video5, video6, video7, video8];

const VideoSlider = () => {
  return (
    <div className="video-gallery">
      <Swiper
        className={styles.sliderBox}
        spaceBetween={30}
        slidesPerView={4}
        loop
        autoplay={{ delay: 3000 }}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <video width="100%" controls className={styles.videoBox}>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoSlider;
