import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop"; // Import the ScrollToTop component
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import SignupPage from "views/examples/SignupPage";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import CostComparisonPage from "views/examples/CostComparisonPage";
import TravelPage from "views/examples/TravelPage";

import ResultTabs from "views/examples/MVP/Pages/ResultsTabs";
import SuccessPage from "views/examples/MVP/Pages/SuccessPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
     <ScrollToTop /> 
    <Routes>
      <Route path="/" element={<Navigate to="/index" replace />} />
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/signup-page" element={<SignupPage />} />
      <Route path="/cost" element={<CostComparisonPage />} />
      <Route path="/travel" element={<TravelPage />} />

      <Route path="/results" element={<ResultTabs />} />
      <Route path="/success-page" element={<SuccessPage />} />
      
      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </HashRouter>
);
