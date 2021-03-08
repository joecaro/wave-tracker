import React from "react";
import TideContainer from "../TideContainer/TideContainer";
import TempCard from "../TempContainer/TempContainer";
import Graph from "../Graph/Graph";
import TideGraph from '../TideGraph/TideGraph'
import SwellGraph from '../SwellGraph/SwellGraph'
import WindWaveGraph from '../WindWaveGraph/WindWaveGraph'
import "./WaveStatsList.css";

const WaveStatsLists = (props) => {


  return (
    <div className='WaveStatsLists'>
      <Graph className='waveHeightGraph' data={props.data} height={props.graphSize.graphHeight} width={props.graphSize.graphWidth} colors={props.graphColors}/>
      <SwellGraph data={props.data} height={props.graphSize.graphHeight} width={props.graphSize.graphWidth} colors={props.graphColors}/>
      <WindWaveGraph data={props.data} height={props.graphSize.graphHeight} width={props.graphSize.graphWidth} colors={props.graphColors} />
    </div>
  );
};

export default WaveStatsLists;
