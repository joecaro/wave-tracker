export const getWaveData = (arr, container) => {
  arr.forEach((element, index) => {
    container.push({
      time: index,
      height: (element.waveHeight.noaa * 3.281 * (5 / 8)).toFixed(2),
    });
  });
};
export const getSwellWaveData = (arr, container) => {
  arr.forEach((element, index) => {
    container.push({
      time: index,
      height: (element.swellHeight.noaa * 3.281 * (5 / 8)).toFixed(2),
    });
  });
};
export const getWindWaveData = (arr, container) => {
  arr.forEach((element, index) => {
    container.push({
      time: index,
      height: (element.windWaveHeight.noaa * 3.281 * (5 / 8)).toFixed(2),
    });
  });
};

export const getX = (d) => d.time;
export const getY = (d) => d.height;
