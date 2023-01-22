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
