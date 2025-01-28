import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/movies');
        setTrendingMovies(response.data.slice(0, 5)); // Display top 5 trending movies
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div className="banner bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {trendingMovies.map((movie) => (
          <div key={movie.id} className="w-1/5">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg" />
            <h3 className="text-lg mt-2">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;