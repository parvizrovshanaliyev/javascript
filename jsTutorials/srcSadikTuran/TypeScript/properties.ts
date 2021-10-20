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
    constructor(private _location:Point,private _color?:string) {}
    /*
    * access modifier
    * class memberler default olaraq public qebul edilir.
    * */
    
    /*
    * encapculation with methods
    * 
    * */
    getLocation(){
        return this._location;
    }
    
    setLocation(value:Point){
        if(value.x<0 || value.y<0){
            throw  new Error('value not be <0')
        }else{
            this._location=value;
        }
    }

    /*prop*/
    get location(){
        return this._location;
    }

    set location(value:Point){
        if(value.x<0 || value.y<0){
            throw  new Error('value not be <0')
        }else{
            this._location=value;
        }
    }

    travelTO(point: Point): void {
        /*
        * this.location deye class member olmasada argumentden bunu goture bilirik.
        * */
        console.log(`taxi going from ${this._location.x} to ${this._location.y}`)
    }

}

let taxi_1:Taxi = new Taxi({x:2,y:5},'white');
taxi_1.travelTO({x:1,y:2});
// get
let currentLocation=taxi_1.location;
// set
taxi_1.location={x:1,y:2};