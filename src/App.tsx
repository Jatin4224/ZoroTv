import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Trending from "./components/Trending";
import Popular from "./components/Popular";

function App() {
  return (
    <div>
      <div className="w-screen h-screen bg-[#000000]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
