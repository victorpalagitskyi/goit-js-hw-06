const mainInput = document.getElementById("font-size-control")
const mainSpan = document.getElementById("text")
mainInput.addEventListener("input", onInputTarget)

function onInputTarget(event) { 
    console.log(event.currentTarget.value)
    // mainSpan.style.fontSize = "`${event.currenTarget.value}px`"

    mainSpan.style.fontSize = `${event.target.value}px`
}

