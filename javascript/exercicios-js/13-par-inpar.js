// pegar o exercicio no github r colocar aqui
// **13.** Peça um número inteiro e diga se ele é **par** ou **ímpar**.
//    (Dica: se o número dividido por 2 tiver resto 0, é par)

// entrada
// explicar pro usuario do que se trata usando o pronpt
// na entrada colocaremos variaveis : dos tipos 
// pedir info pro usuario
// const- algo fixo
// let- nao fixo
// var- erro
// tipo seguido do nome 

const num = Number(prompt('digite um numero, vou validar se é par ou impar: ')) 

// processamneto
// normalmente vem um calculo a aqui
// pode ser usado variaveis aqui tbm
// fazer uma divisao e pegar o resto 
const resto = num % 2




// saida 
// mostra o resultado com alert

if(resto == 0){
alert('o numero informado é par')
} else{
        alert('o numero informado é impar')
    
}