import React from "react";
import LanguageSelection from "./LanguageSelection";
import BrowseMaterials from "./LearningMaterials/BrowseMaterials";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <LanguageSelection />
        <BrowseMaterials />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
