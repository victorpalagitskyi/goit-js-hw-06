// // Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній, у
// спані повинен відображатися рядок "Anonymous".

const onTargetInput = document.querySelector("#name-input")
const onTargetOutput = document.querySelector("#name-output")
onTargetInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.length === 0) {
        onTargetOutput.textContent = "Anonymous"
    }
    else {
        onTargetOutput.textContent = event.currentTarget.value
    }
})