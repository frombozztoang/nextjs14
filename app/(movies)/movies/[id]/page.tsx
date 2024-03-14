import { Suspense } from "react";
import { URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      {/* suspense component에는 fallback이라는 prop이 있고 이건 component가 await */}
      되는 동안 표시할 메세지를 render할 수 잇게 해줌
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
