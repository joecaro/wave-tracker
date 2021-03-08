import React, {useEffect} from 'react';
import { curveCardinal } from "@visx/curve";
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";


const WindWaveGraph = (props) => {

  useEffect(() => {
    if(new Date().getHours() >= 7){
      document.getElementById('windRect').setAttribute('fill', props.colors.nightGraphColor)
    }

  }, [])

  const width = props.width;
  const height = props.height;

  const data = [];
  let currentTime = new Date().getHours();

  const getData = (arr) => {
    arr.forEach((element, index) => {
      data.push({
        time: index,
        height: ((element.windWaveHeight.noaa * 3.281)*(5/8)).toFixed(2),
      });
    });
  };

  getData(props.data);

  let direction = data[currentTime].swellDirection;

  const getX = (d) => d.time;
  const getY = (d) => d.height;

  const xScale = scaleLinear({
    range: [0, width-45],
    round: false,
    domain: [0, Math.max(...data.map(getX))],
  });
  const yScale = scaleLinear({
    range: [height-60, 0],
    round: false,
    domain: [Math.min(...data.map(getY)), Math.max(...data.map(getY))],
  });

  const compose = (scale, accessor) => (data) => scale(accessor(data));
  const xPoint = compose(xScale, getX);
  const yPoint = compose(yScale, getY);
  return (
    <div className='GraphCard'>
      <h3>Wind Wave Height {direction}</h3>
      <svg width={width} height={height} className='Graph'>
        <rect id='windRect' width={width} height={height} fill='#ffffff' rx={15} ry={15} />
        <Group left={35} top={10}>
          {data.map((d, j) => (
            <circle
              key={j}
              r={2}
              cx={xPoint(d)}
              cy={yPoint(d)}
              stroke={d.time==currentTime? 'rgba(255,0,0,1)' : 'rgba(33,33,33,0.1)'}
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
          <AxisBottom scale={xScale} hideTicks={true}  top={40} label={"Time"} numTicks={6} />
          <AxisLeft scale={yScale} hideTicks={true} hideAxisLine={true} numTicks={3} />
        </Group>
      </svg>
    </div>
  );
}

export default WindWaveGraph;