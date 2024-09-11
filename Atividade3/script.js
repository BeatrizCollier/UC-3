//Lista 3
//Questão 1: Crie uma função que, dada uma lista de idades, use um loop for para verificar se todas as pessoas têm 18 anos ou mais. 
//Se sim, retorne "Todos podem entrar". Se não, retorne "Alguém não pode entrar".
function verificarIdade(listaDeIdades){
    for (let i=0; i < listaDeIdades.length; i++){
        if (listaDeIdades[i] < 18){
            return "Alguém não pode entrar";
        }
        else {
            return "Todos podem entrar";
        }
    }
}
let idades = [15, 22, 19, 20,30];
console.log(verificarIdade(idades)); 

//Questão 2 - Crie uma função que use um loop while para contar quantos números pares existem entre 1 e 50.
let numero=1
let soma = 0
function verificarNumeroPar(){  
    while (numero<=50){
        if(numero % 2 === 0){
            soma++;    //somar uma com a outra é +=, somar 1 de cada vez é ++
        }
        numero++;     
    } 
    return "Os números pares são", soma;        
}    
 console.log(verificarNumeroPar());

 //Questão 3 -  Use switch case para classificar uma cor baseada em um número de 1 a 3. Se 1, classifique como "Cor Clara". 
 //Se 2, "Cor Média". Se 3, "Cor Escura". Qualquer outro número deve retornar "Cor Desconhecida".
 function classificarCor(numero){
    switch(numero){
        case 1:
            return "Cor clara";
        case 2:
            return "Cor Média";
        case 3:
            return "Cor Escura";
        default:
            return "Cor desconhecida";
    }
 }
 console.log(classificarCor(1));
 console.log(classificarCor(4));

//Questão 4: Crie uma função que use switch case para validar uma senha. 
//Se a senha tiver menos de 8 caracteres, retorne "Senha Fraca". Se tiver entre 8 e 12 caracteres, retorne "Senha Média". Se tiver mais de 12, retorne "Senha Forte".
function validarSenha(senha){
    const comprimento = senha.length;
    switch(true){
        case(comprimento <8):
            return "Senha Fraca";
        case(comprimento >=8 && comprimento <= 12):
            return "Senha Média";
        case(comprimento > 12):
            return "Senha Forte";
    }
}
//testando a função
console.log(validarSenha("abc123"));
console.log(validarSenha("abcdefgh"));
console.log(validarSenha("abcdefghijklm"));

//Questão 5: Use switch case para classificar uma nota de 0 a 100. 
//Se a nota for maior que 90, classifique como "A". Se entre 80 e 89, "B". Se entre 70 e 79, "C". Se entre 60 e 69, "D". Se menor que 60, "F".
function clafissicarNota(nota){  
    switch(true){
        case(nota >= 90):
            return "A";
        case(nota >=80 && nota<=89):
            return "B";
        case(nota >=70 && nota <=79):
            return "C";
        case(nota >=60 && nota <=69):
            return "D";
        case(nota < 60):
            return "F";
    }
}
console.log(clafissicarNota(90));
console.log(clafissicarNota(80));
console.log(clafissicarNota(50));

//Questão 6: Crie uma função que use um loop for para percorrer de 1 a 100. 
//Se o número for divisível por 2, 3 e 5, imprima "FizzBuzzBoom". 
//Se for divisível por 2 e 3, imprima "FizzBuzz".
//Se for divisível por 3 e 5, imprima "BuzzBoom". 
//Se for divisível por 2 e 5, imprima "FizzBoom".
//Se for divisível apenas por 2, 3, ou 5, imprima "Fizz", "Buzz", ou "Boom", respectivamente. 
//Caso contrário, imprima o número
function jogoFizz(){
    for(let i=1; i<=100; i++){
        if ((i%2 ===0) && (i%3 ===0) && (i%5 ===0)){
            console.log("FizzBuzzBoom", i); 
        }
        else if ((i%2 ===0) && (i%3 ===0)){
            console.log("FizzBuzz", i); 
        }
        else if ((i%3 ===0) && (i%5 ===0)){
            console.log("BuzzBoom", i);
        }
        else if ((i%2 ===0) && (i%5 ===0)){
            console.log("FizzBoom", i);
        }
        else if (i%2 ===0){
            console.log("Fizz", i);
        }
         else if (i%3 ===0){
            console.log("Buzz", i);
        }
         else if (i%5 ===0){
            console.log("Boom", i);
        } 
        else {
            console.log(i);
        }  
    }
}
console.log(jogoFizz());