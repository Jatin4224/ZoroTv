import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import MainScreen from "./MainScreen";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Cards from "./Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const title = ["Categories", "Duration"];
const categories = ["movie", "tv"];

const Popular = () => {
  const navigate = useNavigate();

  // State Definitions
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState(null);
  const [page, setPage] = useState(1);

  // Fetch Data
  const GetPopular = async () => {
    try {
      const popularData = await axios.get(`${category}/popular?page=${page}`);
      const newResults = popularData.data.results;

      setPopular((prevState) =>
        page === 1 ? newResults : [...(prevState || []), ...newResults]
      );
    } catch (error) {
      console.log("fetching Popular data failed", error);
    }
  };

  // Reset when filters change
  useEffect(() => {
    setPage(1);
    setPopular(null);
  }, [category]);

  // Fetch on filter/page update
  useEffect(() => {
    GetPopular();
  }, [category, page]);

  // Loading state
  if (!popular) {
    return <Loading />;
  }

  return (
    <div className="w-screen h-screen p-[2%] bg-[url('./assets/zoro5.png')] bg-center bg-cover overflow-hidden overflow-y-auto">
      <div className="w-full h-[10vh] flex flex-row items-center gap-6">
        <FaArrowLeft
          onClick={() => navigate(-1)}
          className="mt-2 text-red-100 h-10 w-10 rounded-[50%] animate-pulse cursor-pointer"
        />
        <h1 className="text-5xl text-red-100 font-bold">Popular</h1>
        <div className="w-[180vh] mt-42">
          <MainScreen />
        </div>

        <Dropdown
          title={title[0]}
          options={categories}
          func={(value) => setCategory(value)}
          shadow="shadow-[0_0_20px_#ff0000]"
          borderColor="border-red-600"
          color="text-red-100"
        />
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={true}
        loader={<Loading />}
      >
        <Cards
          data={popular}
          title={category}
          shadow="shadow-[0_0_20px_#ff0000]"
          color="bg-red-600"
        />
      </InfiniteScroll>
    </div>
  );
};

export default Popular;
