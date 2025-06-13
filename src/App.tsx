import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";

function App() {
  return (
    <div>
      <div className="w-screen h-screen bg-[#000000]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/details/:id" element={<MovieDetails />} />

          <Route path="/tv" element={<Tvshows />} />
          <Route path="/tv/details/:id" element={<TvDetails />} />

          <Route path="/person" element={<People />} />
          <Route path="/person/details/:id" element={<PersonDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
