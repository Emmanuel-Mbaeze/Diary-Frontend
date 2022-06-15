import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Homescreen/Home";
import LandingPage from "./Components/LandingPage/LandingPage";
import Explore from "./Components/Pages/Explore";
import Journals from "./Components/Pages/Journals";
import Signup from "./Components/Pages/Signup";
import Signin from "./Components/Pages/Signin";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Homee" element={<Home />} />
          <Route path="/Journals" element={<Journals />} />
          <Route path="/Explore" element={<Explore />} />

          <Route path="/Register" element={<Signup />} />
          <Route path="/Login" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
