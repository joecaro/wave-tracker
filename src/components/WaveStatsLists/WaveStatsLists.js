import React from "react";
import Graph from "../Graph/Graph";
import { WaveStatsList } from "./WaveStatsListElements";
import "./WaveStatsList.css";

const WaveStatsLists = (props) => {
  return (
    <WaveStatsList>
      <Graph
        key={"wave"}
        type={"wave"}
        data={props.data}
        height={props.graphSize.graphHeight}
        width={props.graphSize.graphWidth}
        colors={props.graphColors}
        time={props.time}
      />
    </WaveStatsList>
  );
};

export default WaveStatsLists;
