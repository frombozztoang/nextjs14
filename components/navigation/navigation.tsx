"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

const navigation = () => {
  //path name : user가 머물고 있는 url
  const path = usePathname();
  console.log(path);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "😎" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link> {path === "/" ? "" : "😎"}
        </li>
      </ul>
    </nav>
  );
};

export default navigation;
