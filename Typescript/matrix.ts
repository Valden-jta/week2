import { Vector } from "./vector";

export class Matrix {
  private _elements: Vector[];

  constructor(n: number, m: number, k: number) {
    // this._elements = new Array(n);  = [];
    for (let i = 0; i < n; i++) {
      this._elements[i] = new Vector(m, k);
      // this._elements.push(new Vector(m,K))
    }
  }

  public print() {
    this._elements.map(vector => console.log((vector.getElements())));
  }

  // public add(m1: Matrix): Matrix {
  //   let resultMatrix: Matrix = new Matrix(this._elements.length, 0, 0);
  //   for (let i = 0;i < this._elements.length; i++) {
  //           resultMatrix._elements[i] = this._elements[i].add(m1._elements[i])
  //       }
  //   return resultMatrix;
  //   }
  public add(m1:Matrix):Matrix {
    
    let result:Matrix = new Matrix(this._elements.length, 0, 0);
    result._elements = this._elements.map((vector,i) => vector.add(m1._elements[i]))
    return result;
  }  

  public multNumber(n: number): Matrix {
    let resultMatrix: Matrix = new Matrix(this._elements.length, 0, 0);
    for (let i = 0; i < this._elements.length; i++) {
      resultMatrix._elements[i] = this._elements[i].multNumber(n);
    }
    return resultMatrix;
  }

    public multSpecial(n:number):Matrix {
        let resultMatrix: Matrix = new Matrix(this._elements.length, 0, 0);
        for (let i = 0; i < this._elements.length; i++) {
            let vectorAux = new Vector(this._elements[i].getElements().length, 0);
            for (let j = 0; j <this._elements[i].getElements().length ;j++) {
                if(this._elements[i].getElements()[j] % 2 == 0) {
                    vectorAux.getElements()[j] = this._elements[i].getElements()[j] * n;
                } else {
                    vectorAux.getElements()[j] = this._elements[i].getElements()[j] * (n-1);
                }
            }
            resultMatrix._elements[i] = vectorAux;
        }
        return resultMatrix;
    }


}
