import { RiSearchLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
const MainScreen = () => {
  return (
    <div>
      <div className="h-20 p-4 flex justify-center items-center gap-4 relative ">
        <div className="p-4 flex items-center ">
          <RiSearchLine className="h-6 w-6 text-zinc-400  " />
        </div>
        <input
          className="w-[80%] text-green-100 text-bold outline-none focus:outline-none h-12  font-bold"
          placeholder="search anything"
          type="text"
        ></input>
        <div className="p-4 flex items-center ">
          <RxCross2 className="h-6 w-6 text-zinc-400 -translate-x-80 " />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="bg-transparent text-green-100 w-[52%] ml-32 -translate-y-4 h-10 hover:scale-110 transform transition-all ease-in-out duration-300 relative rounded-lg shadow-[0_4px_20px_rgba(0,255,0,0.6)] items-center flex justify-start p-2 font-semibold">
          <h1>hello everyone</h1>
        </div>
        <div className="bg-transparent text-green-100 w-[52%] ml-32 -translate-y-4 h-10 hover:scale-110 transform transition-all ease-in-out duration-300 relative rounded-lg shadow-[0_4px_20px_rgba(0,255,0,0.6)] flex justify-start p-2 font-semibold">
          <h1>hello everyone</h1>
        </div>
        <div className="bg-transparent text-green-100 w-[52%] ml-32 -translate-y-4 h-10 hover:scale-110 transform transition-all ease-in-out duration-300 relative rounded-lg shadow-[0_4px_20px_rgba(0,255,0,0.6)] flex justify-start p-2 font-semibold">
          <h1>hello everyone</h1>
        </div>
        <div className="bg-transparent text-green-100 w-[52%] ml-32 -translate-y-4 h-10 hover:scale-110 transform transition-all ease-in-out duration-300 relative rounded-lg shadow-[0_4px_20px_rgba(0,255,0,0.6)] flex justify-start p-2 font-semibold">
          <h1>hello everyone</h1>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
