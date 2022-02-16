import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsMovies } from '../services/movies-api';
import placeholder from '../img/placeholder.jpeg';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState();

  useEffect(() => {
    getCreditsMovies(movieId).then(setActors);
  }, [movieId]);
  return (
    <>
      <br />

      {actors &&
        actors.map(actor => (
          <li key={actor.id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.original_name}
              />
            ) : (
              <img
                style={{
                  width: '200px',
                }}
                src={placeholder}
                alt="No"
              />
            )}

            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
    </>
  );
};

export default Cast;
