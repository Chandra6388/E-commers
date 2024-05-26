import React from "react";
import Header from "../Component/Header/Header";
import Main_header from '../Component/Header/Main_header'
import ImageSlider from '../Layout/Home/ImageSlider'
import Men from "../Layout/Home/NewAdded/Mens";
import Women from "../Layout/Home/NewAdded/Women";
import Electronics from "../Layout/Home/NewAdded/Electronics";

const App = () => {
  return (
    <>
     <div className="fixed-top">
        <Main_header className="bg-white border-bottom" />
        <Header className="bg-white border-bottom" />
      </div>
    
      <div className="mt-5 pt-5 mx-3">
        <ImageSlider />
        <Men />
        <Women />
        <Electronics />
      </div>

    </>
  );
};

export default App;
