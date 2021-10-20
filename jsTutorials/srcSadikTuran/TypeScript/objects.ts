/*
* Interfaces , Class
* 
* Interfaces- ts-de istifade edilen interfaceler diger dillerde oldugu kimi,
* esasen scheme rolu oynayir ve eyni scheme-i uygun class-lara tetbiq ede bilerik,
* hemcinin es5-de interface anlayisi olmadigindan eger ts file-ni trasnpile etsek
* js file-da bununla bagli hecne yaranmir bunun ucun class-a implemetasiya olmalidir.
* 
* */
interface Point{
    x:number,
    y:number
}
interface Passenger{
    name:string;
    phone:string;
}

interface Vehicle{
    currentLocation:Point;
    travelTO(point:Point):void;
    getDistance(pointA:Point,pointB:Point):number;
    addPassengers(passenger:Passenger):void;
    removePassenger(passenger:Passenger):void;
}
let travelTO=(point:Point)=>{

}

let getDistance=(pointA:Point,pointB:Point)=>{

}
// class
class Taxi implements Vehicle{

    currentLocation: Point;

    addPassengers(passenger: Passenger): void {
    }

    getDistance(pointA: Point, pointB: Point): number {
        return 0;
    }

    removePassenger(passenger: Passenger): void {
    }

    travelTO(point: Point): void {
        console.log(`taxi going from ${point.x} to ${point.y}`)
    }

}
class Bus implements Vehicle{
    currentLocation: Point;

    addPassengers(passenger: Passenger): void {
    }

    getDistance(pointA: Point, pointB: Point): number {
        return 0;
    }

    removePassenger(passenger: Passenger): void {
    }

    travelTO(point: Point): void {
        console.log(`bus going from ${point.x} to ${point.y}`)
    }

}
let taxi_1:Taxi = new Taxi();
taxi_1.travelTO({x:1,y:2});
taxi_1.currentLocation={x:2,y:5};
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);