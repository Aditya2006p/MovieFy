import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

const Slideshow = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/movies');
        if (response.data && response.data.Search) {
          setPopularMovies(response.data.Search.slice(0, 10)); // Display top 10 popular movies
        } else {
          console.error('Invalid response data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };
    fetchPopularMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slideshow">
      <Slider {...settings}>
        {popularMovies.map((movie) => (
          <div key={movie.imdbID} className="p-2">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-auto rounded-lg"
            />
            <h3 className="text-lg mt-2 text-center">{movie.Title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;