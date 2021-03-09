const fetch = require("node-fetch");
const write = require("write");
function setStartAndEndTimes() {
  const startTime = new Date();
  startTime.setHours(0);
  startTime.setMinutes(0);
  startTime.setSeconds(0);
  startTime.setMilliseconds(0);
  let start = startTime.toISOString();

  const endTime = new Date();
  endTime.setDate(endTime.getDate() + 1);
  endTime.setHours(0);
  endTime.setMinutes(0);
  endTime.setSeconds(0);
  endTime.setMilliseconds(0);
  let end = endTime.toISOString();

  return [start, end];
}

function convertTime(x) {
  let time = new Date(x.replace(" ", "T")).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  let [hour, minutes] = time.split(":").map((time) => parseInt(time));
  let graphTime = hour + minutes / 60;
  return graphTime;
}

function convertToFeet(height) {
  let x = (height * 3.281).toFixed(2);
  return x;
}

const lat = 33.79;
const lng = -78.73;
let [start, end] = setStartAndEndTimes();
const params =
  "airTemperature,cloudCover,visibility,seaLevel,swellHeight,swellPeriod,swellDirection,secondarySwellHeight,secondarySwellPeriod,secondarySwellDirection,waterTemperature,waveDirection,waveHeight,wavePeriod,windWaveHeight,windWaveDirection,windDirection,windSpeed";
const WAVE_API_KEY =
  "4a275400-7bbd-11eb-8ad5-0242ac130002-4a27548c-7bbd-11eb-8ad5-0242ac130002";
const WEATHER_API_KEY = "66cfb3f3063ff2c5b5e753e693508725";

const getData = async () => {
  let response = await fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${start}&end=${end}&source=noaa`,
    {
      headers: {
        Authorization: WAVE_API_KEY,
      },
    }
  );
  let data = await response.json();

  let list = data.hours;
  list.forEach((element) => {
    let time = element.time;
    element.time = convertTime(time);
  });

  let file = JSON.stringify(list);
  write.sync("data.json", file, (err) => {
    if (err) throw err;
    console.log("file has been saved");
  });
  console.log(data);
};

const getTide = async () => {
  let response = await fetch(
    `https://api.stormglass.io/v2/tide/sea-level/point?lat=${lat}&lng=${lng}&start=${start}&end=${end}`,
    {
      headers: {
        Authorization: WAVE_API_KEY,
      },
    }
  );
  let data = await response.json();

  let list = data.data;
  list.forEach((element) => {
    let x = element.time;
    let y = element.sg;
    element.time = convertTime(x);
    element.sg = convertToFeet(y);
  });

  list.pop();

  let file = JSON.stringify(list);
  write.sync("tide.json", file, (err) => {
    if (err) throw err;
    console.log("file has been saved");
  });
  console.log(data);
};

getData();
getTide();

// let data = {
//   airTemperature: "60",
//   seaLevel: "1.4",
//   swellHeight: "1",
//   swellPeriod: "6",
//   swellDirection: "270",
//   secondarySwellHeight: ".5",
//   secondarySwellPeriod: "3",
//   secondarySwellDirection: "300",
//   waterTemperature: "62",
//   waveDirection: "273",
//   waveHeight: "2.3",
//   wavePeriod: "6",
//   windWaveHeight: "3",
//   windWaveDirection: "275",
//   windDirection: "280",
//   windSpeed: "10",
// };
