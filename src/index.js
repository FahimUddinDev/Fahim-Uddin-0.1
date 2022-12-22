import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GoogleFontLoader from "react-google-font-loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* Use it! */}
    <GoogleFontLoader
      fonts={[
        {
          font: "Montserrat",
          weights: [600, 400],
        },
        {
          font: "Roboto Mono",
          weights: [400, 700],
        },
      ]}
      subsets={["cyrillic-ext", "greek"]}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
