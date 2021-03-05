import React from "react";
import TideContainer from "../TideContainer/TideContainer";
import TempCard from "../TempContainer/TempContainer";
import "./WaveStatsList.css";

const WaveStatsLists = ({ data }) => {
  return (
    <div className='WaveStatsLists'>
      <TideContainer data={data} />
      <TempCard data={data} />
    </div>
  );
};

export default WaveStatsLists;
