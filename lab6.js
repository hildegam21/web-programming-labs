function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Жазгул Абдыкаарова. Юлия Королева';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет бизнеса, ФБИ-03, 3 курс, 2022';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'Введите имя';

    document.getElementById('your-surname').innerHTML = 'Ваша фамилия';
    document.getElementById('input-surname').placeholder = 'Введите фамилию';

    document.getElementById('your-age').innerHTML = 'Ваш возраст';
    document.getElementById('input-age').placeholder = 'Введите возраст';

    document.getElementById('ok-button').value = 'ОК';

    document.getElementById('reset-button').value = 'Сброс';
}

function setEnglish() {
    let name = document.getElementById('student');
    name.innerHTML = 'Zhazgul Abdykaarova. Julia Koroleva';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-03, 3rd year, 2022';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'Enter your name';
    
    document.getElementById('your-surname').innerHTML = 'Your surname';
    document.getElementById('input-surname').placeholder = 'Enter your surname';

    document.getElementById('your-age').innerHTML = 'Your age';
    document.getElementById('input-age').placeholder = 'Enter your age';

    document.getElementById('ok-button').value = 'OK';

    document.getElementById('reset-button').value = 'Reset';
}

function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let userStudent = document.getElementById('student').innerHTML;
    let userFooter = document.getElementById('footer').innerHTML;
    alert('Привет, ' + userName + ' ' + userSurname + '\n' + 'Ваш возраст: ' + userAge);
    alert('Приветствую, ' + userStudent);
    alert(userStudent + ' учатся на ' + userFooter);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    let a = Math.round(Math.random()*255);
    let c = Math.round(Math.random()*255);
    let d = Math.round(Math.random()*255);
    let color_2 = 'rgb(' + a + ',' + c + ',' + d + ')';
    let e = Math.round(Math.random()*255);
    let f = Math.round(Math.random()*255);
    let h = Math.round(Math.random()*255);
    let color_3 = 'rgb(' + e + ',' + f + ',' + h + ')';
    document.getElementById('user-data').style.backgroundColor = color;
    document.getElementById('footer').style.backgroundColor = color_2;
    document.getElementById('student').style.backgroundColor = color_3;
}