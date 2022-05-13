//Exercícios de interpretação de código

//1.
 function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//a.
//10
//50
//b.se retirar os dois console.log os resultados não são impressos no console

//2.
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//a.a função verifica que o texto contém a palavra "cenoura"
//b.
//I. True
//II. True
//III.. False


///Exercícios de escrita de código

//1.a
function informação () {
    console.log("Eu sou Rafael, tenho 37 anos, moro em Belo Horizonte e sou estudante de programação.")
}
console.log(function)

//1.b

const nome = "Rafael"
const idade = "37"
const endereco = "Belo Horizonte"
const profissao = "Estudante de programação"

function mensagem() {
    console.log(`Eu sou ${NOME}, tenho ${IDADE} anos, moro em ${ENDEREÇO} e sou ${PROFISSÃO}.`)
    
}
imprime frase()

//2.a
function somaDoisNumeros(num1, num2){
    const soma = num1+num2
    return soma
}
console.log somaDoisNumeros

//2b.
function maiorOuIgual(numero1, numero2){
    numero1 = prompt("insira o primeiro número")
    numero2 = prompt("insira o segundo número")
    return maiorOuIgual = numero1 > numero2

}
 //2.c
 function numeroPar(numero){
     numero = prompt("Insira um número")
     numeroPar = numero % 2
     return numeroPar
 }

 //2.d
 function tamanhoMensagem(mensagem){
     let mensagem = prompt("Escreva a sua mensagem")
     mensagem=mensagem.leight()
     mensagem=mensagem.toUpperCase

     return tamanhoMensagem
 }

 //3
 function operações(numeral1, numeral2){
     const soma=numeral1+numeral2
     const subitração=numeral1-numeral2
     const multiplicacao=numeral1*numeral2
     const divisão=numeral1/numeral2
     
     return operações
 }