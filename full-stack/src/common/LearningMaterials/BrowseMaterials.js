import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "../../styles/materials.css";

const BrowseMaterials = () => {
  const { language } = useContext(LanguageContext);

  const categories = ["Vocabulary", "Grammar", "Audio"];

  return (
    <div className="materials-container">
      <h2>Learning Materials</h2>
      <p>Currently Viewing: {language}</p>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseMaterials;
