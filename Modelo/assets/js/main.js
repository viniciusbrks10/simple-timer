function relogioTimer() {

    function criaHoraSegundos(segundos) {
        const data = new Date(segundos * 1000);

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');

    let segundos = 0;
    let timer;

    function iniciaRelogioTimer() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const alvo = e.target;

        if (alvo.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogioTimer();
        }

        if (alvo.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }

        if (alvo.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.classList.remove('pausado');
        }
    });
}
relogioTimer();
