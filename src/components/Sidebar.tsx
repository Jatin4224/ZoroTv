import { FaFire } from "react-icons/fa6";
import { MdOutlineLocalMovies } from "react-icons/md";
import { TbChartBarPopular } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { MdOutlineLiveTv } from "react-icons/md";
import type { JSX } from "react/jsx-runtime";
import { Link } from "react-router-dom";

type SidebarItem = {
  icon: JSX.Element;
  name: string;
  href: string;
};
const Sidebar = () => {
  const data: SidebarItem[] = [
    { href: "/trending", icon: <FaFire />, name: "Trending" },
    { href: "/popular", icon: <TbChartBarPopular />, name: "Popular" },
    { href: "/movies", icon: <MdOutlineLocalMovies />, name: "Movies" },
    { href: "/tvshows", icon: <MdOutlineLiveTv />, name: "Tv Shows" },
    { href: "/people", icon: <GoPeople />, name: "People" },
  ];

  return (
    <div>
      <div className="flex justify-start items-center gap-4 h-20 p-12 ml-10">
        <img
          src="https://zorotv.com.in/wp-content/uploads/2024/03/zorotv.png"
          className="h-15 w-40 "
        />
      </div>
      <div className="h-140 w-full flex flex-col gap-10 border-b border-zinc-100">
        <h1 className="text-zinc-100 h-10 p-4 text-2xl font-bold ml-2">
          New Feeds
        </h1>
        {data.map((item, index) => (
          <Link to={item.href} key={index}>
            <div className="flex flex-shrink items-center gap-4 ml-20 text-white hover:bg-lime-500 h-10 hover:text-green-100 hover:text-2xl hover:cursor-pointer transition-all duration-300 ease-in-out w-60 rounded-md p-4 whitespace-nowrap text-base">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
