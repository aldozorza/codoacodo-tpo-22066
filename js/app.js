// const menuHamburg = document.querySelector(".menuHamburg");

// menuHamburg.addEventListener("click", () => {
//     menuHamburg.classList.toggle("active");
// });


const nombre = document.getElementById('nombre');
const email = document.getElementById('mail');
const textarea = document.getElementById('textarea');
const form = document.getElementById('form');
const txtMsgValida = document.getElementById('txtMsgValida');

form.addEventListener("submit", e => {
    e.preventDefault();

    let valida = "";
    let txtEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let envioOk = true;

    // valido nombre, mail y textarea
    if (nombre.value.length == 0) {
        valida += `El nombre es un dato obligatorio`;
        envioOk = false;
    } else if (!txtEmail.test(email.value)) {
        valida += `El Email no es válido`;
        envioOk = false;
    } else if (textarea.value.length == 0) {
        valida += `Debe ingresar el mensaje`;
        envioOk = false;
    }
    
    if (envioOk) {
        txtMsgValida.style.display = "inline";
        txtMsgValida.style.backgroundColor = "#006400";
        txtMsgValida.innerHTML = `Mensaje enviado!`;
        
    } else {
        txtMsgValida.style.display = "inline";
        txtMsgValida.style.backgroundColor = "#a52a2a";
        txtMsgValida.innerHTML = valida;
    }

    setTimeout(() => {
        txtMsgValida.style.display = "none";
    }, 2000);
})