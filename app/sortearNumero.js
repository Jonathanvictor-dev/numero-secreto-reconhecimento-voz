const elementoMenorValor = 1;
const elementoMaiorValor = 100
const numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * elementoMaiorValor + 1);
};

const menorValor = document.getElementById('menor-valor');
menorValor.innerHTML = elementoMenorValor;

const maiorValor = document.getElementById('maior-valor');
maiorValor.innerHTML = elementoMaiorValor;

