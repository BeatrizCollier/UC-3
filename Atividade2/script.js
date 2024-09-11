//Lista 2

//Questão 1 : Se as vendas mensais forem maiores que 100.000 e a pontualidade for maior que 95%, o desempenho é "Excelente". 
//Se as vendas forem entre 50.000 e 100.000 e a pontualidade entre 85% e 95%, o desempenho é "Bom". 
//Se as vendas forem menores que 50.000 ou a pontualidade menor que 85%, o desempenho é "Regular".
function avaliarDesempenho(vendas, pontualidade) {
    if(vendas > 100000 && pontualidade > 95){
        return "Desempenho Excelente";
    }
    else if(vendas >= 50000 && vendas <= 100000 && pontualidade >= 85 && pontualidade <= 95){
        return "Desempenho Bom.";
    }
    else if(vendas < 50000 || pontualidade < 85){
        return "Desempenho Regular";
    }
}
console.log(avaliarDesempenho(120000, 96)); //Desempenho Excelente


//Questão 2: Se a média acadêmica for maior que 8.5 e a renda familiar menor que 3000, aprovar bolsa "Integral". 
//Se a média for entre 7 e 8.5 e a renda entre 3000 e 6000, aprovar bolsa "Parcial". 
//Se a média for menor que 7 ou a renda maior que 6000, não aprovar bolsa.
function bolsaEstudos(media, rendaFamiliar) {
    if(media > 8.5 && rendaFamiliar < 3000){
        return "Bolsa integral";
    }
    else if ((media >= 7 && media <= 8.5) && (rendaFamiliar >= 3000 && rendaFamiliar <= 6000)){
        return "Bolsa Parcial";
    }
    else if(media <7 || rendaFamiliar > 6000){
        return "Não aprova a bolsa";
    }
}
console.log(bolsaEstudos(9,2000));

//Questão 3: Se o IMC for maior que 30 e a idade maior que 60, o risco é "Alto". 
//Se o IMC for entre 25 e 30 e a idade entre 45 e 60, o risco é "Médio". 
//Se o IMC for menor que 25 ou a idade menor que 45, o risco é "Baixo".
function riscoDeSaude(imc, idade){
    if (imc > 30 && idade > 60){
        return "Risco Alto";
    }
    else if((imc >= 25 && imc <= 30) && (idade>=45 && idade <=60)){
        return "Risco médio";
    }
    else if(imc <25 || idade <45){
        return "Risco Baixo";
    }
}
console.log(riscoDeSaude(25,43));

//Questão 4: Se a renda anual for maior que 100.000 e o histórico de pagamentos for "Excelente", o crédito é "Prime". 
//Se a renda for entre 50.000 e 100.000 e o histórico for "Bom", o crédito é "Padrão". 
//Se a renda for menor que 50.000 ou o histórico for "Ruim", o crédito é "Restrito".
function classificacaoCredito(rendaAnual, historico){
    if (rendaAnual > 100000 && historico === "Excelente"){
        return "Prime";
    }
    else if((rendaAnual >= 50000 && rendaAnual <= 100000) && (historico === "Bom")){
        return "Padrão";
    }
    else if(rendaAnual < 50000 || historico === "Ruim"){
        return "Restrito";
    }
}
console.log(classificacaoCredito(100000, "Bom"));

//Questão 5 Se o preço for maior que 100 e a demanda maior que 500 unidades por mês, classificar como "Produto Premium". 
//Se o preço for entre 50 e 100 e a demanda entre 200 e 500 unidades, classificar como "Produto Padrão". 
//Se o preço for menor que 50 ou a demanda menor que 200 unidades, classificar como "Produto Econômico".
function classificacaoProdutos(preco, demanda) {
    if(preco > 100 && demanda > 500){
        return "Produto premium";
    }
    else if ((preco >= 50 && preco <= 100) && (demanda >= 200 && demanda <= 500)){
        return "Produto Padrão";
    }
    else if(preco < 50 || demanda < 200){
        return "Produto Econômico";
    }
}
console.log(classificacaoProdutos(49,499));

