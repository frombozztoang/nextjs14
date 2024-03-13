import { URL } from "../../../(home)/page";

const getMovie = async (id: string) => {
  console.log(`fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${URL}/${id}`);
  return response.json();
};

const getVideos = async (id: string) => {
  console.log(`fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
};

const page = async ({ params: { id } }: { params: { id: string } }) => {
  console.log("=====start fetching");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("======end fetching");
  return <h1>{movie.title}</h1>;
};

export default page;
