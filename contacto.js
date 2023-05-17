const nombre = document.getElementById("name")
const email = document.getElementById("email")
const mensaje = document.getElementById("message")
const warn = document.getElementById("warnings")

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings = ""
  let entrar = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  warn.innerHTML = ""
  if(nombre.value.length <6){
      warnings += `El nombre no es válido <br>`
      entrar = true
  }
  if(!regexEmail.test(email.value)){
      warnings += `El email no es válido <br>`
      entrar = true
  }
  if(mensaje.value.length > 1){
      warnings += `Ingrese más de un dígito. <br>`
      entrar = true
  }

  if(entrar){
      warn.innerHTML = warnings
  }else{
      warn.innerHTML = "Enviado"
  }
})

