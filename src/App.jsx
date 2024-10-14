import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Recipies";

const App = () => {
  return (
    <div>
      <h1>Food</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
