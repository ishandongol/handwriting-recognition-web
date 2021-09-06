import React from "react";

export const Toolbar: React.FC<any> = ({
    handlePredict,
    handleClear,
    className,
}) => {
    return (
        <div className={`${className} bottom-0`}>
            <div className="py-3">
                <a
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center rounded-full md:block"
                    onClick={(e) =>{
                        e.preventDefault()
                        handlePredict()
                    }}

                    href={"/"}
                >
                    Predict
          </a>
                <a href={"/"} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 text-center my-4 rounded-full md:block ml-4 md:ml-0" onClick={(e) => {
                    e.preventDefault()
                    handleClear()
                }}>
                    Clear
          </a>
            </div>
        </div>
    );
};