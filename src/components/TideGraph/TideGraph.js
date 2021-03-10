import React, { useEffect } from "react";
import { curveCardinal } from "@visx/curve";
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";
import tides from "../../lib/tide.json";
import { Header, HeaderTitle, TideGraphText } from "../Graph/GraphElements";

function Graph(props) {
  const width = props.width;
  const height = props.height;

  const data = [];

  useEffect(() => {
    if (props.time >= 19) {
      document
        .getElementById("graphRect")
        .setAttribute("fill", props.colors.nightGraphColor);
    }
  });

  const getData = (arr) => {
    arr.forEach((element, index) => {
      data.push({
        time: element.time,
        height: element.sg,
      });
    });
  };

  getData(tides);

  const getX = (d) => d.time;
  const getY = (d) => d.height;

  const xScale = scaleLinear({
    range: [0, width - 60],
    round: false,
    domain: [0, Math.max(...data.map(getX))],
  });
  const yScale = scaleLinear({
    range: [height - 35, 0],
    round: false,
    domain: [Math.min(...data.map(getY)), Math.max(...data.map(getY))],
  });

  const compose = (scale, accessor) => (data) => scale(accessor(data));
  const xPoint = compose(xScale, getX);
  const yPoint = compose(yScale, getY);

  const tickLabelProps = () => ({
    fill: props.time >= 19 ? "#fff" : "#000",
    fontSize: 12,
    fontFamily: "sans-serif",
    textAnchor: "middle",
    fontWeight: 100,
  });

  return (
    <div className='GraphCard'>
      <Header>
        <HeaderTitle currentTime={props.time}>Tide Height</HeaderTitle>
        <TideGraphText currentTime={props.time}>
          {tides[props.time].sg}ft
        </TideGraphText>
      </Header>
      <svg width={width} height={height} className='Graph'>
        <rect
          id='graphRect'
          width={width}
          height={height}
          fill='#fafeff'
          rx={15}
          ry={15}
        />
        <Group left={35} top={10}>
          {data.map((d, j) => (
            <line
              key={j}
              x1={xPoint(d)}
              y1={height - 35}
              x2={xPoint(d)}
              y2={0}
              stroke={d.time === props.time ? "#ff0000" : "rgba(0,0,0,0.0)"}
            />
          ))}
          <LinePath
            curve={curveCardinal}
            data={data}
            x={(d) => xPoint(d) ?? 0}
            y={(d) => yPoint(d) ?? 0}
            stroke='#1873b0'
            strokeWidth={2}
            strokeOpacity={1}
            shapeRendering='geometricPrecision'
            markerMid='url(#marker-circle)'
            markerStart={"x"}
            markerEnd={">"}
          />
          <AxisBottom
            scale={xScale}
            hideTicks={true}
            top={90}
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
            tickLabelProps={tickLabelProps}
            left={-5}
          />
        </Group>
      </svg>
    </div>
  );
}

export default Graph;
