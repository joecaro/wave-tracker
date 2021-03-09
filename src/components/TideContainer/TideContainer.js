import React from "react";
import TideGraph from "../TideGraph/TideGraph";
import "./TideContainer.css";

const TideContainer = (props) => {
  return (
    <div className='TideContainer card'>
      <TideGraph
        height={props.graphSize.graphHeight}
        width={props.graphSize.graphWidth}
        colors={props.graphColors}
      />
    </div>
  );
};

export default TideContainer;
