const elementoChute = document.getElementById('chute');
const btnMicrofone = document.querySelector('.microfone');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    const chute = e.results[0][0].transcript;

    exibirChute(chute);
    validarSeOChuteEValido(chute);
};

function exibirChute(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span id="box">${chute}</span>
    `
};

recognition.addEventListener('end', () => recognition.start())

