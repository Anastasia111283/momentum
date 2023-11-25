'use strict'

const quotes = [
    {
        text: "Настоящая ответственность бывает только личной.",
        author: "Фазиль Искандер",
    },
    {
        text: "Лучшая месть – огромный успех.",
        author: "Фрэнк Синатра",
    },
    {
        text: "Единственный способ достичь выдающегося результата и " +
            "сделать большую работу — это любить то, что ты делаешь.",
        author: "Стив Джобс",
    },
    {
        text: "Не ждите. Время никогда не будет подходящим.",
        author: "Наполеон Хилл",
    },
    {
        text: "Не смотрите на часы; делайте то, что они делают. Не останавливайтесь.",
        author: "Сэм Левенсон",
    },
];
const getQuote = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("qText").innerHTML = quote.text;
    document.getElementById("qAutor").innerHTML = `- ${quote.author}`;
};
