import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncloadmovie } from "../store/actions/movieActions";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  //fetching data from the url
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
  }, []);
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Backdrop */}
      <div
        className="w-full h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            {detail.title || detail.name}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        <p className="text-lg mb-4">{detail.overview}</p>

        {/* IMDb Link */}
        <p className="mb-4">
          🌐 IMDb ID:{" "}
          <a
            href={`https://www.imdb.com/title/${externalid.imdb_id}`}
            target="_blank"
            rel="noreferrer"
            className="text-yellow-400 underline"
          >
            {externalid.imdb_id}
          </a>
        </p>

        {/* Videos */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🎥 Trailers</h2>
          <div className="flex gap-4 overflow-x-auto">
            {videos.results.map((video) => (
              <iframe
                key={video.id}
                width="300"
                height="170"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                allowFullScreen
                className="rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">🎯 Recommendations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommendations.results.slice(0, 8).map((rec) => (
              <div
                key={rec.id}
                className="bg-gray-800 p-2 rounded-lg shadow-md"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${rec.poster_path}`}
                  alt={rec.title}
                  className="w-full h-48 object-cover rounded"
                />
                <p className="mt-2 text-sm">{rec.title || rec.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
