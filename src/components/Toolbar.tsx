import {
    faArrowsAltH,
    faEraser,
    faMagic,
    faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ToolbarSection } from "./ToolbarSection";
import { ToolbarTitle } from "./ToolbarTitle";

export const Toolbar: React.FC<any> = ({
    currentWidth,
    handlePredict,
    handleClear,
    handleSpecialMode,
    handleEraserMode,
    setAutoWidth,
    handleRegularMode,
    handleColor,
    handleWidth,
    setCurrentSaturation,
    setCurrentLightness,
    isRegularMode,
    isAutoWidth,
    isEraser,
    className,
}) => {
    return (
        <div className={`${className} bottom-0`}>
            <div className="flex flex-row flex-wrap space-x-1 md:space-x-0 md:flex-col">
               
                <ToolbarSection>
                    <ToolbarTitle title="Tools" />
                    <div className="flex flex-wrap space-x-1 2xl:space-x-4 justify-items-center items-center">
                        <div>
                            <button
                                className={`border-2 p-2 block  rounded-lg focus:outline-none focus:border-transparent ${isEraser ? "bg-red-200" : ""
                                    }`}
                                onClick={handleEraserMode}
                            >
                                <FontAwesomeIcon icon={faEraser} />
                            </button>
                        </div>
                        
                    </div>
                </ToolbarSection>
            </div>
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