import { useCanvas } from "./hooks/useCanvas";
import { useCallback, useState, useEffect } from "react";
import { Canvas } from "./components/Canvas";
import { Toolbar } from "./components/Toolbar";
import { BASE_URL } from "./constants";
import axios from "axios";
import { toast } from "react-toastify";
import { Prediction, PredictionProps } from "./components/Prediction";
import cha from './assets/prediction/cha.png';
import chha from './assets/prediction/chha.png';
import ek from './assets/prediction/ek.png';
const initialState = {
  prediction: "",
  probability: "0",
  showPrediction: false,
};
interface PredictionState extends PredictionProps {
  showPrediction: boolean;
}
export const WritingPredictV2 = () => {
  const [{ canvas, isReady, ...state }, { init, clear, handleClear, ...api }] =
    useCanvas();
  const [prediction, setPrediction] = useState<PredictionState>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const clearPrediction = () => {
    handleClear();
    setPrediction(initialState);
  };
  const handlePredict = useCallback(() => {
    if (!canvas || !canvas.current) return;
    setLoading(true);
    let blob = "";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", canvas.current.toDataURL("image/jpg;base64;", 0.5));
    xhr.responseType = "blob"; // force the HTTP response, response-type header to be blob
    xhr.onload = async () => {
      blob = xhr.response; // xhr.response is now a blob object
      console.log(blob);
      const formData = new FormData();
      formData.append("image", blob);
      try {
        const response = await axios.post(BASE_URL + "/upload", formData);
        if (response) {
          const resp = await axios.get(BASE_URL + "/predict");
          setPrediction({
            prediction: resp.data.prediction,
            probability: resp.data.probability,
            showPrediction: true,
          });
        }
      } catch (err) {
        toast.warn("Failed to Predict, Server Error");
      } finally {
        setLoading(false);
      }
    };
    xhr.send();
  }, [canvas]);
  const toolbarProps = {
    ...state,
    ...api,
    handlePredict,
    handleClear: clearPrediction,
  };
  useEffect(() => {
    if (!isReady) {
      init();
    }
  }, [isReady, init]);
  useEffect(() => {
    return clear;
  }, [clear]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 container mx-auto">
      <div>
        <p className="mb-4 text-2xl">Instructions</p>
        <p className="text-xl">Try to cover the whole canvas for better prediction.</p>
        <p className="text-md mt-3">Example:</p>
        <div className="grid gird-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <img src={ek} alt="Ek"/>
        <img src={chha} alt="Chha"/>
        <img src={cha} alt="Cha"/>
        </div>
      </div>
      <div className="relative flex flex-col">
        <div className="self-end">
      <p className="text-xl">Write here:</p>
          {prediction.showPrediction && (
            <div className="absolute">
              <Prediction
                prediction={prediction.prediction}
                probability={prediction.probability}
              />
            </div>
          )}
          <Canvas
            brushWidth={state.currentWidth}
            brushHeight={state.currentHeight}
            ref={canvas}
            className={"bg-black border"}
          />
          <div>Note: Try to cover the whole canvas for better prediction.</div>
        </div>
        <Toolbar {...toolbarProps} loading={loading} className="p-4 self-end" />
      </div>
    </div>
  );
};
