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

function App() {
  return (
    <Router>
      <React.StrictMode>
        <Header />
        <AppContent />
      </React.StrictMode>
    </Router>
  );
}

function AppContent() {
  // const [hello, setHello] = useState("");

  // useEffect(() => {
  //   axios.get("/api/test").then((res) => {
  //     setHello(res.data);
  //   });
  // }, []);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [urlBack, setUrlBack] = useState(""); // urlBack 상태 추가

  // 로그인 버튼 클릭시 실행됨
  // const handleLogin = () => {
  //   alert(location.pathname);
  //   setUrlBack = location.pathname;
  //   console.log("!!!!" + location.pathname);
  // };

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

      <Route
        path="/Login"
        element={
          <div className="App">
            <Login />
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

      {/* <Route path="/">
          <div className="App">          
            { 백엔드 데이터 : {hello} }
          </div>
        </Route> */}
    </Routes>
  );
}

export default App;
