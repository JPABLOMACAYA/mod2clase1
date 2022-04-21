
function diasEdad() {

    var añosVividos = parseInt(document.getElementById("edad").value);

    var diasVividos = añosVividos * 365;

    return diasVividos + " días... y tal vez un poco más eh! Felicidades y que viva la Vidaa!!"
}

function snackComprar() {
  
    var especVida = parseInt(document.getElementById("espectativa").value);

    var snackDiario = parseInt(document.getElementById("snackDia").value);

    var snackAño = 365 * snackDiario

    var snackFavorito = document.getElementById("snackFav").value;

    var añosVividos = parseInt(document.getElementById("edad").value);

    var añosPorVivir = especVida - añosVividos;

    var snackFaltantes = añosPorVivir * snackAño;

    var precioSnack = 1000

    var gastoSnack = precioSnack * añosPorVivir * 365

    return snackFaltantes + ' ' +snackFavorito + ' para que te alcancen hasta los ' + especVida + ' años y te gastarás unos ' + gastoSnack + " pesos ... y tal vez unos pocos más eh! Acompáñales con una buena película y que viva el Sabor!!"
}