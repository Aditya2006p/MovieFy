import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';

const MovieInfoPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        console.log(`Fetching movie with ID: ${id}`);
        const response = await axios.get(`http://localhost:5001/api/movies/${id}`);
        console.log('Movie data:', response.data);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-info-container p-4 flex flex-col md:flex-row">
      <div className="movie-image md:w-1/3">
        <img src={movie.Poster} alt={movie.Title} className="w-full rounded-lg" />
        <AdPlaceholder />
      </div>
      <div className="movie-details md:w-2/3 md:pl-4">
        <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
        <p className="text-lg mb-4">{movie.Plot || "No description available."}</p>
      </div>
    </div>
  );
};

export default MovieInfoPage;