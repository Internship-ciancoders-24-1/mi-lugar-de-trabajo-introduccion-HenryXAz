import IOperacion from "../../contratos/operaciones/IOperacion";

export default class Pow implements IOperacion
{
    resolver(primerOperando: number, segundoOperando: number): number {
        return Number((Math.pow(primerOperando, segundoOperando)).toFixed(2));
    }
}