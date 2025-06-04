import MainScreen from "./MainScreen";
import Sidebar from "./sidebar";

const Home = () => {
  return (
    <>
      <div className="flex h-180  bg-[url('https://4kwallpapers.com/images/wallpapers/roronoa-zoro-one-1920x1080-10523.png')] bg-cover  relative ">
        <div className="bg-[#1FE24] w-[25%] h-screen border-r border-zinc-100">
          <Sidebar />
        </div>
        <div className="bg-[#1FE24] w-[75%] h-screen ">
          <MainScreen />
        </div>
      </div>
    </>
  );
};

export default Home;
