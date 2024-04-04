
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
            
        titulo.innerHTML = `
        <body>
            <div class="container2">
                <div class="teste-body">
                    <h1> O resultado é ${resultadoIMC.toFixed(2)} </h>
                </div>
            </div>
            
        </body>` 

    }


}) ;

/* Testando se a variavel contém . ou , */


