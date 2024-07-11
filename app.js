let textoSinEncriptar = document.getElementById("text__area");
let mensaje = document.getElementById("text__encriptado");

function btnEncriptar(){
    if(textoSinEncriptar.value != ""){
        let textoEncriptado = textoSinEncriptar.value
            .replaceAll("a", "ai")
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");
        mensaje.value = textoEncriptado;
        textoSinEncriptar.value = "";
 
        console.log(textoEncriptado)
    }else{
        alert("Ingresa el texto que deseas encriptar");
    }
}

function btnDesencriptar(){
    if(textoSinEncriptar.value != ""){
        let textoEncriptado = textoSinEncriptar.value
            .replaceAll("ai", "a")
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");
        mensaje.value = textoEncriptado;
        textoSinEncriptar.value = "";
        mensaje.style.backgroundImage = "none";
    }else{
        alert("Ingresa el texto que deseas desencriptar");
    }
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto copiado");
}
