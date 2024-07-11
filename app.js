let textoUsuario = document.getElementById("texto");
let mensaje = document.getElementById("mensaje");
let notexto = document.getElementById("no-texto");
let imagen = document.getElementById("img-mensaje");
let espacio = document.getElementById("espacio-mensaje");

let desencriptar = document.getElementById("btn-desencriptar");

function mostrarMensaje(){
    espacio.style.display = "flex";
    notexto.style.display = "none";
    imagen.style.display = "none";
}
function btnEncriptar(){

    if(textoUsuario.value != ""){
        let textoEncriptado = textoUsuario.value
            .replace(/(i)/g, "imes")
            .replace(/(a)/g, "ai")
            .replace(/(e)/g, "enter")
            .replace(/(o)/g, "ober")
            .replace(/(u)/g, "ufat");

        mensaje.textContent = textoEncriptado;
        
        mostrarMensaje();
        desencriptar.disabled = false;
    }else{
        alert("Ingresa el texto que deseas encriptar");
    }
}

function btnDesencriptar(){
    if(textoUsuario.value != ""){
        let textoEncriptado = textoUsuario.value
            .replaceAll("ai", "a")
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");

        mensaje.textContent = textoEncriptado;
        
        mostrarMensaje();
    }else{
        alert("Ingresa el texto que deseas desencriptar");
    }
}

function copiar(){
    if(mensaje.textContent != ""){
        navigator.clipboard.writeText(mensaje.textContent);
        alert("Texto copiado");
    }else{
        alert("No hay texto para copiar");
    }
}
