import React from 'react';
import { curveCardinal } from '@visx/curve'
import { Group } from '@visx/group';
import { line, LinePath } from '@visx/shape';
import { scaleBand, scaleLinear } from '@visx/scale';
import waveData from '../../lib/data.json'
import './Graph.css'

const width = 300;
const height = 100;
const margin = { top: 10, bottom: 10, left: 20, right: 20 };

const xMax = width - margin.left - margin.right;
const yMax = height - margin.top-margin.bottom;

const data = [];

const getData = (arr) => {
  arr.forEach((element, index) => {
    data.push({time: index, height: (element.waveHeight.noaa * 3.281).toFixed(2) })
  });
}
getData(waveData);
console.log(data)


const getX = d => d.time;
const getY = d => d.height;

const xScale = scaleBand({
  range: [0, xMax],
  round: false,
  domain: data.map(getX),
})
const yScale = scaleLinear({
  range: [150, 20],
  round: false,
  domain: [0, Math.max(...data.map(getY))]
})

const compose = (scale, accessor) => data => scale(accessor(data));
const xPoint = compose(xScale, getX);
const yPoint = compose(yScale, getY);


function Graph(props) {

  return (
    <svg width={width} height={height} className='Graph'>
      <rect width={width} height={height} fill="#ffffff" rx={14} ry={14} />
          <Group left={20}>
            {
              data.map((d, j) => (
                <circle
                  key={j}
                  r={3}
                  cx={xPoint(d)}
                  cy={yPoint(d)}
                  stroke="rgba(33,33,33,0.5)"
                  fill="transparent"
                />
              ))}
            <LinePath
              curve={curveCardinal}
              data={data}
              x={d => xPoint(d) ?? 0}
              y={d => yPoint(d) ?? 0}
              stroke="#333"
              strokeWidth={1}
              strokeOpacity={1}
              shapeRendering="geometricPrecision"
              markerMid="url(#marker-circle)"
              markerStart={'x'}
              markerEnd={'>'}
            />
          </Group>
    </svg>
  );
}

export default Graph