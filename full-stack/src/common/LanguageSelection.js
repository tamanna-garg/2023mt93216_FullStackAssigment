import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "../styles/language.css";

const LanguageSelection = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="language-container">
      <h3>Select Language</h3>
      <select value={language} onChange={handleChange}>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
      </select>
    </div>
  );
};

export default LanguageSelection;
