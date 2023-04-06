import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <Triangle height="80" width="80" color="#009ef7" ariaLabel="triangle-loading" wrapperStyle={{}} wrapperClass={""} visible={true} />
    </div>
  );
};

export default Loader;
