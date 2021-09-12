import React from "react";

export const Toolbar: React.FC<any> = ({
  handlePredict,
  handleClear,
  className,
  loading,
}) => {
  return (
    <div className={`${className}`} style={{ width: "500px" }}>
      <div className="py-3 flex">
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 text-center my-4 rounded-full md:block mr-4 md:ml-0 flex-grow ${loading ? 'disabled:opacity-50' :''}`}
          onClick={(e) => {
            e.preventDefault();
            handleClear();
          }}
          disabled={loading}
        >
          Clear
        </button>
        <button
          className={`bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 text-center my-4  ml-4 rounded-full md:block flex-grow ${loading ? 'disabled:opacity-50' :''}`}
          onClick={(e) => {
            e.preventDefault();
            handlePredict();
          }}
          disabled={loading}
        >
          {loading ? "Please wait..." : "Predict"}
        </button>
      </div>
    </div>
  );
};
