
const btn = document.querySelector("button")
const mainForm = document.querySelector("form")
const firstElementEmail = mainForm.firstElementChild 
const secondElementPassword = firstElementEmail.nextElementSibling
const clientInfo = {
    email: "",
    password: "" 
}  
mainForm.addEventListener("submit", onFormSubmit)
function onFormSubmit(e) {
    e.preventDefault()
    const {
        elements: { email, password }
    } = e.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Empty string")
    } else { 
        clientInfo.email = email.value,
        clientInfo.password = password.value
    }
    console.log(clientInfo)
    e.currentTarget.reset()
 
}