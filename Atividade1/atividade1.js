//Questão 1: João tem uma loja de roupas e deseja aplicar descontos diferentes com base no valor da compra. 
//Se o valor da compra for maior que 100, aplique um desconto de 20%. Se for maior que 50, aplique um desconto de 10%. Caso contrário, não aplique desconto.
let compra= 20
if( compra > 100){
    console.log('Você tem um desconto de 20%')
}
else if(compra>50 && compra<=100){
    console.log('Você tem um desconto de 10%')
}
else{
    console.log('Desculpe, você não tem desconto!')
}


//Questão 2 : Se a idade for menor que 12, classifique como "Criança". Se for entre 12 e 18, classifique como "Adolescente". Se for maior que 18, classifique como "Adulto"
let idade = 12
if(idade>18){
    console.log('adulto')
}
else if(idade >= 12 && idade <= 18){
    console.log('adolescente')
}
else{
    console.log('criança')
}

//Questão 3: Se a temperatura for menor que 15°C, imprimir "Frio". Se for entre 15°C e 30°C, imprimir "Agradável". Se for maior que 30°C, imprimir "Quente".
let temperatura = 31
if(temperatura<15){
    console.log('Frio')
}
else if(temperatura>=15 && temperatura<=30){
    console.log('Agradável')
}
else{
    console.log('Quente')
}

//Questão 4: Se a nota for maior que 90, classifique como "A". Se for entre 70 e 90, classifique como "B". Se for menor que 70, classifique como "C"
let nota = 60
if(nota>90){
    console.log('Você tirou nota A')
}
else if(nota>70 && nota<=90){
    console.log('Você tirou nota B')
}
else{
    console.log('Você tirou nota C')
}

//Questão 5: Se a velocidade for maior que 120 km/h, imprimir "Muito rápido". Se for entre 80 e 120 km/h, imprimir "Velocidade adequada". Se for menor que 80 km/h, imprimir "Muito lento".
let velocidade = 120 
if(velocidade>120){
    console.log('Muito rápido')
}
else if(velocidade>=80 && velocidade<=120){
    console.log('Velocidade adequada')
}
else{
    console.log('Muito lento')
}

//Questão 6: Se a quantidade em estoque for menor que 10, imprimir "Estoque baixo". Se for entre 10 e 50, imprimir "Estoque médio". Se for maior que 50, imprimir "Estoque alto".
let estoque = 10
if(estoque<10){
    console.log('Estoque baixo')
}
else if(estoque>=10 && estoque<=50){
    console.log('Estoque médio')
}
else{
    console.log('Estoque alto')
}

//Questão 7: Se o peso for menor que 1 kg, classifique como "Leve". Se for entre 1 kg e 5 kg, classifique como "Médio". Se for maior que 5 kg, classifique como "Pesado".
let peso = 1
if(peso<1){
    console.log('Leve')
}
else if(peso>=1 && peso<=5){
    console.log('Médio')
}
else{
    console.log('Pesado')
}

//Questão 8: Se a altura for menor que 50 cm, classifique como "Baixa". Se for entre 50 cm e 150cm, classifique como "Média". Se for maior que 150 cm, classifique como "Alta".
let altura = 160
if(altura<50){
    console.log('Baixa')
}
else if(altura>=50 && altura<=150){
    console.log('Médio')
}
else{
    console.log('Alta')
}

//Questão 9: Se a idade for menor que 10 anos, classifique como "Infantil". Se for entre 10 e 18 anos, classifique como "Adolescente". Se for maior que 18 anos, classifique como "Adulto"
let idade2 = 18
if(idade2<10){
    console.log('Infantil')
}
else if(idade2>=10 && idade2<=18){
    console.log('Adolescente')
}
else{
    console.log('Adulto')
}

//Questão 10: Se o rendimento for menor que 10 km/l, imprimir "Baixo rendimento". Se for entre 10 e 15 km/l, imprimir "Rendimento médio". Se for maior que 15 km/l, imprimir "Alto rendimento"
let rendimento = 20
if(rendimento<10){
    console.log('Baixo rendimento')
}
else if(rendimento>=10 && rendimento<=15){
    console.log('Rendimento médio')
}
else{
    console.log('Alto rendimento')
}