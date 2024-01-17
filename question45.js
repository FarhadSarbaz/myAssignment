"use strict";
/* 45.	Cars: Write a function that stores information about a car in a Object.
 The function should always receive a manufacturer and a model name. It should then
  accept an arbitrary number of keyword arguments. Call the function with the required
  information and two other name-value pairs, such as a color or an optional feature.
  Print the Object that’s returned to make sure all the information was stored correctly.*/
Object.defineProperty(exports, "__esModule", { value: true });
function carInformation(information = { manufacturer: "string", modelName: "string" }) {
    return information;
}
let car1 = {
    manufacturer: "Toyota", modelName: "Passo10", color: "black", transmissionType: "auto",
    enginCapacity: 1000
};
console.log(carInformation(car1));
