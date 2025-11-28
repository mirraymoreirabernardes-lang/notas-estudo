//entrada - variaveis 
//media aritimetica de 3 notas, e menor que 3 horrive
//menor que 7 da pra miorar, maior que 7 genio

const nota1 = Number(prompt("digite a 1ª nota"))
const nota2 = Number(prompt("digite a 2ª nota"))
const nota3 = prompt("digite a 3ª nota")

// processamento 

const soma = nota1 + nota2 + Number(nota3)

const media = soma / 3

// menor que 3
// menor que 7
// menor que 7

if (media < 3) {
    alert("media é insuficiente " + media + " - horrivi")
} else if (media < 7) {
    alert("media é insuficiente : " + media + " - da pra miorar")
} else {
    alert("media é suficiente : " + media + " - genio")
}