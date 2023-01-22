const blura = document.getElementById("validation-input")
const requiredLengthValue = Number(blura.dataset.length)
const onInputBlur = (e) => { 
    const value = e.target.value
    blura.classList.add("invalid")
    value.trim().length === requiredLengthValue && value.trim() !=="" ? blura.classList.replace("invalid","valid") : blura.classList.replace("valid","invalid")
}




blura.addEventListener("blur", onInputBlur) 


        
       

