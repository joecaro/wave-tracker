export const getTideData = (arr, container) => {
  arr.forEach((element, index) => {
    if (index < 25)
      container.push({
        time: index,
        height: (element.sg * 3.281 * (5 / 8)).toFixed(2),
      });
  });
};

export const getX = (d) => d.time;
export const getY = (d) => d.height;
