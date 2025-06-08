import luffyWaiting from "../assets/luffyWaiting.gif";

const Loading = () => {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <img
          src={luffyWaiting}
          alt="Loading..."
          className="w-60 h-60 rounded-xl shadow-lg animate-bounce"
        />
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading... Please wait!
        </p>
      </div>
    </div>
  );
};

export default Loading;
