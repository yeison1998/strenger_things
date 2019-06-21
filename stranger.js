var totalPuntos = 1230;
var amigos = ["Mike", "Lucas", "Dustin", "Eleven", "Max"];
var artefactos = 3;
var puntosPorAmigo = [0, 0, 0, 0, 0];

for (var i = 0; i < amigos.length; i++) {
    for (var j = 0; j < artefactos; j++) {
        do {
            var artefacto = prompt("Digite los puntos" +
                " del artefacto " + (j + 1) + " recolectado por " +
                amigos[i]);
            artefacto = parseInt(artefacto)
        } while (artefacto < 1 || artefacto > 100)

        puntosPorAmigo[i] += artefacto;
    }
}
mostrarResultado();
function mostrarResultado() {
    var sumaTotal = obtenerSumaTotal();
    for (var j = 0; j < amigos.length; j++) {
        document.write("<h3>Los puntos que recogió " +
            amigos[j] + " fueron en total "
            + puntosPorAmigo[j] + " Porcentaje: "
            + totalResultadoPorcentaje(j, sumaTotal) + "</h3>");
        cumplioOnoCumplio(j);
    }

    document.write("<h3> Total  puntos: " + sumaTotal + "</h3>");
    if (sumaTotal >= totalPuntos) {
        document.write("Liberen a Will ");
    } else {
        document.write("El pueblo de Hawkins está condenado a su destrucción");
    }
}

function totalResultadoPorcentaje(posicion, sumaTotal) {
    return (puntosPorAmigo[posicion] * 100 / sumaTotal);
}

function cumplioOnoCumplio(posicion) {
    if (puntosPorAmigo[posicion] >= 250) {
        document.write("Si cumplio la meta de 250");
    } else {
        document.write("No cumplio la meta de 250.");
    }
}

function obtenerSumaTotal() {
    var sumador = 0;
    for (var x = 0; x < puntosPorAmigo.length; x++) {
        sumador += puntosPorAmigo[x];
    }
    return sumador;
}


