//var nao respeita o bloco de código
function testevar(){
    var mensagem = "Olá var";
    if(true){
        var mensagem = "Troquei a mensagem!";
        console.log(mensagem);
    }
    console.log(mensagem);
}
testevar();

//Let respeita o escopo de bloco
function testelet(){
    let mensagem = "Olá com let";
    if(true){
        let mensagem = "Mensagem nova no bloco if";
        console.log(mensagem);
    }
    console.log(mensagem);
}
testelet();

var x1 = 10;
var x1 = 20;
console.log(x1);

let x2 = 5;
console.log(x2);

var x3;
console.log(x3);
//console.log(x4);
//Constantes

const _constante = 42;
console.log(_constante)
//_constante = 45;

const array = [1, 2, 3];
array.push(7);
console.log(array);

const pessoa = {nome: "JP", idade: 15};
pessoa.nome = "Jair";
console.log(pessoa);


function saudacao(){ 
    alert("Seja bem vindo ao nosso site!")
}