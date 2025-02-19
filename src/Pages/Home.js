import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Subject from "../Components/Subject";
import Chapters from "../Components/Chapters";
import VideoListing from "../Components/Videolisting";

const Home = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
        <Route path='/' element={<Subject />} />
          <Route path='/Chapters/:id' element={<Chapters />} />
          <Route path='/Videolisting/:id' element={<VideoListing />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Home;
