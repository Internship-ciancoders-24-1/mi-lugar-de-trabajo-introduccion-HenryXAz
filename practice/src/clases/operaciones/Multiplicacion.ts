import IOperacion from "../../contratos/operaciones/IOperacion";

export default class Multiplicacion implements IOperacion
{
    resolver(primerOperando: number, segundoOperando: number): number {
        return Number((primerOperando * segundoOperando).toFixed(2));
    }
}