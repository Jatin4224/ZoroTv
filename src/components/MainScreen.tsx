import { RiSearchLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
const MainScreen = () => {
  return (
    <div>
      <div className="h-20 p-4 flex justify-center items-center gap-4 relative">
        <div className="p-4 flex items-center">
          <RiSearchLine className="h-6 w-6 text-zinc-400 " />
        </div>
        <input
          className="w-[80%] text-zinc-400 text-bold outline-none focus:outline-none h-12 "
          placeholder="search anything"
          type="text"
        ></input>
        <div className="p-4 flex items-center ">
          <RxCross2 className="h-6 w-6 text-zinc-400 -translate-x-80 " />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
