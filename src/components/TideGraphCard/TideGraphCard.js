import React from "react";
import { Graph } from "./TideGraphCardElements";
import TideGraph from "../TideGraph/TideGraph";

const GraphCard = (props) => {
  return (
    <Graph isDisplayed={props.isDisplayed}>
      <TideGraph
        graphHeight={props.graphHeight}
        graphWidth={props.graphWidth}
        data={props.data}
      />
    </Graph>
  );
};

export default GraphCard;
