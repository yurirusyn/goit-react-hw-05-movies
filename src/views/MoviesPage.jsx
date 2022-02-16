import { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import { getSearchMovies } from '../services/movies-api';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();

  const [submitValue, setSubmitValue] = useState(location.search);
  const [films, setFilms] = useState();
  const onSubmit = value => {
    setSubmitValue(value);
  };

  useEffect(() => {
    submitValue && getSearchMovies(submitValue).then(setFilms);
  }, [submitValue]);

  useEffect(() => {
    history.push({ ...location, search: submitValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitValue]);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <ul>
        {films &&
          films.map(film => (
            <li key={film.id}>
              <Link
                to={{
                  pathname: '/movies/' + film.id,
                  state: { from: location }, // locationGallery
                }}
              >
                <p>{film.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviesPage;
