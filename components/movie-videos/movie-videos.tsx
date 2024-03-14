import { URL } from "../../app/(home)/page";
import styles from "./movie-videos.module.css";

const getMovies = async (id: string) => {
  console.log(`fetching videos: ${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
};

//오직 video movie의 ui만 가질 것임
// video만 가지는 ui

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getMovies(id);
  return (
    <div className={styles.container}>
      {videos.map((v) => (
        <iframe
          key={v.id}
          src={`https://youtube.com/embed/${v.key}`}
          allow="accelerometer; autoplay; clipboard-write; encryted-media; gyroscope; picture-in-picture"
          title={v.name}
          allowFullScreen
        />
      ))}
    </div>
  );
};

export default MovieVideos;
