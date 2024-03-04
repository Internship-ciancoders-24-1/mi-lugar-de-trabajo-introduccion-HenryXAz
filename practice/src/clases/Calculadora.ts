import ConvertidorInfijoSufijo from "./ConvertidorInfijoSufijo";
import OperadorSufijo from "./OperadorSufijo";

export default class Calculadora
{
    convertidor!: ConvertidorInfijoSufijo;
    operador!: OperadorSufijo;    

    constructor()
    {
    }

    resolver(operacion: string):number 
    {
        if(operacion.length > 20) {
            throw new Error('la operación no debe de exceder los 20 caracteres')
        }

        this.convertidor = new ConvertidorInfijoSufijo(operacion)
        const operacionEnSufijo = this.convertidor.resolver()
        this.operador = new OperadorSufijo(operacionEnSufijo);
        const resultado = this.operador.resolver() 
        return resultado;
    }
}