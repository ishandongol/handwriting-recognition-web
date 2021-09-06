import { useCanvas } from "./hooks/useCanvas";
import { useCallback, useState, useEffect } from "react";
import { BrushPreview } from "./components/BrushPreview";
import { Canvas } from "./components/Canvas";
import { Toolbar } from "./components/Toolbar";
import { BASE_URL } from "./constants";
import axios from "axios";

export const WritingPredictV2 = () => {
  const [{ canvas, isReady, ...state }, { init, clear, ...api }] = useCanvas();
  const [prediction,setPrediction] = useState<{prediction:string,probability:number,showPrediction:boolean}>({
      prediction:'',
      probability:0,
      showPrediction:false
  })
  const handlePredict = useCallback(() => {
    if (!canvas || !canvas.current) return;
    let blob = '';
    const xhr = new XMLHttpRequest();
    xhr.open("GET", canvas.current.toDataURL("image/jpg;base64;", 0.5));
    xhr.responseType = "blob";// force the HTTP response, response-type header to be blob
    xhr.onload = () => {

      blob = xhr.response;// xhr.response is now a blob object
      console.log(blob)
      const formData = new FormData();
      formData.append("image", blob);
      axios.post(BASE_URL + "/upload", formData).then(response => {
        if (response) {
          axios.get(BASE_URL + "predict").then(resp =>
            setPrediction({
              prediction: resp.data.prediction,
              probability: resp.data.probability,
              showPrediction: true,
            })
          );

        }
      });
    }
    xhr.send();


  }, [canvas]);
  const toolbarProps = { ...state, ...api, handlePredict };
  useEffect(() => {
    if (!isReady) {
      init()
    }
  }, [isReady, init])
  useEffect(() => {
    return clear
  }, [clear])
  return (
    <>
      <BrushPreview
        currentWidth={state.currentWidth}
        currentColor={state.currentColor}
        className=" flex flex-col items-center justify-items-center  absolute -right-0 p-3 "
      />
      <Toolbar
        {...toolbarProps}
        className="w-full md:h-full p-4 md:w-2/12 absolute bg-white"
      />
      <Canvas
        width={state.currentWidth}
        ref={canvas}
        className={"h-screen w-screen border"}
      />
    </>
  );
};
