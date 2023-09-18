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

// Escrita de código.
// 1.

function sobreMim(){
    console.log('Eu sou Mariana, tenho 32 anos, moro em São Leopoldo e sou empresária');
}

function receberDados (nome, idade, cidade, profissao){
      console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`);
}

sobreMim();
receberDados('Mariana', 32, 'São Leopoldo', 'empresária');

// 2.
// a)
function somarNumeros(primeiro, segundo) {
    let resultadoSoma = primeiro + segundo;
    return resultadoSoma;
}

console.log(somarNumeros(45, 69));

// b)
function verificarSeEMaior(primeiro, segundo){
    return primeiro >= segundo;
}
console.log(verificarSeEMaior(65, 685));

// c)
function verificarSeEPar(numero){
    return Boolean(numero % 2 === 0);
}

console.log(verificarSeEPar(70));

// d)
function verificarTamanho(fraseDoUsuario){
    console.log(fraseDoUsuario.length, fraseDoUsuario.toUpperCase())
}

verificarTamanho("Bom dia a todos");

// 3.
let primeiroNumero = Number(prompt("Insira um numero"));
let segundoNumero = Number(prompt("Insira outro numero"));

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
