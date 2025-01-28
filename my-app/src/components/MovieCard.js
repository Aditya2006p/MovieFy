import React from "react";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Card className="rounded-lg shadow-lg">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="rounded-t-lg"
      />
      <CardContent className="p-4">
        <h2 className="font-bold text-lg mb-2">{movie.Title}</h2>
        <p className="text-sm text-gray-600">
          Release Date: {movie.Year}
        </p>
        <Link
          to={`/movie/${movie.imdbID}`}
          className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          More Info
        </Link>
      </CardContent>
    </Card>
  );
};

export default MovieCard;