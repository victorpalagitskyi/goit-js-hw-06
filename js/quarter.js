// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0 
const spanContainer = document.querySelector("#counter #value")
spanContainer.textContent = counterValue
const onDecrementBtn = document.querySelector('#counter button[data-action = "decrement"]')
onDecrementBtn.addEventListener("click", () => {
    counterValue = counterValue - 1
    return spanContainer.textContent = counterValue
});
const onIncrementBtn = document.querySelector('#counter button[data-action = "increment"]')
onIncrementBtn.addEventListener("click", () => {
    counterValue = counterValue +1
    return spanContainer.textContent = counterValue
});
