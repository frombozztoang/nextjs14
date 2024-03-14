import { Suspense } from "react";

import MovieInfo, {
  getMovies,
} from "../../../../components/movie-info/movie-info";
import MovieVideos from "../../../../components/movie-videos/movie-videos";

interface IParams {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: IParams) => {
  const movie = await getMovies(id);
  return {
    title: movie.title,
  };
};

const page = async ({ params: { id } }: IParams) => {
  return (
    <div>
      {/* suspense component에는 fallback이라는 prop이 있고 이건 component가 await */}
      {/* 되는 동안 표시할 메세지를 render할 수 잇게 해줌 */}
      <Suspense fallback={<h1>loading movie info</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>loading movie videos</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default page;
