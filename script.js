var modal = document.getElementById("modalRegistrar");
var btn = document.getElementById("btnRegistrar");
var span = document.getElementsByClassName("2close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal2 = document.getElementById("modalLogin");
var btn2 = document.getElementById("btnLogin");
var span2 = document.getElementsByClassName("1close")[0];
btn2.onclick = function () {
    modal2.style.display = "block";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

const email = "juan@gmail.com"
const password = 1234;



let resgistrar = document.getElementById("Registrar");

registrar.addEventListener("click", function (event) {
    event.preventDefault();
    let mail = document.getElementById("correo")
    let pass = document.getElementById("contraseña")
    console.log(mail.value, pass.value)

    if (name.value.toLowerCase() && mail.value == email && pass.value == password) {
        window.open("administrador.html")
    }else{
        prompt("datos incorrectos")
    }
})
