import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import LanguageProvider from "./contexts/LanguageContext";
import MaterialsProvider from "./contexts/MaterialsContext";
import Register from "./common/Auth/Register";
import Login from "./common/Auth/Login";
import ResetPassword from "./common/Auth/ResetPassword";
import Dashboard from "./common/Dashboard";
import Grammar from "./common/LearningMaterials/categories/Grammar";
import Vocabulary from "./common/LearningMaterials/categories/Vocabulary";

const App = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <MaterialsProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/materials/grammar" element={<Grammar />} />
              <Route path="/materials/vocabulary" element={<Vocabulary />} />
            </Routes>
          </Router>
        </MaterialsProvider>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
