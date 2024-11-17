import React, { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { MaterialsContext } from "../../../contexts/MaterialsContext";
import "./category.css";

const Grammar = () => {
  const { language } = useContext(LanguageContext);
  const { materials } = useContext(MaterialsContext);

  const grammarMaterials = materials.filter(
    (material) =>
      material.category === "Grammar" && material.language === language
  );

  return (
    <div className="category-container">
      <h2>Grammar Resources ({language})</h2>
      {grammarMaterials.length > 0 ? (
        <ul className="materials-list">
          {grammarMaterials.map((material) => (
            <li key={material.id} className="material-item">
              <h3>{material.level} Level</h3>
              <p>{material.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No grammar resources available for this language.</p>
      )}
    </div>
  );
};

export default Grammar;
