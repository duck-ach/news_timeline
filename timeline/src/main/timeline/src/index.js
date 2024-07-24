import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import styled from "./routes/index.css";
import { RecoilRoot } from "recoil";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
