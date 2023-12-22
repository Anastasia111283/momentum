import bcg1 from  "./assets/background_image/01.jpg";
import bcg2 from  './assets/background_image/01.jpg';
import bcg3 from  './assets/background_image/01.jpg';
import bcg4 from  './assets/background_image/01.jpg';
import bcg5 from  './assets/background_image/01.jpg';
import bcg6 from  './assets/background_image/01.jpg';
import bcg7 from  './assets/background_image/01.jpg';
import bcg8 from  './assets/background_image/01.jpg';
import bcg9 from  './assets/background_image/01.jpg';

const images = [bcg1, bcg2, bcg3, bcg4, bcg5, bcg6, bcg7, bcg8, bcg9];//массив картинок

let imagePosition = 0;//сброс на нулевой элемент
const updateBtn = <HTMLButtonElement>document.getElementById('update');// привязка к кнопке
//background при открытии сайта картинка с 0 индексом
document.body.style.backgroundImage = `url(${images[imagePosition]})`;
/**.
 * Обновление позиции изображения в массиве
 */
function updateImageIndex() {
    imagePosition++;//увеличиваем индекс на единицу
    if (imagePosition === images.length) {//проверка, если 9=9, то переходит на 0 индекс
        imagePosition = 0;
    }
}
/**
 * Обновление фона страницы
 */
function updateBackground() {
    updateImageIndex();//функция изменения индекса массива
    const imgObj = new Image();//создаем объект изображения
    imgObj.src = images[imagePosition];//фото
    imgObj.addEventListener('load', () => {
        //обработчик событий load(загрузка изображения)
        document.body.style.backgroundImage = `url(${imgObj.src})`;
    })
}
//обработчик на саму кнопку по нажатию на кнопку
updateBtn.addEventListener('click', () => {
    updateBackground();
})
//Изменение картинки каждый час
setInterval(() => {
    const date = new Date();
    if (date.getMinutes() === 0 && date.getSeconds() === 0) {
        updateBackground();
    }
}, 1000);
