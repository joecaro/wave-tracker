import React from "react";
import { curveCardinal } from "@visx/curve";
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Axis, AxisBottom, AxisLeft } from "@visx/axis";
import "./Graph.css";

function Graph(props) {
  const width = 300;
  const height = 100;

  const data = [];

  const getData = (arr) => {
    arr.forEach((element, index) => {
      data.push({
        time: index,
        height: (element.waveHeight.noaa * 3.281).toFixed(2),
      });
    });
  };

  getData(props.data);

  const getX = (d) => d.time;
  const getY = (d) => d.height;

  const xScale = scaleLinear({
    range: [0, 200],
    round: false,
    domain: [0, Math.max(...data.map(getX))],
  });
  const yScale = scaleLinear({
    range: [40, 0],
    round: false,
    domain: [0, Math.max(...data.map(getY))],
  });

  const compose = (scale, accessor) => (data) => scale(accessor(data));
  const xPoint = compose(xScale, getX);
  const yPoint = compose(yScale, getY);
  return (
    <div className='GraphCard'>
      <h3>Wave Height</h3>
      <svg width={width} height={height} className='Graph'>
        <rect width={width} height={height} fill='#ffffff' rx={15} ry={15} />
        <Group left={65} top={10}>
          {data.map((d, j) => (
            <circle
              key={j}
              r={3}
              cx={xPoint(d)}
              cy={yPoint(d)}
              stroke='rgba(33,33,33,0.5)'
              fill='transparent'
            />
          ))}
          <LinePath
            curve={curveCardinal}
            data={data}
            x={(d) => xPoint(d) ?? 0}
            y={(d) => yPoint(d) ?? 0}
            stroke='#333'
            strokeWidth={1}
            strokeOpacity={1}
            shapeRendering='geometricPrecision'
            markerMid='url(#marker-circle)'
            markerStart={"x"}
            markerEnd={">"}
          />
          <AxisBottom scale={xScale} top={40} label={"Time"} />
          <AxisLeft scale={yScale} label={"Height"} numTicks={3} />
        </Group>
      </svg>
    </div>
  );
}

export default Graph;
