/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useEffect, useState } from "react";
import "../Components/Videolisting.css";
import { useNavigate } from "react-router-dom";

const Videolisting = () => {
  const [videolisting, setVideolisting] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://trogon.info/interview/php/api/videos.php?module_id=1`)
      .then((response) => response.json())
      .then((data) => setVideolisting(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="video-listing">
      <div className="level-title">
        <h2>Video Listing...</h2>
        <button className="back-button" onClick={() => navigate(-1)}>
          back
        </button>
      </div>

      <div className="modules">
        {videolisting.map((videolist, index) => (
          <div key={index} className="module-card">
            <div className="step-icon">✓</div>
            <div className="step-content">
              <h4>{videolist.id}</h4>
              <h3>{videolist.title}</h3>
              <p>{videolist.description}</p>
              <p>{videolist.video_type}</p>
              <iframe
                src={
                  videolist.video_url.includes("youtube.com")
                    ? videolist.video_url.replace("watch?v=", "embed/")
                    : videolist.video_url.replace(
                        "vimeo.com",
                        "player.vimeo.com/video"
                      )
                }
                className="w-full h-52 rounded-md"
                allowFullScreen
              ></iframe>
            </div>
            <div className="step-arrow">&#x203A;</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videolisting;
