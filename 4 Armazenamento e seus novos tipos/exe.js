/* Utilizando método padrão

Desvantagens de utilizar Array padrão, demora muito, se tiver uma lista grande armazenada

const lista = ["arroz", "feijao", "peru"];
const collection = [
    {id: "123", name: "Wesley"},
    {id: "321", name: "Pedro"}
];

const user = {name: "Ayrton"};

console.log(user.name);
*/

/* Utilizando objetos

Desvantagens: não possui todas as funções que o ARRAY tem
Objetos não guarda a ordem que foi salva em objetos
Você não sabe quantos elementos tem, apenas de forma manual
Objetos, só aceita como chave: strings, numbers, ou symbols


*/


const users = {
    "123": {id: "123", name: "Wesley"},
    "321": {id: "321", name: "Pedro"}
};

console.log(users["123"]);