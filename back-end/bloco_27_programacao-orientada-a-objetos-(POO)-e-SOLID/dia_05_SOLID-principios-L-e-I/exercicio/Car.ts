import { IDriver } from './interfaces';

export default class Car implements IDriver {
  drive(): void { console.log('Drive a car') }
}
