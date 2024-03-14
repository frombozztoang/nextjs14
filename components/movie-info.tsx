import { URL } from "../app/(home)/page";

const getMovies = async (id: string) => {
  console.log(`fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${URL}/${id}`);
  return response.json();
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovies(id);
  return <div>{JSON.stringify(movie)}</div>;
};

export default MovieInfo;
