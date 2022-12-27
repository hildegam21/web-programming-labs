function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else 
        button.innerHTML = 'Щелчок';
}

function clickMe1(button) {
    if(button.innerHTML == 'Жазгул')
        button.innerHTML = 'Абдыкаарова';
    else 
        button.innerHTML = 'Жазгул';
}

function clickMe2(button) {
    if(button.innerHTML == 'Юлия')
        button.innerHTML = 'Королева';
    else 
        button.innerHTML = 'Юлия';
}

function clickMe3(button) {
    if(button.innerHTML == 'Нажми меня') {
        button.innerHTML = 'Еще раз нажми';
        button.style.background = "green";
    }
    else if(button.innerHTML == 'Еще раз нажми') {
        button.innerHTML = 'Еще';
        button.style.background = "red";
    }
    else if(button.innerHTML == 'Еще'){
        button.innerHTML = 'Начать сначала';
        button.style.background = "yellow";   
    } 
    else {
        button.innerHTML = 'Нажми меня';
        button.style.background = "blue";
    }
}

