import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import styled from "./routes/index.css";
import { RecoillRoot } from "recoil";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RecoillRoot>
    <App />
  </RecoillRoot>
);
