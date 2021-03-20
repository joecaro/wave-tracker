import React from "react";
import { Graph } from "./GraphCardElements";
import WaveGraph from "../Graph/Graph";

const GraphCard = (props) => {
  return (
    <Graph isDisplayed={props.isDisplayed}>
      <WaveGraph
        graphHeight={props.graphHeight}
        graphWidth={props.graphWidth}
        data={props.data}
      />
    </Graph>
  );
};

export default GraphCard;
