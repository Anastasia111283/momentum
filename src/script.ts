// DOM Elements
"use strict"
//Время
const hour = document.querySelectorAll('.hr'),
    min = document.querySelectorAll('.min'),
    sec = document.querySelectorAll('.sec');

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
        monthsOfYear = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return dayOfWeek [day.getDay()]+', '+day.getDate()+' '+monthsOfYear[day.getMonth()]+', '+day.getFullYear() + ' года';
}
//**************************************************//
// Get Name (получить имя)
let userName = <HTMLElement>document.getElementById('name'); //имя
let backupName: string;
function initName() {//функция заполнения
    getToLocalStorage();
    backupName=userName.textContent;
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
        userName.textContent = titleName;
    }
}
window.addEventListener('load', initName);//загрузка контента
userName.addEventListener('keyup', changeName);//при опускании кнопки
userName.addEventListener('blur',//покидаем поле
    (e) => {
    const element = e.target as HTMLElement;
        backupName = element.textContent;
        saveToLocalStorage('name', element.textContent);
    });
//**************************************************//
// Get Focus (планы)
let userFocus = document.getElementById('focus');//планы
let backupFocus: string;
function initFocus() {//функция заполнения
    getFocusToLocalStorage();
    backupFocus=userFocus.textContent;
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
        userFocus.textContent = titleFocus;
    }
}
window.addEventListener('load', initFocus);//загрузка контента
userFocus.addEventListener('keyup', changeFocus);//при опускании кнопки
userFocus.addEventListener('blur',//покидаем поле
    (e) => {
        const element = e.target as HTMLElement;
        backupFocus = element.textContent;
        saveFocusToLocalStorage('focus', element.textContent);
    });
//**************************************************//


