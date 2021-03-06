import React, { Component } from "react";
import {
  GraphContainer,
  Header,
  HeaderTitle,
  GraphDetails,
  GraphText,
  GraphReference,
} from "./SmallGrapElements";
import {
  getWaveData,
  getSwellWaveData,
  getWindWaveData,
  getX,
  getY,
} from "../Graph/graphFunctions";
import { Group } from "@visx/group";
import { curveCardinal } from "@visx/curve";
import { AreaClosed, Bar } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft, AxisRight } from "@visx/axis";
import { LinearGradient } from "@visx/gradient";

const SmallGraph = (props) => {
  const accentColor = "#edffea";

  const width = 155;
  const height = 100;

  const waveData = [];
  const swellWaveData = [];
  const windWaveData = [];

  const combineData = (arr) => {
    return arr[0].concat(arr[1], arr[2]);
  };
  let time = new Date().getHours();
  getWaveData(props.data, waveData);

  let combinedData = waveData;

  const xScale = scaleLinear({
    range: [0, width],
    round: false,
    domain: [0, Math.max(...waveData.map(getX))],
  });
  const yScale = scaleLinear({
    range: [height, 0],
    round: false,
    domain: [0, Math.max(...combinedData.map(getY)) + 0.5],
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
      <GraphContainer isSelected={props.isSelected}>
        <Header>
          <HeaderTitle key={"waveTitle"}>
            Wave<i style={{ color: `#007777` }} class='bi bi-alt'></i>
          </HeaderTitle>
        </Header>
        <GraphDetails>
          {/* <GraphText currentTime={time}>
            {wavePeriod}
            {waveDirection}
          </GraphText>
          <GraphText currentTime={time}>
            {swellPeriod}
            {swellDirection}
          </GraphText>
          <GraphText currentTime={time}>
            {windSpeed}
            {windWaveDirection}
          </GraphText> */}
        </GraphDetails>
        <svg width={width} height={height * 1.5} className='Graph'>
          <Group left={-2} top={10}>
            <LinearGradient
              id='area-gradient'
              from={"#00bbbb"}
              to={"#fff"}
              toOpacity={0.1}
            />
            <AreaClosed
              key={(d) => `WaveAreaClosed-${getX(d)}`}
              data={waveData}
              x={(d) => xPoint(d) ?? 0}
              y={(d) => yPoint(d) ?? 0}
              yScale={yScale}
              strokeWidth={1}
              stroke={"#007777"}
              fill={"url(#area-gradient)"}
              curve={curveCardinal}
            />
            {combinedData.map((d, j) => (
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
};

export default SmallGraph;
