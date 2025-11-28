// **6.** Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.
 
// entrada

const totalSegundos= Number( prompt('digite um numero que estara em segundos e diremos quantas horas e minutos e segundos são exatamente'))

// processamento

const horas = Math.floor( totalSegundos /3600); //math.floor arredonda numeros decimais 

const minutos = Math.floor((totalSegundos % 3600) / 60);

const segundos = totalSegundos % 60;

// saida

alert( +totalSegundos+ " segundos é igual a " +horas+ " horas e " + minutos + " minutos e " + segundos + " segundos");