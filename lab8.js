function showDate(params){
    let out = document.getElementById('today');
    let today = new Date();
    out.innerHTML = prettyDate(today);
}

function showDaysCount(params){
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date (inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    let result = document.getElementById('result');
    result.innerHTML = daysCount;
    daysCount = Math.floor(daysCount); // округляем в меньшую  сторону
    result.innerHTML = 'С даты рожедния прошло дней: ' + daysCount;
}

function showTime() {
    let outTime = document.getElementById ('time');
    let currentTime = new Date ();
    outTime.innerHTML = currentTime.toLocaleTimeString('ru');
}

function showNumber(params){
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date (inputDate.value);
    let resultNumber = document.getElementById('resultNumber');
    let inputNum = document.querySelector('input[type=number]');
    let num = new Number (inputNum.value); 
    let anniversary = birthday.getTime () + num * 1000 * 60 * 60 * 24;
    resultNumber.innerHTML = 'Дата после прибавления: ' + new Date(anniversary).toLocaleDateString("ru-RU");
}

function prettyDate (d) {
    let day = d.getDate();
    let newMonth = ["января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    let month = newMonth[d.getMonth()];
    let year = d.getFullYear();
    return day + ' ' + month + ' ' + year + ' ' + 'года';
}

function showNewDate(params){
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date (inputDate.value);
    resultNumber.innerHTML = 'Дата обновленная: ' + prettyDate(birthday);
}

function showNewTime(params){
    let 
}

window.addEventListener('load', showDate);
window.addEventListener('load', showTime);
setInterval(showTime, 1000);