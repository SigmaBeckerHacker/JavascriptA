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
    let texto = Text(document.getElementById("texto1").value);
    let numCaracteres = texto.lenght;
    document.getElementById("resultado2").innerText = "Numero de caracteres: " + numCaracteres;

}

