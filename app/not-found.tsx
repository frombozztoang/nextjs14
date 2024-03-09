import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};

const notFound = () => {
  return <div>not-found</div>;
};

export default notFound;
