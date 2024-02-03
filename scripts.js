

// Ejercicio 1: Calcular Velocidad
function calcularVelocidad() {
    // Obtener los valores de distancia y tiempo desde los inputs
    var distanciaEnKilometros = parseFloat(document.getElementById("distancia").value);
    var tiempoEnMinutos = parseFloat(document.getElementById("tiempo").value);

    // Verificar si los valores son números válidos
    if (isNaN(distanciaEnKilometros) || isNaN(tiempoEnMinutos)) {
        document.getElementById("resultadoVelocidad").innerText = "Por favor, ingresa valores numéricos válidos.";
        return;
    }

    // Calcular la velocidad en metros por segundo (m/s)
    var velocidadEnMetrosPorSegundo = (distanciaEnKilometros * 1000) / (tiempoEnMinutos * 60);

    // Mostrar el resultado
    var resultado = "La velocidad es: " + velocidadEnMetrosPorSegundo.toFixed(2) + " m/s";
    document.getElementById("resultadoVelocidad").innerText = resultado;
}




// Ejercicio 2: Clasificar Triángulo
function clasificarTriangulo() {
    // Obtener los valores de los lados desde los inputs
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);

    // Verificar si los valores son números válidos
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        document.getElementById("resultadoTriangulo").innerText = "Por favor, ingresa valores numéricos válidos para los lados del triángulo.";
        return;
    }

    // Verificar la categoría del triángulo
    var categoria = "";
    if (lado1 === lado2 && lado2 === lado3) {
        categoria = "Equilátero";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        categoria = "Isósceles";
    } else {
        categoria = "Escaleno";
    }

    // Mostrar el resultado
    var resultado = "El triángulo es de categoría: " + categoria;
    document.getElementById("resultadoTriangulo").innerText = resultado;
}

// Ejercicio 3: Calculadora
function calcularOperacion() {
    // Obtener los valores de los números desde los inputs
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    // Verificar si los valores son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultadoOperacion").innerText = "Por favor, ingresa valores numéricos válidos para los números.";
        return;
    }

    // Obtener la operación seleccionada
    var operacion = document.getElementById("operacion").value;

    // Realizar la operación seleccionada
    var resultado;
    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "division":
            // Verificar si el divisor es cero
            if (numero2 === 0) {
                document.getElementById("resultadoOperacion").innerText = "No se puede dividir por cero.";
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            document.getElementById("resultadoOperacion").innerText = "Operación no válida.";
            return;
    }

    // Mostrar el resultado
    var resultadoFinal = "El resultado es: " + resultado.toFixed(2);
    document.getElementById("resultadoOperacion").innerText = resultadoFinal;
}

// Ejercicio 4: Verificar Número Primo
function esPrimo() {
    // Obtener el valor del número desde el input
    var numero = parseInt(document.getElementById("numeroPrimo").value);

    // Verificar si el valor es un número válido
    if (isNaN(numero)) {
        document.getElementById("resultadoPrimo").innerText = "Por favor, ingresa un valor numérico válido.";
        return;
    }

    // Aqui se verifica si el número es primo
    var esPrimo = true;

    if (numero <= 1) {
        esPrimo = false;
    } else {
        for (var i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    // Aqui muestra el resultado
    var resultado = esPrimo ? "El número es primo." : "El número no es primo.";
    document.getElementById("resultadoPrimo").innerText = resultado;
}
