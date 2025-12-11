const btnMode = document.getElementById("btn-mode");
const conteudo = document.getElementById("conteudo")
let darkModeEstAtivo = false;

btnMode.onclick = function(){
    darkModeEstAtivo = !darkModeEstAtivo;
 if( darkModeEstAtivo === true){
conteudo.style.backgroundColor = "#000";
conteudo.style.color = "#ffffff"
btnMode.style.color = 'red'
btnMode.innerText = "Desativar Dark Mode"
} else {
    conteudo.style.backgroundColor = "white";
    conteudo.style.color = "black"
    btnMode.innerText = " Ativar Dark Mode"
}

};



