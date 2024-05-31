import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "./routes/Header";
import Login from "./routes/Login";
import Home from "./routes/Home";
// import styled from "./routes/Login.css";
import Join from "./routes/Join";
import JoinEmail from "./routes/JoinEmail";
import UserInfo from "./routes/UserInfo";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated") === "true";
    console.log(
      "app 로컬스토리지 : " + localStorage.getItem("isAuthenticated")
    );

    setIsAuthenticated(isAuth);
    console.log("isAuthenticated : " + isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <React.StrictMode>
        <Header isAuthenticated={isAuthenticated} />
        <AppContent setIsAuthenticated={setIsAuthenticated} />
      </React.StrictMode>
    </Router>
  );
}

function AppContent({ isAuthenticated, setIsAuthenticated }) {
  return (
    <Routes>
      {/* "/" 경로에 대한 Route 설정 */}
      <Route
        path="/Home"
        element={
          <div className="App">
            <Home />
          </div>
        }
      />

      {isAuthenticated ? null : (
        <>
          <Route
            path="/Login"
            element={
              <div className="App">
                <Login onLogin={() => setIsAuthenticated(true)} />
              </div>
            }
          />

          <Route
            path="/Join"
            element={
              <div className="App">
                <Join />
              </div>
            }
          />

          <Route
            path="/JoinEmail"
            element={
              <div className="App">
                <JoinEmail />
              </div>
            }
          />

          <Route
            path="/UserInfo"
            element={
              <div className="App">
                <UserInfo />
              </div>
            }
          />
        </>
      )}
      {/* <Route path="/">
          <div className="App">          
            { 백엔드 데이터 : {hello} }
          </div>
        </Route> */}
    </Routes>
  );
}

export default App;
