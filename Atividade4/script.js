//Lista 4
//Questão 1 
// function classificarNota(){
//     const nota = parseInt(prompt('Digite a nota do aluno (0 a 100):'));
//     let resultado;
//     if (nota >= 90){
//         resultado = 'Sua nota é A! Excelente trabalho!'; 
//     }
//     else if (nota >= 80){
//         resultado = 'Sua nota é B! Bom trabalho!'; 
//     }
//     else if (nota >= 70){
//         resultado = 'Sua nota é C!Trabalho satisfatório!'; 
//     }
//     else if (nota >= 60){
//         resultado = 'Sua nota é D! Precisa melhorar!'; 
//     }
//     else {
//         resultado = 'Sua nota é F! Insuficiente';
//     }
//     alert(`Sua nota é ${resultado}`);
// }
// classificarNota();


//Questão 2
// function limiteNota(){
//         const nota = parseInt(prompt('Digite a nota do aluno de 0 a 100:'));
//         const intervaloA= parseInt(prompt('digite o limite pra nota A'));
//         const intervaloB= parseInt(prompt('digite o limite pra nota B'));
//         const intervaloC= parseInt(prompt('digite o limite pra nota C'));
//         const intervaloD= parseInt(prompt('digite o limite pra nota D'));
//         let resultado;
//         if (nota >= intervaloA){
//             resultado = 'Sua nota é A! Excelente trabalho!'; 
//         }
//         else if (nota >= intervaloB){
//             resultado = 'Sua nota é B! Bom trabalho!'; 
//         }
//         else if (nota >= intervaloC){
//             resultado = 'Sua nota é C!Trabalho satisfatório!'; 
//         }
//         else if (nota >= intervaloD){
//             resultado = 'Sua nota é D! Precisa melhorar!'; 
//         }
//         else {
//             resultado = 'Sua nota é F! Insuficiente';
//         }
//         alert(`${resultado}`);
//     }
// limiteNota();


//Questão 3
// function limiteNota(){
//     const nota = parseInt(prompt('Digite a nota do aluno de 0 a 100:'));

//     if(nota > 100 || nota < 0){ 
//         alert("Nota inválida! Digite um número dentro do intervalo permitido (0 a 100)");
//         return;
//     }
    
//     const intervaloA= parseInt(prompt('digite o limite pra nota A'));
//     const intervaloB= parseInt(prompt('digite o limite pra nota B'));
//     const intervaloC= parseInt(prompt('digite o limite pra nota C'));
//     const intervaloD= parseInt(prompt('digite o limite pra nota D'));

//     if (nota >= intervaloA){
//         alert("Sua nota é A! Excelente trabalho!"); 
//     }
//     else if (nota >= intervaloB){
//         alert("Sua nota é B! Bom trabalho!");
//     }
//     else if (nota >= intervaloC){
//         alert("Sua nota é C!Trabalho satisfatório!");
//     }
//     else if (nota >= intervaloD){
//         alert("Sua nota é D! Precisa melhorar!"); 
//     }     
// }
// limiteNota();


//Questão 4
// function classificarNota(){
//         const nota = parseInt(prompt('Digite a nota do aluno (0 a 100):'));
//         let resultado;

//         if (nota >= 90){
//             resultado = 'Sua nota é A! Excelente trabalho!'; 
//         }
//         else if (nota >= 80){
//             resultado = 'Sua nota é B! Bom trabalho!'; 
//         }
//         else if (nota >= 70){
//             resultado = 'Sua nota é C!Trabalho satisfatório!'; 
//         }
//         else if (nota >= 60){
//             resultado = 'Sua nota é D! Precisa melhorar!'; 
//         }
//         else if (nota>= 50){ 
//             resultado = 'Sua nota é F!';
//             if(nota>=55){
//                 alert("Você está quase lá!");
//             }
//         }
//         alert(`Sua nota é ${resultado}`);
//     }  
// classificarNota();


