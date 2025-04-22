// console.log('Перевірка підключення файлу скриптів script.js')

// let itemsArray = [
//     'Мотокоса',
//     'Тример',
//     'Газонокосарка',
//     'Оприскувач'];

// let itemsDiv = document.getElementById("items");

// async function buildItems () {
//  const itemsArray = await getObjectsFromFile('js/items.json')
// console.log(itemsArray)

// if (!itemsArray) {
// console.error ('');
// return;
// }
// itemsArray. forEach((item, index) => {
// let itemsDiv = document.createElement('div')
// itemsDiv.classList.add('item')

// itemsDiv.innerHTML =
// `
// <p>${item.id}</p>
//         <h3>${item.title}</h3>
// `
// document.getElementById("p-items"). appendChild(it)
// })
// }
//Перевірка підключеного файлу скриптів
console.log('Підключено файл скриптів script.js')

//Визначення масиву товарів
let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний обприскувач 12 N'
]

//Отримання елементу з індентифікатором items
let itemsDiv = document.getElementById("items");

// //Перевірка існування знайденого блоку
// if (itemsDiv) {
//     itemsArray.forEach((item, index) => {
//         itemsDiv.innerHTML += 
//         `
//         <div class="item">
//             <h2>Товар №${index + 1} з ${itemsArray.length}</h2>
//             <p>${item}</p>
//         </div>`
//     })

// } else {
//     //Вивід повідомлення про не знайдений блок
//     console.log('Блок товарів не знайдено')
// }

//Виведення елементів відсортованого масиву 
//itemsArray.sort().forEach((item, index) => {
    //console.log(index + '-й елемент:', item)
//})




// Отримання даних з JSON-файлу
async function getObjectsFromFile(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`HTTP помилка! Статус: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } 
    catch (error) {
        console.error('Помилка fetching JSON:', error);
    } 
    finally {
        console.log('Fetch завершено!');
    }
}



async function buildMarketItems() {
    const arrayOfMarketItems = await getObjectsFromFile('js/m.json');
    console.log(arrayOfMarketItems);

    if (!arrayOfMarketItems) {
        console.error('Відсутні дані з JSON-файлу!');
        return;
    }

    // Перебір масиву товарів з JSON
    arrayOfMarketItems.forEach((item, index) => {
        // Створюємо новий блок для кожного товару
        let divMarketItem = document.createElement('div');
        divMarketItem.classList.add('market-item'); // Додаємо клас

        divMarketItem.innerHTML =
        // `
        //     <p>${item.id}</p>
        //     <h3>${item.title}</h3>
        //     <hr>
        //     <div class="img_container">
        //         <img src="img/market/${item.photo}" alt="Картинка для ${item.title}" 
        //              onerror="this.onerror = null; this.src='img/market/default.png';">
        //     </div>
        //     <p>${item.description}</p>
        //     <div>
        //         <img src="img/market/${item.schema}" alt="" 
        //              onerror="this.onerror = null; this.src='img/market/default_schema.png';">
        //         <p>${'💚'.repeat(item.rating)}${'🤍'.repeat(5 - item.rating)}</p>
        //         <p>${item.type}</p>
        //     </div>
        // `;
`
  <div class="item">
    <div class="item-title">${item.title}</div>

    <div class="item-image">
      <img src="img/${item.photo}" alt="${item.title}" class="motokosa-img">
    </div>

    <div class="parts-pay">
      <div><img src="img/paw.png" alt="Оплата Монобанк">${item.monobankParts}</div>
      <div><img src="img/circle.png" alt="Оплата ПриватБанк">${item.privatbankParts}</div>
    </div>

    <div class="price">
      <div><span>${item.oldPrice}</span><sup>грн</sup></div>
      <div><span>${item.newPrice}</span><sup>грн</sup></div>
    </div>

    <div class="price bonus">
      <div>ціна за купоном</div>
      <div><span>${item.couponPrice}</span><sup>грн</sup></div>
    </div>
  </div>
`

        // Додаємо новий елемент у DOM
        document.getElementById("items").appendChild(divMarketItem);
    });
}

// Викликаємо функцію для побудови товарів
buildMarketItems();