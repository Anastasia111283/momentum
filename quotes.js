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
// const qText=document.getElementById('qText');
// const qAutor=document.getElementById('qAutor');
// const qUpdate=document.getElementById('qUpdate');
// async function updateQuotes(){
//     let url=`https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=ru`
//     const request=await fetch(url)
//     const dataQuotes=await request.json()
//     if(dataQuotes.cod!=='404'){
//         qText.innerText=dataQuotes.quote.quoteText
//         qAutor.innerText=dataQuotes.quote.quoteAuthor
//     }
//     console.log(dataQuotes);
// }
// function updateText(){
//     // updateQuotes()
//     qUpdate.classList.add('rotate')
//     setTimeout(function (){
//         qUpdate.classList.remove('rotate')
//     },1000)
// }
// qUpdate.addEventListener('click',updateText)
// updateQuotes()