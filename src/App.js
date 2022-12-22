import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Sector/Home";
import PortfolioDes from "./Sector/PortfolioDes";
import BlogDetails from "./Sector/BlogDetails";
import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";

function App() {
  const [mode, setMode] = useState("dark");
  return (
    <div
      className={`${mode === "dark" ? "app-dark" : "app-light"} duration-500`}
    >
      <button
        className="text-4xl fixed right-10 top-28 p-4 rounded-full duration-500 z-10"
        style={{
          color:
            mode === "dark" ? "var(--color-lightn" : "var(--color-heading-wv)",
          boxShadow:
            mode === "dark" ? "var(--shadow-1)" : "var(--shadow-white-3)",
          background:
            mode === "dark"
              ? "var(--background-color-1)"
              : "var(--gradient-bow-w)",
        }}
        onClick={() => {
          setMode(mode === "dark" ? "light" : "dark");
        }}
      >
        {mode === "dark" ? <BsSun /> : <FiMoon />}
      </button>
      <Routes>
        <Route path="/*" element={<Home mode={mode} />} />
        <Route path="/portfolio/*" element={<PortfolioDes mode={mode} />} />
        <Route path="/blog/*" element={<BlogDetails mode={mode} />} />
      </Routes>
    </div>
  );
}

export default App;
