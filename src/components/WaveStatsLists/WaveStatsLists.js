import React from "react";
import TideContainer from "../TideContainer/TideContainer";
import TempCard from "../TempContainer/TempContainer";
import Graph from "../Graph/Graph";
import "./WaveStatsList.css";

const WaveStatsLists = ({ data }) => {
  return (
    <div className='WaveStatsLists'>
      <TideContainer data={data} />
      <TempCard data={data} />
      <Graph />
    </div>
  );
};

export default WaveStatsLists;
