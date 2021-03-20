import React, { useEffect, useState } from "react";
import { Group } from "@visx/group";
import { curveCardinal } from "@visx/curve";
import { AreaClosed, Bar } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft, AxisRight } from "@visx/axis";
import degtoCard from "../../lib/degToCard";
import { getTideData, getX, getY } from "./graphFunctions";
import { GraphContainer } from "./TideGraphElements";
import { LinearGradient } from "@visx/gradient";

function WaveGraph(props) {
  const accentColor = "#edffea";

  const width = props.graphWidth + 4;
  const height = props.graphHeight;

  const tideData = [];

  const combineData = (arr) => {
    return arr[0].concat(arr[1], arr[2]);
  };
  let time = new Date().getHours();
  getTideData(props.data, tideData);

  let combinedData = combineData([tideData]);

  const xScale = scaleLinear({
    range: [0, width],
    round: false,
    domain: [0, Math.max(...tideData.map(getX))],
  });
  const yScale = scaleLinear({
    range: [height, 0],
    round: false,
    domain: [0, Math.max(...tideData.map(getY)) + 2],
  });

  const compose = (scale, accessor) => (data) => scale(accessor(data));
  const xPoint = compose(xScale, getX);
  const yPoint = compose(yScale, getY);

  const tickLabelProps = () => ({
    fill: "#000",
    fontSize: 12,
    fontFamily: "sans-serif",
    textAnchor: "middle",
    fontWeight: 50,
  });

  return (
    <>
      <GraphContainer>
        <svg width={width} height={height * 1.5} className='Graph'>
          <Group left={-2} top={-50}>
            <LinearGradient
              id='area-gradient'
              from={"#00bbbb"}
              to={"#fff"}
              toOpacity={0.1}
            />
            <AreaClosed
              key={(d) => `WaveAreaClosed-${getX(d)}`}
              data={tideData}
              x={(d) => xPoint(d) ?? 0}
              y={(d) => yPoint(d) ?? 0}
              yScale={yScale}
              strokeWidth={1}
              stroke={"#007777"}
              fill={"url(#area-gradient)"}
              curve={curveCardinal}
            />

            {tideData.map((d, j) => (
              <line
                key={j}
                x1={xPoint(d)}
                y1={height}
                x2={xPoint(d)}
                y2={30}
                stroke={d.time === time ? "#ff0000" : "#00000000"}
              />
            ))}
            <AxisBottom
              scale={xScale}
              numTicks={6}
              hideTicks={true}
              hideZero={true}
              top={height}
              stroke={"#777"}
              strokeWidth={2}
              tickLabelProps={tickLabelProps}
            />
            {/* <AxisLeft
              scale={yScale}
              hideTicks={false}
              numTicks={3}
              tickLength={12}
              tickStroke={"transparent"}
              hideZero={true}
              tickLabelProps={tickLabelProps}
              stroke={"#000"}
              strokeWidth={1}
              label={"Height (ft)"}
              labelProps={{
                y: -28,
                x: -85,
                fill: "#000",
                fontSize: 14,
                strokeWidth: 0,
                stroke: "#000",
                paintOrder: "stroke",
                fontFamily: "sans-serif",
              }}
            /> */}
          </Group>
        </svg>
      </GraphContainer>
    </>
  );
}

export default WaveGraph;
