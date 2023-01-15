import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const values = props.dataPoints.map((dataPoint) => dataPoint.value);
  const max = Math.max(...values);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={max}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
