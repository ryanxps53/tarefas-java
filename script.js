//----------------ATIVIDADE 1-------------------------

const nome = "Julia";
let media = 6;


if(media>=7){
    console.log("Aprovado")
}else{
    console.log("reprovado")
}



// ---------------------------- ATIVIDADE 2--------------------------

let number1 = 6
let number2 = 7


if(number2>number1){
    console.log("number2 e maior que o number1")
}

else if(number1>number2){
    console.log("number1 é menor que o number2")
}

else
   console.log("Os números são iguais")


//-------------------- ATIVIDADE 3--------------------


const senha = "senai123";
let tentativa = "sccpmaiordesp";


if(senha==tentativa){
    console.log("Acesso Aprovado")
}else{
    console.log("Senha Incorreta")
}



//-----------------------------ATIVIDADE 4-------------------------

const temperatura = "28"


if(temperatura<=18){
    console.log("Frio")
}

else if(temperatura<=27){
    console.log("Agradável")


}else{
    console.log("Quente")
}



//----------------------------ATIVIDADE 5---------------------


const notas = 8


if(notas>=9){
    console.log("Excelente")
}

else if(notas>=7){
    console.log("Bom")
}

else if(notas>=5){
    console.log("regular")
}

else{
    console.log("Insuficiente")

}


//------------------------------ATIVIDADE 6-------------------------

let data = 8


if(data==1){
    console.log("Domingo")
}

else if(data==2){
    console.log("Segunda")
}

else if(data==3){
    console.log("terça")
}

else if(data==4){
    console.log("Quarta")
}

else if(data==5){
    console.log("Quinta")
}

else if(data==6){
    console.log("Sexta")
}

else if(data==7){
    console.log("Sábado")
}

else{
    console.log("Dia Ínvalido")
}













//----------------------- ATIVIDADES 20/10-----------------------


//ATIVIDADE 1

let sixseven = 50


if(sixseven > 10 && sixseven < 50){
    console.log("seu numero esta entre 10 e 50")
}else{
    console.log("seu numero esta fora do intervalo")
}



//ATIVIDADE 2

let idadeCandidatos = 25


if(idadeCandidatos >= 16 && idadeCandidatos <=24){
    console.log("Você pode se candidatar")
}else{
    console.log("Você não pode se candidatar")
}



//ATIVIDADE 3

let assinantes = false
let compras = 50

if(assinantes == true || compras == 200){
    console.log("você tem direito a frete gratís")
}else{
    console.log("Você não tem direito a frete gratís")
}



//  ATIVIDADE 4

let dia = "sabado"

if(dia == "sabado" || dia == "domingo"){
    console.log("Fim de Semana")
}else{
    console.log("Dia Útil")
}


//ATIVIDADE 5 


let ass = true
let cupom = true
let valor = 150
let desconto = 100 / 15
let resultado = valor - valor / desconto

if(ass == true && valor >= 150 || cupom == true){
    console.log("Você tem 15% de Desconto")
    console.log("Seu pedido ficou no valor de " + resultado + " Reais")
}else{
    console.log("Você não tem direito a desconto")
}


