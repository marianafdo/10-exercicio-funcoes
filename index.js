// MARIANA FERNANDES DE OLIVEIRA
// A. Exercícios de interpretação de código
// 1. 
// a)
// console.log(minhaFuncao(2)) // 10;
// console.log(minhaFuncao(10)) // 50;

// b) não apareceria o resultado no console.

// 2.
// a) a função deixa todas a letras em minúsculo e verifica se o texto contem a palavra "cenoura";
// b) 
// i) true
// ii) true
// iii) false

function receberDados(nome, idade, cidade, profissao){
    nome = "Mariana";
    idade = 32;
    cidade = "São Leopoldo";
    profissao = "empresária";
    return frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
}

function imprimirFrase(){
    console.log(frase);
}

receberDados();
imprimirFrase()

function somarNumeros(primeiro, segundo) {
    let resultadoSoma = primeiro + segundo;
    return resultadoSoma;
}

somarNumeros();
console.log(somarNumeros(45, 69));

function verificarSeEMaior(primeiro, segundo){
    return primeiro >= segundo;
}
verificarSeEMaior();
console.log(verificarSeEMaior(65, 685));


function verificarSeEPar(numero){
    return Boolean(numero % 2 === 0);
}

verificarSeEPar();
console.log(verificarSeEPar(70));


function verificarTamanho(fraseDoUsuario){
    console.log(fraseDoUsuario.toUpperCase())
}

verificarTamanho("Bom dia a todos");


let receberNumero = prompt("Insira um numero");
let receberOutroNumero = prompt("Insira outro numero");
let primeiroNumero = Number(receberNumero);
let segundoNumero = Number(receberOutroNumero);

function somar(primeiroNumero, segundoNumero){
let soma = primeiroNumero + segundoNumero;
return soma;
}

function subtrair(primeiroNumero, segundoNumero){
let subtracao = primeiroNumero - segundoNumero;
return subtracao;
}

function multiplicar(primeiroNumero, segundoNumero){
let multiplicacao = primeiroNumero * segundoNumero;
return multiplicacao;
}

function dividir(primeiroNumero, segundoNumero){
let divisao = primeiroNumero / segundoNumero;
return divisao;
}

somar(primeiroNumero, segundoNumero);
subtrair(primeiroNumero, segundoNumero);
multiplicar(primeiroNumero, segundoNumero);
dividir(primeiroNumero, segundoNumero);

console.log("Soma", somar(primeiroNumero, segundoNumero));
console.log("Diferença", subtrair(primeiroNumero, segundoNumero));
console.log("Multiplicação", multiplicar(primeiroNumero, segundoNumero));
console.log("Divisão", dividir(primeiroNumero, segundoNumero));
