function mascaraTel(i){
    const tel = i.value;    /*Verifica se não é número*/
     if (isNaN(tel[tel.length - 1])){
     i.value = tel.substring(0,tel.length-1);
     return;
    }
    i.setAttribute("maxlength", "16");
  
    if (tel.length == 1){  /*Inclui máscara do telefone*/
        i.value = "(" +i.value;
    }
    if (tel.length == 3) {
        i.value = i.value + ") ";
    }
    if (tel.length == 6) {
        i.value = i.value + " ";
    }
    if (tel.length ==11) {
        i.value =i.value + "-";   
    }
}
function mascaraCPF(i){
    const cpf = i.value;    /*Verifica se não é número*/
     if (isNaN(cpf[cpf.length - 1])){
     i.value = cpf.substring(0,cpf.length-1);
     return;
    }
    i.setAttribute("maxlength", "15");
  
    if (cpf.length == 3){  /*Inclui máscara do telefone*/
        i.value = i.value + ".";
    }
    if (cpf.length == 7){ 
        i.value = i.value + ".";
}
    if (cpf.length == 11){ 
        i.value = i.value + "-"; 
}
}
function mascaraCNPJ(i){
    const cnpj = i.value;    /*Verifica se não é número*/
     if (isNaN(cnpj[cnpj.length - 1])){
     i.value = cnpj.substring(0,cnpj.length-1);
     return;
    }
    i.setAttribute("maxlength", "18");
  
    if (cnpj.length == 2){  /*Inclui máscara do telefone*/
        i.value = i.value + ".";
    }
    if (cnpj.length == 6){ 
        i.value = i.value + ".";
    }
    if (cnpj.length == 10){ 
        i.value = i.value + "/";
}
 if (cnpj.length == 15){ 
        i.value = i.value + "-";
}
}