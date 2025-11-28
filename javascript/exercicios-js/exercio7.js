// **7.** Peça uma distância em quilômetros e converta para metros e centímetros.let km = parseFloat(prompt("Digite a distância em quilômetros:"));

// entrada

let metros = km * 1000;
let centimetros = km * 100000;

alert(
  km + " km equivalem a:\n" +
  metros + " metros\n" +
  centimetros + " centímetros"
);