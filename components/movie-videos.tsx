import { URL } from "../app/(home)/page";

const getMovies = async (id: string) => {
  console.log(`fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${URL}/${id}`);
  return response.json();
};

//오직 video movie의 ui만 가질 것임
// video만 가지는 ui

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getMovies(id);
  return <h6>{JSON.stringify(videos)}</h6>;
};

export default MovieVideos;
