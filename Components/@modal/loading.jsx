import React from "react";

const loading = () => {
  return (
    <div className="fixed left-1/2 top-1/2 flex max-h-[90vh] min-h-[90vh] w-4/5 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded bg-[#121212] text-white">
      <div>
        <div className="loader book bg-purple-500">
          <figure className="page"></figure>
          <figure className="page"></figure>
          <figure className="page"></figure>
        </div>
        <h1 className="loading-txt text-white">LOADING</h1>
      </div>
    </div>
  );
};

export default loading;
