import IOperacion from "../../contratos/operaciones/IOperacion";

export default class Division implements IOperacion
{
    resolver(primerOperando: number, segundoOperando: number): number {
        if(segundoOperando == 0) {
            throw new Error('no se puede dividir por cero');
        }

        return Number((primerOperando / segundoOperando).toFixed(2));
    }
    
}