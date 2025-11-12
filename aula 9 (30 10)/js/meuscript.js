function ligar(){
    document.getElementById('lampada').src = 'img/pic_bulbon.gif';
}
function desligar(){
    document.getElementById('lampada').src = 'img/pic_bulboff.gif';
}
var numero = 0;
/*
function onoff(){
    let imagem = document.getElementById('luzinha').src; //pegamos o caminho da imagem
    if (imagem.includes('on')) {
        document.getElementById('luzinha').src = 'img/pic_bulboff.gif';
    } else {
        document.getElementById('luzinha').src = 'img/pic_bulbon.gif';
    }
}
*/
function onoff(){
    if (numero == 1) {
        document.getElementById('luzinha').src = 'img/pic_bulboff.gif';
        numero = numero - 1;
    } else {
        document.getElementById('luzinha').src = 'img/pic_bulbon.gif';
        numero = numero + 1;
    }
}
