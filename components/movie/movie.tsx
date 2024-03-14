"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./movie.module.css";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

const movie = ({ poster_path, title, id }: IMovieProps) => {
  // navigation으로부터 import 해야함
  const router = useRouter();
  // 또다른 navigating 방법
  const onClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img onClick={onClick} src={poster_path} alt={title} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
};

export default movie;
