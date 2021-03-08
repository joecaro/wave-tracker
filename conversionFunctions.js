let response = require('./tide.json');

function convertTime(x) {
    let time = new Date(x.replace(" ", "T")).toLocaleTimeString(
        "en-GB",
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      );
    let [hour, minutes] = time.split(":").map((time) => parseInt(time));
    let graphTime =  hour + (minutes/60);
    return graphTime
}

function convertToFeet(height){
    let x = (height * 3.281).toFixed(2)
    return x
}

let list = response.data
list.forEach(element => {
   let x = element.time;
   let y = element.sg
    element.time = convertTime(x) 
    element.sg = convertToFeet(y)
});
console.log(list)