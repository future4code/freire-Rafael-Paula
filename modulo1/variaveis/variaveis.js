/* exercicios de interpretaçao de código
1
let a = 10
let b = 10

console.log(b) //10

b = 5
console.log(a, b) //10,5

2
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) //10,10,10

3
let p = prompt("Quantas horas você trabalha por dia?") // horasTrabalhadas
let t = prompt("Quanto você recebe por dia?") // valorDia
alert(`Voce recebe ${t/p} por hora`) // valorHora*/

//exercicios de escrita de código
//1
let nome = null
let idade = null
typeof nome
typeof idade
// não sei mesmo o porque o tipo foi impresso :(
const nome = prompt(Insira o seu nome)
const idade = prompt(Insira a sua idade)
let nome = null
let idade = null
// notei que provavelmente não estou fazendo o exercício de forma correta
console.log("Olá" nome, "você tem" idade "anos")

//2
let pergunta1 = "Já bebeu água hoje?"
let pergunta2 = "Que dia do mês estamos?"
let pergunta3 = "Já tomou a vacina?"
const pergunta1 = Sim
const pergunta2 = Dia 09
const pergunta3 = Sim!

//3
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let c = a
let a = b
let b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
