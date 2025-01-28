import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoriesPage = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movies, setMovies] = useState([]);

  const API_KEY = '57a2f15'; // Replace with your OMDb API key

  useEffect(() => {
    // OMDb API does not provide a genre list, so we will use a predefined list
    const predefinedGenres = [
      { id: 'Action', name: 'Action' },
      { id: 'Comedy', name: 'Comedy' },
      { id: 'Drama', name: 'Drama' },
      { id: 'Horror', name: 'Horror' },
      { id: 'Romance', name: 'Romance' },
      // Add more genres as needed
    ];
    setGenres(predefinedGenres);
  }, []);

  useEffect(() => {
    if (selectedGenre) {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${selectedGenre}&type=movie`);
          if (response.data.Response === "True") {
            setMovies(response.data.Search);
          } else {
            console.error('Error fetching movies:', response.data.Error);
            setMovies([]);
          }
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
      fetchMovies();
    }
  }, [selectedGenre, API_KEY]);

  return (
    <div className="categories-page">
      <h1>Categories</h1>
      <select onChange={(e) => setSelectedGenre(e.target.value)} value={selectedGenre}>
        <option value="">Select Genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;