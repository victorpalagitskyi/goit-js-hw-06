// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const mainInput = document.getElementById("font-size-control")
const mainSpan = document.getElementById("text")
mainInput.addEventListener("change", onInputTarget)

function onInputTarget(event) { 
    console.log(event.currentTarget.value)
    // mainSpan.style.fontSize = "`${event.currenTarget.value}px`"

    mainSpan.style.fontSize = `${event.target.value}px`
}

