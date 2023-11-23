const images = [ //массив картинок
    '../img/background_image/01.jpg',
    '../img/background_image/02.jpg',
    '../img/background_image/03.jpg',
    '../img/background_image/04.jpg',
    '../img/background_image/05.jpg',
    '../img/background_image/06.jpg',
    '../img/background_image/07.jpg',
    '../img/background_image/08.jpg',
    '../img/background_image/09.jpg'
];
let imagePossition = 0;//сброс на нулевой элемент
const updateBtn = document.getElementById('update');// привязка к кнопке
//background при открытии сайта картинка с 0 индексом
document.body.style.backgroundImage = `url(${images[imagePossition]})`;

/**.
 * Обновление позиции изображения в массиве
 */
function updateImageIndex() {
    imagePossition++;//увеличиваем индекс на единицу
    if (imagePossition === images.length) {//проверка, если 9=9, то переходит на 0 индекс
        imagePossition = 0;
    }
}
/**
 * Обновление фона страницы
 */
function updateBackground() {
    updateImageIndex();//функция изменения индекса массива
    const imgObj = new Image();//создаем объект изображения
    imgObj.src = images[imagePossition];//фото
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
