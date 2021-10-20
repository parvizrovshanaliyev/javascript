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
    travelTO(point:Point):void;
    getDistance(pointA:Point,pointB:Point):number;
    addPassengers(passenger:Passenger):void;
    removePassenger(passenger:Passenger):void;
}
// class

class Taxi implements Vehicle{

    /*
    * encapculation
    * ts-in bu ozelliyine esasen ctor-un qebul etdiyi argumentler-e
    * private/public  olaraq qeyd edilerse class daxilinde eyni adli 
    * prop/field qeyd etmeye ehtiyyac olmadan this vasitesile gelen
    * argumente reach edib class member kimi istifade ede bilerik.
    * 
    * */
    constructor(private location:Point,private color?:string) {}
    /*
    * access modifier
    * class memberler default olaraq public qebul edilir.
    * */

    addPassengers(passenger: Passenger): void {
    }

    getDistance(pointA: Point, pointB: Point): number {
        return 0;
    }

    removePassenger(passenger: Passenger): void {
    }

    travelTO(point: Point): void {
        /*
        * this.location deye class member olmasada argumentden bunu goture bilirik.
        * */
        console.log(`taxi going from ${this.location.x} to ${this.location.y}`)
    }

}

let taxi_1:Taxi = new Taxi({x:2,y:5},'white');
taxi_1.travelTO({x:1,y:2});