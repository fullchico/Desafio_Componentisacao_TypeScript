import "../styles/content.scss";

import { MovieCard } from "./MovieCard";

interface Content {
  movies: any;

  selectedGenre: {
    title: string;
    name: string;
    id: number;
  };
}

export function Content({ movies, selectedGenre }: Content): JSX.Element {
  // Complete aqui
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      {/* card filmes */}
      <main>
        <div className="movies-list">
          {movies.map((movie: any) => (
            <MovieCard
              key={movie.Title}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
