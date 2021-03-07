import React from "react";
import TideContainer from "../TideContainer/TideContainer";
import TempCard from "../TempContainer/TempContainer";
import Graph from "../Graph/Graph";
import "./WaveStatsList.css";

const WaveStatsLists = ({ data }) => {
  return (
    <div className='WaveStatsLists'>
      <TideContainer data={data} />
      <TempCard data={data[0]} />
      <Graph className='waveHeightGraph' data={data} />
    </div>
  );
};

export default WaveStatsLists;
