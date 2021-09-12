export interface PredictionProps {
  prediction: string;
  probability: string;
}
export const Prediction = (props: PredictionProps) => {
  const percentage = props.probability ? parseFloat(props.probability) * 100 : 0
  return (
    <div className="bg-white p-5 rounded-md m-3 opacity-90">
        <div className="text-2xl text-gray-600">Prediction</div>
      <div className="text-3xl md:text-6xl my-4">{props.prediction}</div>{" "}
      <div className="text-2xl text-gray-600">{ percentage && !isNaN(percentage) && percentage.toFixed(2)} %</div>
    </div>
  );
};
