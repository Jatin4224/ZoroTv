import { Link } from "react-router-dom";
import anime from "../assets/anime.png";
interface wallpaperProp {
  wallpaper: any;
}
const Header = ({ wallpaper }: wallpaperProp) => {
  console.log(wallpaper);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
          wallpaper.backdrop_path || wallpaper.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center ",
      }}
      className="text-white bg-transparent shadow-[0_4px_20px_rgba(0,255,0,0.6)] h-[50vh] w-[70vw] -translate-y-40 translate-x-10 opacity-60 hover:opacity-100
             transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_4px_30px_rgba(0,255,0,0.8)] cursor-pointer rounded-xl flex flex-col justify-end relative z-2"
    >
      <h1 className="text-5xl  text-white font-black pt-[4%] pl-[4%] w-[70%] ">
        {wallpaper.title || wallpaper.original_title || wallpaper.original_name}
      </h1>
      <p className="w-[70%]  text-white p-[4%]">
        {wallpaper.overview.slice(0, 200)}...
        <Link className="text-green-400">more</Link>
      </p>
      <p className="flex flex-row text-white p-2 items-center justify-start translate-x-8">
        <img src={anime} className="w-10 h-10 rounded-lg  p-1 mr-4" />
        {wallpaper.media_type.toUpperCase()}
      </p>
      <button className="bg-green-600  w-40 rounded-sm hover:cursor-pointer mb-2 ml-6">
        Watch Trailer
      </button>
    </div>
  );
};

export default Header;
