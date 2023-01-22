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
