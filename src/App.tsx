import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <div className="w-screen h-screen bg-[#000000]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
