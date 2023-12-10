import React from "react";
import styles from "./MainContent.module.css";
import Search from "../Search/Search";
import VideoSlider from "../VideoSlider/VideoSlider";
const MainContent = () => {
  return (
    <div>
      <div className={styles.someText}>
        <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
          Watch Broadway Musicals Online
        </h1>
        <h3 style={{ marginTop: "20px" }}>
          Stream Tony Award-winning Broadway shows and musicals anytime,
          anywhere!
        </h3>
      </div>
      <Search />
      <VideoSlider />
    </div>
  );
};

export default MainContent;
