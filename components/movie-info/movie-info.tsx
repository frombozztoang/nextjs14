import { URL } from "../../app/(home)/page";
import styles from "./movie-info.module.css";

const getMovies = async (id: string) => {
  console.log(`fetching movies: ${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${URL}/${id}`);
  return response.json();
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovies(id);
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} alt={movie.id} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>{movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
};

export default MovieInfo;
