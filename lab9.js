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

function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY;
}

window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords')
    coords.addEventListener('mousemove', showCoords);
    let texts = document.querySelectorAll('input[type="text"]');
    for (let i = 0; i<texts.length; i++){
        texts[i].addEventListener("focus", function(event) {
            event.target.style.color = "red";
            event.target.style.fontSize = "30px";
        });
        texts[i].addEventListener("blur", function(event) {
            event.target.style.color = "black";
            event.target.style.fontSize = "13px";
        });
    }
});

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) 
        alert("Был нажат CTRL")
});

document.addEventListener("keydown", function (event) {
    if (event.shiftKey) 
        alert("Был нажат SHIFT")
});

document.addEventListener("keydown", function (event) {
    if (event.altKey) 
        alert("Был нажат ALT")
});


