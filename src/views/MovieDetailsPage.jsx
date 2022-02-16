import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getDetailsMovies } from '../services/movies-api';
// import Cast from './Cast';
// import Reviews from './Reviews';
import { Oval } from 'react-loader-spinner';

const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews" */),
);

const MovieDetailsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();

  const [movies, setMovies] = useState();
  useEffect(() => {
    getDetailsMovies(movieId).then(setMovies);
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location.state.from);
    // history.goBack();
    // history.go(-1);
  };

  return (
    <>
      {movies !== undefined && (
        <>
          <button type="button" onClick={handleGoBack}>
            GoBack
          </button>
          <div key={movies.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
              alt={movies.title}
            />
            <h1>{movies.title}</h1>
            <h2>Release date: {movies.release_date}</h2>
            <h2>User scores: {movies.vote_average}</h2>
            <hr />
            <h2>Overview</h2>
            <p>{movies.overview}</p>
            <hr />
            <h2>Genres</h2>
            {movies !== undefined &&
              movies.genres.map(genre => genre.name).join(' ')}
            <hr />
            <h2>Additional information</h2>
            <Link
              to={{
                pathname: '/movies/' + movies.id + '/cast',
                state: { from: location.state.from }, // locationGallery
              }}
            >
              <p>Cast</p>
            </Link>
            <Link
              to={{
                pathname: '/movies/' + movies.id + '/reviews',
                state: { from: location.state.from }, // locationGallery
              }}
            >
              <p>Reviews</p>
            </Link>
            <Suspense
              fallback={<Oval color="#00BFFF" height={80} width={80} />}
            >
              <Route path={'/movies/:movieId/cast'}>
                <Cast />
              </Route>
              <Route path={'/movies/:movieId/reviews'}>
                <Reviews />
              </Route>
            </Suspense>
            <hr />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
