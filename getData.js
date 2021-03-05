const fetch = require("node-fetch");
const write = require("write");

const lat = 33.79;
const lng = -78.73;
const params =
  "airTemperature,cloudCover,visibility,seaLevel,swellHeight,swellPeriod,swellDirection,secondarySwellHeight,secondarySwellPeriod,secondarySwellDirection,waterTemperature,waveDirection,waveHeight,wavePeriod,windWaveHeight,windWaveDirection,windDirection,windSpeed";
const WAVE_API_KEY =
  "4a275400-7bbd-11eb-8ad5-0242ac130002-4a27548c-7bbd-11eb-8ad5-0242ac130002";
// const WEATHER_API_KEY = "66cfb3f3063ff2c5b5e753e693508725";

const getData = async () => {
  let response = await fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
    {
      headers: {
        Authorization: WAVE_API_KEY,
      },
    }
  );
  let data = await response.json();
  let file = JSON.stringify(data);
  write.sync("data.json", file, (err) => {
    if (err) throw err;
    console.log("file has been saved");
  });
  console.log(data);
};

getData();

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

// const getWeather = async () => {
//   let response = await fetch(
//     `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`,
//     {
//       headers: {
//         Authorization: WAVE_API_KEY,
//       },
//     }
//   );
//   let tides = await response.json();
//   console.log(tides);
// };

// getWeather();
