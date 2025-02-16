import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subject from "../Components/Subject";
import Chapters from "../Components/Chapters";
import VideoListing from "../Components/Videolisting";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Subject />} />
          <Route path='/Chapters/:id' element={<Chapters />} />
          <Route path='/Videolisting/:id' element={<VideoListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
