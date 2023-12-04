import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header , Country , Footer} from "./Components/UI/NamedExports.jsx"
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:country" element={<Country />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
