import Link from "next/link";
import Movie from "../../components/movie/movie";
import styles from "./styles.module.css";
export const metadata = {
  title: "home",
};

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// fetch 함수, server component
const getMovies = async () => {
  // 일부러 늦추는 함수
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};

// async를 사용하는 이유는 await을 사용하기 때문
// await을 쓰려면 부모 함수가 async여야함
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((m) => (
        <Movie
          key={m.id}
          id={m.id}
          poster_path={m.poster_path}
          title={m.title}
        />
      ))}
    </div>
  );
}
