import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import MainScreen from "./MainScreen";
import Dropdown from "./Dropdown";

const title = ["categories", "Duration"];
const categories = ["movie", "tv", "all"];
const Trending = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen p-[2%] bg-[url('./assets/zoro3.png')] bg-center bg-cover">
      <div className="w-full h-[10vh] flex flex-row items-center  gap-6">
        <FaArrowLeft
          onClick={() => navigate(-1)}
          className="bg-transparent shadow-[0_4px_12px_rgba(0,255,0,0.6)] text-green-100 h-10 w-10 rounded-[50%] animate-pulse hover:text-green-600 "
        />
        <h1 className="text-5xl text-green-100 font-bold ">Trending</h1>
        <div className=" w-[180vh] mt-42 ">
          <MainScreen />
        </div>
        <Dropdown title={title[0]} options={categories} />
        <Dropdown title={title[1]} options={categories} />
      </div>
    </div>
  );
};

export default Trending;
