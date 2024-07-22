export class Mobile 
{
    // atributos
    private _name: string;
    private _trademark: string;
    private _model: string;
    private _color: string;
    private _price: number;

    // constructor
    constructor(name: string, trademark: string, model: string, color: string, price: number) {
        this._name = name;
        this._trademark = trademark;
        this._model = model;
        this._color = color;
        this._price = price;
    }

    // getters
    public get name(): string {
        return this._name;
    }
    public get trademark():string {
        return this._trademark;
    }
    public get model():string {
        return this._model;
    }
    public get color():string {
        return this._color;
    }
    public get price():number {
        return this._price;
    }

    // setters
    public set name(value: string) {
        this._name = value;
    }
    public set trademark(value: string) {
        this._trademark = value;
    }
    public set model(value: string) {
        this._model = value;
    }
    public set color(value: string) {
        this._color = value;
    }
    public set price(value: number) {
        this._price = value;
    }
    
    // métodos públicos
    // métodos privados
    
}