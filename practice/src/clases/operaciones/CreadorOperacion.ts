import IOperacion from "../../contratos/operaciones/IOperacion";
import Division from "./Division";
import Multiplicacion from "./Multiplicacion";
import Pow from "./Pow";
import Resta from "./Resta";
import Sqrt from "./Sqrt";
import Suma from "./Suma";

export default class CreadorOperacion
{
    static DevolverOperacion(operador: string): IOperacion
    {
        switch(operador) {
            case '+': return new Suma(); break;
            case '-': return new Resta(); break;
            case '*': return new Multiplicacion(); break;
            case '/': return new Division(); break;
            case '^': return new Pow(); break;
            case '√': return new Sqrt(); break;
            default: throw new Error('no es una operación válida')
        }
    }
}