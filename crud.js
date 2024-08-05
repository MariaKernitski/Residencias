const prompt = require("prompt-sync")();

let ultimoID = 0;

const residencias = [];

const modelo = (id = ++ultimoID) => {
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
            moradores.push(morador);
        }
    }

    if(
       bairro != "" &&
       rua != "" &&
       numero != "" &&
       moradores != ""
    ) {
        return {
            bairro,
            rua,
            numero,
            moradores,
            id
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

    residencias.forEach((el) => {
        console.log(`
        ID: ${el.id}
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

    const id = prompt("Digite o ID da residência que deseja atualizar: ");

    if(isNaN(id) || id < 0) {
        console.log("ID inválido.")
    }
    else {
        const indice = residencias.findIndex(residencia => residencia.id == id)
        const novo = modelo(id);
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

    const id = prompt("Digite o ID da residência que deseja remover: ");

    if(isNaN(id) || id < 0) {
        console.log("ID inválido.");
    }
    else {
        const indice = residencias.findIndex(residencia => residencia.id == id)
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