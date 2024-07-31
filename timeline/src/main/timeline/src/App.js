import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider, useAuth } from "./routes/AuthContext";
import Header from "./routes/Header";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Join from "./routes/Join";
import JoinEmail from "./routes/JoinEmail";
import UserInfo from "./routes/UserInfo";
import HumorIndex from "./routes/humor/HumorIndex";
import Save from "./routes/humor/Save";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <AuthProvider>
          <Header />
          <div className="App">
            <AppContent />
          </div>
        </AuthProvider>
      </Router>
    </React.StrictMode>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {!isAuthenticated ? (
        <>
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/JoinEmail" element={<JoinEmail />} />
        </>
      ) : (
        <Route path="/UserInfo" element={<UserInfo />} />
      )}
      <Route path="/HumorIndex" element={<HumorIndex />} />
      <Route path="/Save" element={<Save />} />
    </Routes>
  );
}

export default App;
