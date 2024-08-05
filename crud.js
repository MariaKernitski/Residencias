const prompt = require("prompt-sync")();

const ultimoID = 1;

const residencias = [];

const modelo = () => {
    let bairro = prompt("Digite o nome do bairro: ");
    let rua = prompt("Digite o nome da rua: ");
    let numero = Number(prompt("Digite o número da residência: "));
    
    const moradores = [];

    while(true) {
        const morador = prompt("Digite o nome do(s) morador(es) ou digite 'fim' para sair: ");

        if(morador == "fim") {
            break;
        }
        else {
            moradores.push(morador);;
        }
    }

    if(
       bairro != "" &&
       rua != "" &&
       numero != "" &&
       moradores != ""
    ) {
        return {
            ultimoID,
            bairro,
            rua,
            numero,
            moradores
        }
    }
    console.log("Dados inválidos.")
}

const criar = () => {
    const novo = modelo();

    if(novo) {
        residencias.push(novo);
        console.log("Residência adicionada com sucesso!");
    }
}

const listar = () => {
    if(residencias.length == 0) {
        console.log("Nada registrado.")
    }
    else {

    residencias.forEach((el, i) => {
        console.log(`
        Índice ${i + 1}:
        Bairro: ${el.bairro}
        Rua: ${el.rua}
        Número: ${el.numero}
        Moradores: ${el.moradores}
        `);
    });

    }
}

const atualizar = () => {

    if(residencias.length == 0) {
        console.log("Nada registrado.")
    }
    else { 

    listar();

    const indice = prompt("Digite o índice da residência que deseja atualizar: ") - 1;

    if(isNaN(indice) || indice < 0) {
        console.log("Índice inválido.")
    }
    else {
        const novo = modelo();
        residencias[indice] = novo;
        console.log("Residência atualizada com sucesso!");
    }

    }
}

const remover = () => {

    if(residencias.length == 0) {
        console.log("Nada registrado.")
    }
    else {

    listar();

    const indice = prompt("Digite o índice da residência que deseja remover: ") - 1;

    if(isNaN(indice) || indice < 0) {
        console.log("Índice inválido.");
    }
    else {
        residencias.splice(indice, 1);
        console.log("Residência removida com sucesso!");
    }
}

} 

module.exports = {
    criar,
    listar,
    atualizar,
    remover
}