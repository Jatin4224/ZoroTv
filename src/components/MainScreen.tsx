import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
interface SearchType {
  results: string[];
}
const MainScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searches, setSearches] = useState<string[]>([]);
  const [onHover, setOnHover] = useState(false);

  const getSearches = async () => {
    const searchData = await axios.get<SearchType>(
      `/search/multi?query=${searchQuery}`
    );
    setSearches(searchData.data.results);
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
        <div className="bg-transparent text-green-100 w-[52%] ml-32 -translate-y-4 h-15 hover:scale-110 transform transition-all ease-in-out duration-300 relative rounded-lg shadow-[0_4px_20px_rgba(0,255,0,0.6)] items-center flex justify-start p-2 font-semibold gap-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRRHNnx679VnF5uDEFu9_Ns1WFnouyu9zYA&s"
            className="h-full w-15 rounded-lg"
          />
          <h1>hello everyone</h1>
        </div>
        <div className="bg-transparent text-green-100 w-[52%] ml-32 -translate-y-4 h-15 hover:scale-110 transform transition-all ease-in-out duration-300 relative rounded-lg shadow-[0_4px_20px_rgba(0,255,0,0.6)] items-center flex justify-start p-2 font-semibold gap-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRRHNnx679VnF5uDEFu9_Ns1WFnouyu9zYA&s"
            className="h-full w-15 rounded-lg border-green-800 border-2 "
          />
          <h1>hello everyone</h1>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
