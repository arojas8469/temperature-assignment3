
function convertTemperature(temperature, scale) {
    if (scale === "C") {
        
        return (temperature * 9/5) + 32;
    } else if (scale === "F") {
        return (temperature - 32) * 5/9;
    } else {
        return "Invalid scale. Use 'C' or 'F'.";
    }
}


let temperature = Number(prompt("Enter the temperature:"));
let scale = prompt("Enter the scale (C for Celsius, F for Fahrenheit):").toUpperCase();


let convertedTemp;
if (scale === "C" || scale === "F") {
    convertedTemp = convertTemperature(temperature, scale);
    let targetScale = scale === "C" ? "F" : "C";
    document.getElementById("result").innerHTML = 
        `${temperature}°${scale} is equal to ${convertedTemp.toFixed(2)}°${targetScale}.`;
} else {
    document.getElementById("result").innerHTML = "Invalid scale entered. Please use 'C' or 'F'.";
}
