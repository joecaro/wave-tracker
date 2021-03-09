import React from "react";
import Graph from "../Graph/Graph";
import "./WaveStatsList.css";

const WaveStatsLists = (props) => {
  return (
    <div className='WaveStatsLists'>
      <Graph
        key={"wave"}
        type={"wave"}
        data={props.data}
        height={props.graphSize.graphHeight}
        width={props.graphSize.graphWidth}
        colors={props.graphColors}
      />
      <Graph
        key={"swell"}
        type={"swell"}
        data={props.data}
        height={props.graphSize.graphHeight}
        width={props.graphSize.graphWidth}
        colors={props.graphColors}
      />
      <Graph
        key={"windWave"}
        type={"windWave"}
        data={props.data}
        height={props.graphSize.graphHeight}
        width={props.graphSize.graphWidth}
        colors={props.graphColors}
      />
    </div>
  );
};

export default WaveStatsLists;
