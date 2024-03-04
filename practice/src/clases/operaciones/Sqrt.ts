import IOperacion from "../../contratos/operaciones/IOperacion";

export default class Sqrt implements IOperacion
{
    resolver(primerOperando: number, segundoOperando: number = 2): number {
        return Number((Math.sqrt(primerOperando)).toFixed(2));
    }
}