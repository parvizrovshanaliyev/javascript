import {Vehicle} from "./vehicle";
import {Point} from "./point";

export class Taxi implements Vehicle{

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