import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Homescreen/Home";
import LandingPage from "./Components/LandingPage/LandingPage";
import Explore from "./Components/Pages/Explore";
import Journals from "./Components/Pages/Journals";
import Signup from "./Components/Pages/Signup";
import Signin from "./Components/Pages/Signin";
import Private from "./Components/Pages/Private";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route
            path="/landingpage"
            element={
              <Private>
                <LandingPage />
              </Private>
            }
          />
          <Route
            path="/Journals"
            element={
              <Private>
                <Journals />
              </Private>
            }
          />
          <Route
            path="/Explore"
            element={
              <Private>
                <Explore />
              </Private>
            }
          />

          <Route
            path="/Register"
            element={
              <Private>
                <Signup />
              </Private>
            }
          />
          <Route
            path="/Login"
            element={
              <Private>
                <Signin />
              </Private>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
