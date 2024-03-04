import IOperacion from "../../contratos/operaciones/IOperacion";

export default class Suma implements IOperacion
{
    resolver(primerOperando: number, segundoOperando: number): number {
        return Number((primerOperando + segundoOperando).toFixed(2))
    }
}