//Questão 5
// function classificarNota(){
//         const nota = parseInt(prompt('Digite a nota do aluno (0 a 100):'));
//         let resultado;
//         let sugestao;
//         if (nota >= 90){
//             resultado = 'Sua nota é A! Excelente trabalho'; 
//             sugestao = 'Continue no mesmo caminho';
//         }
//         else if (nota >= 80){
//             resultado = 'Sua nota é B! Bom trabalho'; 
//             sugestao ='Revise um pouco mais';
//         }
//         else if (nota >= 70){
//             resultado = 'Sua nota é C!Trabalho satisfatório';
//             sugestao = 'Resolva mais questões';
//         }
//         else if (nota >= 60){
//             resultado = 'Sua nota é D! Precisa melhorar'; 
//             sugestao ='Revise e faça mais questões';
//         } 
//          else {
//              resultado = 'Sua nota é F! Insuficiente';
//              sugestao = 'precisa estudar mais';
//          }
//
//         alert(`${resultado}. Uma sugestão: ${sugestao}`);
//     }   
// classificarNota();


//Questão 6
// function classificarNota(){
//      const nota = parseInt(prompt('Digite a nota do aluno (0 a 100):'));
//      const comentario = prompt('Digite o comentário:');
//      let resultado;
//      if (nota >= 90){
//          resultado = 'Sua nota é A';
//      }
//      else if (nota >= 80){
//           resultado = 'Sua nota é B'; 
//      }
//      else if (nota >= 70){
//           resultado = 'Sua nota é C';
//       }
//       else if (nota >= 60){
//           resultado = 'Sua nota é D'; 
//       } 
//       else {
//            resultado = 'Sua nota é F';
//       }
//      alert(`${resultado} e ${comentario}`);
// }   
//classificarNota();


//Questão 7
// function classificarNota(){
//      const nota = parseInt(prompt('Digite a nota do aluno (0 a 100):'));
//      let faixa;

//      if (nota >= 90){
//         faixa = 'ente 90 e 100';
//      }
//      else if (nota >= 80){
//         faixa = 'entre 80 e 89'; 
//      }
//      else if (nota >= 70){
//         faixa = 'entre 70 e 79';
//       }
//       else if (nota >= 60){
//         faixa = 'entre 60 e 69'; 
//       } 
//       else {
//         faixa = 'abaixo de 59';
//       }
//      alert(`Sua nota está na faixa ${faixa}`);
// }   
// classificarNota();

//Questão 8
//function classificarNota(){
//   const nota = parseInt(prompt('Digite a nota do aluno (0 a 100):'));
//   let maxima;
//   let minima;
//   if (nota >= 90){
//     maxima = '100'; 
//     minima = '90';
//    }
//    else if (nota >= 80){
//      maxima = '89'; 
//      minima = '80';
//    }
//    else if (nota >= 70){
//      maxima = '79'; 
//      minima = '70';
//    }
//    else if (nota >= 60){
//       maxima = '69'; 
//       minima = '60';
//     } 
//    else {
//       maxima = '59'; 
//       minima = '0';;
//     }
    
//     alert(`Sua nota é ${nota}. A nota máxima ${maxima} e nota mínima é ${minima}`);
//     }   
//classificarNota();


//Questão 9
// function classificarNota(){
//     const nota = parseInt(prompt('Digite a nota do aluno (0 a 100):'));
//     let resultado;

//     if (nota >= 90){
//         resultado = 'Sua nota é A! Excelente trabalho!'; 
//     }
//     else if (nota >= 80){
//         resultado = 'Sua nota é B! Bom trabalho!'; 
//     }
//     else if (nota >= 70){
//         resultado = 'Sua nota é C!Trabalho satisfatório!'; 
//     }
//     else if (nota >= 60){
//         resultado = 'Sua nota é D! Precisa melhorar!'; 
//     }
//     else if (nota < 60){ 
//         resultado = 'Sua nota é F!';
//         alert("Você está em recuperação");
//     }
//     alert(`Sua nota é ${resultado}`);
// }  
// classificarNota();


//Questão 10 - Repetida
