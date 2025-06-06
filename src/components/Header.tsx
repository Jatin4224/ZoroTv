interface wallpaperProp {
  wallpaper: string;
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
             transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_4px_30px_rgba(0,255,0,0.8)] cursor-pointer rounded-xl flex flex-col justify-end relative"
    >
      <h1 className="text-5xl  text-white font-black">
        {wallpaper.title || wallpaper.original_title || wallpaper.original_name}
      </h1>
    </div>
  );
};

export default Header;
