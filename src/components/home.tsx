import MainScreen from "./MainScreen";
import Sidebar from "./sidebar";

const Home = () => {
  return (
    <div className="flex h-80">
      <div className="bg-[#1FE24] w-[25%] h-screen border-r border-zinc-100">
        <Sidebar />
      </div>
      <div className="bg-[#1FE24] w-[75%] h-screen ">
        <MainScreen />
      </div>
    </div>
  );
};

export default Home;
