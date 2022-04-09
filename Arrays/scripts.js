/* inicio atividade map()

//multiplicar todos os elementos do array x 2 sem this

const arr = [1,2,3,4,5];

let maps = arr.map((item) => item * 2);

console.log(maps);


//multiplicar todos os elementos do array com this

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

const nums = [1,2];

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}


console.log(mapComThis(nums, maca));
console.log(mapComThis(nums, laranja));

fim atividade map() */


/*inicio atividade filter()

//filtrar todos os números pares do array

const numeros = [1,2,3,4,5,6,7,8,9,10];

let res = numeros.filter((pares) => pares % 2 === 0);

console.log(res);




fim atividade filter() */

// inicio atividade reduce()

/*somar todos os valores de um array


const arr = [2,4,3,6];

let res = arr.reduce((prev, current) => prev + current);

console.log(res);

*/
/* somar valores de uma lista e subtrair pelo saldo

const saldo = 100;
const lista = [
    {
        nane: 'detergente',
        preco: 3,
    },
    {
        nane: 'sabao',
        preco: 6,
    },
    {
        nane: 'sabonete',
        preco: 12,
    },
    
];

function calculaSaldo(saldo, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('rodada ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldo)
}

console.log(calculaSaldo(saldo, lista));

*/


