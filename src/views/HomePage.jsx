import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../services/movies-api';

const HomePage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: '/movies/' + movie.id,
                state: { from: location }, // locationGallery
              }}
            >
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
