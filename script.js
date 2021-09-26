window.onload = function() {
    //criando as variaveis de tempo
    let hour = 00;
    let minute = 00;
    let second = 00;
    let tenth = 00;
    let interval;

    // selecionando os spans do html
    let textHour = document.querySelector('.hour');
    let textMinute = document.querySelector('.minute');
    let textSecond = document.querySelector('.second');
    let textTenth = document.querySelector('.tenth');

    // selecionar os btns
    let btnStart = document.querySelector('.contadores__btn--start');
    let btnStop = document.querySelector('.contadores__btn--stop');
    let btnReset = document.querySelector('.contadores__btn--reset');

    btnStart.addEventListener('click', function(){
        clearInterval(interval);
        interval = setInterval(startTimer,10);
    })

    function startTimer() {
        tenth ++;
        if(tenth <= 9) {
            textTenth.innerHTML = `0${tenth}`;
        } else textTenth.innerHTML = tenth;
        
        if(tenth >= 99) {
            tenth = 0;
            second ++;
            textSecond.innerHTML = `0${second}`;
        }
        if(second >= 10) textSecond.innerHTML = second;

        if(second >= 60) {
            minute ++;
            second = 00;
            textMinute.innerHTML = minute;
        }
        if(minute >= 60) {
            hour ++;
            minute = 00;
            textHour.innerHTML = hour;
        }
    };

    btnStop.addEventListener('click', () => {
        clearInterval(interval);
    });

    btnReset.addEventListener('click',() => {
        clearInterval(interval);
        hour = 00;
        minute = 00;
        second = 00;
        tenth = 00;
        textHour.innerHTML = "00";
        textMinute.innerHTML = "00";
        textSecond.innerHTML = "00";
        textTenth.innerHTML = "00";
    });
    
};