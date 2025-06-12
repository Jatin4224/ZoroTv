import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import MainScreen from "./MainScreen";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Cards from "./Cards";
import Loading from "./Loading";
const title = ["categories", "Duration"];
const categories = ["movie", "tv", "all"];
const durations = ["week", "day"];

const Trending = () => {
  const navigate = useNavigate();
  //defining state
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState(null);

  const GetTrending = async () => {
    try {
      const trendingData = await axios.get(`/trending/${category}/${duration}`);

      setTrending(trendingData.data.results);
    } catch (error) {
      console.log("fetching GetHeaderWallpaper data failed", error);
    }
  };
  console.log(trending);

  useEffect(() => {
    GetTrending();
  }, [category, duration]);

  if (!trending) {
    return <Loading />;
  }
  return (
    <div className="w-screen h-screen p-[2%] bg-[url('./assets/zoro3.png')] bg-center bg-cover">
      <div className="w-full h-[10vh] flex flex-row items-center  gap-6">
        <FaArrowLeft
          onClick={() => navigate(-1)}
          className=" mt-2 text-green-100 h-10 w-10 rounded-[50%] animate-pulse"
        />
        <h1 className="text-5xl text-green-100 font-bold ">Trending</h1>
        <div className=" w-[180vh] mt-42 ">
          <MainScreen />
        </div>
        <Dropdown
          title={title[0]}
          options={categories}
          func={(e) => setCategory(e.target.value)}
        />
        <Dropdown
          title={title[1]}
          options={durations}
          func={(e) => setDuration(e.target.value)}
        />
      </div>
      <Cards data={trending} title={category} />
    </div>
  );
};

export default Trending;
