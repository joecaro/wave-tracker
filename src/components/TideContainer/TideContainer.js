import React from "react";
import TideGraph from "../TideGraph/TideGraph";
import { TideContainerDiv } from "./TideContainerElements";
import "./TideContainer.css";

const TideContainer = (props) => {
  return (
    <TideContainerDiv>
      <TideGraph
        height={props.graphSize.graphHeight}
        width={props.graphSize.graphWidth}
        colors={props.graphColors}
        time={props.time}
      />
    </TideContainerDiv>
  );
};

export default TideContainer;
