let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");
let btCalcular = document.querySelector("#btCalcular");

function soma(){
    let soma = Number (valor1.value) + Number (valor2.value) 
    resultado.value = soma;
}

btCalcular.onclick = function(){
    soma();
}