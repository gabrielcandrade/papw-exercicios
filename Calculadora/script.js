// Questão 01
function calcular(oper, var1, var2) {
    var valor1 = var1;
    var valor2 = var2;
 
    if (oper == "somar") {
       var res = parseInt(valor1) + parseInt(valor2);
    } else {
       if (oper == "subtrair") {
          var res = valor1-valor2;
       } else {
          if (oper == "multiplicar") {
             var res = valor1*valor2;
          } else {
             var res = valor1/valor2;
          }
       }
    }
 
    document.calcform.res.value = res;
 }

console.log(calcular("somar", 5, 10)) // 15
console.log(calcular("subtrair", 10, 2)) // 8
console.log(calcular("multiplicar", 8, 2)) // 16
console.log(calcular("dividir", 50, 2)) // 25

// Questão 02
function listaDePares() {
    var cont = 1;
    while (cont <= 100) {
        var resto = cont % 2; // Divisivel por 2
        if (resto == 0){ 
            console.log(cont);
        }
        cont = cont + 1;
    }
    console.log("FIM");
}

listaDePares();

// Questão 03
function verificaIdade(idade, sexo) {
    var pessoaIdade = idade;
    var pessoaSexo = sexo;

    if (pessoaIdade >= 18 && pessoaSexo == "M") {
        console.log("Pode entrar no bar com taxa.");
    } else if (pessoaIdade < 18 && pessoaSexo == "M") {
        console.log("Nao pode entrar no bar");
    } else if (pessoaIdade >= 18 && pessoaSexo == "F") {
        console.log("Pode entrar no bar sem taxa.");
    } else if (pessoaIdade < 18 && pessoaSexo == "F") {
        console.log("Nao pode entrar no bar");
    }
}

verificaIdade(18, "M");
verificaIdade(10, "M");
verificaIdade(50, "F");
verificaIdade(5, "F");