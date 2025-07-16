//Exercicio 1
function somar (){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    //console.log("Resultado: " + (n1+n2));

    document.getElementById("resultado1").innerText = "Resultado: " + (n1+n2);
}
//Exercicio 2
function verificarIdade (){
    let idade = Number(document.getElementById("idade1").value);

    if (idade < 18){
        document.getElementById("resultado2").innerText = "Você é de menor";
    }else{
        document.getElementById("resultado2").innerText = "Você é de maior";
    }
}
//Exercicio 3
function contarCaracteres (){

    let texto = document.getElementById("texto1").value;
    let numCaracteres = texto.length;
    document.getElementById("resultado3").innerText = "Numero de caracteres: " + numCaracteres;

}
//Exercicio 4
function verificarParImpar (){
    let numero = Number(document.getElementById("num3").value);

    if ((numero % 2) == 0 ){
        document.getElementById("resultado4").innerText = "Par";
    }else if ((numero % 2) != 0){
        document.getElementById("resultado4").innerText = "Ìmpar";
    }
}
//Exercicio 5
function converterCaixaAlta (){

    let nome = document.getElementById("nome1").value;
    let caixaAlta = nome.toUpperCase();
    document.getElementById("resultado5").innerText = "Nome em caixa alta: " + caixaAlta;

}

//Exercicio 6
function verificarMaior (){
    let n1 = Number(document.getElementById("num4").value);
    let n2 = Number(document.getElementById("num5").value);

    if (n1 > n2){
        document.getElementById("resultado6").innerText = "O primeiro número digitado é maior";
    }else if (n2 > n1){
        document.getElementById("resultado6").innerText = "O segundo número digitado é o maior";
    }else if (n1 == n2){
        document.getElementById("resultado6").innerText = "Os números são iguais";
    }
}

//Exercicio 7
function gerarTabuada(){
    let numero = Number(document.getElementById("numTab").value);
    document.getElementById("resultado7").innerText = "X2: " + (numero*2) + "\n X3:" + (numero*3) + "\n X4:" + (numero*4) + "\n X5:" + (numero*5) + "\n X6:" + (numero*6) + "\n X7:" + (numero*7) + "\n X8:" + (numero*8) + "\n X9:" + (numero*9) + "\n X10:" + (numero*10);
}

//Exercicio 8
function contarZeroDez(){
    let contador = 0;
    let intervalo = setInterval(function() {
    document.getElementById("resultado8").innerText = contador;
    contador++;
    if (contador > 10) {
      clearInterval(intervalo);
    }
  }, 1000);

  //pesquisei na internet pra fazer, o setInterval é como se fosse um loop que voce define o intervalo ali no fim em ms (1000ms = 1s)
}

//Exercicio 9
function calcularMedia(){
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);

    let media = (n1+n2+n3)/3;
    let mediaArredondada = parseFloat(media.toFixed(2));

    if ( mediaArredondada >= 6){
        document.getElementById("resultado9").innerText = "Passou!, Média:  " + mediaArredondada;
    }else{
         document.getElementById("resultado9").innerText = "Não Passou!, Média:  " + mediaArredondada;
    }
    
}

//Exercicio10 
function converterTemp(){
    let tempC = Number(document.getElementById("temp").value);
    let tempF =  (tempC * 9/5) + 32 
    document.getElementById("resultado10").innerText = "Temperatura em Farenheit: " + tempF;
}

//Exercicio11
function verificarDia() {
    let dia = Number(document.getElementById("numDia").value);
    let resultado = "";

    if (dia == 1) {
        resultado = "Domingo";
    } else if (dia == 2) {
        resultado = "Segunda-feira";
    } else if (dia == 3) {
        resultado = "Terça-feira";
    } else if (dia == 4) {
        resultado = "Quarta-feira";
    } else if (dia == 5) {
        resultado = "Quinta-feira";
    } else if (dia == 6) {
        resultado = "Sexta-feira";
    } else if (dia == 7) {
        resultado = "Sábado";
    } else {
        resultado = "Número inválido! Digite um número de 1 a 7.";
    }

    document.getElementById("resultado11").innerText = resultado;
}
//Exercicio 12
function verificarSenha(){
    let senha = document.getElementById("senha").value;

    if (senha == "1234"){
        document.getElementById("resultado12").innerText = "Acesso liberado!";
    }else{
        document.getElementById("resultado12").innerText = "Aceso Negado. Auto destruição iniciada";

         let contador = 10;
        let intervalo = setInterval(function() {
        document.getElementById("negado").innerText = contador;
        contador--;
        if (contador < 0) {
            clearInterval(intervalo);
        }
        }, 1000);
        
    }
}

//Exercicio 13
function contarRegressiva(){
    let contador = 10;
    let intervalo = setInterval(function() {
    document.getElementById("resultado13").innerText = contador;
    contador--;
    if (contador < 1) {
      clearInterval(intervalo);
    }
  }, 1000);

}