'use strict'
const input = document.getElementById('country');
//Возвращает ссылку на элемент по его идентификатору
const btn = document.getElementById('api-btn');
const card = document.getElementById('card-field');
const API_WEATHER_KEY = 'cb08bd05993b4191aa8442fcbd4f93c0';
const ERROR_GEODATA_IS_EMPTY = 125;
/**
 * Отрисовывоет данные в карточке на основании полученных данных от API
 * @param info Данные от API
 */
async function renderCard(info) {
    //макет данных
    const htmlTemp = `
        <img src="https://openweathermap.org/img/wn/${info.icon}@2x.png" alt="Weather icon">
        <div>Температура: <span class="temperature">${info.temp}</span></div>
        <div>Погода: <span class="description">${info.desc}</span></div>
        <div>Скорость ветра: <span class="wind">${info.wind}</span></div>
    `;
    card.innerText = '';
    //это свойство, позволяющее задавать или получать текстовое содержимое элемента и его потомков.
    card.insertAdjacentHTML('beforeend', htmlTemp);
    // Указанный текст как HTML или XML и вставляет полученные
    // узлы (nodes) в DOM дерево в указанную позицию
    //targetElement.insertAdjacentHTML(position, text); position определяет позицию добавляемого
    // элемента относительно элемента, вызвавшего метод.
    // 'Beforeend': сразу перед закрывающим тегом element (после последнего потомка).
    //text- Строка, которая будет проанализирована как HTML или XML и вставлена в DOM дерево документа.
}
/**
 * Получение данных о погоде
 * @param cityName Наименование города
 */
function getWeather(cityName) {
    const weatherInfo = {
        icon: '',
        temp: '',
        desc: '',
        wind: '',
    }
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_WEATHER_KEY}`)
        .then(response=>{
            if (response.ok) {//был ли ответ успешным
                return response.json();
                //Метод json() интерфейса Response принимает Response и считывает его до конца. Он возвращает промис.
            }
        })
        .then(([geo]) => {
            if (!geo) {
                return Promise.reject(ERROR_GEODATA_IS_EMPTY);
                //Метод Promise.reject(reason) возвращает объект. Promise, который был отклонён по указанной причине
            }
            console.log(geo);
            weatherInfo.lon = geo.lon; //Долгота в градусах. Обязательное поле.
            return fetch(`https://api.openweathermap.org/data/2.5/weather?lang=ru&units=metric&lat=${geo.lat}&lon=${geo.lon}&appid=${API_WEATHER_KEY}`)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(weatherObj => {
            // console.log(weatherObj);
            const [{description: desc, icon}] = weatherObj.weather;
            weatherInfo.desc = desc;
            weatherInfo.icon = icon;
            weatherInfo.wind = weatherObj.wind.speed;
            weatherInfo.temp = weatherObj.main.temp;
            renderCard(weatherInfo);
        })
        .catch(err => { //ошибка
            if (err === ERROR_GEODATA_IS_EMPTY) {
                console.error('Geo data is empty');
            }
        })
}
//Метод addEventListener() интерфейса EventTarget настраивает функцию,
// которая будет вызываться всякий раз, когда указанное событие доставляется целевому объекту.
btn.addEventListener('click', () => {//по нажатию
    const city = input.value.trim();
    //Метод trim() значений String удаляет пробелы с обоих концов этой строки и возвращает новую строку, не изменяя исходную строку.
    if (city) {
        getWeather(city);
    }
});
