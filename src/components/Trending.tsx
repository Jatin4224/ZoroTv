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
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  //defining state
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState(null);
  const [page, setPage] = useState(1);

  const GetTrending = async () => {
    try {
      const trendingData = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      const newResults = trendingData.data.results;

      // setTrending(trendingData.data.results);

      setTrending((prev) =>
        page === 1 ? newResults : [...prev, ...newResults]
      );
    } catch (error) {
      console.log("fetching GetHeaderWallpaper data failed", error);
    }
  };
  console.log(trending);

  useEffect(() => {
    setPage(1);
    setTrending(null);
  }, [category, duration]);

  useEffect(() => {
    GetTrending();
  }, [category, duration, page]);

  if (!trending) {
    return <Loading />;
  }
  return (
    <div className="w-screen h-screen p-[2%] bg-[url('./assets/zoro3.png')] bg-center bg-cover overflow-hidden overflow-y-auto">
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
      <InfiniteScroll
        dataLength={trending.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  );
};

export default Trending;
