// pergunta 1

var indice = 13;
soma = 0;

for (k = 0; k < indice; k++) {
    soma = soma + k
};

console.log(`Resposta Pergunta 1 = ${soma}`); // 78
console.log('');

// pergunta 2

var num = 13;

let a = 0;
let b = 1;
let c;

while (b < num) {
    c = a + b;
    a = b;
    b = c;
};

if (b === num) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
}

console.log('');

//pergunta 3


// números imparas.
// a) 1, 3, 5, 7, ____9

// cada numero é o dobro do número anterior.
// b) 2, 4, 8, 16, 32, 64, ____128

// 1,2,3,4,5,6 elevado ao quadrado
// c) 0, 1, 4, 9, 16, 25, 36, ____49

// números pares elevados ao quadrado
// d) 4, 16, 36, 64, ____100

// sequencia Fibonacci
// e) 1, 1, 2, 3, 5, 8, ____13

// números que começam com a letra D
// f) 2,10, 12, 16, 17, 18, 19, ____ 200


//pergunta 4

/*
    Resposta: Tanto o carro quanto o caminhão estarão a mesma distância de Ribeirão Preto

    Explicação:
  Não faz diferença nenhuma a velocidade do carro ou caminhão.
  Nem os pedágios ou quanto tempo ira levar em cada um.
  No momento em que eles se cruzarem, ambos estarão no mesmo lugar,
  ou seja estarão a mesma distância de Ribeirão Preto.

*/


//pergunta 5

function calculaTamanhoString(string) {
    let tamanho = 0

    for (i = 0; string[i] !== undefined; i++) {
        tamanho++;
    }

    return tamanho;
}

const string = "batata frita é bom";
var inverso = "";

for (i = calculaTamanhoString(string) - 1; i > -1; i--) {
    // console.log(i + string[i]);
    inverso = inverso + string[i];
}

console.log(inverso);



