const nome = "Andrey";
const idade = 17;
const bebidaMaior = "Cerveja";
const bebidaMenor = "Coca-cola"

const pedido = `${nome} diz, "por favor, quero beber ${idade >= 18 ?  bebidaMaior : bebidaMenor}"`

console.log(pedido)