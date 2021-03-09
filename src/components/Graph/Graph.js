import React, { useEffect } from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";
import degtoCard from "../../lib/degToCard";
import {GraphText} from './GraphElements'
import "./Graph.css";

function Graph(props) {
  useEffect(() => {
    if (new Date().getHours() >= 19) {
      document
        .getElementById(`${props.type}Rect`)
        .setAttribute("fill", props.colors.nightGraphColor);
    }
  });

  const width = props.width;
  const height = props.height;

  let xMax = width - 55;
  let yMax = height - 60;

  const data = [];
  let currentTime = new Date().getHours();

  const getData = (arr) => {
    arr.forEach((element, index) => {
      data.push({
        time: index,
        height: (
          (props.type === "wave"
            ? element.waveHeight.noaa
            : props.type === "swell"
            ? element.swellHeight.noaa
            : element.windWaveHeight.noaa) *
          3.281 *
          (5 / 8)
        ).toFixed(2),
      });
    });
  };

  getData(props.data);

  const direction = degtoCard(
    props.type === "wave"
      ? props.data[currentTime].waveDirection.noaa
      : props.type === "swell"
      ? props.data[currentTime].swellDirection.noaa
      : props.data[currentTime].windWaveDirection.noaa
  );
  const period =
    props.type === "wave"
      ? `${props.data[currentTime].wavePeriod.noaa} seconds - `
      : props.type === "swell"
      ? `${props.data[currentTime].swellPeriod.noaa} seconds - `
      : "";
  const getX = (d) => d.time;
  const getY = (d) => d.height;

  const xScale = scaleLinear({
    range: [0, xMax],
    round: false,
    domain: [0, Math.max(...data.map(getX))],
  });
  const yScale = scaleLinear({
    range: [yMax, 0],
    round: false,
    domain: [0, Math.max(...data.map(getY))],
  });

  const compose = (scale, accessor) => (data) => scale(accessor(data));
  const xBar = compose(xScale, getX);
  const yBar = compose(yScale, getY);


  const tickLabelProps = () => ({ 
    fill: '#fff', 
    fontSize: 12, 
    fontFamily: "sans-serif", 
    textAnchor: "middle",
    fontWeight: 50
  })

  return (
    <div className='GraphCard'>
      <h3>
        {props.type === "wave"
          ? "Wave"
          : props.type === "swell"
          ? "Swell"
          : "Wind Wave"}{" "}
        Height
      </h3>
      <GraphText currentTime={currentTime}>
        {period}
        {direction}
      </GraphText>
      <svg width={width} height={height}>
        <rect
          id={`${props.type}Rect`}
          width={width}
          height={height}
          fill='#fafeff'
          rx={14}
        />
        <Group top={60 / 2} left={35}>
          {data.map((d) => {
            const time = getX(d);
            const barWidth = xMax / 40;
            const barHeight = yMax - (yBar(d) ?? 0);
            const barX = xBar(d);
            const barY = yMax - barHeight;
            return (
              <>
                <Bar
                  key={`bar-${time}`}
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill={getX(d) === currentTime ? "#ffd930" :currentTime >= 19 ? '#0c5153' : "#197fb6"}
                />
                <AxisBottom
                  scale={xScale}
                  hideTicks={true}
                  hideZero={true}
                  top={65}
                  numTicks={6}
                  stroke={currentTime >= 19 ? '#fff' : "#000"}
                  tickLabelProps={tickLabelProps}
                />
                <AxisLeft
                  scale={yScale}
                  hideTicks={true}
                  hideAxisLine={true}
                  numTicks={3}
                  tickLabelProps={tickLabelProps}
                  left={-5}
                />
              </>
            );
          })}
        </Group>
      </svg>
    </div>
  );
}

export default Graph;
