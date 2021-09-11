import { useCanvas } from "./hooks/useCanvas";
import { useCallback, useState, useEffect } from "react";
import { Canvas } from "./components/Canvas";
import { Toolbar } from "./components/Toolbar";
import { BASE_URL } from "./constants";
import axios from "axios";
import {  toast } from 'react-toastify';
import { Prediction, PredictionProps } from "./components/Prediction";

interface PredictionState extends PredictionProps{
  showPrediction:boolean
}
export const WritingPredictV2 = () => {
  const [{ canvas, isReady, ...state }, { init, clear, ...api }] = useCanvas();
  const [prediction,setPrediction] = useState<PredictionState>({
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
          axios.get(BASE_URL + "/predict").then(resp =>
            setPrediction({
              prediction: resp.data.prediction,
              probability: resp.data.probability,
              showPrediction: true,
            })
          ).catch(() => {
            toast.warn("Failed to predict")
        });

        }
      }).catch(() => {
          toast.warn("Failed to upload image")
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
       {prediction.showPrediction &&  <div className="absolute">
         <Prediction prediction={prediction.prediction} probability={prediction.probability}/>
        </div>}
      <Toolbar
        {...toolbarProps}
        className="w-full p-4 absolute bg-black"
      />
      <Canvas
        width={state.currentWidth}
        ref={canvas}
        className={"h-screen w-screen bg-black"}
      />
    </>
  );
};
