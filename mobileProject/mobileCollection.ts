import { Mobile } from "./mobile";

export class MobileCollection {
  // atributos
  private _mobileCollection: Mobile[];
  private _totalPrice: number;

  // constructor
  constructor(arrayMobile: Mobile[]) {
    this._mobileCollection = arrayMobile;
    this._totalPrice = this.totalPriceCalculation();
  }

  // getters
  public get mobileCollection(): Mobile[] {
    return this._mobileCollection;
  }
  public get totalPrice(): number {
    return this._totalPrice;
  }

  // setters
  public set mobileCollection(arrayMobile: Mobile[]) {
    this._mobileCollection = arrayMobile;
  }
  public set totalPrice(totalPrice: number) {
    this._totalPrice = totalPrice;
  }

  //   m. públicos
  public printCollection(): void {
    this._mobileCollection.forEach((mobile) => mobile.print());
    console.log(`Price overall: ${this._totalPrice}`);
    
  }
  //   m. privados
  private totalPriceCalculation(): number {
    let totalPrice: number = this._mobileCollection.reduce(
      (acum: number, mobile: Mobile) => acum + mobile.price,
      0
    );
    return totalPrice;
  }
}
