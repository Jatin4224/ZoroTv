import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Trending from "./components/Trending";

function App() {
  return (
    <div>
      <div className="w-screen h-screen bg-[#000000]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
