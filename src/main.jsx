import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter , Routes , Route } from "react-router-dom";


import App from "./App.jsx";
import Header from "./Components/Header.jsx";
import Country from "./Components/Country.jsx";
import Footer from "./Components/Footer.jsx";

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
