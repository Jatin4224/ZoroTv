import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/home";
function App() {
  return (
    <div className="w-screen h-screen bg-amber-400">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
