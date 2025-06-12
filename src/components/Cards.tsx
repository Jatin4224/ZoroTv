import { Link } from "react-router-dom";

interface CardProps {
  data: string;
  title: string;
}

const Cards = ({ data, title }: CardProps) => {
  return (
    <div className="px-4">
      <h2 className="text-white text-2xl mb-4 opacity-40">
        {title.toUpperCase()}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-6">
        {data.map((c, i) => (
          <Link
            key={i}
            to={`/details/${c.id}`}
            className="bg-black  rounded-xl p-2 shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <div className="rounded-xl overflow-hidden border-2 border-green-600 shadow-[0_0_15px_#00ff00] ">
              <img
                src={`https://image.tmdb.org/t/p/w500${c.poster_path}`}
                alt={c.title || c.name}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <p className="text-white mt-2 text-center font-semibold">
              {c.name || c.title || c.original_name || c.original_title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
