export interface PredictionProps {
  prediction: string;
  probability: number;
}
export const Prediction = (props:PredictionProps) => {
  return <div className="bg-white p-5"><span>{props.prediction}</span> <span>{props.probability}</span></div>;
};
