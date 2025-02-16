import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Subject.css";

const Subject = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://trogon.info/interview/php/api/subjects.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setSubjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container">
      <div className="course-info">
        <h2>Current Course :</h2>
        <p>Subjects...</p>
        <div className="button-container">
          <button>Browse Other Course</button>
        </div>
      </div>

      <h2 className="course-title">Subjects...</h2>
      <div className="modules">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="module-card"
            onClick={() => navigate(`/Chapters/${subject.id}`)}
          >
            <div className="module-number">{subject.id}</div>
            <div>
              <img
                src={subject.image}
                alt={subject.subject_name}
                className="subject-image"
              />
              <h3>{subject.title}</h3>
              <p>{subject.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subject;
