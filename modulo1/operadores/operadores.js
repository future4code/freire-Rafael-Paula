/*const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) // d. boolean



let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // não percebi nada errado e será impressa no console a soma dos dois números*/


console.log("Qual a sua idade?")
console.log("Qual a idade do seu melhor amigo ou amiga?")
const idade = 20
const idadeAmigo = 21
const idadeMaior = idade > idadeAmigo
const diferencaIdade = idade - idadeAmigo
console.log( "Sua idade é maior que a de seu amigo", idadeMaior)


console.log("Insira um número par")
const numero = 597
const divisor = 2
const restoDaDivisao = numero % divisor
console.log( "Resultado", restoDaDivisao)
//o resultado ou é 0 ou é 1
//se o número for ímpar, o resultado é 1

console.log("Quantos anos você tem?")
const anos = 37
const meses = anos * 12
const dias = anos * 365
const horas = anos * 365 * 24

console.log("Sua idade em meses é de", meses, "meses")
console.log("Sua idade em dias é de", dias, "dias")
console.log("Sua idade em horas é de", horas, "horas")

console.log("insira um número qualquer:")
console.log("insira outro número qualquer:")

const num1 = 65
const num2 = 349
const maior = num1 > num2
const igualdade = num1 === num2
const primeiroDiv = num1 % num2
const segundoDiv = num2 % num1

console.log("O primeiro número é maior que o segundo?", maior)
console.log("O primeiro número é igual ao segundo?", igualdade)
console.log("O primeiro número é divisível ao segundo?", primeiroDiv = 0)
console.log("O segundo número é divisível ao primeiro?", segundoDiv = 0)
