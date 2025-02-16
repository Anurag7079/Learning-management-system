import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Chapters.css";

const Chapters = () => {
  const [chapters, setChapters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://trogon.info/interview/php/api/modules.php?subject_id=1")
      .then((response) => response.json())
      .then((data) => setChapters(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="learning-container">
      <h2>Chapters...</h2>
      <button className="back-button" onClick={() => navigate(-1)}>
        back
      </button>
      <div className="modules">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="module-card"
            onClick={() => navigate(`/Videolisting/${chapter.id}`)}
          >
            <div className="module-number">{chapter.id}</div>
            <div>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapters;
