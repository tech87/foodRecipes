import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";
import Banner from "./Banner";

const App = () => {
  const mainBackground = {
    background: "linear-gradient(to bottom, #0F2027, #203A43, #2C5364)",
    height: "100vh",
  };
  return (
    <main style={mainBackground}>
      <Navbar />
      <Banner />
    </main>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
