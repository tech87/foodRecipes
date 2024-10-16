import React from "react";
import { createRoot } from "react-dom";
import Navbar from "./Navbar";

const App = () => {
  const mainBackground = {
    background: "linear-gradient(to bottom, #0F2027, #203A43, #2C5364)",
    height: "100vh",
  };
  return (
    <main style={mainBackground}>
      <Navbar />
    </main>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
