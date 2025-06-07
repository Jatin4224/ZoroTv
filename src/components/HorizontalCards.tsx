import { motion } from "framer-motion";

const HorizontalCards = ({ trendingData }) => {
  if (!trendingData || trendingData.length === 0) return null;

  const marqueeData = [...trendingData, ...trendingData];

  return (
    <div className="w-full mb-12 -translate-y-20 relative overflow-hidden">
      <h1 className="text-3xl text-white opacity-70 font-bold px-4 mb-4 z-10 relative">
        Trending
      </h1>

      <motion.div
        className="flex gap-6"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {marqueeData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 w-40 h-60 bg-black shadow-[0_4px_20px_rgba(0,255,0,0.6)] rounded-lg p-2 text-white cursor-pointer opacity-80 hover:opacity-100"
          >
            <img
              src={`https://image.tmdb.org/t/p/w300/${
                item.poster_path || item.backdrop_path
              }`}
              alt={item.title || item.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h2 className="text-sm font-semibold truncate">
              {item.title || item.name}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalCards;
