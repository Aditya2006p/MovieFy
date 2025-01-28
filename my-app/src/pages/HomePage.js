import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Slideshow from "../components/Slideshow";
import AdPlaceholder from "../components/AdPlaceholder";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch movies from the API
  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = '57a2f15'; // Replace with your OMDb API key
      const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=Inception&type=movie`;

      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log('API Response:', result);
        if (result && result.Search) {
          console.log('Movies:', result.Search);
          setMovies(result.Search); // Assuming the response contains a 'Search' array
        } else {
          console.error('Invalid response data:', result);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  // Handle search input
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = movies
    .filter((movie) =>
      movie.Title?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 20); // Limit to 20 movies

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Slideshow />
      <AdPlaceholder />
      <SearchBar setSearchQuery={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        {filteredMovies.map((movie) => (
          <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
      <footer className="bg-gray-800 text-white text-center p-4 mt-4">
        <p>© 2025 Movie Info Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;