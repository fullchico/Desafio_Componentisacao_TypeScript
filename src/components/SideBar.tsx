import "../styles/sidebar.scss";

import { Button } from "./Button";

interface PropsInterface {
  genres: any;
  selectedGenreId: number;
  handleClickButton: (arg: number) => void;
}

interface Genre {
  id: number;
  title: string;
  name: any;
}

export function SideBar({
  genres,
  selectedGenreId,
  handleClickButton,
}: PropsInterface): JSX.Element {
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: Genre) => (
          <Button
            key={genre.id}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
