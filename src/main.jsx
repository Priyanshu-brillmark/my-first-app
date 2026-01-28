import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS (Animate On Scroll) with reduced motion support
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
  disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
