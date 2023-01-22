
const btn = document.querySelector("button")
const mainForm = document.querySelector("form")
const firstElementEmail = mainForm.firstElementChild 
const secondElementPassword = firstElementEmail.nextElementSibling
const clientInfo = {
    email: "",
    password: "" 
}  

firstElementEmail.addEventListener("input", onTargetEmail)
function onTargetEmail(event) {
    clientInfo.email = event.target.value
}        

secondElementPassword.addEventListener("input", onTargetPassword)
function onTargetPassword(event) {
    clientInfo.password = event.target.value
 
    mainForm.addEventListener("submit", onFormSubmit)
    function onFormSubmit(event) {
        event.preventDefault()
        if (clientInfo.email === "" || clientInfo.password === "") {
            alert("Empty string")
        }

        console.log(clientInfo)
        event.currentTarget.reset()
    }
}
