//Atividade 6

//QUESTÃO 1: Manipulação de Arrays e Condicionais
// 1. Crie um array frutas com os valores ["maçã", "banana", "laranja"].
// 2. Utilize o método push para adicionar a fruta "uva" ao final do array.
// 3. Utilize o método shift para remover o primeiro item do array.
// 4. Crie uma função verificarFruta que receba um nome de fruta e verifique se ela está no array frutas. Utilize if e else para retornar "Fruta encontrada" ou "Fruta não encontrada".
// 5. Exiba o resultado da função verificarFruta para o nome "banana"
let frutas = ["maçã", "banana", "laranja"];
frutas.push('uva');
frutas.shift();
function verificarFrutas(nome){
    if (frutas.includes(nome)){
        return 'Fruta encontrada'
    }
    else{
        return 'Fruta não encontrada'
    }   
}

console.log(verificarFrutas('banana'));
console.log(frutas);


//QUESTÃO 2: Funções e Operadores Lógicos
//1. Crie uma função calcular que receba três parâmetros: a, b, e operacao. O parâmetro operacao pode ser "soma", "subtracao", "multiplicacao" ou "divisao".
//2. Utilize if, else if, e else para realizar a operação correspondente e retornar o resultado.
//3. Exiba o resultado das operações "soma" e "divisao" para os valores 10 e 2.
function calcular(a, b, operacao){
    if(operacao === 'soma'){
        return a + b
    }
    else if(operacao === 'subtracao'){
        return a-b
    }
    else if(operacao === 'multiplicacao'){
        return a*b
    }
    else if(operacao === 'divisao'){
        return a/b
    }

}
console.log(calcular(2,2, 'soma'));
console.log(calcular(10,10, 'divisao'));


//QUESTÃO 3:Manipulação de Arrays e Laços
//1. Crie um array numeros com os valores [1, 2, 3, 4, 5].
//2. Utilize um for para adicionar 5 a cada elemento do array e armazene os resultados em um novo array numeros Aumentados.
//3. Exiba o array numerosAumentados no console.
let numeros = [1, 2, 3, 4, 5];
let numerosAumentados=[];
for (let i=0; i < numeros.length; i++){
    numerosAumentados.push(numeros[i] + 5) 
}
console.log(numerosAumentados);


//QUESTÃO 4: Funções e Switch Case
//1. Crie uma função classificarNota que receba uma nota (número de 0 a 10) e utilize switch case para retornar "Aprovado" para notas 7 e acima e "Reprovado" para notas abaixo de 7.
//2. Exiba o resultado para a nota 8 e para a nota 5.
function classificarNota(nota){
    switch(true){
        case (nota<0 || nota > 10):
            return "Coloque um número de 0 a 10";
        case (nota>=7):
            return "Aprovado";
        case (nota<7):
            return "Reprovado";        
    }
}
console.log(classificarNota(8));
console.log(classificarNota(5));
 

//QUESTÃO 5: Funções e Condicionais com Arrays
//1. Crie um array numeros com os valores [5, 10, 15, 20].
//2. Crie uma função verificarNumero que receba um número e retorne "Menor que 10" se o número for menor que 10, "Entre 10 e 20" se o número estiver entre 10 e 20, e "Maior que 20" se for maior que 20.
//3. Utilize um for para percorrer o array numeros e exibir a classificação de cada número utilizando a função verificarNumero.
let numeros2 = [5, 10, 15, 20];
function verificarNumero2(numeroNovo){
    if(numeroNovo<10){
        return 'Menor que 10'
    }
    else if(numeroNovo>=10 && numeroNovo<= 20){
        return 'Entre 10 e 20'
    }   
    else if (numeroNovo >20){
        return 'Maior que 20'
    }
}
//console.log(verificarNumero2(5));
for (let i=0; i < numeros2.length; i++){
    console.log(`Número ${numeros2[i]}: ${verificarNumero2(numeros2[i])}`);
}


