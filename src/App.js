import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Homescreen/Home";
import LandingPage from "./Components/LandingPage/LandingPage";
import Explore from "./Components/Pages/Explore";
import Journals from "./Components/Pages/Journals";
import Signup from "./Components/Pages/Signup";
import Signin from "./Components/Pages/Signin";
import Private from "./Components/Global/Private";
import Confirmverification from "./Components/Pages/Confirmverification";
import Check from "./Components/Pages/Check";

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
          <Route path="/landingpage" element={<LandingPage />} />
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

          <Route path="/Register" element={<Signup />} />
          <Route
            path="/confirm/api/user/token/:id/:token"
            element={<Confirmverification />}
          />
          <Route path="/Login" element={<Signin />} />
          <Route path="/Check" element={<Check />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
