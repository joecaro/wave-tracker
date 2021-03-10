import React, { useEffect, useState } from "react";
import { Group } from "@visx/group";
import { curveCardinal } from "@visx/curve";
import { Bar, LinePath, AreaClosed } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";
import degtoCard from "../../lib/degToCard";
import { GraphText, Header, HeaderTitle, GraphDetails } from "./GraphElements";
import "./Graph.css";

function Graph(props) {
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

  useEffect(() => {
    if (props.time >= 19) {
      document
        .getElementById(`Rect`)
        .setAttribute("fill", props.colors.nightGraphColor);
    }
  });

  const width = props.width;
  const height = props.height;

  let xMax = width - 55;

  const waveData = [];
  const swellWaveData = [];
  const windWaveData = [];

  const getWaveData = (arr) => {
    arr.forEach((element, index) => {
      waveData.push({
        time: index,
        height: (element.waveHeight.noaa * 3.281 * (5 / 8)).toFixed(2),
      });
    });
  };
  const getSwellWaveData = (arr) => {
    arr.forEach((element, index) => {
      swellWaveData.push({
        time: index,
        height: (element.swellHeight.noaa * 3.281 * (5 / 8)).toFixed(2),
      });
    });
  };
  const getWindWaveData = (arr) => {
    arr.forEach((element, index) => {
      windWaveData.push({
        time: index,
        height: (element.windWaveHeight.noaa * 3.281 * (5 / 8)).toFixed(2),
      });
    });
  };

  const combineData = (arr) => {
    return arr[0].concat(arr[1], arr[2]);
  };

  getWaveData(props.data);
  getWindWaveData(props.data);
  getSwellWaveData(props.data);

  let combinedData = combineData([waveData, windWaveData, swellWaveData]);

  const waveDirection = degtoCard(props.data[props.time].waveDirection.noaa);
  const swellDirection = degtoCard(props.data[props.time].swellDirection.noaa);
  const windWaveDirection = degtoCard(
    props.data[props.time].windWaveDirection.noaa
  );

  const wavePeriod = `${props.data[props.time].wavePeriod.noaa} seconds - `;
  const swellPeriod = `${props.data[props.time].swellPeriod.noaa} seconds - `;

  const getX = (d) => d.time;
  const getY = (d) => d.height;

  const xScale = scaleLinear({
    range: [0, xMax],
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
    fill: props.time >= 19 ? "#fff" : "#000",
    fontSize: 12,
    fontFamily: "sans-serif",
    textAnchor: "middle",
    fontWeight: 50,
  });

  return (
    <div className='GraphCard'>
      <Header width={width}>
        <HeaderTitle
          key={"waveTitle"}
          currentTime={props.time}
          onClick={toggleWave}>
          Wave Height
        </HeaderTitle>
        <HeaderTitle
          key={"swellTitle"}
          currentTime={props.time}
          onClick={toggleSwell}>
          Swell Height
        </HeaderTitle>
        <HeaderTitle
          key={"windTitle"}
          currentTime={props.time}
          onClick={toggleWind}>
          Wind Wave Height
        </HeaderTitle>
      </Header>
      <GraphDetails>
        <GraphText currentTime={props.time}>
          {wavePeriod}
          {waveDirection}
        </GraphText>
        <GraphText currentTime={props.time}>
          {swellPeriod}
          {swellDirection}
        </GraphText>
        <GraphText currentTime={props.time}>{windWaveDirection}</GraphText>
      </GraphDetails>
      <svg width={width} height={height * 1.5} className='Graph'>
        <rect
          id='Rect'
          width={width}
          height={height * 1.5}
          fill='#fafeff'
          rx={15}
          ry={15}
        />
        <Group left={35} top={10}>
          {combinedData.map((d, j) => (
            <line
              key={j}
              x1={xPoint(d)}
              y1={height}
              x2={xPoint(d)}
              y2={30}
              stroke={d.time === props.time ? "#ff0000" : "rgba(0,0,0,0.0)"}
            />
          ))}
          <AreaClosed
            key={(d) => `WaveAreaClosed-${getX(d)}`}
            data={waveData}
            x={(d) => xPoint(d) ?? 0}
            y={(d) => yPoint(d) ?? 0}
            yScale={yScale}
            strokeWidth={1}
            stroke={swellSelected || windSelected ? "#00000000" : "#447744"}
            fill={swellSelected || windSelected ? "#00000000" : "#aaddaa44"}
            curve={curveCardinal}
          />
          <AreaClosed
            key={(d) => `SwellAreaClosed-${getX(d)}`}
            data={swellWaveData}
            x={(d) => xPoint(d) ?? 0}
            y={(d) => yPoint(d) ?? 0}
            yScale={yScale}
            strokeWidth={1}
            stroke={waveSelected || windSelected ? "#00000000" : "#1199ee"}
            fill={waveSelected || windSelected ? "#00000000" : "#22aaff44"}
            curve={curveCardinal}
          />
          <AreaClosed
            key={(d) => `WindAreaClosed-${getX(d)}`}
            data={windWaveData}
            x={(d) => xPoint(d) ?? 0}
            y={(d) => yPoint(d) ?? 0}
            yScale={yScale}
            strokeWidth={1}
            stroke={waveSelected || swellSelected ? "#00000000" : "#00dddd"}
            fill={waveSelected || swellSelected ? "#00000000" : "#00bbbb33"}
            curve={curveCardinal}
          />
          <AxisBottom
            scale={xScale}
            hideTicks={true}
            top={125}
            label={"Time"}
            numTicks={6}
            stroke={props.time >= 19 ? "#fff" : "#000"}
            tickLabelProps={tickLabelProps}
          />
          <AxisLeft
            scale={yScale}
            hideTicks={true}
            hideAxisLine={true}
            numTicks={3}
            hideZero={true}
            tickLabelProps={tickLabelProps}
            left={-5}
          />
        </Group>
      </svg>
    </div>
  );
}

export default Graph;
