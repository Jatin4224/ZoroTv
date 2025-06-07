import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import zoro from "../assets/zoro.png";
interface SearchType {
  results: string[];
}
const MainScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searches, setSearches] = useState<string[]>([]);
  const [onHover, setOnHover] = useState<boolean>(false);

  const getSearches = async () => {
    try {
      const searchData = await axios.get<SearchType>(
        `/search/multi?query=${searchQuery}`
      );
      setSearches(searchData.data.results);
    } catch (error) {
      console.log("failed to fetch getSearches ", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [searchQuery]);
  console.log(searches);
  return (
    <div>
      <div className="h-20 p-4 flex justify-start items-center gap-4 relative ">
        <div
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className="p-4 flex items-center"
        >
          <RiSearchLine
            className={`h-6 w-6 transition-all duration-300 ${
              onHover ? "text-zinc-400 " : "text-zinc-800 float-up"
            }`}
          />
        </div>
        <input
          className="w-[80%] text-green-100 text-bold outline-none focus:outline-none h-12  font-bold"
          placeholder="search anything"
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        ></input>{" "}
        <div className="p-4 flex items-center ">
          {searchQuery.length > 0 && (
            <RxCross2
              onClick={() => setSearchQuery("")}
              className="h-6 w-6 text-zinc-400 -translate-x-80 "
            />
          )}{" "}
        </div>
      </div>
      <div className="flex flex-col gap-1 overflow-y-auto h-40">
        {searches.map((items, index) => (
          <Link
            to="/"
            className="bg-transparent  text-green-100 w-[52%] ml-32 -translate-y-4 h-15 hover:scale-110  transform transition-all ease-in-out duration-300 relative rounded-lg shadow-[0_4px_20px_rgba(0,255,0,0.6)] items-center flex justify-start p-2 font-semibold gap-10 z-20"
            key={index}
          >
            <img
              src={
                items.backdrop_path || items.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      items.backdrop_path || items.profile_path
                    }`
                  : zoro
              }
              className="h-full w-15 rounded-lg shadow-lg"
            />
            <h1>
              {items.name ||
                items.title ||
                items.original_name ||
                items.original_title}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainScreen;
