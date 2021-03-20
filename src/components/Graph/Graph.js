import React, { useEffect, useState } from "react";
import { Group } from "@visx/group";
import { curveCardinal } from "@visx/curve";
import { AreaClosed, Bar } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft, AxisRight } from "@visx/axis";
import degtoCard from "../../lib/degToCard";
import {
  getWaveData,
  getSwellWaveData,
  getWindWaveData,
  getX,
  getY,
} from "./graphFunctions";
import {
  GraphText,
  Header,
  HeaderTitle,
  GraphDetails,
  GraphContainer,
  GraphReference,
} from "./GraphElements";
import { LinearGradient } from "@visx/gradient";

function WaveGraph(props) {
  const [waveSelected, setWaveSelected] = useState(false);
  const [swellSelected, setSwellSelected] = useState(false);
  const [windSelected, setWindSelected] = useState(false);

  const toggleWave = () => {
    setWaveSelected(!waveSelected);
    setSwellSelected(false);
    setWindSelected(false);
  };
  const toggleSwell = () => {
    setSwellSelected(!swellSelected);
    setWaveSelected(false);
    setWindSelected(false);
  };
  const toggleWind = () => {
    setWindSelected(!windSelected);
    setWaveSelected(false);
    setSwellSelected(false);
  };

  const accentColor = "#edffea";

  const width = props.graphWidth + 4;
  const height = props.graphHeight;

  const waveData = [];
  const swellWaveData = [];
  const windWaveData = [];

  const combineData = (arr) => {
    return arr[0].concat(arr[1], arr[2]);
  };
  let time = new Date().getHours();
  getWaveData(props.data, waveData);
  getWindWaveData(props.data, swellWaveData);
  getSwellWaveData(props.data, windWaveData);

  let combinedData = combineData([waveData, windWaveData, swellWaveData]);

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
      <GraphContainer>
        <Header>
          <HeaderTitle key={"waveTitle"}>
            Wave<i style={{ color: `#007777` }} class='bi bi-alt'></i>
          </HeaderTitle>
          <HeaderTitle key={"swellTitle"}>
            Swell
            <i style={{ color: `#00aaaa` }} class='bi bi-three-dots-vertical' />
          </HeaderTitle>
          <HeaderTitle key={"windTitle"}>
            Wind Wave
            <i style={{ color: `#0044ff` }} class='bi bi-three-dots-vertical' />
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
            {windWaveData.map((d) => {
              const x = xPoint(d);
              const y = yPoint(d);
              if (d.time % 2) {
                return (
                  <>
                    <circle
                      key={`bar-${x}`}
                      cx={x}
                      cy={y}
                      r={3}
                      fill={"#0044ff"}
                    />
                  </>
                );
              }
            })}
            {swellWaveData.map((d) => {
              const x = xPoint(d);
              const y = yPoint(d);
              if (d.time % 2) {
                return (
                  <>
                    <circle
                      key={`bar-${x}`}
                      cx={x}
                      cy={y}
                      r={3}
                      fill={"#00aaaa"}
                    />
                  </>
                );
              }
            })}
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
}

export default WaveGraph;
