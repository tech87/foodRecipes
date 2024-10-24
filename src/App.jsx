import { useRef } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";

const App = () => {
  const aboutRef = useRef(null);
  return (
    <main className="bg-gradient-to-b from-[#0F2027] via-[#203A43] to-[#2C5364] min-h-screen">
      <Navbar aboutRef={aboutRef} />
      <Banner />
      <About aboutRef={aboutRef} />
    </main>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
