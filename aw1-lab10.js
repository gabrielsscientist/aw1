/*
 * Esta função le e exibe em uma janela de diálogo o valor
 * da propriedade username armazenado. Caso não seja encontrada
 * solicita ao usuário que entre com um valor para a propriedade. 
 */
function boasvindas() {
    var username = leValorPropriedade('username');
    alert("Username = " + username);

    if (username != null) {
        alert('Bem vindo de volta ' + username + '!');
    }
    else {
        username = prompt('Qual o seu username', "");
        adicionarPropriedade('username', username, 1);
    }

    // vamos recuperar o paragrafo para inserção da saudação ao usuário
    var p = document.getElementById("mensagem");

    // vamos criar um novo text node para adicionar ao elemento p
    myTextNode = document.createTextNode(username);
    p.appendChild(myTextNode);
}

function imprimirPropriedades() {
    var propriedades = "Valores armazenados \n";
    for(var i in localStorage) {
        propriedades += i + ":" + localStorage[i] + "\n";
    }
    alert(propriedades);
}

function leValorPropriedade(nome) {
    return localStorage[nome];
    
}

function removerPropriedade(nome) {
    localStorage.removeItem(nome);
}

function adicionarPropriedade(nome, valor) {
    localStorage[nome] = valor;
}


