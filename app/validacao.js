let tentativas = 1;
const tentativasPlural = tentativas > 1 ? 'tentativas' : 'tentativa';

function validarSeOChuteEValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML +=`<div>Valor inválido!</div>`
        return; 
    };

    if (oNumeroForMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML = `<div>Valor inválido: informe um valor entre ${elementoMenorValor} e ${elementoMaiorValor}</div>`
        return;
    };

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns, você acertou com ${tentativas} ${tentativasPlural}!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
        tentativas++;
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i> </div> 
        `
        tentativas++;
    };


};

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
};

function oNumeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > elementoMaiorValor || numero < elementoMenorValor;
};

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    };
});