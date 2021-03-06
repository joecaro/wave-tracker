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
  endTime.setDate(endTime.getDate() + 4);
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

//request headers
const lat = 33.79;
const lng = -78.73;
let [start, end] = setStartAndEndTimes();
const params =
  "airTemperature,cloudCover,visibility,seaLevel,swellHeight,swellPeriod,swellDirection,secondarySwellHeight,secondarySwellPeriod,secondarySwellDirection,waterTemperature,waveDirection,waveHeight,wavePeriod,windWaveHeight,windWaveDirection,windDirection,windSpeed,gust";
const WAVE_API_KEY =
  "4a275400-7bbd-11eb-8ad5-0242ac130002-4a27548c-7bbd-11eb-8ad5-0242ac130002";

//request functions
const getWaveData = async () => {
  let today = [];
  let tomorrow = [];
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

  for (let i = 0; i < list.length; i++) {
    if (i <= 24) {
      today.push(list[i]);
    } else if (i <= 48) {
      tomorrow.push(list[i]);
    }
  }

  let todayFile = JSON.stringify(today);
  write.sync("../src/lib/today/data.json", todayFile, (err) => {
    if (err) throw err;
    console.log("file has been saved");
  });
  let tomorrowFile = JSON.stringify(tomorrow);
  write.sync("../src/lib/tomorrow/data.json", tomorrowFile, (err) => {
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
  list.forEach((element, index) => {
    let x = element.time;
    let y = element.sg;
    if (index === 24) {
      element.time = 24;
      element.sg = convertToFeet(y);
    } else element.time = convertTime(x);
    element.sg = convertToFeet(y);
  });

  let file = JSON.stringify(list);
  write.sync("../src/lib/today/tide.json", file, (err) => {
    if (err) throw err;
    console.log("file has been saved");
  });
  console.log(data);
};

const getTideExtremes = async () => {
  let today = [];
  let tomorrow = [];
  let response = await fetch(
    `https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&start=${start}&end=${end}`,
    {
      headers: {
        Authorization: WAVE_API_KEY,
      },
    }
  );
  let data = await response.json();

  let list = data.data;
  list.forEach((element, index) => {
    let x = element.time;
    let y = element.sg;
    element.time = convertTime(x);
    element.sg = convertToFeet(y);
  });

  for (let i = 0; i < list.length; i++) {
    if (i <= 24) {
      today.push(list[i]);
    } else if (i <= 48) {
      tomorrow.push(list[i]);
    }
  }

  let todayFile = JSON.stringify(today);
  write.sync("../src/lib/today/tideExtremes.json", todayFile, (err) => {
    if (err) throw err;
    console.log("file has been saved");
  });
  let tomorrowFile = JSON.stringify(tomorrow);
  write.sync("../src/lib/tomorrow/tideExtremes.json", tomorrowFile, (err) => {
    if (err) throw err;
    console.log("file has been saved");
  });
  console.log(data);
};

getWaveData();
getTide();
getTideExtremes();
