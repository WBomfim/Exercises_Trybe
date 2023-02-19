import { IFlyier } from "./interfaces";

export default class AirPlane implements IFlyier {
  fly(): void {
    console.log("Flying a airplane");
  }
}
