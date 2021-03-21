import React, { useEffect, useState } from "react";
import StatsCard from "../StatsCards/StatsCard";
import GraphCard from "../GraphCard/GraphCard";
import TideGraphCard from "../TideGraphCard/TideGraphCard";
import {
  MainContainer,
  TideContainer,
  Card,
  TideWindow,
  WaveContainer,
  CardTitle,
  Graph,
  WaveWindow,
  Title,
  ShowTideGraphButton,
  ShowWaveGraphButton,
  ButtonElementBottom,
  ButtonElementSide,
  ButtonElementLine,
} from "./MainElements";
import timeToFetch from "../../lib/timeToFetch.json";

import degToCard from "../../lib/degToCard";
import tideDetails from "../../lib/today/tide.json";
import tideExtremes from "../../lib/today/tideExtremes.json";
//TODO add today/tomorrow tide

const Main = (props) => {
  const [isTideDisplayed, setIsTideDisplayed] = useState(false);
  const [isWaveDisplayed, setIsWaveDisplayed] = useState(false);

  const toggleTideGraph = () => {
    setIsTideDisplayed(!isTideDisplayed);
  };

  const toggleWaveGraph = () => {
    setIsWaveDisplayed(!isWaveDisplayed);
  };

  //creating variables for using tide/wave data
  let time = new Date().getHours();
  let waveData = props.data[time];
  let tideData = tideDetails[time];
  let getNextTideExtremeIndex = (element) => {
    return element.time >= time;
  };
  let convertToHoursMinutes = (time) => {
    let hours = Math.floor(time);
    let numberOfMinutes = Math.round((time - Math.floor(time)) * 60);
    let minutes =
      numberOfMinutes < 10 ? `0${numberOfMinutes}` : numberOfMinutes;
    return `${hours}:${minutes}`;
  };

  let nextTideExtreme = tideExtremes.find(getNextTideExtremeIndex);

  //arranging date for tide/wave cards
  let tideCards = [
    {
      name: "Current Tide",
      height: `${(tideData.sg * 3.281).toFixed(2)} ft`,
      direction: nextTideExtreme
        ? nextTideExtreme.type === "high"
          ? "Increasing"
          : "Decreasing"
        : "none",
      icon: "https://i.imgur.com/0A5zC2l.gif",
    },
    {
      name: "Next Tide",
      height: nextTideExtreme
        ? `${(nextTideExtreme.height * 3.281).toFixed(2)} ft`
        : `none`,
      period: nextTideExtreme
        ? convertToHoursMinutes(nextTideExtreme.time)
        : `none`,
      direction: nextTideExtreme ? nextTideExtreme.type : "none",
      icon: "https://i.imgur.com/0A5zC2l.gif",
    },
    {
      name: "Wind",
      height: `${(waveData.windSpeed.noaa * 2.23).toFixed(0)} mph`,
      period: `${(waveData.gust.noaa * 2.23).toFixed(0)}`,
      direction: degToCard(waveData.windDirection.noaa),
      icon: "https://i.imgur.com/0A5zC2l.gif",
    },
  ];

  let waveCards = [
    {
      name: "Wave Height",
      height: `${(waveData.waveHeight.noaa * 3.281 * (5 / 8)).toFixed(2)} ft`,
      direction: degToCard(waveData.waveDirection.noaa),
      period: `${waveData.wavePeriod.noaa} s`,
      nameSec: "Biggest 1/3",
      heightSec: `${(waveData.waveHeight.noaa * 3.281).toFixed(2)} ft`,
      icon: "https://i.imgur.com/0A5zC2l.gif",
    },
    {
      name: "Swell Height",
      height: `${(waveData.swellHeight.noaa * 3.281 * (5 / 8)).toFixed(2)} ft`,
      direction: degToCard(waveData.swellDirection.noaa),
      period: `${waveData.swellPeriod.noaa} s`,
      icon: "https://i.imgur.com/0A5zC2l.gif",
    },
    {
      name: "Wind Wv Hght",
      height: `${(waveData.windWaveHeight.noaa * 3.281 * (5 / 8)).toFixed(
        2
      )} ft`,
      direction: degToCard(waveData.windWaveDirection.noaa),
      icon: "https://i.imgur.com/0A5zC2l.gif",
    },
  ];

  //do we need to update the data?
  useEffect(() => {
    let time = new Date().getHours();
    console.log(time, timeToFetch.time);
    if (time >= timeToFetch.time) {
      console.log("fetching new data...");
    } else console.log("data up to date");
  }, []);

  return (
    <React.Fragment>
      <MainContainer>
        <TideContainer>
          <TideWindow>
            <Card>
              <CardTitle>
                <Title>Tide</Title>
                <ShowTideGraphButton
                  onClick={toggleTideGraph}
                  isDisplayed={isTideDisplayed}>
                  <ButtonElementBottom isDisplayed={isTideDisplayed} />
                  <ButtonElementSide isDisplayed={isTideDisplayed} />
                  <ButtonElementLine isDisplayed={isTideDisplayed} />
                </ShowTideGraphButton>
              </CardTitle>
              <StatsCard
                isDisplayed={isTideDisplayed}
                key={"tideCard"}
                graphData={props.data}
                data={tideCards}
                cards={tideCards}
              />
            </Card>
            <TideGraphCard
              key='tideGraph'
              data={tideDetails}
              extremes={tideExtremes}
              graphHeight={props.graphHeight}
              graphWidth={props.graphWidth}
              isDisplayed={isTideDisplayed}></TideGraphCard>
          </TideWindow>
        </TideContainer>
        <WaveContainer>
          <WaveWindow>
            <Card>
              <CardTitle>
                <Title>Wave</Title>
                <ShowWaveGraphButton
                  isDisplayed={isWaveDisplayed}
                  onClick={toggleWaveGraph}>
                  <ButtonElementBottom isDisplayed={isWaveDisplayed} />
                  <ButtonElementSide isDisplayed={isWaveDisplayed} />
                  <ButtonElementLine isDisplayed={isWaveDisplayed} />
                </ShowWaveGraphButton>
              </CardTitle>
              <StatsCard
                isDisplayed={isWaveDisplayed}
                key={"waveCard"}
                cards={waveCards}
                graphData={props.data}
              />
            </Card>
            <GraphCard
              isDisplayed={isWaveDisplayed}
              key='waveGraph'
              graphHeight={props.graphHeight}
              graphWidth={props.graphWidth}
              data={props.data}></GraphCard>
          </WaveWindow>
        </WaveContainer>
      </MainContainer>
    </React.Fragment>
  );
};

export default Main;
