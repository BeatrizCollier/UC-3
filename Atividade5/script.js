//QUESTÃO 1
//1 ADICIONAR ABACAXI NO INICIO DO ARRAY
//2 ADICIONAR MANGA NO FINAL
//3 REMOVA A PRIMEIRA FRUTA
//4 REMOVA A ULTIMA

let frutas = ['maçã', 'banana', 'laranja'];
frutas.unshift('abacaxi');
frutas.push('manga');
frutas.shift();
frutas.pop();
console.log(frutas);


//QUESTÃO 2
//1. Insira o número 25 entre 20 e 30.
//2. Remova o número 40 do array sem alterar os outros elementos.

// let numeros = [10, 20, 30, 40, 50];
// numeros.splice(2,0, 25);
// numeros.splice(4,1);
// console.log(numeros)


//QUESTÃO 3
//1. Utilize .indexOf para encontrar a primeira posição da cor "azul".
//2. Utilize .lastIndexOf para encontrar a última posição da cor "azul".
//3. Verifique se a cor "roxo" está presente no array utilizando .includes.

let cores = ['vermelho', 'azul', 'verde', 'amarelo','azul'];
console.log(cores);
console.log(cores.indexOf('azul'));
console.log(cores.lastIndexOf('azul'));
console.log(cores.includes('roxo'));


//QUESTÃO 4
//1. Remova o aluno "Carlos" do array.
//2. Adicione o aluno "Maria" no final do array.
//3. Adicione o aluno "Pedro" no início do array.

let alunos = ['João', 'Ana', 'Carlos', 'Bia'];
alunos.splice(2,1);
alunos.push('Maria');
alunos.unshift('Pedro');
console.log(alunos);

//QUESTÃO 5
//1. Remova o primeiro elemento do array.
//2. Adicione o elemento "hamster" ao final do array.
//3. Remova o elemento "pássaro" utilizando .splice.
//4. Verifique se o elemento "gato" ainda está presente no array utilizando .includes.

let animais = ['gato', 'cachorro', 'pássaro', 'peixe','gato'];
animais.shift();
animais.push('hamster');
animais.splice(1,1);
console.log(animais);
console.log(animais.includes('gato'));

//QUESTÃO 6
//1. Encontre a posição do livro "1984" utilizando .indexOf.
//2. Remova o livro "O Pequeno Príncipe" utilizando .splice.
//Qual foi a posição encontrada do livro "1984"?

let livros = ['O Senhor dos Anéis', '1984', 'O Pequeno Príncipe', 'Harry Potter'];
console.log(livros.indexOf('1984'));
livros.splice(2,1);
console.log(livros);


//QUESTÃO 7
//1. Verifique se a cidade "Salvador" está no array utilizando .includes.
//2. Adicione a cidade "Curitiba" ao início do array.

let cidades = ['São Paulo', 'Rio de Janeiro', 'Salvador','Brasília'];
console.log(cidades.includes('Salvador'));
cidades.unshift('Curitiba');
console.log(cidades);


//Questão 8
//1. Substitua o elemento "Minecraft" por "The Sims".
//2. Remova o primeiro elemento do array utilizando .shift.

let jogos = ['FIFA', 'Minecraft', 'Fortnite', 'Among Us'];
jogos.splice(1,1);
jogos.splice(1,0,'The Sims');
jogos.shift();
console.log(jogos);

//Questão 9
//1. Remova o primeiro elemento do array utilizando .shift.
//2. Verifique se o elemento "vôlei" está presente no array utilizando .includes.
//3. Se "vôlei" estiver presente, remova-o do array utilizando .splice.
let esportes = ['futebol', 'basquete', 'vôlei', 'tênis'];
esportes.shift();
console.log(esportes.includes('vôlei'));
esportes.splice(1,1);

console.log(esportes);

//Questão 10
//1. Remova o último elemento do array utilizando .pop.
//2. Adicione o elemento "Node.js" ao início do array utilizando .unshift.
//3. Encontre a posição do elemento "JavaScript" utilizando .indexOf.
let tecnologias = ['HTML', 'CSS', 'JavaScript', 'React'];
tecnologias.pop();
tecnologias.unshift('Node.js');
console.log(tecnologias.indexOf('JavaScript'));

console.log(tecnologias);

//Questão11
//1. Adicione o filme "Interstellar" ao início do array.
//2. Remova o último filme do array.
//3. Adicione o filme "The Godfather" ao final do array
let filmes = ['Matrix', 'Inception', 'Avatar'];
filmes.unshift('Interstellar');
filmes.pop();
filmes.push('The Godfather');

console.log(filmes);

//Questão 12
//1. Remova a cor "verde" do array.
//2. Adicione a cor "roxo" na posição onde "verde" estava.
let cores1 = ['vermelho', 'azul', 'verde','amarelo'];
cores1.splice(2,1);
cores1.splice(2,0,'roxo');
console.log(cores1);

//Questão 13
//1. Verifique se o time "São Paulo" está presente no array utilizando .includes.
//2. Se o time "São Paulo" não estiver presente, adicione-o ao final do array.
let times = ['Flamengo', 'Corinthians','Palmeiras'];
console.log(times.includes('São Paulo'));
times.push('São Paulo');
console.log(times);

//Questão 14
//1. Encontre a posição da comida "sushi" utilizando .indexOf.
//2. Remova a comida "sushi" do array utilizando .splice
let comidas = ['pizza', 'hamburguer', 'sushi','lasanha'];
console.log(comidas.indexOf('sushi'));
comidas.splice(2,1);
console.log(comidas);

//Questão 15
//1. Adicione o número 25 ao final do array.
//2. Remova o número 10 do array utilizando .splice.
//3. Adicione o número 7 ao início do array.
let numeros = [5, 10, 15, 20];
numeros.push(25);
numeros.splice(1,1);
numeros.unshift(7);
console.log(numeros);

//Questão 16
//1. Remova o primeiro planeta do array.
//2. Adicione o planeta "Vênus" ao início do array.
let planetas = ['Terra', 'Marte', 'Júpiter','Saturno'];
planetas.shift();
planetas.unshift('Vênus');
console.log(planetas);

//Questão 17
//1. Verifique se o curso "Física" está presente no array utilizando .includes.
//2. Se"Física" estiver presente, remova-o do array
let cursos = ['Matemática', 'Física', 'Química', 'Biologia'];
console.log(cursos.includes('Física'));
cursos.splice(1,1);
console.log(cursos);

//Questão 18
//1. Substitua o carro "Lamborghini" por "McLaren".
//2. Remova o último carro do array
let carros = ['Ferrari', 'Lamborghini', 'Porsche','Bugatti'];
carros.splice(1,1,'McLaren');
carros.pop();
console.log(carros);

//Questão 19
//1. Remova o primeiro idioma do array.
//2. Adicione o idioma "Italiano" ao final do array.
//3. Encontre a posição do idioma "Francês" utilizando .indexOf.
let idiomas = ['Inglês', 'Espanhol', 'Francês','Alemão'];
idiomas.shift();
idiomas.push('Italiano');
console.log(idiomas.indexOf('Francês'));
console.log(idiomas);

//Questão 20
//1. Adicione a fruta "morango" ao início do array.
//2. Verifique se a fruta "laranja" está presente no array utilizando .includes.
// let frutas = ['maçã', 'banana', 'laranja', 'uva'];
// frutas.unshift('morango');
// console.log(frutas.includes('laranja'));
// console.log(frutas);