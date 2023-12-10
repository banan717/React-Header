import React from "react";
import video from "../videos/Elvis.mp4";
const VideoPage = () => {
  return (
    <div className="container text-center mt-5 video-container">
      <video controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