//Questão 6: Se a experiência for maior que 10 anos e a formação acadêmica for "Doutorado", selecionar para "Posição Sênior". 
//Se a experiência for entre 5 e 10 anos e a formação for "Mestrado", selecionar para "Posição Plena". 
//Se a experiência for menor que 5 anos ou a formação for "Graduação", selecionar para "Posição Júnior".
function selecaoCandidatos(experiencia, formacao){
    if (experiencia > 10 && formacao === "doutorado"){
        return "Posição Sênior";
    }
    else if((experiencia >= 5 && experiencia <=10) && (formacao === "mestrado")){
        return "Posição Plena";
    }
    else if(experiencia < 5 || formacao === "graduacao"){
        return "Posição Júnior";
    }
}
console.log(selecaoCandidatos(4, "graduacao"));

//Questão 7:  Se a qualidade for "Excelente" e o prazo de entrega for menor que 5 dias, classificar como "Fornecedor A". 
//Se a qualidade for "Boa" e o prazo de entrega entre 5 e 10 dias, classificar como "Fornecedor B". 
//Se a qualidade for "Regular" ou o prazo de entrega maior que 10 dias, classificar como "Fornecedor C"
function avaliacaoVendedores(qualidade, prazo) {
    if (qualidade == "excelente" && prazo < 5){
        return "Fornecedor A";
    }
    else if((qualidade == "boa") && (prazo >= 5 && prazo <= 10)){
        return "Fornecedor B";
    }
    else if(qualidade === "regular" || prazo >10){
        return "Fornecedor C";
    }
}
console.log(avaliacaoVendedores("regular", 11));

//Questão 8: Se o orçamento for maior que 1.000.000 e a complexidade for "Alta", classificar como "Projeto Estratégico". 
//Se o orçamento for entre 500.000 e 1.000.000 e a complexidade for "Média", classificar como "Projeto Importante". 
//Se o orçamento for menor que 500.000 ou a complexidade for "Baixa", classificar como "Projeto Secundário".
function projeto(orcamento, complexidade){
    if (orcamento > 1000000 && complexidade === "alta"){
        return "Projeto extratégico";
    }
    else if((orcamento >= 500000 && orcamento <= 1000000) && (complexidade === "media")){
        return "Projeto importante";
    }
    else if(orcamento < 500000 || complexidade === "baixa"){
        return "Projeto secundário";
    }
}
console.log(projeto(400000, "baixa"));

//Questão 9: Se a avaliação dos alunos for maior que 4.5 e a taxa de conclusão for maior que 90%, classificar como "Curso Excelente". 
//Se a avaliação for entre 3.5 e 4.5 e a taxa de conclusão entre 75% e 90%, classificar como "Curso Bom". 
//Se a avaliação for menor que 3.5 ou a taxa de conclusão menor que 75%, classificar como "Curso Regular".
function avaliarCursos(avaliacao, taxaConclusao) {
    if(avaliacao > 4.5 && taxaConclusao > 90){
        return "Curso Excelente";
    }
    else if((avaliacao >= 3.5 && avaliacao <= 4.5) && (taxaConclusao >= 75 && taxaConclusao <= 90)){
        return "Curso Bom";
    }
    else if(avaliacao < 3.5 || taxaConclusao < 75){
        return "Curso Regular";
    }
}
console.log(avaliarCursos(5, 96)); 

//Questão 10: Se a avaliação dos usuários for maior que 4.5 e o número de visualizações maior que 1.000.000, classificar como "Filme Blockbuster". 
//Se a avaliação for entre 3.5 e 4.5 e o número de visualizações entre 500.000 e 1.000.000, classificar como "Filme Popular". 
//Se a avaliação for menor que 3.5 ou o número de visualizações menor que 500.000, classificar como "Filme Nicho"
function filme(avaliacaoUsuario, visualizacao) {
    if(avaliacaoUsuario > 4.5 && visualizacao > 1000000){
        return "Filme Blockbuster";
    }
    else if((avaliacaoUsuario >= 3.5 && avaliacaoUsuario <= 4.5) && (visualizacao >= 500000 && visualizacao <= 1000000)){
        return "Filme Popular";
    }
    else if(avaliacaoUsuario < 3.5 || visualizacao < 500000){
        return "Filme Nicho";
    }
}
console.log(filme(2, 40000)); 

