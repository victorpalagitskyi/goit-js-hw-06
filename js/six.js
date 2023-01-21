// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
const blura = document.getElementById("validation-input")
blura.addEventListener("blur", onInputBlur) 

function onInputBlur(event) {
    if (event.target.value.length === blura.getAttribute("data-length")) {
        blura.classList.remove("invalid")
        blura.classList.add("valid")
    } else { 
        blura.classList.remove("valid")
        blura.classList.add("invalid")
    }
    console.log(event.currentTarget.value.length)
    console.log(blura.getAttribute("data-length"))
}
   

        
       

