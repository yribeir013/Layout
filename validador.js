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
    i.setAttribute("maxlength", "14");
  
    if (cpf.length == 3){  
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
  
    if (cnpj.length == 2){  
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

function validar (){
    var nome = formUser.nome.value;
    var email = formUser.email.value;
    var telefone = formUser.telefone.value;
    var endereco = formUser.endereco.value;
    var cpf = formUser.cpf.value;
    var cnpj = formUser.cnpj.value;
    var senha = formUser.senha.value;
    var confirmaSenha = formUser.confirmaSenha.value;
    
    if (nome == "" || nome.length <= 3) {
        alert("Informe o nome completo");
        formUser.nome.focus();
        return false;
        
    } 

    if (email == "" || email.length <= 10) {
        alert("Informe o e-mail completo");
        formUser.email.focus();
        return false;
    
    } 

    if (telefone == "" || telefone.length <= 15) {
        alert("Informe o celular completo");
        formUser.telefone.focus();
        return false;
        
    } 

    if (endereco == "" || endereco.length <= 10) {
        alert("Informe o endereço completo");
        formUser.endereco.focus();
        return false;
        
    }  

    if(cpf == "" && cnpj == "" ){
        alert("Selecione um documento");
        return false;
    }

    if(cnpj != "" && cpf == ""){
        if(cnpj.length != 18){
            alert("CNPJ incorreto!");
            formUser.cnpj.focus();
            return false;
        }
    }

    if(cpf != "" && cnpj != ""){
        if(cpf.length != 14){
            alert("CPF incorreto!");
            formUser.cpf.focus();
            return false;
        }
    }

    if(senha == "" || senha.length <8){
        alert("Senha não atende aos requisitos!");
        formUser.senha.focus();
        return false;
}
    if (senha != "" && confirmaSenha == "") {
        if(senha != confirmaSenha){
        alert("Senhas diferentes!");
        formUser.senha.focus();
        return false;
        
    }
    }
    }
