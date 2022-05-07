function criptografar(stringParaCriptografar) {
    var substitui = "";
    var novaString = "";

    for (let index = 0; index < stringParaCriptografar.length; index++) {
        
        switch (stringParaCriptografar[index]) {
            case "e":
                substitui = "enter";
                break;
            case "i":
                substitui = "imes";
                break;
            case "a":
                substitui = "ai";
                break;
            case "o":
                substitui = "ober";
                break;
            case "u":
                substitui = "ufat";
                break;
            default:
                substitui = stringParaCriptografar[index];
                break;
        }
        novaString += substitui;
    }
    return novaString;
}

function descriptografar(stringParaDescripitografar) {
    var chave = ['enter', 'imes', 'ai', 'ober', 'ufat'];
    var substitui="";

    for (let index = 0; index < chave.length; index++) {
        
        while (stringParaDescripitografar.search(chave[index]) != -1) {
            switch (chave[index]) {
                case "enter":
                    substitui = "e";
                    break;
                case "imes":
                    substitui = "i";
                    break;
                case "ai":
                    substitui = "a";
                    break;
                case "ober":
                    substitui = "o";
                    break;
                case "ufat":
                    substitui = "u";
                    break;
                default:
                    break;
            }
            stringParaDescripitografar = stringParaDescripitografar.replace(chave[index], substitui);
        } 
    }    
    return stringParaDescripitografar;
}

function stringValido(texto){
    var resultado = /[a-z]/.test(texto);
    console.log(resultado);
    return resultado;
}

function imprimeMensagem(funcao) {
    var campoMsg = document.querySelector('#msg');
    var inputTexto = document.querySelector('#input-texto').value;

    if (stringValido(inputTexto)) {
        campoMsg.value = funcao(inputTexto);
    } else {
        alert("Não é permitido letras maiúsculas, números e caracteres especiais");
    }
}

document.querySelector('#btn-cripto').addEventListener("click", function (event) {
    event.preventDefault();  
    imprimeMensagem(criptografar);
});

document.querySelector('#btn-descripto').addEventListener("click", function (event) {
    event.preventDefault(); 
    imprimeMensagem(descriptografar);
});

document.querySelector('#btn-copy').addEventListener('click', function (event) {
    event.preventDefault(); 
    var texto = document.querySelector('#msg');
    texto.select();
    document.execCommand('copy');
    //alert('texto copiado ' + texto.value);
});



    


    