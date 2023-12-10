import React from "react";
import Menu from "../components/Menu/Menu";
import MainContent from "../components/MainContent/MainContent";
import MyModal from "../components/MyModal/MyModal";
import VideoForm from "../components/VideoForm/VideoForm";
import { useState } from "react";
const MainPage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="hero">
      <Menu setVisible={setVisible} />
      <MainContent />
      <MyModal visible={visible} setVisible={setVisible}>
        <VideoForm></VideoForm>
      </MyModal>
    </div>
  );
};

export default MainPage;
