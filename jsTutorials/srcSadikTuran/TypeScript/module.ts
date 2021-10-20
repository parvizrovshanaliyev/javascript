import {Taxi} from "./Taxi";

let taxi_1:Taxi = new Taxi({x:2,y:5},'white');
taxi_1.travelTO({x:1,y:2});
// get
let currentLocation=taxi_1.location;
// set
taxi_1.location={x:1,y:2};