export default class Car {
  constructor(brand, model, color, licensePlate) {
    this._brand = brand;
    this._model = model;
    this._color = color;
    this._licensePlate = licensePlate;
  }

  //Getters
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
    return this._color;
  }
}
