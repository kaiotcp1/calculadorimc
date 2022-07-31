


var imputPeso = document.getElementById("peso")
var imputAltura = document.getElementById("altura")
var resultado = document.getElementById("resultado");





function calcular() {
    let peso = imputPeso.value;
    let altura = imputAltura.value;

    calculo = ((peso) / (altura * altura))

    var regEx = /^\d{1}.\d{2}$/;
    bValid = altura.match(regEx);
    if (bValid) {

        if(calculo <= 18.4) {
            resultado.innerHTML = '<p> Seu IMC é ' + calculo.toFixed(1) + ' sua condição é abaixo do peso' + '</p>'

        } else if (calculo >= 18.5 && calculo < 24.9) {
            resultado.innerHTML = '<p> Seu IMC é ' + calculo.toFixed(1) + ' sua condição é normal' + '</p>'

        } else if (calculo >= 25.0 && calculo < 29.9) {
            resultado.innerHTML = '<p> Seu IMC é ' + calculo.toFixed(1) + ' sua condição é Sobrepeso' + '</p>'

        } else if (calculo >= 29.0 && calculo < 40.0) {
            resultado.innerHTML = '<p> Seu IMC é ' + calculo.toFixed(1) + ' sua condição é obesidade' + '</p>'

        } else {
            resultado.innerHTML = '<p> Seu IMC é ' + calculo.toFixed(1) + ' sua condição é obesidade grave ou Morbida' + '</p>'
        }
    }
    else {
        resultado.innerHTML = '<p> Digite seu Peso e altura !!!</p>'
    }

}



