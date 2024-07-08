import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider, useAuth } from "./routes/AuthContext"; // Import AuthProvider
import Header from "./routes/Header";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Join from "./routes/Join";
import JoinEmail from "./routes/JoinEmail";
import UserInfo from "./routes/UserInfo";
import HumorIndex from "./routes/humor/HumorIndex";
import Save from "./routes/humor/Save";

function App() {
  return (
    <Router>
      <AuthProvider>
        <React.StrictMode>
          <Header />
          <AppContent />
        </React.StrictMode>
      </AuthProvider>
    </Router>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/Home"
        element={
          <div className="App">
            <Home />
          </div>
        }
      />

      {!isAuthenticated ? (
        <>
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
        </>
      ) : (
        <Route
          path="/UserInfo"
          element={
            <div className="App">
              <UserInfo />
            </div>
          }
        />
      )}

      <Route
        path="/HumorIndex"
        element={
          <div className="App">
            <HumorIndex />
          </div>
        }
      />

      <Route
        path="/Save"
        element={
          <div className="App">
            <Save />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
