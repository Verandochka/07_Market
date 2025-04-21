console.log('Перевірка підключення файлу скриптів market.js')

let itemsArray = [
    'Мотокоса',
    'Тример',
    'Газонокосарка',
    'Оприскувач']

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
   itemsArray.forEach((item) => {
    itemsDiv.innerHTML += 
    `
    <div class = "item">
    <h2>Товар №${index}</h2>
    <p>${item}<p>
    </div>
    `
   })
} else {
    console.log('Блок товарів не знайдено')
}