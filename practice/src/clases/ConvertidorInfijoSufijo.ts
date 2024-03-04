export default class ConvertidorInfijoSufijo
{
    operacion!: any
    pilaPrincipal: string[] = []
    pilaTemporal: string[] = []

    jerarquíaOperadores: any = {
        "+" : 1,
        "-" : 1,
        "*" : 2,
        "/" : 2,
        "√" : 3,
        "^" : 3,
        ")" : 4,
        "(" : 4,
    }

    convertirOperadorAArray(operacion: string): RegExpMatchArray | null
    {
        const separarSegunOperador = /[-+*/^√()]|\d+(\.\d+)?/g;
        return operacion.match(separarSegunOperador)
    }

    esOperacionValida(operacion: string): boolean {
        const caracteresInvalidos = /^[(\d|\d+.\d+)()+\-*\/^√]+$/
        return caracteresInvalidos.test(operacion)
    }   

    esDigito(caracter: string):boolean {
        let expresionDigito = /^\d+(\.\d+)?$/
        return expresionDigito.test(caracter)
    }

    esPrioritario(operador: string, operadorTope: string): boolean
    {
        return this.jerarquíaOperadores[operador] > this.jerarquíaOperadores[operadorTope]
    }

    noEsPrioritario(operador: string, operadorTope: string): boolean
    {
        return this.jerarquíaOperadores[operador] < this.jerarquíaOperadores[operadorTope]
    }

    esJerarquicamenteIgual(operador: string, operadorTope: string): boolean {
        return this.jerarquíaOperadores[operador] == this.jerarquíaOperadores[operadorTope]
    }

    constructor(
        operacion: string
    ) {
        if(!this.esOperacionValida(operacion)) {
            throw new Error('no es operación válida')
        }

        this.operacion = this.convertirOperadorAArray(operacion)
    }    

    resolver(): string[]
    {
        for(let i=0;i<this.operacion.length; i++) {
            
            if(this.esDigito(this.operacion[i])) {
                this.pilaPrincipal.push(this.operacion[i]) 
                continue;
            }

            if(this.operacion[i] === '(') {
                this.pilaTemporal.push(this.operacion[i])
                continue;
            }

            if(this.operacion[i] === ')') {

                while(true) {
                    let tope = this.pilaTemporal.pop() ?? ''

                    if(tope == '') {
                        break;
                    }
                    
                    if(tope === '(') {
                        break;
                    }
                    
                    this.pilaPrincipal.push(tope)
                }                
                continue;
            }

            let tope = this.pilaTemporal[this.pilaTemporal.length - 1] ?? ''
                        
            if(tope == '') {
                this.pilaTemporal.push(this.operacion[i])
                continue
            }

            if(tope == '(') {
                this.pilaTemporal.push(this.operacion[i])
                continue;
            }

            if(this.esPrioritario(this.operacion[i], tope)) {                
                this.pilaTemporal.push(this.operacion[i])
                continue;
            }

            if(this.noEsPrioritario(this.operacion[i], tope)) {
                while(true) {
                    let tope = this.pilaTemporal.pop() ?? ''

                    if(tope === '') {
                        break;
                    }

                    if(tope === '(') {
                        break;
                    }
                    this.pilaPrincipal.push(tope)

                    let siguiente = this.pilaTemporal[this.pilaTemporal.length - 1]
                    if(this.esPrioritario(this.operacion[i], siguiente)) {
                        break;
                    }
                }

                this.pilaTemporal.push(this.operacion[i])
                continue;
            }

            if(this.esJerarquicamenteIgual(this.operacion[i], tope)) {
                tope = this.pilaTemporal.pop() ?? ''

                if(tope != '') {
                    this.pilaPrincipal.push(tope)
                }
                
                this.pilaTemporal.push(this.operacion[i])
                continue;
            }
        }
        
        if(this.pilaTemporal.length > 0) {
            while(true) {
                if(this.pilaTemporal.length == 0) {
                    break;
                }
                let caracter = this.pilaTemporal.pop() ?? ''
                this.pilaPrincipal.push(caracter)
            }
        }

        return this.pilaPrincipal
    }
}

