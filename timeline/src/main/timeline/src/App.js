import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
  // const [hello, setHello] = useState("");

  // useEffect(() => {
  //   axios.get("/api/test").then((res) => {
  //     setHello(res.data);
  //   });
  // }, []);

  return (
    <Router>
      <Header />
      <Routes>
        {/* "/" 경로에 대한 Route 설정 */}
        <Route
          path="/"
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
    </Router>
  );
}

export default App;
