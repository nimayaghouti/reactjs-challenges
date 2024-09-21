import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="">
      <h1 className="">404 Not Found</h1>
      <p className="">This page does not exist</p>
      <Link to="/">Go Back</Link>
    </section>
  );
};

export default NotFoundPage;
