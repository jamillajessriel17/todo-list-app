import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>THIS IS ERROR PAGE</h1>
      <div>{error.statusText}</div>
      <div>{error.message}</div>
    </>
  );
};

export default ErrorPage;
