/* 
MAP : Uma forma de estruturar dados, semelhante ao Array e Objetos, trabalha com pares de chaves e seu valor.

Map também trabalha e aceita essas chaves, mas possui uma vantagem de aceitar tudo o que objeto aceita ( string, numbers, symbols ), entre outros como objetos, funções, etc

Map também acesso rapidamente um valor igual ao Objeto, se você tiver a chave

- Diferente de objetos que chaves podem ser somente string, numero e symbol, o Map permite qualquer tipo, até objetos e array
- Assim como array, ele mantém a ordem dos elementos (diferente de objetos)
- Você consegue acesso rápido a um valor (semelhante a objetos)
- Acessar a quantidade de elementos
- Tem alguns métodos que te ajudam

*/
/* 
const mapa = new Map([
Entradas | 1 array é composto por 2 elementos
Primeiro valor passado é a chave, no caso = O | Seguido pelo seu valor
Vários valores como comentado acima, podem ser usados na chave
* Array de arrays
    [0, "Programador"],
    ["String", "a"],
    [false, "Bordo"]    
]);
console.log(mapa); */


// Outro método para adicionar valores no Map, utilizando o set

const mapa = new Map([
    ["oioioi", "Hello"]
]);
mapa.set(0, "Programador");
mapa.set(true, "A");

const obj = { slug: "oioioi" };

mapa.set(obj, "Bordo");

// console.log(mapa);

// Quero imprimir apenas um valor especifico de chave, dessa forma utilizo o GET:
// GET é a forma de acessar
console.log(mapa.get(0));
console.log(mapa.get("oioioi"));

/* Tipos primitivos é tratados de formas diferente como é tratado objetos,funções, etc
Objetos, funções, entre outros. Alocam na memória os valores. Dai acontece um APONTAMENTO por REFERÊNCIA quando utilizamos esses valores
No caso do objeto mapa.set({}, "Bordo"); | Ele é diferente do objeto que estou tentando imprimir */

console.log(mapa.get(obj));

console.log(mapa.size);
/* Porque array e string é length e mapa é size?
O array e string são listas indexada.
Já em map, ele mostra realmente quando valores existem dentro daquele map
 */

const arr = [];
arr[50] = "oioioi";
console.log(arr.length);

mapa.set(50, "aeaeae");

console.log(mapa.size);

/*
Alguns comandos/métodos importantes do map
- has | só retorna verdadeiro ou falso se tiver a chave dentro do seu map
console.log(mapa.has(50));

- delete | deletar sabendo o nome da chave
mapa.delete(50);

- clear
mapa.clear();

- forEach | passa uma função, que vai alterar

- keys | você pode pegar todas as chaves do seu map

- value | vai retornar apenas os valores do seu map, sem as chaves

- entries | de um map ele vai retornar a estrutura de chave e valor, semelhantes as entradas de valores por array, chave e valor

- size | para pegar a quantidade de elementos
console.log(mapa.size);
*/

console.log(mapa.has(50));

mapa.delete(50);
document.write("<br>");
mapa.forEach(function(value, key) {
    console.log(value);
})