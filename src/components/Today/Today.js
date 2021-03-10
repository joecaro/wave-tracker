import React from "react";
import TideContainer from "../TideContainer/TideContainer";
import WaveStatsLists from "../WaveStatsLists/WaveStatsLists";
import { TodayContainer, Spacer } from "./TodayElements";

export default function Today(props) {
  return (
    <TodayContainer>
      <TideContainer
        graphSize={props.graphSize}
        graphColors={props.graphColors}
        time={props.time}
      />
      <Spacer />
      <WaveStatsLists
        data={props.data}
        graphSize={props.graphSize}
        graphColors={props.graphColors}
        time={props.time}
      />
    </TodayContainer>
  );
}
