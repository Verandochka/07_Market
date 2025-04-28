async function getObjectsFromFile(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`HTTP помилка! статус: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка fetching JSON:", error);
  } finally {
    console.log("Fetch завершено!");
  }
}

async function buildItems() {
  const itemsData = await getObjectsFromFile("js/items.json");
  console.log(itemsData);

  if (!itemsData) {
    console.error("Відсутні дані у JSON-файлі!");
    return;
  }

  const itemsDiv = document.getElementById("items");

  if (!itemsDiv) {
    console.error("Блок товарів не знайдено!");
    return;
  }

  itemsData.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0
      );
    }
    
    function handleScroll() {
      const items = document.querySelectorAll('.item');
    
      items.forEach(item => {
        if (isInViewport(item)) {
          item.classList.add('visible');
        }
      });
    }
    
    // Слухаємо скрол
    window.addEventListener('scroll', handleScroll);
    
    // Викликаємо один раз одразу, якщо деякі елементи вже видно
    document.addEventListener('DOMContentLoaded', handleScroll);


    itemDiv.innerHTML = `
      <div class="item-title">${item.title}</div>
      <div class="item-image">
        <img src="img/${item.photo}" alt="Картинка для ${item.title}" class="motokosa-img" onerror="this.onerror=null; this.src='img/default.png';" />
      </div>
      <div class="parts-pay">
        <div><img src="img/mono-lapka.png" alt="" />${item.paw}</div>
        <div><img src="img/shopping-cart.png" alt="" />${item.pb}</div>
      </div>
      <div class="price">
        <div><span class="standart-price">${item.standart_price}</span><sup>грн</sup></div>
        <div><span>${item.price}</span><sup>грн</sup></div>
      </div>
      <div class="price bonus">
        ціна за купоном
        <div><span>${item.bonus_price}</span><sup>грн</sup></div>
      </div>
    `;

    itemsDiv.appendChild(itemDiv);
  });
}

buildItems();