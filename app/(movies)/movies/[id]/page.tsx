const page = ({ params: { id } }: { params: { id: string } }) => {
  console.log(id);
  return <div>Movie {id}</div>;
};

export default page;
