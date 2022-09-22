export interface IDriver {
  drive(): void;
}

export interface IFlyier {
  fly(): void;
}

export interface IHybridVehicle extends IDriver, IFlyier {}
