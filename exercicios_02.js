let apartamento = {
    quartos: 2,
    tipo: "apartanto",
    endereco: "Avenida Principal, 456 - Centro",
    andar: 7
}  

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º andar da  ${apartamento.endereco}`);


let produtoEmbalado = {
    nome:"Laptop HP",
    categoria: "Eletrônicos",
    peso:1.5,
    preco:3500.00
}
console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando 1.5 kg, estáà venda por R$ 3500.00`)


class Imovel {
    constructor(quartos,tipo,endereco){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco;
    }
    exibirInformacoes() {
        return`${this.tipo}com ${this.quartos} quartos, localizado(a) na ${this.endereco}.`
    }

}
let casa = new Imovel(4,"casa","Rua da Amizade, 789 - Bairro Alegre");
console.log(casa.exibirInformacoes());

let ap = new Imovel(3, "apartamento","Avenida da Paz, 123 - Centro");
console.log(ap.exibirInformacoes());