import { v4 as uuidv4 } from "uuid";

export default class Car {
  constructor(brand, model, color, licensePlate) {
    this._id = uuidv4();
    this._brand = brand;
    this._model = model;
    this._color = color;
    this._licensePlate = licensePlate;
  }

  //Getters
  get id() {
    return this._id;
  }

  get brand() {
    return this._brand;
  }

  get model() {
    return this._model;
  }

  get color() {
    return this._color;
  }

  get licensePlate() {
    return this._licensePlate;
  }

  //Setters
  set brand(newBrand) {
    return (this._brand = newBrand);
  }

  set model(newModel) {
    return (this._model = newModel);
  }

  set color(newColor) {
    return (this._color = newColor);
  }

  set licensePlate(newLicensePlate) {
    return (this._licensePlate = newLicensePlate);
  }
}
