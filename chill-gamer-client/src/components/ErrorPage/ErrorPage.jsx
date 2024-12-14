import React from "react";
import error from "../../assets/404.gif";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center w-full ">
      <img src={error} alt="404 Error" className="max-w-full max-h-full" />
    </div>
  );
};

export default ErrorPage;
