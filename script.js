// DOM Elements
"use strict"
//Время
const hour = document.querySelectorAll('.hr'),
    min = document.querySelectorAll('.min'),
    sec = document.querySelectorAll('.sec');
// Надпись дня
const greeting = document.querySelector('.greeting');//приветствие

//**************************************************//
// Show Time (часы)
setInterval(() => {
    const date = new Date();
    const valueHours = date.toTimeString().substring(0,2);
    // toTimeString()- Возвращает строку, представляющую время из
    // Date в локальном часовом поясе.
    // substring(0,2) - до второго элемента
    const valueMin = date.toTimeString().substring(3,5);
    const valueSec = date.toTimeString().substring(6,8);
    hour[0].innerHTML = valueHours[0];
    hour[1].innerHTML = valueHours[1];
    min[0].innerHTML = valueMin[0];
    min[1].innerHTML = valueMin[1];
    sec[0].innerHTML = valueSec[0];
    sec[1].innerHTML = valueSec[1];
},1000);
//**************************************************//
// Get day of week (день недели, число, месяц, год)
document.getElementById("tDay").innerHTML = formatAMPM();
function formatAMPM() {
    let day = new Date(),
        dayOfWeek = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'],
        monthsOfYear = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октябряя', 'Ноября', 'Декабря'];
    return dayOfWeek [day.getDay()]+', '+day.getDate()+' '+monthsOfYear[day.getMonth()]+', '+day.getFullYear() + ' года';
}
//**************************************************//
// Get Name (получить имя)
let name = document.getElementById('name'); //имя
let backupName;
function initName() {//функция заполнения
    getToLocalStorage();
    backupName=name.textContent;
}
function changeName(e) {//изменение
    if (e.keyCode == 13) {//при Enter
        saveToLocalStorage('name', e.target.textContent);
        e.target.blur();
        backupName = e.target.textContent;
    }
    if (e.keyCode == 27) {//при Esc
        e.target.textContent = backupName;
        e.target.blur();
    }
}
function saveToLocalStorage(nam, value) { //сохранение
    localStorage.setItem(nam, value);
}
function getToLocalStorage() {//если будут данные
    let titleName = localStorage.getItem('name');
    if (titleName) {
        name.textContent = titleName;
    }
}
window.addEventListener('load', initName);//загрузка контента
name.addEventListener('keyup', changeName);//при опускании кнопки
name.addEventListener('blur',//покидаем поле
    (e) => {
        backupName = e.target.textContent;
        saveToLocalStorage('name', e.target.textContent);
    });
//**************************************************//
// Get Focus (планы)
let focus = document.getElementById('focus');//планы
let backupFocus;
function initFocus() {//функция заполнения
    getFocusToLocalStorage();
    backupFocus=focus.textContent;
}
function changeFocus(e) {//изменение
    if (e.keyCode == 13) {//при Enter
        saveToLocalStorage('focus', e.target.textContent);
        e.target.blur();
        backupFocus = e.target.textContent;
    }
    if (e.keyCode == 27) {//при Esc
        e.target.textContent = backupFocus;
        e.target.blur();
    }
}
function saveFocusToLocalStorage(num, val) { //сохранение
    localStorage.setItem(num, val);
}
function getFocusToLocalStorage() {//если будут данные
    let titleFocus = localStorage.getItem('focus');
    if (titleFocus) {
        focus.textContent = titleFocus;
    }
}
window.addEventListener('load', initFocus);//загрузка контента
focus.addEventListener('keyup', changeFocus);//при опускании кнопки
focus.addEventListener('blur',//покидаем поле
    (e) => {
        backupFocus= e.target.textContent;
        saveFocusToLocalStorage('focus', e.target.textContent);
    });
//**************************************************//


