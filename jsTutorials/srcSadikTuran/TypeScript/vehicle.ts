import {Point} from "./point";

export interface Vehicle {
    travelTO(point: Point): void;
}