import React from "react";
import Header from "../Component/Header/Header";
import Main_header from '../Component/Header/Main_header'
import ImageSlider from '../Layout/Home/ImageSlider'

const App = () => {
  return (
    <>
      <Main_header />
      <Header />
      <div className="mx-2 mt-2">
        <ImageSlider />
      </div>

    </>
  );
};

export default App;
