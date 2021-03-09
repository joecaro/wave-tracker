import React, { useEffect } from "react";
import { curveCardinal } from "@visx/curve";
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";
import "./TideGraph.css";
import tides from "../../lib/tide.json";

function Graph(props) {
  const width = props.width;
  const height = props.height;

  const data = [];
  let currentTime = new Date().getHours();

  useEffect(() => {
    if (new Date().getHours() >= 19) {
      document
        .getElementById("tideRect")
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
    range: [0, width - 45],
    round: false,
    domain: [0, Math.max(...data.map(getX))],
  });
  const yScale = scaleLinear({
    range: [height - 60, 0],
    round: false,
    domain: [Math.min(...data.map(getY)), Math.max(...data.map(getY))],
  });

  const compose = (scale, accessor) => (data) => scale(accessor(data));
  const xPoint = compose(xScale, getX);
  const yPoint = compose(yScale, getY);

  const tickLabelProps = () => ({ 
    fill: '#fff', 
    fontSize: 12, 
    fontFamily: "sans-serif", 
    textAnchor: "middle",
    fontWeight: 100
  })

  return (
    <div className='GraphCard'>
      <h3>Tide Height</h3>
      <svg width={width} height={height} className='Graph'>
        <rect
          id='tideRect'
          width={width}
          height={height}
          fill='#fafeff'
          rx={15}
          ry={15}
        />
        <Group left={35} top={10}>
          {data.map((d, j) => (
            <circle
              key={j}
              r={3}
              cx={xPoint(d)}
              cy={yPoint(d)}
              stroke={d.time === currentTime ? "#ffaa00" : "rgba(0,0,0,0.0)"}
              fill='transparent'
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
            top={65}
            label={"Time"}
            numTicks={6}
            stroke={'#fff'}
            tickLabelProps={tickLabelProps}
          />
          <AxisLeft
            scale={yScale}
            hideTicks={true}
            hideAxisLine={true}
            numTicks={3}
            tickLabelProps={tickLabelProps}
          />
        </Group>
      </svg>
    </div>
  );
}

export default Graph;
