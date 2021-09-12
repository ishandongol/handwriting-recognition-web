import { useCanvas } from "./hooks/useCanvas";
import { useCallback, useState, useEffect } from "react";
import { Canvas } from "./components/Canvas";
import { Toolbar } from "./components/Toolbar";
import { BASE_URL } from "./constants";
import axios from "axios";
import {  toast } from 'react-toastify';
import { Prediction, PredictionProps } from "./components/Prediction";

const initialState = {
  prediction:'',
  probability:'0',
  showPrediction:false
}
interface PredictionState extends PredictionProps{
  showPrediction:boolean
}
export const WritingPredictV2 = () => {
  const [{ canvas, isReady, ...state }, { init, clear,handleClear, ...api }] = useCanvas();
  const [prediction,setPrediction] = useState<PredictionState>(initialState)
  const [loading,setLoading] = useState<boolean>(false)
  const clearPrediction = () => {
    handleClear()
    setPrediction(initialState)
  }
  const handlePredict = useCallback(() => {
    if (!canvas || !canvas.current) return;
    setLoading(true)
    let blob = '';
    const xhr = new XMLHttpRequest();
    xhr.open("GET", canvas.current.toDataURL("image/jpg;base64;", 0.5));
    xhr.responseType = "blob";// force the HTTP response, response-type header to be blob
    xhr.onload = async () => {
      blob = xhr.response;// xhr.response is now a blob object
      console.log(blob)
      const formData = new FormData();
      formData.append("image", blob);
      try{
        const response = await axios.post(BASE_URL + "/upload", formData)
      if (response) {
        const resp = await axios.get(BASE_URL + "/predict");
        setPrediction({
          prediction: resp.data.prediction,
          probability: resp.data.probability,
          showPrediction: true,
        })
      }
      }catch(err){
        toast.warn("Failed to Predict, Server Error")
      } finally {
        setLoading(false)
      }
      
    }
    xhr.send();


  }, [canvas]);
  const toolbarProps = { ...state, ...api, handlePredict, handleClear: clearPrediction };
  useEffect(() => {
    if (!isReady) {
      init()
    }
  }, [isReady, init])
  useEffect(() => {
    return clear
  }, [clear])
  return (
    <div className="relative mx-auto w-3/6 flex flex-col">
     <div className="self-center">
       <p className="my-4 text-3xl">Nepali Handwriting Recognition</p>
     {prediction.showPrediction &&  <div className="absolute">
         <Prediction prediction={prediction.prediction} probability={prediction.probability}/>
        </div>}
     <Canvas
        brushWidth={state.currentWidth}
        brushHeight={state.currentHeight}
        ref={canvas}
        className={"bg-black border"}
      />
     </div>
      <Toolbar
        {...toolbarProps}
        loading={loading}
        className="p-4 self-center"
      />
    </div>
  );
};
