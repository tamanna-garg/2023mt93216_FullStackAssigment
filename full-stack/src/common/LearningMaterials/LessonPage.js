import React from "react";
import "../../styles/materials.css";

const LessonPage = ({ title, content }) => {
  return (
    <div className="lesson-page">
      <h2>{title}</h2>
      <div>{content}</div>
    </div>
  );
};

export default LessonPage;
