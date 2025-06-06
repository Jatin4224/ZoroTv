import { useEffect, useState } from "react";
import MainScreen from "./MainScreen";
import Sidebar from "./Sidebar";
import axios from "../utils/axios";
import Header from "./Header";

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);

  const GetHeaderWallpaper = async () => {
    try {
      let wallpaperData = await axios.get(`/trending/all/day`);

      let randomValue =
        wallpaperData.data.results[
          (Math.random() * wallpaperData.data.results.length).toFixed()
        ];
      setWallpaper(randomValue);
    } catch (error) {
      console.log("fetching GetHeaderWallpaper data failed", error);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  return (
    <>
      <div className="flex h-180  bg-[url('https://4kwallpapers.com/images/wallpapers/roronoa-zoro-one-1920x1080-10523.png')] bg-cover  relative ">
        <div className="bg-[#1FE24] w-[25%] h-screen border-r border-zinc-100">
          <Sidebar />
        </div>
        <div className="bg-[#1FE24] w-[75%] h-screen ">
          <MainScreen />
          <Header wallpaper={wallpaper} />
        </div>
      </div>
    </>
  );
};

export default Home;
