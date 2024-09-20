//Projeto de Relófio Digital com JavaScript - Por Fábio Teixeira

function atualizarTempo(){

var display = document.querySelector('.display'); //Eu puxei a DIV HTML com o querySelector e armazenei na variável display
var agora = new Date();
var horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' + corrigirHorario(agora.getSeconds()); 
display.textContent = horario; //O conteúdo de texto da DIV vai receber "horario"
}

function corrigirHorario(numero){
    if (numero < 10){
        numero = '0' + numero; 
    }
    return numero;
}
atualizarTempo();
setInterval(atualizarTempo , 1000) //Para fazer a função atualizar a cada 1000 milisegundos

console.log(horario);