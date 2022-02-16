import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import { Oval } from 'react-loader-spinner';
// import HomePage from './views/HomePage';
// import MovieDetailsPage from './views/MovieDetailsPage';
// import MoviesPage from './views/MoviesPage';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Oval color="#00BFFF" height={80} width={80} />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
