import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return (
    <div>
      <div className="w-screen h-screen bg-[#1F1E24]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
