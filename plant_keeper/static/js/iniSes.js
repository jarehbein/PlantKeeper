function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if( user == "yasu" && password == "yasupiste"){
        alert("Ha iniciado sesión")
        window.location = "index.html";
    } else{
        alert("Datos Incorrectos")
    }
}