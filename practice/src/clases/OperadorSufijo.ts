import CreadorOperacion from "./operaciones/CreadorOperacion";
import Sqrt from "./operaciones/Sqrt";


export default class OperadorSufijo
{
    operacion!: string[];
    pila: number[] = [];

    constructor(operacion: string[]) {
        this.operacion = [...operacion];
    }

    esDigito(caracter: string):boolean {
        let expresionDigito = /^\d+(\.\d+)?$/
        return expresionDigito.test(caracter)
    }

    resolver(): number
    {   
        for(let i=0;i<this.operacion.length; i++) {
            
            if(this.esDigito(this.operacion[i])) {
                this.pila.push(Number(this.operacion[i]));
                continue;
            }

            let operacion = CreadorOperacion.DevolverOperacion(this.operacion[i]);

            if(operacion instanceof Sqrt) {
                let segundoOperando = this.pila.pop() ?? 0
                let resultado = operacion.resolver(segundoOperando, 2); 

                this.pila.push(resultado)
                continue;  
            }
             
            let segundoOperando = this.pila.pop() ?? 1
            let primerOperando = this.pila.pop() ?? 1
            let resultado = operacion.resolver(primerOperando, segundoOperando)
  
            this.pila.push(resultado)
        }

        return Number(this.pila.join(''));
    }
}