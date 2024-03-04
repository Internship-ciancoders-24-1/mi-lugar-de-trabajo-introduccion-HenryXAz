import Calculadora from "./clases/Calculadora";

function main() {
  const [operacion] = process.argv.splice(2);

  if (operacion == undefined) {
    throw new Error("debe de ingresar una operación");
  }

  try {
    const calculadora = new Calculadora();
    console.log(calculadora.resolver(operacion));
  } catch (error) {
    console.log(error);
  }
}

main();
