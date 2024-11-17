import React, { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { MaterialsContext } from "../../../contexts/MaterialsContext";
import "./category.css";

const Vocabulary = () => {
  const { language } = useContext(LanguageContext);
  const { materials } = useContext(MaterialsContext);

  const vocabularyMaterials = materials.filter(
    (material) =>
      material.category === "Vocabulary" && material.language === language
  );

  return (
    <div className="category-container">
      <h2>Vocabulary Resources ({language})</h2>
      {vocabularyMaterials.length > 0 ? (
        <ul className="materials-list">
          {vocabularyMaterials.map((material) => (
            <li key={material.id} className="material-item">
              <h3>{material.level} Level</h3>
              <p>{material.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No vocabulary resources available for this language.</p>
      )}
    </div>
  );
};

export default Vocabulary;
