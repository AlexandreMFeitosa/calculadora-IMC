
let dadosAltura = document.querySelector("#altura") ;

let dadosPeso = document.querySelector("#peso") ;

const btnCalcular = document.querySelector("#calcular");

btnCalcular.addEventListener("click" , () => {

    let valorAltura = parseFloat(dadosAltura.value) ;

    let valorPeso = parseFloat(dadosPeso.value);

    let titulo = document.querySelector(".container");

    if (dadosAltura.value.includes(',') || dadosPeso.value.includes(',')) {
        alert("Por favor, use o ponto (.) como separador decimal.");
        return;
    }    

    if(isNaN(valorAltura) || isNaN(valorPeso)) {
        alert("Valores não validos, favor usar números e (.) para separar as gramas ou cm !")
    } else {

        let resultadoIMC = valorPeso / (valorAltura * valorAltura) ;

        /* SEGUNDA TELA - RESPOSTA COM DADOS DO IMC */
        
        window.location.href = `resposta.html?resultadoIMC=${resultadoIMC.toFixed(2)}`;
    }


}) ;

/* Testando se a variavel contém . ou , */


