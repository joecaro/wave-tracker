import React, { useEffect, useState } from "react";
import TideCard from "..//TideCard/TideCard";
import Surfboard from "../Surfboard/Surfboard";
import "./TideContainer.css";
// const lat = 33.79;
// const lng = -78.73;
// const params = '';
// const API_KEY = '4a275400-7bbd-11eb-8ad5-0242ac130002-4a27548c-7bbd-11eb-8ad5-0242ac130002'
// const LOCAL_STORAGE_KEY = "waves-key";

const TideContainer = () => {
  const [tides, setData] = useState([
    { height: "Get the Tide", time: "0", type: "noshow" },
  ]);

  useEffect(() => {
    // let response = await fetch(`https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&params=${params}`, {
    //   headers: {
    //     'Authorization': API_KEY
    //   }
    // });
    // let tides = await response.json()
    // console.log(tides.data)
    let tides = [
      {
        height: "1.18",
        time: "2019-03-15 03:40:44+00:00",
        type: "high",
      },
      {
        height: "0.60",
        time: "2019-03-15 09:53:54+00:00",
        type: "low",
      },
      {
        height: "1.20",
        time: "2019-03-15 16:23:29+00:00",
        type: "high",
      },
      {
        height: ".80",
        time: "2019-03-15 23:03:29+00:00",
        type: "low",
      },
    ];

    setData(tides);
  }, []);

  //TODO set local storage to contain forecast data

  const handleMargin = () => {
    let time = new Date().toLocaleTimeString("en-gb", {
      hour: "2-digit",
      minute: "2-digit",
    });
    let [hour, minutes] = time.split(":").map((time) => parseInt(time));
    let timeInMinutes = hour * 60 + minutes;
    let margin = (timeInMinutes / 1440) * 312 - 55;
    return { marginLeft: margin + "px" };
  };

  const handleCurrentTime = () => {
    let time = new Date().toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return time;
  };

  useEffect(() => {
    handleMargin();
  }, []);

  return (
    <div className='TideContainer card'>
      <div className='board'>
        <Surfboard />
      </div>
      <div className='border'></div>
      <div className='currentTime' style={handleMargin()}>
        <i class='bi bi-arrow-up'></i>
        <p>{handleCurrentTime()}</p>
      </div>
      <section>
        <TideCard tides={tides} />
      </section>
    </div>
  );
};

export default TideContainer;
