const prompt = require("prompt-sync")()

const {criar, listar, atualizar, remover} = require("./crud.js");

console.log("Bem vindo(a) ao cadastro de residências!");

while(true) {
    console.log(`
    Digite:
    '1' para adicionar uma residência;
    '2' para listar as residências;
    '3' para atualizar uma residência;
    '4' para remover uma residência;
    '5' para encerrar.
    `)
    const opção = prompt("");

    switch(opção) {
        case "1": criar();
        break;
        case "2": listar();
        break;
        case "3": atualizar();
        break;
        case "4": remover();
        break;
        case "5": console.log("Agradecemos por utilizar nossos serviços! Até logo!");
                  process.exit();
        break;
        default: console.log("Opção inválida.");
        break;
    }
}