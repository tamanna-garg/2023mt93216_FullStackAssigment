import React, { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { MaterialsContext } from "../../../contexts/MaterialsContext";
import "./category.css";

const Audio = () => {
  const { language } = useContext(LanguageContext);
  const { materials } = useContext(MaterialsContext);

  const audioMaterials = materials.filter(
    (material) =>
      material.category === "Audio" && material.language === language
  );

  return (
    <div className="category-container">
      <h2>Audio Resources ({language})</h2>
      {audioMaterials.length > 0 ? (
        <ul className="materials-list">
          {audioMaterials.map((material) => (
            <li key={material.id} className="material-item">
              <h3>{material.level} Level</h3>
              <audio controls>
                <source src={material.content} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </li>
          ))}
        </ul>
      ) : (
        <p>No audio resources available for this language.</p>
      )}
    </div>
  );
};

export default Audio;
