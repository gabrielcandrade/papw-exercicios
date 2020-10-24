function validaCPF(cpf) {
    var Soma;
    var Resto;
    Soma = 0;
  
    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
  
    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10))) return false;
  
    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
  
    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
}

function validaEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(String(email).toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

function validaNome(nome) {
    if (nome.length > 5 && nome.length < 150) {
      return true;
    } else {
      return false;
    }
  }



function validaSenha(senha, senhaTentativa) {
    if (senha.length >= 8) {
      console.log(true);
    } else{
      console.log(false);
    }

    if(senha == senhaTentativa){
        console.log(true);
    }else{
        console.log(false);
    }
}
  

validarNome("Gabriel Andrade");

validarEmail("gabriel.andrade@huia.haus");

if (validarCPF("08502567470") == true) {
    console.log("CPF válido.");
} else {
    console.log("CPF invalido.");
}

validarSenha("senha123","errada123");