//QUESTÃO 6:  Condicionais e Operadores Aritméticos
//1. Crie uma variável idade e atribua um valor.
//2. Utilize if para verificar se a idade é maior ou igual a 18 e menor que 65. Se for o caso, exiba "Adulto" no console. Caso contrário, exiba "Não adulto".
//3. Utilize um operador ternário para realizar a mesma verificação e exiba o resultado no console.
let idade = 10;
if(idade >= 18 && idade <65){
    console.log('Adulto'); 
}
else{
    console.log('Não adulto'); 
}

console.log(idade >= 18 && idade < 65 ? 'Adulto' : 'Não adulto');


//QUESTÃO 7: FizzBuzz Simples
//1. Crie uma função fizzBuzz que receba um número n e retorne um array com os números de 1 a n, substituindo múltiplos de 3 por "Fizz" e múltiplos de 5 por "Buzz". Para múltiplos de ambos, use "FizzBuzz".
//2. Utilize um loop for para construir o array e if e else para verificar as condições





//QUESTÃO 8:  Manipulação de Arrays com Splice e Length
//1. Crie um array tarefas com os valores ["estudar", "limpar", "comprar"].
//2. Utilize splice para adicionar "exercitar" na segunda posição do array e remover o item na terceira posição.
//3. Exiba o tamanho do array e o array final no console.
let valores = ["estudar", "limpar", "comprar"];
valores.splice(2,"exercitar");

console.log(valores);

//QUESTÃO 9: Operadores Aritméticos e Funções
//1. Crie uma função calcularMedia que receba duas notas e retorne a média dessas notas.
//2. Utilize a função para calcular a média das notas 7 e 9 e exiba o resultado no console.

//QUESTÃO 10: Manipulação de Arrays e Laços
//1. Crie um array valores com os valores [5, 10, 15, 20].
//2. Utilize um while para dividir cada valor por 2 e armazenar os resultados em um novo array valoresDivididos.
//3. Exiba o array valoresDivididos no console.

//QUESTÃO 11:  Operadores Aritméticos e Condicionais
//1. Solicite ao usuário dois números através de prompt e armazene-os em variáveis.
//2. Crie uma função compararSoma que receba os dois números, calcule a soma e retorne uma mensagem se a soma é maior que 20 ou não.
//3. Exiba a mensagem com alert.


//QUESTÃO 12: Laços e Operadores Booleanos
//1. Solicite ao usuário um número através de prompt e crie um array numeros com todos os números de 1 até o número fornecido manualmente.
//2. Utilize um for para percorrer o array e exiba com alert se cada número até o número digitado é múltiplo de 3.

//QUESTÃO 13:  Números e Seus Quadrados
//1.Solicite ao usuário um número através de prompt e crie um array numeros com todos os números de 1 até o número fornecido.
//2.Use um for para percorrer o array e exiba com alert o número e seu quadrado.
 
//QUESTÃO 14: Funções e Condicionais
//1. Crie uma função verificarValor que receba um número fornecido pelo usuário através de prompt e determine se ele é positivo, negativo ou zero.
//2. Exiba o resultado usando alert


//QUESTÃO 15: Números Pares e Ímpares
//1.Solicite ao usuário um número através de prompt e crie um array numeros com todos os números de 1 até o número fornecido.
//2.Use um for para percorrer o array e exiba com alert se cada número é par ou ímpar.
 
 
//UESTÃO 16: Funções e Operadores Aritméticos
//1. Solicite ao usuário dois números e uma operação matemática (soma, subtração, multiplicação ou divisão) através de prompt.
//2. Crie uma função operacaoMatematica que realize a operação matemática correspondente.
//3. Exiba o resultado com alert.

//QUESTÃO 17: Funções e Condicionais
//1. Solicite ao usuário um número através de prompt e crie uma função verificarParidade que determine se o número é par ou ímpar.
//2. Exiba o resultado com alert.

//QUESTÃO 18: Laços e Condicionais
//1. Solicite ao usuário um número através de prompt e crie um array numeros com todos os números de 1 até o número fornecido.
//2. Use umforpara percorrer o array e exiba com alert se cada número é maior que 10.
