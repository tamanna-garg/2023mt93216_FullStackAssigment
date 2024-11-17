import React, { createContext, useState } from "react";

export const MaterialsContext = createContext();

const MaterialsProvider = ({ children }) => {
  const [materials, setMaterials] = useState([
    {
      id: 1,
      category: "Grammar",
      language: "english",
      level: "Beginner",
      content: "Learn basic sentence structures and tenses.",
    },
    {
      id: 2,
      category: "Grammar",
      language: "spanish",
      level: "Intermediate",
      content: "Master verb conjugations and complex sentences.",
    },
    {
      id: 3,
      category: "Grammar",
      language: "english",
      level: "Advanced",
      content: "Advanced topics: Passive voice and conditionals.",
    },
    {
      id: 4,
      category: "Vocabulary",
      language: "english",
      level: "Beginner",
      content: "Common words and phrases for everyday use.",
    },
    {
      id: 5,
      category: "Audio",
      language: "spanish",
      level: "Intermediate",
      content: "/audio/spanish-intermediate.mp3",
    },
  ]);

  return (
    <MaterialsContext.Provider value={{ materials }}>
      {children}
    </MaterialsContext.Provider>
  );
};

export default MaterialsProvider;
