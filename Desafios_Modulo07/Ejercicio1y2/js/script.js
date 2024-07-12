let edad;

do {
    edad = prompt("Indica tu edad");
    if(edad < 18) {
        alert("Debes ser mayor de edad para ingresar.");
    } else {
        alert("Bienvenido a la pagina.");
    }
} while(edad < 18)

const btnIngreso = document.getElementById("btn-ingreso");

btnIngreso.onclick = function(event) {
    event.preventDefault()
    const userName = document.getElementById("ipt-username");
    const userPassword = document.getElementById("ipt-password");
    if(userName.value === 'admin' && userPassword.value === '1234'){
        alert("Bienvenido Administrador.");
    } else {
        alert("Usuario invalido. Intentelo denuevo.");
    }
    userName.value = "";
    userPassword.value = "";
}